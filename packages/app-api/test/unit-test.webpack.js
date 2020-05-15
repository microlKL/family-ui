//All test case naming follow /-test\.js$/ regexp pattern.
const context = require.context('./specs', true, /.spec\.js$/)
context.keys().forEach(context)