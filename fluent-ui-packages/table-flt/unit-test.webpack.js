//All test case naming follow /-test\.js$/ regexp pattern.
const context = require.context('./__tests__', true, /-test\.js$/)
context.keys().forEach(context)