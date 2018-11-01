var crypto = require('crypto');
var shasum = crypto.createHash('sha1');

export function makeHash(msg){
    shasum.update(msg);
    return shasum.digest('hex');
}
