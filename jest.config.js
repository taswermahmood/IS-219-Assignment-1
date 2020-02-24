// jest.config.js
module.exports = {
    verbose: true,
    testURL: "http://localhost:5000/",
    "coverageDirectory": "./tests/coverage",

    "coveragePathIgnorePatterns": [
        "./jest",
    ],
};