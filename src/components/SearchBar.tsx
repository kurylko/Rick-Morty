import {InputProps} from "../types/interfaces";

const SearchBar = (props: InputProps) => {
    const {placeholder, handleChange, searchInput} = props;

    return (
        <>
            <div className="block">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search </span>
                </label>
                <input
                    className="input input-bordered w-full max-w-xs transition-colors duration-300 ease-in-out focus:bg-[rgba(148,47,255,0.07)] transition-colors duration-300 ease-in-out"
                    type="text"
                    placeholder={placeholder}
                    onChange={handleChange}
                    value={searchInput}/>
                <button className="hidden">Search</button>
            </div>
        </>
    )
};


export default SearchBar;
