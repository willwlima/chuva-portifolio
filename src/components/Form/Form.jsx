import React, { useState } from "react";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import "./Form.css";

function Form() {
  const [enviarForm, setEnviarForm] = useState();

  function enviandoForm(e) {
    e.preventDefault();
    setEnviarForm(" ");
  }

  return (
    <>
      <form>
        <p>
          Tem uma dúvida ou sugestão? Compartilhe seu feedback com os autores!
        </p>

        <h2 className="form-assunto">Assunto</h2>
        <input
          style={{ textIndent: "15px" }}
          placeholder="Defina um tópico sucinto para notificar os autores..."
          type="text"
        />
        <h2 className="form-conteudo">Conteúdo</h2>
        <input type="text" className="input-conteudo " />
        <div className="btn">
          <FormatBoldIcon className="formatBoldIcon" />
          <FormatItalicIcon />
          <button onClick={enviandoForm} href="#" className=" btn-button">
            Enviar
          </button>
        </div>
      </form>
      {enviarForm && (
        <div className="topico-enviado">
          <h3 className="discussoes-text-top-form">
            Seu tópico foi enviado com sucesso! :D
          </h3>
          <h3 className="discussoes-box-h3-enviado">
            Agradecemos por sua contribuição, uma notificação será enviada ao
            seu email assim que seu tópico for respondido!
          </h3>
          <p className="topico-enviado-paragrafo">Descubra outros trabalhos!</p>
          <button className="btn-topico-enviado">criar novo tópico</button>

          <div className="topico">
            <h2>Assunto da pergunta aparece aqui</h2>
            <h3>Carlos Henrique Santos</h3>
            <p>
              Comecinho da pergunta aparece aqui resente relato inscreve-se no
              campo da análise da dimensão e impacto de processo formativo
              situado impacto de processo formativo processo...
            </p>
          </div>
          <div className="aguardando-feedback">
            <DoneAllIcon className="DoneAllIcon" />
            <p>Aguardando feedback dos autores</p>
            <a href="http">Editar tópico</a>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
