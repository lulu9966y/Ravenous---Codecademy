import React from "react";
import "./SearchBar.css";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match"
    };
    this.sortByOptions = {
      "Best Match": "best_match",
      "Hightest Rated": "rating",
      "Most Reviewed": "review_count"
    };
  }

  getSortByClass(keyValue) {
    if (this.state.sortBy === keyValue) {
      return "active";
    } else {
      return "";
    }
  }

  handleSortByChange(keyValue) {
    this.setState({ sortBy: keyValue });
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }

  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  handleSearch(e) {
    this.props.searchYelp(
      this.state.term,
      this.state.location,
      this.state.sortBy
    );
    e.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(key => {
      let keyValue = this.sortByOptions[key];
      return (
        <li
          className={this.getSortByClass(keyValue)}
          onClick={this.handleSortByChange.bind(this, keyValue)}
          ey={keyValue}
        >
          {key}
        </li>
      );
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            placeholder="Search Businesses"
            onChange={this.handleTermChange.bind(this)}
          />
          <input
            placeholder="Where?"
            onChange={this.handleLocationChange.bind(this)}
          />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch.bind(this)}>Let's Go</a>
        </div>
      </div>
    );
  }
}
