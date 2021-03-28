// handles /search/ http requests, using yelp's fusion API

const yelp = require('yelp-fusion');

const apiKey = 'ZRE8o2S75GiaDgbs3Ch0a2mI1yUTFRiIb8Ds2laQba7gbmO4_jHZas-I07c_umXPf3Ru0ze7JVx6I1JrExai_g5Y7KUWfaBLz93MT036uNhwOMuLrOFdJfLBWkpMYHYx';
const client = yelp.client(apiKey); 



export default function(req, res){
  console.log('I am at the api page')
  return new Promise(resolve => { 
    const category = JSON.parse(req.query.param1)
    const location = JSON.parse(req.query.param2)
    const searchRequest = {
        term: category.text,
        location: location.text,
        limit: 50,
        radius: 40000,
        offset: 0
      };
    client.search(searchRequest).then(response => {
      const result = Object.values(response.jsonBody.businesses);
      res.status(200).json(result);
      return resolve();
    }).catch(e =>{
      res.status(500).json(e)
      return resolve();
    })
  })
}







