import styles from '../styles/Searchbar.module.css'
import LandIcon from '../assets/svg/landmark_icon.svg'
import SearchIcon from '../assets/svg/landmark_icon.svg'

function Searchbar(props) {
  const handleWindowChange = () => {
    const mobileWindow = window.matchMedia("(max-width: 600px)");
    if(mobileWindow.matches){
      if(props.param == "business"){
        return <SearchIcon/>
      }
      else if(props.param == "location"){
        return <LandIcon/>
      }
      }
  }
  const handleSearchSpace = (e =>{
    const mobileWindow = window.matchMedia("(max-width: 600px)");
    if(!mobileWindow.matches){
      const nodeElem = e.target;
      const text = nodeElem.value;
      if(text.length < 1){
        nodeElem.style.width = '2em'
      }
      else if(text.length < 29){
        nodeElem.style.width = `${1 + .39*text.length}em`
      }
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
