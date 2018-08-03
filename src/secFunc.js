
function func2() {
    return new Promise(function(resolve) {
        setTimeout(function timer() {
            resolve(55);
        }, 2000);
    });
}
module.exports.func2 = func2;