export default function callAPi(param) {
        return new Promise((resolve, reject) => {
           const url = `http://localhost:3001/items/${param.id}`;
           fetch(url, {
               method: "PATCH",
               headers:{
                   'Content-Type': 'application/json'
                 },
               body: JSON.stringify({isDone:true})
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
   