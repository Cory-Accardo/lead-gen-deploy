import styles from '../styles/Searchbar.module.css'
import LandIcon from '../assets/svg/landmark_icon.svg'
import SearchIcon from '../assets/svg/landmark_icon.svg'
import {useEffect} from 'react'


function Searchbar(props) {
  useEffect(() => { // handles search bar transition from mobile to desktop. 
    function handleResize(){
      const searchBar = document.getElementsByClassName(styles.input)
      if(window.innerWidth < 600){ // sets mobile static functionality and adds icons to relevant positions
        for (let i = 0; i < searchBar.length; i++){
          searchBar[i].style.width = '10em'
          if(searchBar[i].alt == "location,search"){
            searchBar[i].placeholder = "enter location"
          }
          else if(searchBar[i].alt == "business,search"){
            searchBar[i].placeholder = "enter query"
          }
        }
      }
      else{ // readjusts to dekstop functionality
        for (let i = 0; i < searchBar.length; i++){
          searchBar[i].placeholder = ''
          if(searchBar[i].value.length < 1){
            searchBar[i].style.width = '2em'
          }
          else if(searchBar[i].value.length < 29){
            searchBar[i].style.width = `${1 + .39*searchBar[i].value.length}em`
          }
        }
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize' , handleResize)
    }
  })
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
    else if(mobileWindow.matches){
      const nodeElem = e.target;
      nodeElem.style.width = '10em'
    }
  })
  return (
    <div className={styles.Searchbar}>
      <input id = "input_item" spellCheck = "false" maxLength="29" className={styles.input} alt = {[[props.param],[props.url]]} type="text" onChange={e => {
        props.changeInput(e)
        handleSearchSpace(e)
        }}/>
    </div>
  );
}

export default Searchbar;
