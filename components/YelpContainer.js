import YelpChild from './YelpChild'
import styles from '../styles/Container.module.css'

function YelpContainer(props) {
    const handleDisplay = () =>{
        if(props.data != null){
            console.log(props.data)
            const processedData = JSON.parse(props.data).data
            const display = processedData.map(data => {
                return <YelpChild data={data}/>
            })
            return display;
        }
        else{
            return '';
        }
    }
  return (
    <div id={styles.parent_container}>
      <div id="YelpContainer">
        {handleDisplay(props.data)}
      </div>
    </div>
  );
}

export default YelpContainer;