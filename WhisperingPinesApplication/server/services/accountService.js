async function insertUser(userData, conn) {
    const insertComm = "INSERT INTO Users (firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
    [insertUserResults] = await conn.query(insertComm, [userData.firstName, userData.middleName, userData.lastName, userData.dateOfBirth, userData.phoneNumber, userData.emailAddress, userData.password]);
    return insertUserResults.insertId;
};


/**
 * 
 * @param {String} emailAddress - the email address the user entered in the register form
 * @param {*} conn - the database connection for the registerUser transaction
 * @returns 
 */
async function userExists(emailAddress, conn) {
    console.log("Starting userExists");
    let userExists = false;
    const duplicateEmailQuery = "SELECT userID FROM Users WHERE emailAddress = ?";
    const [clientsWithGivenEmail] = await conn.query(duplicateEmailQuery, [emailAddress]);

    if (clientsWithGivenEmail.length > 0) {
        userExists = true;
    }

    return userExists;
};

async function linkUserToAddress(userId, addressData, conn) {
    try {
        const linkUserToAddressQuery = "INSERT INTO User_to_Address (userId, streetId, zipcodeId, premise, apartmentNumber) VALUES (?, ?, ?, ?, ?)";
        [linkUserAddressResults] = await conn.query(linkUserToAddressQuery, [userId, addressData.streetId, addressData.zipcodeId, addressData.premise, addressData.apartmentNumber]);
    } catch (error) {
        console.error("Error linking user to address: ", error);
    }
};

module.exports = {
    insertUser,
    userExists,
    linkUserToAddress
}