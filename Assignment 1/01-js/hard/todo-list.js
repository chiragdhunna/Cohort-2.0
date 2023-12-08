/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  ds = [];

  Todo() {}

  add(todo) {
    this.ds.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo === -1) return;
    this.ds.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.ds.length) this.ds[index] = updatedTodo;
  }

  getAll() {
    return this.ds;
  }

  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.ds.length) return null;

    let res = this.ds[indexOfTodo];
    return res;
  }

  clear() {
    while (this.ds.length) {
      this.ds.pop();
    }
  }
}

module.exports = Todo;
