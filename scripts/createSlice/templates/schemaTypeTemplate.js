const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => `interface I${firstCharUpperCase(sliceName)}Schema {
    
}

export default I${firstCharUpperCase(sliceName)}Schema;`;
