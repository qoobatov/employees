import React from "react";
import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import EmployeesList from "../employees-list/employees-list";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { name: "Jusupova Kanykey", salary: 1000, increase: false, id: 1 },
        { name: "Alymbekova Altynai", salary: 3000, increase: true, id: 2 },
        { name: "Sultanova Asel", salary: 5000, increase: false, id: 3 },
      ],
    };

    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      // const index = data.findIndex((elem) => elem.id === id);  // найти индекс массива в сравнении с ключем id в элементе массива

      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);    это один из длинных способов чтобы удалить элемент из массива.

      // const newArr = [...before, ...after];  это переделанная копия массива(данные в стейтах напрямую неизменяемы - иммутабельны)
      return {
        //data: newArr
        data: data.filter((item) => item.id !== id), // это самый короткий способ чтобы удалить элемент(тут даже не удаляется, просто возвращается отфильтрованный массив без указанного id)
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeesAddForm onAdd = {this.addItem} />
      </div>
    );
  }
}

export default App;
