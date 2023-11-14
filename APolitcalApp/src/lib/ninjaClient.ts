
export const NinjasAPIProfFilter = (text: string) => {
let options = {
    method: 'GET',
    headers: { 'x-api-key': 'qSLT7pGOmE3dTm+Xk0wtDA==YTbvaQqRtkBlnXar' }
  }
  
  let url = 'https://api.api-ninjas.com/v1/profanityfilter?text=' + text;
  
  fetch(url,options).then(res => res.json()).then(data => {console.log(data)}).catch(err => {console.log(`error ${err}`)}); 

}
