/* --------------------------------- IMPORTS ---------------------------------*/
import React, { Component } from "react";
import TechItem from "./TechItem";
/* --------------------------------- CONTENT ---------------------------------*/
class TechList extends Component {
  state = {
    newTech: "",
    techs: []
  };
  /* Executa sempre que o componente aparece em tela */
  componentDidMount() {}
  /* Executa sempre que houver alteracoes nas props ou estados */
  componentDidUpdate() {
    if (prevState.test != this.state.techs) {
      localStorage.setItem("techs", JSON.stringify(this.state.techs));
    }
  }
  /* Executa sempre que o componente deixa de existir */
  componentWillUnmount() {}
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
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
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
