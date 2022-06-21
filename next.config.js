const path = require("path");

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        domains: [
            "flagcdn.com",
            "lh3.googleusercontent.com",
            "avatars.githubusercontent.com",
        ],
    },
};
