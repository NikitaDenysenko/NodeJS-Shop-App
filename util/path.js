const path = require('path');

module.exports = path.dirname(process.mainModule.filename);

//mainModule - reference to module, which started the application
//filename - in which file span up