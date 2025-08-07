/**
 * Get's the unique stateId for a given state abbreviation
 * 
 * @param {String} stateAbbr - the abbreviation of the states name. Example: "PA" = Pennsylvania
 * @returns {int} stateId - the id for that state in the database
 */
async function getStateId(conn, stateAbbr) {
    try {
        console.log("State Abbreviation: " + state);
        const selectStateIdQuery = "SELECT stateId FROM States WHERE abbreviation = ?";
        const [statesWithGivenName] = await pool.query(selectStateIdQuery, [state]);
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
        const [matchingLocalities] = await pool.query(localityExistsQuery, [localityName, stateId]);

        // if 
        if (matchingLocalities.length === 0) {
            insertLocalityQuery = "INSERT INTO Localities(name, stateId) VALUES (?, ?)";
            insertLocalityResults = await pool.query(insertLocalityQuery, [localityName, stateId]);

            insertStreetQuery = "INSERT INTO Streets(name, localityId) VALUES (?, ?)";
            newLocalityId = insertLocalityResults.insertId;
            return {localityId: newLocalityId, wasInserted: true};
        } else {
            return {localityId: matchingLocalities[0].localityId, wasInserted: false};
        }
    } catch (error) {
        console.error("Error inserting locality", error);
    }
}

async function getOrInsertStreet(conn, streetName, localityId) {
    try {
        streetExistsQuery = "SELECT streetId FROM Streets WHERE name = ? AND localityId = ?";
        const [matchingStreets] = await pool.query(streetExistsQuery, [streetName, localityId]);

        if (matchingStreets.length === 0) {
            insertStreetQuery = "INSERT INTO Streets(name, localityId) VALUES (?, ?)";
            insertStreetResults = await pool.query(insertStreetQuery, [streetName, localityId]);
            const newStreetId = insertStreetResults.insertId;
            return {streetId: newStreetId, wasInserted: false};
        } else {
            return {streetId: matchingStreets[0].streetId, wasInserted: false};
        }
    } catch {
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
        insertStreetResults = await pool.query(insertStreetQuery, [streetName, localityId]);
        const newStreetId = insertStreetResults.insertId;
        return {streetId: newStreetId, wasInserted: true};
    } catch (error) {
        console.error("Error inserting street", error);
    }
}

async function getOrInsertZipcode(conn, zipcode) {
    try {
        // check if zipcode already exists in zipcode table, if not, insert it
        zipcodeExistsQuery = "SELECT zipcodeId FROM Zipcodes WHERE zipcode = ?";
        [zipcodes] = await pool.query(zipcodeExistsQuery, zipcode);

        if (zipcodes.length === 0) {
            insertZipcodeQuery = "INSERT INTO Zipcodes(zipcode) VALUES (?)";
            insertZipcodesResults = await pool.query(insertZipcodeQuery, [zipcode]);
            const newZipcodeId = insertZipcodesResults.insertId;
            return {zipcodeId: newZipcodeId, wasInserted: true};
        } else {
            return {zipcodeId: zipcodes[0].zipcodeId, wasInserted: false};
        }
    } catch {
        console.error("Error inserting zipcode", error);
    }
}