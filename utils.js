// utils.js
function extractEmails(text) {
  return text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}/g) || [];
}

function cleanPhoneNumbers(text) {
  return text.replace(/(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/g, '[phone number]');
}

export { extractEmails, cleanPhoneNumbers };
