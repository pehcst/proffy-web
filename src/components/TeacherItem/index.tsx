import React from "react";

import WhatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

export default function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/23247695?s=460&u=b5d6248fb74bf9a5612de8aeb9c58808a58514b7&v=4"
          alt="Pedro Costa"
        ></img>
        <div>
          <strong>Pedro Costa</strong>
          <span>Quimica</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={WhatsappIcon} alt="Whatsapp"></img>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}
