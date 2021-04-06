import YelpChild from './YelpChild.js'
import styles from '../styles/Container.module.css'
import {useEffect} from 'react'

function YelpContainer(props) {
    useEffect(() => {
      if(props.data == null || JSON.parse(props.data).data == undefined || JSON.parse(props.data).data.length < 1){ // determines whether to display container depending on result state.
        document.getElementById(styles.parent_container).style.visibility = 'hidden'
        props.handleResult(null)
      }
      else{
        document.getElementById(styles.parent_container).style.visibility = 'visible'
      }
    })
    const handleDisplay = () =>{
        if(props.data != null){
            const processedData = JSON.parse(props.data).data
            if(processedData == undefined || processedData.length < 1){ // error checking for result being undefined
              props.handleResult(null)
              return ''
            }
            let sortedData = processedData // set's default condition of sort
            if(props.filterState == 'popularity'){
              sortedData = processedData.sort((a,b) => {
                return (Math.round(Math.log(b.review_count) * b.rating))- (Math.round(Math.log(a.review_count) * a.rating)) // sorts by popularity
              }) 
            }
            const display = sortedData.map(data => {
                return <YelpChild handleSelection={props.handleSelection} data={data}/>
            })
            return display;
        }
        else{
            return '';
        }
    }
    const handleFilterClick = e => {
      if(props.filterState == 'popularity'){
        props.filterControl('relevant')
        e.target.textContent = 'Popularity'
      }
      else{
        props.filterControl(e.target.textContent.toLowerCase())
        e.target.textContent = 'Popularity+'
      }
    }
  return (
    <div id={styles.parent_container}>
      <div id={styles.categoryListings}>
        <span id={styles.cat_name}>Name</span>
        <span id={styles.cat_pop} onClick={handleFilterClick}>Popularity</span>
        <span id={styles.cat_add}>Address</span>
      </div>
      <div>
        {handleDisplay(props.data)}
      </div>
    </div>
  );
}

export default YelpContainer;