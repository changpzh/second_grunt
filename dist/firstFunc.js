/*! grunt_first 2018-08-03 */

function func(){return new Promise(function(resolve){setTimeout(function(){resolve(3)},2e3)})}module.exports.func=func;