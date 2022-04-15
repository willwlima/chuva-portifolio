import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";

import "./RightSide.css";

function RightSide() {
  return (
    <div className="right-side-button">
      <Button startIcon={<DeleteIcon className="color-icon" />} className="one">
        Download
      </Button>
      <Button
        startIcon={<StarIcon className="color-icon-starIcon" />}
        className="right-side-button two"
      ></Button>

      <Button className="right-side-button three">
        <p>doi</p>
      </Button>

      <p className="text-description-top">COMO CITAR ESSE TRABALHO ?</p>
      <div className="text-detail">
        <p>Detalhes</p>
        <div className="box-text">
          <p className="box-text-text">
            Tipo de Apresentação: <b>Pôster</b> Eixo temático:{" "}
            <b>Alimentação e saúde (AS)</b>
            <br></br> <br></br>
            Palavras-chaves: <b>Alimentos funcionais, alimentação escolar.</b>
            <br></br> <br></br>
            <b> Autores:</b>
            <br></br>
            Galileo Galilei¹
            <br></br>Berta Lange de Morretes²
            <br></br>Isaac Newton³
            <br></br>Cesar Lattes¹
            <br></br>Stephen Hawking⁴
          </p>
          <p className="box-text-text text-info">
            ¹Universidade Estadual de Campinas ²Universidade de São Paulo
            ³Instituto Nacional de Pesquisas Espaciais ⁴Universidade Federal do
            Rio de Janeiro
          </p>
          <div className="retangle-box"></div>
          <div className="retangle-line"></div>
        </div>
      </div>
    </div>
  );
}

export default RightSide;
