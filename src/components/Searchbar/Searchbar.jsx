import "./Searchbar.scss";
import searchIcon from "../../assets/images/searchIcon.png"

const Searchbar = () => {
    return(
        <div className="searchBar">
            <img src={searchIcon} alt="Icon" className="searchBar__image"/>
            <input 
                type="search" 
                name="Searchbar" 
                id="S" 
                placeholder="Search..." 
                className="searchBar__input"
            />
        </div>
    )
}

export default Searchbar;