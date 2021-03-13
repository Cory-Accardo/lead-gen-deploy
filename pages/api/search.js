// handles /search/ http requests, using yelp's fusion API

const yelp = require('yelp-fusion');

const apiKey = 'Uok93zaKIflvNPgElgAykwI5ptxiVPC_Zwt0mDLb7vtrf0tf2eF9F5qZkIIx5LqjrlwwTHR71TdzU3mgBawIq1em37fHLnYHpKOrcI0miOD-iX-tdIpPAMQGFXt6X3Yx';
const client = yelp.client(apiKey); 



export default (req, res) => {
  return new Promise(resolve => { 
    const category = JSON.parse(req.query.param1)
    const location = JSON.parse(req.query.param2)
    const searchRequest = {
        category: category.text,
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







