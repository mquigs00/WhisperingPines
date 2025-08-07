const pool = require('./db');

const conn = pool.getConnection();

const accountService = require('../services/userService');
const addressService = require('../services/addressService')

async function registerUser(req, res) {
    try {
        console.log('Incoming data:', req.body);
        const {firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, streetAddress, apartmentNumber, city, state, zipcode, password} = req.body;   // extract all form values

        userExists = accountService.userExists(emailAddress);         // check that a user with the given email does not already exist

        if (userExists) {
            console.log("A user with that email already exists")
            return res.status(409).json({
                success: false,
                message: 'User already exists with given email'
            });
        }

        console.log("Email address is not in use, beginning register transaction")
        await conn.beginTransaction;

        // split the street address into the premise and the street name
        // ex. 123 Park Way = ["123", "Park Way"]
        const streetAddressSplit = streetAddress.split(" ", 2);
        const premise = streetAddressSplit[0];
        const street = streetAddressSplit[1];

        const stateId = await addressService.getStateId(conn, state);               // get the database id for the given state
        console.log("State ID = " + stateId);

        const {localityId, wasInserted} = addressService.getOrInsertLocality(conn, city, stateId);  // get or insert the locality

        let streetId;
        
        // if the locality had to be inserted, then the street also couldn't have existed in the database yet
        if (wasInserted) {
            const streetId = await addressService.insertStreet(conn, street, localityId);     // insert street and get id
        } else {
            const streetId = await addressService.getOrInsertStreet(conn ,street, localityId);    // get the existing street id
        }

        const zipcodeId = addressService.getOrInsert(conn, zipcode)                           // get or insert the zipcode id

        const hashedPassword = await bcrypt.hash(password, 10);                                  // hash password
        //const insertComm = "INSERT INTO Users (firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
        //[insertUserResults] = await pool.query(insertComm, [firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, hashedPassword]);
        const userData = {
            firstName,
            middleName,
            lastName, 
            dateOfBirth,
            phoneNumber,
            emailAddress,
            password: hashedPassword
        }

        const userId = await accountService.insertUser(userData);

        const addressData = {
            premise,
            apartmentNumber,
            streetId,
            zipcodeId
        }
        
        await accountService.linkUserToAddress(userId, addressData);
        console.log("Inserting user");
        const user = {email: emailAddress};
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
        
        res.status(201).json({
            success: true,
            accessToken: accessToken,
            user: {
                userId: insertUserResults.insertId,
                firstName,
                middleName,
                lastName,
                dateOfBirth,
                phoneNumber,
                emailAddress,
                balanceDue: 0.00
            },
        });
        console.log("Response sent");
        
        
    } catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({error: 'Server error'});
    }
};

async function loginUser(req, res) {
    try {
        console.log('Incoming data:', req.body);
        const {emailAddress, password} = req.body;
        const selectComm = "SELECT password FROM Users WHERE emailAddress = ?";
        const [passwordsResult] = await pool.query(selectComm, [emailAddress]);
        console.log(result);
        
        // if any results came back for the given email address
        if (passwordsResult.length > 0) {
            // if the given password matches the correct password
            if (await bcrypt.compare(password, passwordsResult[0].password)) {
                console.log("Bcrypt.compare returned true, giving access token");
                const user = {email: emailAddress};
                const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                res.json({accessToken:accessToken});
            } else {
                console.log("Bcrypt compare returned false");
                res.status(403).json({
                success: false,
                message: "Incorrect username/password combination"
                })
            }
        } else {
            console.log("No user exists with that email");
            res.status(403).json({
                success: false,
                message: "Incorrect username/password combination"
            });
        }
    } catch(error) {
        console.error("Error logging in: " + error);
    }
}

async function displayAccount(req, res) {
    try {
        const authorization = req.headers.authorization;
        const token = authorization.substring(7);
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const emailAddress = payload.email;
        const selectComm = "SELECT userID, firstName, middleName, lastName, emailAddress, phoneNumber, dateOfBirth, balanceDue FROM Users WHERE emailAddress = ?";
        const [result] = await pool.query(selectComm, [emailAddress]);

        // if a row was found in the Users table for the given email address
        if (result.length > 0) {
            res.json(result[0]);                           // send the user data back to the client
        } else {
            console.log("Did not find a user with that email address!");
        }

    } catch (error) {
        console.error('Error loading account page: ', error);
    }
}

async function logoutUser(req, res) {
    try {
        console.log("Logging out user");
    } catch (error) {
        console.error("Error logging out user: ", error);
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};