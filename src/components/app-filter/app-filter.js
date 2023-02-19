import React from "react";
import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    // здесь все кнопки которые повторялись переведены в массив кнопок, чтобы было легче управлять
    { name: "all", lable: "Все сотрудники" },
    { name: "rise", lable: "На повышение" },
    { name: "moreThen1000", lable: "З/П больше 1000$" },
  ];

  const buttons = buttonsData.map(({ name, lable }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {lable}
      </button>
    );
  });

  return (
    <div className="btn-group">
      {buttons}
      {/* <button className="btn btn-light" type="button">    я оставлю кнопки чтобы были оба варианта отрисовки кнопок
        Все сотрудники
      </button>
      <button className="btn btn-outline-light" type="button">
        На повышение
      </button>
      <button className="btn btn-outline-light" type="button">
        ЗП больше 1000$
      </button> */}
    </div>
  );
};

export default AppFilter;
