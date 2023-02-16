import React from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployeesList = ({ data }) => {
  let elements = data.map((item) => {
    // const {id, ...itemProps} = item есть вот такой короткий вариант id отдельно, остальные пропсы в itemProps и ниже соответственно нужно поменять в компоненте.
    return (
      <EmployeesListItem // вот здесь есть вариант использовать просто spread =>  key = {id} {...itemProps} и не писать все 4 атрибута
        name={item.name}
        salary={item.salary}
        increase={item.increase}
        key={item.id}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
