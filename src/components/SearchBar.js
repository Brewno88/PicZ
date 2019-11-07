import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  // arrow function fix 'this' so that 'this' is always equal to the instance of SearchBar
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }
  
  render() {

    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Field</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({term: e.target.value})}
              placeholder="text here"
              />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
