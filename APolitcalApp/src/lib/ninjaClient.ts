
export default async function NinjasAPIProfFilter(text: string) {
let options = {
    method: 'GET',
    headers: { 'x-api-key': 'qSLT7pGOmE3dTm+Xk0wtDA==YTbvaQqRtkBlnXar' }
  }
  
  let url = 'https://api.api-ninjas.com/v1/profanityfilter?text=' + text;
  
  const fetchedData = fetch(url,options)
                        .then(response => response.json())
                        .then(data => {
                          return data.has_profanity
                        });

  return (fetchedData)

}



