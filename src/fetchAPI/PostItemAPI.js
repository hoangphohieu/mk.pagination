export default function callAPi(param) {

      return new Promise((resolve, reject) => {
         const url = "http://localhost:3001/items";
         fetch(url, {
             method: "POST",
             headers:{
                 'Content-Type': 'application/json'
               },
             body: JSON.stringify(param.bodyAdd)
         })
             .then(response => response.json())
             .then(res => {
                 resolve(res);
                 
             })
             .catch(err => {
                 reject(err)
             })
         })
 }
 