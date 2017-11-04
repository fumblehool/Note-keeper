const devStore = require('./store.dev.jsx');
const prodStore = require('./store.prod.jsx');

if (process.env.IS_PRODUCTION) {
  module.exports = devStore;
} else {
  module.exports = prodStore;
}
