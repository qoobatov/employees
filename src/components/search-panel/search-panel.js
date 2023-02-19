import React from "react";
import "./search-panel.css";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearchInApp(term);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Найти сотрудника"
          value={this.state.term}
          onChange={this.onUpdateSearch}
        />
      </div>
    );
  }
}

export default SearchPanel;
