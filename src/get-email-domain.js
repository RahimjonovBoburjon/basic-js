function getEmailDomain(email) {
  return email.slice(email.lastIndexOf('@') + 1);
}

module.exports = {
  getEmailDomain
};
