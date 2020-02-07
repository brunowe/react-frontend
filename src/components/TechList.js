/* --------------------------------- IMPORTS ---------------------------------*/
import React, { Component } from "react";
/* --------------------------------- CONTENT ---------------------------------*/
class TechList extends Component {
  state = {
    newTech: "",
    techs: ["Node.js", "ReactJS", "React Native"]
  };
  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ""
    });
  };
  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t != tech) });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button onClick={() => this.handleDelete(tech)} type="button">
                Remove Item
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />
        <button type="submit"> Send </button>
      </form>
    );
  }
}
/* --------------------------------- EXPORTS ---------------------------------*/
export default TechList;
