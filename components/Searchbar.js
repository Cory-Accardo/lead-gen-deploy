import styles from '../styles/Searchbar.module.css'

function Searchbar(props) {
  const handleSearchSpace = (e =>{
    const nodeElem = e.target;
    const text = nodeElem.value;
    if(text.length < 1){
      nodeElem.style.width = '2em'
    }
    else if(text.length < 29){
      nodeElem.style.width = `${1 + .39*text.length}em`
    }
  })
  return (
    <div className={styles.Searchbar}>
      <input spellCheck = "false" maxLength="29" className={styles.input} alt = {[[props.param],[props.url]]} type="text" onChange={e => {
        props.changeInput(e)
        handleSearchSpace(e)
        }}/>
    </div>
  );
}

export default Searchbar;
