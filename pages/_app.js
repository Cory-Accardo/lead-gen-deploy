import '../styles/globals.css'
import {useState} from 'react';

function MyApp({ Component, pageProps }) {
  const [input, setInput] = useState({ //sets initial states of search query
    param1: {
      text: '',
      metaArray: []
    },
    param2: {
      text: '',
      metaArray: []
    }
  });
  const [deepContents, setDeepContents] = useState({
    facebook: 'Request a deep search',
    instagram: 'Request a deep search',
    twitter: 'Request a deep search',
    website: 'Request a deep search',
    shallow_business: null
  });
  const [result, setResult] = useState(null) //sets initial state of results for search
  const [filter, setFilter] = useState(null) //sets initial state for chosen filter
  const handleDeepResults = (deepResults) => {
    setDeepContents(deepResults);
  }
  const handleLogoClick = (e) => { //when somebody clicks the logo, sets results to null
    setResult(null)
  }
  const handleResult = (response) => { //when somebody clicks submit, handles response from button component
    setResult(response)
  }
  const handleInputChange = (e) => { //updates input state based on entries in search bar component
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
  const [selection, setSelection] = useState('NOT DISPLAYING');
  const handleSelection = (data) => {
    setSelection(data);
  }

  return <Component deepContents ={deepContents} handleDeepResults = {handleDeepResults} input ={input} result={result} filter={filter} handleLogoClick ={handleLogoClick} handleInputChange={handleInputChange}
  handleFilterState = {handleFilterState} handleResult={handleResult} selection={selection} 
  handleSelection = {handleSelection} {...pageProps} />
}

export default MyApp
