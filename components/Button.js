import styles from '../styles/Button.module.css'

const axios = require('axios').default; 

function Button(props) {
  const handleError = () =>{
      document.getElementById('button').textContent = 'Enter more text'
      setTimeout(() => { // reverses changes after set ms
        if(document.getElementById('button')!=null){
          document.getElementById('button').textContent = 'Submit'
        }
      }, 2000)
  }
  const handleInitialSearch = () =>{
      document.getElementById('button').textContent = 'Searching...'
    }
  const handleEmptyResult = () =>{
      document.getElementById('button').textContent = 'No results...'
      setTimeout(() => { // reverses changes after set ms
        if(document.getElementById('button')!=null){
          document.getElementById('button').textContent = 'Submit'
        }
      }, 2000)
  }
  const handleValidResult = () => {
      document.getElementById('button').textContent = 'Results found!'
      setTimeout(() => { // reverses changes after set ms
        if(document.getElementById('button')!=null){
          document.getElementById('button').textContent = 'Submit'
        }
      }, 2000)
  }

  const handleSubmit = () => {
    handleInitialSearch()
    if(props.inputArray.param1.text.length > 2 && props.inputArray.param2.text.length > 1){
      axios.get(`api/${props.inputArray.param1.metaArray[1]}`, { // search url from button props
        params: { //button accepts two params.
          param1: {
            text: props.inputArray.param1.text, 
            meta: props.inputArray.param1.metaArray
          },
          param2: {
            text: props.inputArray.param2.text,
            meta: props.inputArray.param2.metaArray
          },
        },
      }).then(response => { // handles responses from request
        props.handleResult(JSON.stringify(response));
        if(response.data == undefined || response.data.length < 1){handleEmptyResult()}
        else{handleValidResult()}
      }, error=> {
        props.handleResult(JSON.stringify(error));
        handleEmptyResult()
      })
    }
  else{handleError()}
}
  return (
    <div>
      <button id="button" className={styles.Button} type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Button;
