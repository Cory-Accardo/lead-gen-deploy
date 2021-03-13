import styles from '../styles/index.module.css';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import {useState} from 'react';


function App() {
  const [input, setInput] = useState({
    param1: {
      text: 'Default',
      metaArray: []
    },
    param2: {
      text: 'Default',
      metaArray: []
    }
  });
  const [result, setResult] = useState('defaultResult')
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
  return (
    <div>
      <Header/>
      <body className={styles.skeleton}>
        <div className={styles.search_container}>
          <h2 className={styles.search_prefix}>Find me every</h2>
          <Searchbar url="search" changeInput={handleInputChange} param="business"/>
          <h2 className={styles.search_prefix}>in</h2>
          <Searchbar url="search" changeInput={handleInputChange} param="location"/>
          <Button handleResult={handleResult} inputArray={input}/>
        </div>
        <h1>{result}</h1>
      </body>
    </div>
  );
}


export default App;
