/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index = 0;
  let domain = '';
  for (let i = email.length; i > 0; i--) {
    if (email[i] === '@') {
      index = i + 1;
      break;
    }
  }
  for (let i = index; i < email.length; i++) {
    domain += email[i];
  }
  return domain;
}

module.exports = getEmailDomain;
