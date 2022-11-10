import "./Searchbar.scss";
import searchIcon from "../../assets/images/searchIcon.png";

const Searchbar = ({saveSearchText}) => {

    const handleChange = (event) => {
        saveSearchText(event.target.value)
    }


    return(
        <div className="searchBar">
            <img src={searchIcon} alt="Icon" className="searchBar__image"/>
            <input 
                type="search" 
                name="Searchbar" 
                id="S" 
                placeholder="Search..." 
                className="searchBar__input"
                onChange={handleChange}
            />
        </div>
    )
}

export default Searchbar;