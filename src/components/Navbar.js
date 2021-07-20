import React from 'react';
// import { search, handleMovieSearch } from '../reducers';
import {handleMovieSearch} from '../actions'

class Navbar extends React.Component {

    handleSearch = () => {
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        });
    }
    render() {
        return(
            <div className = "nav">
                <div className = "search-container">
                    <input onChange = {this.handleChange}/>
                    <button id = "search-btn">Search</button>
                </div>
            </div>
        )
    }
}

export default Navbar;