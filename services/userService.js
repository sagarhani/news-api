const keys = require("../config/keys");
const Bearer = require("@bearer/node")(keys.CLIENT_ID);
const gsheet = Bearer.integration("google_sheets");
const sgMail = require("@sendgrid/mail");

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

exports.sendEmail = async user => {
  try {
    sgMail.setApiKey(keys.SENDGRID_KEY);
    const msg = {
      from: {
        email: keys.EMAIL_FROM_ADDRESS
      },
      personalizations: [
        {
          to: [
            {
              email: user.email
            }
          ]
        }
      ],
      dynamic_template_data: { name: user.name },
      template_id: "d-afbf85c4dc15419b9558ecf7e1c6e25b"
    };
    sgMail.send(msg);
    return {};
  } catch (error) {
    console.log("error", error);
  }
};
