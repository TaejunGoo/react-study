import styles from "./SearchBtn.module.scss"
import toggleOffIco from './../../../assets/images/ico_search.svg'
import toggleOnIco from './../../../assets/images/ico_close.svg'
const SearchBtn = ({onClickToggle, isViewLayer}) =>{
    
    const handleButtonClick = () =>{
        if(onClickToggle){
            onClickToggle();
        }
    }
    const btnIco = {
        backgroundImage: isViewLayer
            ? `url(${toggleOnIco})`  
            : `url(${toggleOffIco})`,
    };
    
    return(
        <button onClick={handleButtonClick}  className={styles.SearchBtn} style={btnIco}>
            찾기
        </button>
    )
}

export default SearchBtn;