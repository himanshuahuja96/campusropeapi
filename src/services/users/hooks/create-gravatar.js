const crypto = require('crypto');

module.exports = () => (context) => {
  const newUser = context.data;
  if (!newUser.picture || newUser.picture.indexOf('https://gravatar.com') === 0) {
    const hash = crypto.createHash('md5').update(newUser.email).digest('hex');
    newUser.picture = `https://gravatar.com/avatar/${hash}?d=identicon`;
    return context;
  }
};