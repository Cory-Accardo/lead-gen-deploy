import styles from '../styles/Button.module.css'

const axios = require('axios').default; 

function Button(props) {
  const handleSubmit = () => {
    const input = [[props.inputArray.param1.metaArray, props.inputArray.param1.text], [props.inputArray.param2.metaArray, props.inputArray.param2.text]]
    if(input[0][1].length > 1 && input[1][1].length > 1){
    axios.get(`api/${input[0][0][1]}`, { // search url from button props
      params: { //button accepts two params.
        param1: {
          text: input[0][1], 
          meta: input[0][0]
        },
        param2: {
          text: input[1][1],
          meta: input[1][0]
        },
      },
    }).then(response => { // handles responses from request
      props.handleResult(JSON.stringify(response));
    }, error=> {
      props.handleResult(JSON.stringify(error));
    })
  }
}
  return (
    <div>
      <button className={styles.Button} type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Button;
