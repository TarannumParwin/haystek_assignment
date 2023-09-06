import React, { Component } from "react";
import "./App.css";
import jsonData from "./json/data.json";

class PersonDataPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: jsonData, // Load the JSON data
      startIndex: 0,
      endIndex: 2, // Initialize with the first three entries
    };
  }

  handleNextGroup = () => {
    const { startIndex, endIndex, data } = this.state;

    if (endIndex < data.length - 1) {
      // Calculate the next group's start and end index
      const nextStartIndex = endIndex + 1;
      const nextEndIndex =
        endIndex + 3 <= data.length - 1 ? endIndex + 3 : data.length - 1;

      this.setState({
        startIndex: nextStartIndex,
        endIndex: nextEndIndex,
      });
    } else {
      alert("No more people!");
    }
  };

  render() {
    const { data, startIndex, endIndex } = this.state;

    return (
      <div>
        <div>
          <h2>PEOPLE DATA</h2>
          <button className="next-button" onClick={this.handleNextGroup}>
            Next Person
          </button>
        </div>
        <div className="form">
          {data.slice(startIndex, endIndex + 1).map((person, index) => (
            <div className="field" key={index}>
              <div className="index-label">
                <label className="label">{startIndex + index + 1}</label>
              </div>
              <div className="input-group">
                <input
                  type="text"
                  className="name"
                  placeholder="Name"
                  value={person.name}
                  readOnly
                />
                <input
                  type="text"
                  className="location"
                  placeholder="Location"
                  value={person.location}
                  readOnly
                />
              </div>
            </div>
          ))}
        </div>
        <h5>CURRENTLY 3 PEOPLE SHOWING</h5>
      </div>
    );
  }
}

export default PersonDataPage;
