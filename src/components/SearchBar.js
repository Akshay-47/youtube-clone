import React, { Component } from "react";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ''
        }
    }

    onInputChange(e) {
        this.setState({
            inputVal: e.target.value
        });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.inputVal);
    }


    render() {
        return (<div className="search-bar ui segment">
            <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
                <div className="field">
                    <label htmlFor="Video Search">Video Search</label>
                    <input type="text" value={this.state.inputVal} onChange={(e) => this.onInputChange(e)} />
                </div>
            </form>
        </div>)
    }
}

export default SearchBar;
