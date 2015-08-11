require('dotenv').load();
var Spreadsheet = require('edit-google-spreadsheet');
var data = require('./data');
Spreadsheet.load({
  // debug: true,
  spreadsheetName: process.env.GOOGLE_SHEETS_ID,
  worksheetName: process.env.GOOGLE_WORKSHEETS_ID,
  oauth: {
    email: process.env.GOOGLE_SERVICE_EMAIL,
    keyFile: process.env.GOOGLE_PRIVATE_KEY
  },
}, function sheetReady(err, spreadsheet) {
  if (err) throw err;

  spreadsheet.receive(function(err, rows, info) {
    if (err) throw err;
    spreadsheet.add(data);
    spreadsheet.send(function(err) {
      if (err) throw err;
      process.exit(0)
    });
  });
});
