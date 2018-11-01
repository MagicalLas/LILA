var crypto = require('crypto');

module.exports.makeHash = function(msg){
    var shasum = crypto.createHash('sha1');
    shasum.update(msg);
    return shasum.digest('hex');
};