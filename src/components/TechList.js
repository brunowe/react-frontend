/* --------------------------------- IMPORTS ---------------------------------*/
import React, { Component } from "react";
/* --------------------------------- CONTENT ---------------------------------*/
class TechList extends Component {
  state = {
    techs: ["Node.js", "ReactJS", "React Native"]
  };
  render() {
    return (
      <ul>
        {this.state.techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    );
  }
}
/* --------------------------------- EXPORTS ---------------------------------*/
export default TechList;
