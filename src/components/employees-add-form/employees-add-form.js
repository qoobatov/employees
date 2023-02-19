import React from "react";
import "./employees-add-form.css";

class EmployeesAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onChangeValue = (event) => {
    this.setState((state) => ({
      // тут state в аргументах нужен для того чтобы строго отталкиваться от последнего значения state(но, сейчас не используется потому что нам не важно последнее значение state )
      [event.target.name]: event.target.value, // здесь почему target.name потому,что добавили атрибут name ="" в инпуты, который заменяет название ключей в this.state
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name < 3 || !this.state.salary) return;    // это строка не дает добавлять пустые значения в items
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            value={name}
            name="name"
            onChange={this.onChangeValue}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            value={salary}
            name="salary"
            onChange={this.onChangeValue}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeesAddForm;
