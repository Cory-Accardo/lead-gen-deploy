

function YelpChild(props) {
    const business = {
        address : props.data.location.address1 + " " + props.data.location.address2,
        city : props.data.location.city,
        state : props.data.location.state,
        zipcode : props.data.location.zipcode,
        country : props.data.location.country,
        coordinates : props.data.coordinates,
        image_url: props.data.image_url,
        name: props.data.name,
        phone: props.data.display_phone,
        review_count: props.data.review_count,
        yelp_url: props.data.yelp_url,
        categories: props.data.categories,
    }
    return (
      <div id="YelpContainer">
          <h1>YELP COMPONENT!</h1>
          <h2>{business.name}</h2>
          <body>
              <ol>
                  <li>{business.address}</li>
                  <li>{business.city}</li>
                  <li>{business.zipcode}</li>
                  <li>{business.state}</li>
                  <li>{business.country}</li>
                  <li>{business.image_url}</li>
                  <li>{business.coordinates.latitude}</li>
                  <li>{business.coordinates.longitude}</li>
              </ol>
          </body>
      </div>
    );
  }
  
  export default YelpChild;