import "./Searchbar.scss";

const Searchbar = () => {
    return(
        <div className="searchBar">
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