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
        {
          name: "Jusupova Kanykey",
          salary: 1000,
          increase: false,
          rise: true,
          id: 1,
        },
        {
          name: "Alymbekova Altynai",
          salary: 3000,
          increase: true,
          rise: false,
          id: 2,
        },
        {
          name: "Sultanova Asel",
          salary: 5000,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      term: "", // стейт строки поиска
      filter: "all", // стейт фильтра
    };

    this.maxId = 4;
  }

  deleteItem = (id) => {
    // это иконка удаления пользователя
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
    // этот метод для добавления пользователей
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleIncrease = (id) => {
    // Это окрашивание (выделение пользователей )
    // this.setState(({ data }) => {
    //   const index = data.findIndex((elem) => elem.id === id); // нахождение индекса элемента массива

    //   const old = data[index]; // этот элемент перезаписываем в переменную old
    //   const newItem = { ...old, increase: !old.increase }; // теперь разворачиваем старый элемент с переназначением свойства внутри
    //   const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; // дальше просто берем кусочек элемента до индекса добвляем то свойство что мы изменили, и дальше берем все свойтва до конца начиная от индекса и это все объединяем в массив newArr  и ниже в return просто меняем стейт на новое значение (сохранено иммутабельность т.е неизменяемость)

    //   return {
    //     data: newArr,
    //   };
    // });
    // смотри есть еще другой способ более короткий,тоже самое что и вверху, ноболее короче
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      }),
    }));
  };

  onToggleRise = (id) => {
    // это назначение звездочки на пользователя
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  };

  searchEmployees = (items, term) => {
    // Эта сама функция для поиска и фильтрации
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearchInApp = (term) => {
    // метод нужен для обновления стейта терм здесь в App, он приходит из компонента SearchPanel 138 урок
    this.setState({ term });
  };

  filterPost = (items, filter) => {
    // Это метод для фильтров
    switch (filter) {
      case "rise": // star
        return items.filter((item) => item.rise);
      case "moreThen1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length; // общее количество сотрудников
    const increase = this.state.data.filter((item) => item.increase).length; // это те которые получат премию
    const visibleData = this.filterPost(
      this.searchEmployees(data, term),
      filter
    );
    return (
      <div className="app">
        <AppInfo increase={increase} employees={employees} />

        <div className="search-panel">
          <SearchPanel onUpdateSearchInApp={this.onUpdateSearchInApp} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
