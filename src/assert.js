define(function () {

    var assert = function (statement, msg) {
        if (!statement) throw new Error(msg);
    }

    assert.isArray = function (statement, msg) {
        assert(Object.prototype.toString.call(statement) === "[object Array]", msg);
    }

    assert.isNonEmptyString = function (statement, msg) {
        assert(typeof statement === 'string' && !!statement, msg);
    } 

    return assert;
})