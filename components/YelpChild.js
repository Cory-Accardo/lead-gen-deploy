import styles from '../styles/Container.module.css'
import Router from 'next/router'

function YelpChild(props) {
    const handleEnter = e =>{
      e.target.style.backgroundColor = '#2d5b583a'
    }
    const handleLeave = e => {
      e.target.style.backgroundColor = 'transparent'
    }
    const handleClick = e =>{
      props.handleSelection(business)
      Router.push('/selection')
    }
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
        yelp_url: props.data.url,
        categories: props.data.categories,
        popularity: (Math.round(Math.log(props.data.review_count) * props.data.rating))
    }
    return (
      <div>
          <div className={styles.deliminator}/>
            <div className={styles.yelp_child} onClick = {handleClick} onMouseOut={handleLeave} onMouseOver={handleEnter}>
              <column className={styles.name}>{business.name}</column> 
              <column className={styles.address}>{business.address}</column>
              <column className={styles.popularity}>{business.popularity}</column>
              <column className={styles.zipcode}>{business.zipcode}</column>
              <column className={styles.phone}>{business.phone}</column>
            </div>
      </div>
    );
  }
  
  export default YelpChild;
