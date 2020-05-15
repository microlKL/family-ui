module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'], // 运行测试前可执行的脚本（比如注册enzyme的兼容）
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
};
