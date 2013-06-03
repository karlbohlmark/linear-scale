var assert = require('assert')

var Scale = require('./')

var scale = new Scale([0, 100], [0, 1000])
assert(scale.map(10) == 100)
assert(scale.invert(100) == 10)

scale = new Scale([10, 20], [5, 10])
assert(scale.map(12) == 6)
assert(scale.invert(6) == 12)