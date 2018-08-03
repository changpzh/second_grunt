function func() {
    return new Promise(function(resolve) {
        setTimeout(function timer() {
            resolve(3);
        }, 2000);
    });
}
module.exports.func = func;