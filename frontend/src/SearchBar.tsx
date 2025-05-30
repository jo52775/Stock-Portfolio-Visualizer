import './styles/SearchBar.css'
function SearchBar() {
    return(
        <div className="search-bar-container">
            <input type="text" placeholder="Search a company..." className="search"></input>
        </div>
    )
}

export default SearchBar;