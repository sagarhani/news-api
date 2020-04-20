const keys = require("../config/keys");
const Bearer = require("@bearer/node")(keys.CLIENT_ID);
const gsheet = Bearer.integration("google_sheets");

const spreadsheetId = keys.SPREAD_SHEET_ID;

exports.registerUser = async user => {
  try {
    gsheet
      .auth(keys.AUTH_ID)
      .post(`${spreadsheetId}/values/A1:append`, {
        body: { values: [Object.values(user)] },
        query: { valueInputOption: "RAW" }
      })
      .then(response => {
        console.log("Saved!");
        return response;
      });
  } catch (error) {
    console.log("error", error);
  }
};
