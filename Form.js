function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.name, data.email, data.phone_number, data.quanity, data.receive_location, data.order_date new Date()]);
  return ContentService.createTextOutput("Success");
}
