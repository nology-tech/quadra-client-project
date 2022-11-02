import "./Searchbar.scss";
import searchIcon from "../../"

const Searchbar = () => {
    return(
        <div className="searchBar">
            <img src={searchIcon} alt="Icon" />
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