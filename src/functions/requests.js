import axios from "axios";
let token;
exports.getproducts = () => {
  axios
    .get(
      `http://63.142.252.251//petrol-station/web/index.php/api/v1/transactions/products?access-token=${token}`
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const signIn = async (name, pass) => {
  const response = await axios.post(
    "http://63.142.252.251//petrol-station/web/index.php/api/v1/accounts/login",
    { username: name, password: pass }
  );
  return response.data;
};

export const getStations = async (accessToken) => {
  const response = await axios.get(
    `http://63.142.252.251//petrol-station/web/index.php/api/v1/transactions/stations?access-token=${accessToken}`
  );
  return response.data;
};

export const getTanks = async (accessToken) => {
  const response = await axios.get(
    `http://63.142.252.251//petrol-station/web/index.php/api/v1/transactions/tanks?access-token=${accessToken}`
  );
  return response.data;
};

export const saveRetail = async (accessToken, data) => {
  const response = await axios.post(
    `http://63.142.252.251//petrol-station/web/index.php/api/v1/transactions/detail?access-token=${accessToken}`,
    data
  );
  return response.data;
};

export const saveGros = async (accessToken, data) => {
  const response = await axios.post(
    `http://63.142.252.251//petrol-station/web/index.php/api/v1/transactions/gros?access-token=${accessToken}`,
    data
  );
  return response.data;
};
