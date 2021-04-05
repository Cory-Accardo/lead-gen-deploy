import styles from '../styles/index.module.css';
import Searchbar from '../components/Searchbar.js';
import Button from '../components/Button.js';
import YelpContainer from '../components/YelpContainer.js';


function Index(props) {
  return (
    <div className = {styles.skeleton}>
      <div className = {styles.Header}>
        <h1 onClick = {props.handleLogoClick} className= {styles.logo_group} id={styles.logo_title}>BE BOPE</h1>
      </div>
      <body>
        <div className={styles.search_container}>
          <h2 className={styles.search_prefix}>Search for</h2>
          <Searchbar className = {styles.search_bar} url="search" changeInput={props.handleInputChange} param="business"/>
          <h2 className={styles.search_prefix}>in</h2>
          <Searchbar className = {styles.search_bar} url="search" changeInput={props.handleInputChange} param="location"/>
          <Button resultState={props.result} handleResult={props.handleResult} inputArray={props.input}/>
        </div>
        <YelpContainer handleSelection = {props.handleSelection} handleResult={props.handleResult} filterState={props.filter} filterControl={props.handleFilterState} data={props.result}/>
      </body>
    </div>
  );
}


export default Index;
