const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const accountService = require('../services/accountService');
const addressService = require('../services/addressService')

async function registerUser(req, res) {
    console.log('Beginning registerUser')
    const conn = await pool.getConnection();
    try {
        console.log('Incoming data:', req.body);
        const {firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, streetAddress, apartmentNumber, locality, state, zipcode, password} = req.body;   // extract all form values

        let userExists = await accountService.userExists(emailAddress, conn);         // check that a user with the given email does not already exist

        if (userExists) {
            console.log("A user with that email already exists")
            return res.status(409).json({
                success: false,
                message: 'User already exists with given email'
            });
        }

        console.log("Email address is not in use, beginning register transaction")
        await conn.beginTransaction();

        const firstSpace = streetAddress.indexOf(" ");                              // get the index of the first space
        const premise = streetAddress.slice(0, firstSpace);                         // extract everything up to the first space as the premise ("123")
        const street = streetAddress.slice(firstSpace+1);                           // extract everything after the space as the street ("Penny Lane")

        const stateId = await addressService.getStateId(conn, state);               // get the database id for the given state
        console.log("State ID = " + stateId);

        const {localityId, localityWasInserted} = await addressService.getOrInsertLocality(conn, locality, stateId);  // get or insert the locality
        console.log("locality id", localityId);

        let streetId;
        
        // if the locality had to be inserted, then the street also couldn't have existed in the database yet
        if (localityWasInserted) {
            console.log("Inserted new locality, inserting new street now. Locality id = ", localityId);
            ({streetId} = await addressService.insertStreet(conn, street, localityId));     // insert street and get id
        } else {
            console.log("Locality already existed, calling getOrInsertStreet. Locality id = ", localityId);
            ({streetId} = await addressService.getOrInsertStreet(conn ,street, localityId));    // get the existing street id
        }

        console.log('Street Id in accountController: ', streetId);

        const {zipcodeId, zipcodeWasInserted} = await addressService.getOrInsertZipcode(conn, zipcode)                           // get or insert the zipcode id
        console.log("accountController zipcodeId = ", zipcodeId);

        const hashedPassword = await bcrypt.hash(password, 10);                                  // hash password
        
        const userData = {
            firstName,
            middleName,
            lastName, 
            dateOfBirth,
            phoneNumber,
            emailAddress,
            password: hashedPassword
        }

        const userId = await accountService.insertUser(userData, conn);

        const addressData = {
            premise,
            apartmentNumber,
            streetId,
            zipcodeId
        }
        
        await accountService.linkUserToAddress(userId, addressData, conn);
        await conn.commit();
        
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
    const conn = await pool.getConnection();
    try {
        console.log('Incoming data:', req.body);
        const {emailAddress, password} = req.body;

        const userExists = await accountService.userExists(emailAddress, conn);
        
        // if any results came back for the given email address
        if (userExists) {
            const dbPassword = await accountService.getPassword(emailAddress, conn);

            // if the given password matches the correct password
            if (await bcrypt.compare(password, dbPassword)) {
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
};

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
};

async function logoutUser(req, res) {
    try {
        console.log("Logging out user");
    } catch (error) {
        console.error("Error logging out user: ", error);
    }
};

module.exports = {
    registerUser,
    loginUser,
    displayAccount
};