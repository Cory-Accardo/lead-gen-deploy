import styles from '../styles/selection.module.css'
import BackIcon from '../assets/svg/back_icon.svg'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react';


function Selection(props){
    useEffect(()=>{
        props.handleDeepResults({ //cleans up in case of changing pages
            facebook: 'Request a deep search',
            instagram: 'Request a deep search',
            twitter: 'Request a deep search',
            website: 'Request a deep search',
            shallow_business: null
          })
    },[props.selection])
    const router = useRouter();
    const business = props.selection;
    const axios = require('axios').default; 
    const handleDeepSearch = () =>{
        axios.get(`api/deep_search`, {
            params: { 
              yelp_url: business.yelp_url
            },
          }).then((response)=>{
              response = response.data;
              const facebook = response.facebook
              const instagram = response.instagram
              const twitter = response.twitter
              const website = response.website;
              const deepResults = {
                  facebook: facebook,
                  instagram: instagram,
                  twitter: twitter,
                  website: website,
                  shallow_business: business
              }
              props.handleDeepResults(deepResults)
          }).catch(error =>{
              const deepResults ={
                facebook: 'Facebook not found',
                instagram: 'Instagram not found',
                twitter: 'Twitter not found',
                website: 'Website not found'
              }
              props.handleDeepResults(deepResults)
          })
    }
    return (
        <div className = {styles.selection_page}>
            <header className = {styles.header}>
                <div className = {styles.back_div} onClick={()=> router.back()}>
                    <BackIcon id={styles.back_icon}/>
                </div>
                <h1>{business.name}</h1>
                <div id="deep_search_icon" className={styles.deep_search_div} onClick={(e) => {
                    e.target.style.pointerEvents = 'none';
                    handleDeepSearch();
                }}>
                    <p>Deep search</p>
                </div>
            </header>
            <div className = {styles.parent_grid}>
                <div className={styles.row}>
                    <span className={styles.title}>Address</span>
                    <span className={styles.information}> {`${business.address}, ${business.state} , ${business.city}, ${business.zipcode}`} </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.title}> Phone Number</span>
                    <span className={styles.information}> {business.phone}</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.title}>Popularity Index</span>
                    <span className={styles.information}> {business.popularity}</span>
                </div>
                <div className={styles.row}>
                    <span className={styles.title}> Facebook</span>
                    <span className={styles.information}> {props.deepContents.facebook} </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.title}> Instagram</span>
                    <span className={styles.information}> {props.deepContents.instagram} </span>
                </div>
                <div className={styles.row}>
                    <span className={styles.title}> Twitter</span>
                    <span className={styles.information}> {props.deepContents.twitter} </span>
                </div>
                <div className={styles.row} id={styles.last_row}>
                    <span className={styles.title}> Business Website</span>
                    <span className={styles.information}> {props.deepContents.website} </span>
                </div>
            </div>
        </div>
    );
}

export default Selection