/* --------------------------------- IMPORTS ---------------------------------*/
import React from "react";

/* --------------------------------- CONTENT ---------------------------------*/
function TechItem() {
  return (
    <li>
      {tech}
      <button onClick={() => this.handleDelete(tech)} type="button">
        Remove Item
      </button>
    </li>
  );
}
/* --------------------------------- EXPORTS ---------------------------------*/
export default TechItem;
