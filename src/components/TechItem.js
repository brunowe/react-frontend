/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";

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
/* --------------------------------- EXPORTS ---------------------------------*/
export default TechItem;
