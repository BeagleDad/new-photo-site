/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it
//import 'bootstrap/dist/css/bootstrap.min.css';

exports.onClientEntry = () => {
    // Check local storage
    var localStoredTheme = localStorage.getItem("data-bs-theme");
    var themeToSet = localStoredTheme;
    
    // If local storage is not set then check OS preference
    if (!localStoredTheme) {
        themeToSet = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    // Finally set the attribute to the one determined above.
    document.documentElement.setAttribute("data-bs-theme", themeToSet);
};


