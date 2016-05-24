module.exports = {
    verbose: true,
    "plugins": {
        "local": {
            "browsers": ['chrome', 'firefox']
        },
        "istanbul": {
            "dir": "./coverage",
            "reporters": ["text-summary", "lcov"],
            "include": [
                "/*.html"
            ],
            "exclude": [
            ]
        },
        sauce : {
          disabled : true
        }
    }
};