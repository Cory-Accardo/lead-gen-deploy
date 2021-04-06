const axios = require('axios').default; 
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


module.exports = (req, res) => {
    return new Promise(resolve =>{
        const yelp_url = req.query.yelp_url;
        deep_search();
        async function deep_search(){
            try{
                const response = await axios.get(yelp_url);
                const data = response.data;
                const dom = new JSDOM(data);
                const document = dom.window.document;
                const web_url = document.querySelectorAll('.css-ac8spe');
                let found_web_url = 'No Website Found';
                web_url.forEach((nodeObj) => {
                    if(nodeObj.textContent.includes('.com')){
                        found_web_url = nodeObj.textContent;
                    }
                })
                if(found_web_url != 'No Website Found'){
                    const response = await axios.get(`http://www.${found_web_url}`);
                    const data = response.data;
                    const dom = new JSDOM(data);
                    const document = dom.window.document;
                    const socialNodeArray = document.querySelectorAll('a');
                    let facebook_link = 'No Facebook Found';
                    let instagram_link = 'No Instagram Found';
                    let twitter_link = 'No Twitter Found';
                    socialNodeArray.forEach((nodeObj) => {
                        if(nodeObj.href.includes('facebook.com')){
                            facebook_link = nodeObj.href;
                        }
                        else if(nodeObj.href.includes('instagram.com')){
                            instagram_link = nodeObj.href;
                        }
                        else if(nodeObj.href.includes('twitter.com')){
                            twitter_link = nodeObj.href;
                        }
                    })
                    const social_links = {
                        facebook: facebook_link,
                        instagram: instagram_link,
                        twitter: twitter_link,
                        website: found_web_url
                    }
                    res.status(200).json(social_links);
                    return resolve();
                }
                else{
                    res.status(500).json('No Website Found');
                    return resolve();
                };
            }
            catch(e){
                res.status(500).json(e);
                return resolve();
            }
        }





    })
}