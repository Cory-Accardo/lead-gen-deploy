import styles from '../styles/Container.module.css'

function YelpChild(props) {
    console.log(props.data)
    const business = {
        address : props.data.location.address1 + " " + props.data.location.address2,
        city : props.data.location.city,
        state : props.data.location.state,
        zipcode : props.data.location.zip_code,
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
          <div className={styles.deliminator}/>
          <column className={styles.name}>{business.name}</column> 
          <column className={styles.address}>{business.address}</column>
          <column className={styles.city}>{business.city}</column>
          <column className={styles.zipcode}>{business.zipcode}</column>
          <column className={styles.phone}>{business.phone}</column>
      </div>
    );
  }
  
  export default YelpChild;