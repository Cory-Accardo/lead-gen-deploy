import styles from '../styles/Container.module.css'

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
      <div className={styles.yelp_child}>
          <h1 id={styles.business_name}>{business.name}</h1>
          <body className={styles.yelp_child_body}>
              <ol className ={styles.list}>
                  <li>{business.address}</li>
                  <li>{business.city}</li>
                  <li>{business.state}</li>
                  <li ><img className={styles.image} alt ="image" src ={business.image_url}/></li>
                  <li>{business.coordinates.latitude}</li>
                  <li>{business.coordinates.longitude}</li>
              </ol>
          </body>
      </div>
    );
  }
  
  export default YelpChild;