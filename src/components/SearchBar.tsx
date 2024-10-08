import {InputProps} from "../types/interfaces";

const SearchBar = (props: InputProps) => {
    const { placeholder, handleChange, searchInput } = props;

    return (
        <>
            <div className="search_bar">
                    <label htmlFor="header-search">
                        <span className="visually-hidden">Search </span>
                    </label>
                    <input className="search_input"
                           type="text"
                           placeholder={placeholder}
                           onChange={handleChange}
                           value={searchInput}
                    />
                    <button className="search_button">Search</button>
            </div>
        </>
    )
};


export default SearchBar;
