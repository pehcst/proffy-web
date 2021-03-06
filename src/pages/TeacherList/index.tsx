import React from "react";
import "./styles.css";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

export default function TeacherList() {
  return (
    <div className="container" id="page-teacher-list">
      <PageHeader title="Estes são os Proffys disponiveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="weak_day">Dia da semana</label>
            <input type="text" id="weak_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
