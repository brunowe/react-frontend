/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";
import PropTypes from "prop-types";
/* --------------------------------- CONTENT ---------------------------------*/
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remove
      </button>
    </li>
  );
}
TechItem.default = {
  tech: "Oculto"
};
TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};
/* --------------------------------- EXPORTS ---------------------------------*/
export default TechItem;
