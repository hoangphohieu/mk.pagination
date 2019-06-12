export default function callAPi(payload) {
      console.log(payload)
        return new Promise((resolve, reject) => {
           const url = `http://localhost:3001/items/${payload.id}`;
           fetch(url, {
               method: "DELETE"
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
   