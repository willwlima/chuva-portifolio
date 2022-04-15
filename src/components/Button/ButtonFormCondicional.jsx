import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@material-ui/core/";
import Form from "../Form/Form";
import "./ButtonFormCondicional.css";

function ButtonForm() {
  const [click, setClick] = useState();
  function criarTopico(e) {
    e.preventDefault();
    setClick(<Form />);
  }
  return (
    <>
      <Button
        variant="contained"
        className="btn-criar-topico"
        onClick={criarTopico}
      >
        {" "}
        <AddIcon />
        criar tópico
      </Button>
      {click && <Form />}
    </>
  );
}

export default ButtonForm;