/**
 * Get's the unique stateId for a given state abbreviation
 * 
 * @param {String} stateAbbr - the abbreviation of the states name. Example: "PA" = Pennsylvania
 * @returns {int} stateId - the id for that state in the database
 */
async function getStateId(conn, stateAbbr) {
    try {
        console.log("State Abbreviation: " + stateAbbr);
        const selectStateIdQuery = "SELECT stateId FROM States WHERE abbreviation = ?";
        const [statesWithGivenName] = await conn.query(selectStateIdQuery, [stateAbbr]);
        console.log(statesWithGivenName)
        const stateId = statesWithGivenName[0].stateId;

        return stateId;
    } catch(error) {
        console.error("Error getting state id", error);
    }
}

/**
 * Either inserts a new locality record in the Localities table or fetches the unique id if the locality already exists
 * 
 * @param {String} localityName - the name of the locality
 * @param {int} stateId - the unique identifier the state the locality is in
 */
async function getOrInsertLocality(conn, localityName, stateId) {
    try {
        localityExistsQuery = "SELECT localityId FROM Localities WHERE name = ? AND stateId = ?";
        const [matchingLocalities] = await conn.query(localityExistsQuery, [localityName, stateId]);

        // if the locality did not already exist
        if (matchingLocalities.length === 0) {
            insertLocalityQuery = "INSERT INTO Localities(name, stateId) VALUES (?, ?)";
            insertLocalityResults = await conn.query(insertLocalityQuery, [localityName, stateId]);
            newLocalityId = insertLocalityResults[0].insertId;
            console.log("New locality Id: ", newLocalityId);

            return {localityId: newLocalityId, localityWasInserted: true};
        } else {
            return {localityId: matchingLocalities[0].localityId, localityWasInserted: false};
        }
    } catch (error) {
        console.error("Error inserting locality", error);
    }
}

async function getOrInsertStreet(conn, streetName, localityId) {
    try {
        streetExistsQuery = "SELECT streetId FROM Streets WHERE name = ? AND localityId = ?";
        const [matchingStreets] = await conn.query(streetExistsQuery, [streetName, localityId]);

        // if the street did not already exist
        if (matchingStreets.length === 0) {
            insertStreetQuery = "INSERT INTO Streets(name, localityId) VALUES (?, ?)";
            insertStreetResults = await conn.query(insertStreetQuery, [streetName, localityId]);                        // insert the new street
            const newStreetId = insertStreetResults[0].insertId;
            console.log("New street Id: ", newStreetId);
            return {streetId: newStreetId, streetWasInserted: true};                                                         // return the unique id of the new street
        } else {
            return {streetId: matchingStreets[0].streetId, streetWasInserted: false};                                         // if the street already existed, return its unique id
        }
    } catch (error) {
        console.error("Error inserting street", error);
    }
}

/**
 * Inserts the new street to the database
 * 
 * @param {String} streetName 
 * @param {int} localityId 
 * @returns 
 */
async function insertStreet(conn, streetName, localityId) {
    try {
        insertStreetQuery = "INSERT INTO Streets(name, localityId) VALUES (?, ?)";
        insertStreetResults = await conn.query(insertStreetQuery, [streetName, localityId]);
        const newStreetId = insertStreetResults[0].insertId;
        console.log(insertStreetResults[0]);
        console.log("New Street Id: ", newStreetId);
        return {streetId: newStreetId};
    } catch (error) {
        console.error("Error inserting street", error);
    }
}

async function getOrInsertZipcode(conn, zipcode) {
    try {
        // check if zipcode already exists in zipcode table, if not, insert it
        zipcodeExistsQuery = "SELECT zipcodeId FROM Zipcodes WHERE zipcode = ?";
        [zipcodes] = await conn.query(zipcodeExistsQuery, zipcode);

        if (zipcodes.length === 0) {
            insertZipcodeQuery = "INSERT INTO Zipcodes(zipcode) VALUES (?)";
            insertZipcodesResults = await conn.query(insertZipcodeQuery, [zipcode]);
            const newZipcodeId = insertZipcodesResults[0].insertId;
            console.log(insertZipcodesResults[0]);
            console.log("New zipcode Id: ", newZipcodeId);
            return {zipcodeId: newZipcodeId, zipcodeWasInserted: true};
        } else {
            return {zipcodeId: zipcodes[0].zipcodeId, zipcodeWasInserted: false};
        }
    } catch {
        console.error("Error inserting zipcode", error);
    }
}

module.exports = {
    getStateId,
    getOrInsertLocality,
    getOrInsertStreet,
    insertStreet,
    getOrInsertZipcode
}