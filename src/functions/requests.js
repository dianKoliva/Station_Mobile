import axios from "axios";
exports.getproducts =async (token) => {

  const response = await axios.get(
    `http://63.142.252.251//petrol-station/web/index.php/api/v1/transactions/products?access-token=${token}`
  );
  return response.data;
  
 
};
exports.getPrice =async (token) => {

  const response = await axios.get(
    `http://63.142.252.251/petrol-station/web/index.php/api/v1/transactions/pricing?access-token=${token}`
  );
  return response.data;
};

exports.getReports =async (token) => {

  const response = await axios.get(
    `http://63.142.252.251/petrol-station/web/index.php/api/v1/transactions/report?access-token=${token}`,{
      start_date:"2022-08-01",
    end_date:"2022-09-09"
    }
  );
  return response.data;
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
    `http://63.142.252.251//petrol-station/web/index.php/api/v1/transactions/retails?access-token=${accessToken}`,
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

