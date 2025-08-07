async function insertUser(userData) {
    const insertComm = "INSERT INTO Users (firstName, middleName, lastName, dateOfBirth, phoneNumber, emailAddress, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
    [insertUserResults] = await pool.query(insertComm, [userData.firstName, userData.middleName, userData.lastName, userData.dateOfBirth, userData.phoneNumber, userData.emailAddress, userData.hashedPassword]);
    return insertUserResults.insertId;
}

async function userExists(emailAddress) {
    let userExists = false;
    duplicateEmailQuery = "SELECT userID FROM Users WHERE emailAddress = ?";
    const [clientsWithGivenEmail] = await pool.query(duplicateEmailQuery, [emailAddress]);

    if (clientsWithGivenEmail.length > 0) {
        userExists = true;
    }

    return userExists;
}

async function linkUserToAddress(userId, addressData) {
    try {
        const linkUserToAddressQuery = "INSERT INTO User_to_Address (userId, streetId, zipcodeId, premise, apartmentNumber) VALUES (?, ?, ?, ?, ?)";
        [linkUserAddressResults] = await pool.query(linkUserToAddressQuery, [userId, addressData.streetId, addressData.zipcodeId, addressData.premise, addressData.apartmentNumber]);
    } catch (error) {
        console.error("Error linking user to address: ", error);
    }
}