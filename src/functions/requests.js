import axios from 'axios'
let token;
exports.getproducts=()=>{
    axios.get(`http://63.142.252.251//petrol-station/web/index.php/api/v1/transactions/products?access-token=${token}`)
    .then(response=>{
return response.data;
    })
    .catch(error=>{
console.log(error);
    })
}
exports.signin=(name,pass)=>{
    axios.post('http://63.142.252.251//petrol-station/web/index.php/api/v1/accounts/login', {
        "username":name,
        "password":pass
       
      })
      .then(function (response) {
        token=response.data.token;
       getTanks();
      return response.data.success;
      
       
      })
      .catch(function (error) {
        console.log(error);
      });
     
}

exports.getStations=()=>{
    axios.get(`http://63.142.252.251//petrol-station/web/index.php/api/v1/transactions/stations?access-token=${token}`)
    .then(response=>{
return response.data;
    })
    .catch(error=>{
console.log(error);
    })
}

exports.getTanks=()=>{
    axios.get(`http://63.142.252.251//petrol-station/web/index.php/api/v1/transactions/tanks?access-token=${token}`)
    .then(response=>{
return response.data;
    })
    .catch(error=>{
console.log(error);
    })
}

