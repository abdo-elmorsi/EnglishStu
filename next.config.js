const { i18n } = require("./next-i18next.config");
const path = require("path");

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    i18n,
    images: {
        domains: [
            "flagcdn.com",
            "lh3.googleusercontent.com",
            "avatars.githubusercontent.com",
        ],
    },
};
