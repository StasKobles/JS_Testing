const axios = require("axios");
const mapArrToStrings = require("../mapArrToString/mapArrToString");
const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const userIds = response.data.map((user) => user.id);
    return mapArrToStrings(userIds);
  } catch (e) {
    console.log(e);
  }
};

module.exports = getData;