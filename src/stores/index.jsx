if (process.env.IS_PRODUCTION) {
  module.exports = require('./store.prod.jsx');
} else {
  module.exports = require('./store.dev.jsx');
}
