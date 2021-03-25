/**
 * Third party modules
 */
const axios = require("axios");

/**
 * Axios instance
 */
const coatmasterFlex = axios.create({
    baseURL: "http://10.10.0.1:9081/flex-api/api/v1",
    headers: { "Authorization": "Bearer hkeqex" }
});
// const coatmasterFlex = axios.create({
//   baseURL: "https://api.coatmaster.cloud/flex-api/api/v1",
//   headers: { "Authorization": "Bearer ubx2qq" }
// });


// Export
module.exports = coatmasterFlex;