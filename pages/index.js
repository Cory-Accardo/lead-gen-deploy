import PyramidImage from '../assets/svg/temple.svg'
import styles from '../styles/index.module.css';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import YelpContainer from '../components/YelpContainer';
import {useState} from 'react';


function App() {
  const [input, setInput] = useState({
    param1: {
      text: '',
      metaArray: []
    },
    param2: {
      text: '',
      metaArray: []
    }
  });
  const [result, setResult] = useState(null)
  const [filter, setFilter] = useState(null)
  const handleLogoClick = (e) => {
    setResult(null)
  }
  const handleScroll = e => {
    if(result == null || JSON.parse(result).data.length < 1){
      document.getElementById(styles.svg).style.top = `${e.deltaY}px`
    }
  }
  const handleResult = (response) => {
    setResult(response)
  }
  const handleInputChange = (e) => {
    let newInput;
    const newInputText = e.target.value;
    const newInputMetaArray = e.target.alt.split(',');
    const oldParamOneText = input.param1.text;
    const oldParamOneMetaArray = input.param1.metaArray;
    const oldParamTwoText = input.param2.text;
    const oldParamTwoMetaArray = input.param2.metaArray;
    if(newInputMetaArray[0] === "business"){
      newInput = {
        param1: {
          text: newInputText,
          metaArray: newInputMetaArray
        },
        param2: {
          text: oldParamTwoText,
          metaArray: oldParamTwoMetaArray
        }
      }
    }
    else if (newInputMetaArray[0] === "location"){
      newInput = {
        param1: {
          text: oldParamOneText,
          metaArray: oldParamOneMetaArray
        },
        param2: {
          text: newInputText,
          metaArray: newInputMetaArray
        }
      }
    }
    else{
      newInput = input
    }
    setInput(newInput)
  }
  const handleFilterState = filterState => {
    setFilter(filterState)
  }
  return (
    <div onWheel={handleScroll} className = {styles.skeleton}>
      <div className = {styles.Header}>
        <h1 onClick = {handleLogoClick} className= {styles.logo_group} id={styles.logo_title}>BE BOPE</h1>
      </div>
      <body>
        <div className={styles.search_container}>
          <h2 className={styles.search_prefix}>Search for</h2>
          <Searchbar url="search" changeInput={handleInputChange} param="business"/>
          <h2 className={styles.search_prefix}>in</h2>
          <Searchbar url="search" changeInput={handleInputChange} param="location"/>
          <Button resultState={result} handleResult={handleResult} inputArray={input}/>
        </div>
        <YelpContainer handleResult={handleResult} filterState={filter} filterControl={handleFilterState} data={result}/>
      </body>
      <PyramidImage id={styles.svg}/>
    </div>
  );
}


export default App;
