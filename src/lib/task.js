"use strict";

class Task {
  constructor() {
    this._tasks = {};
  }

  add(name, fn) {
    this._tasks[name] = fn;
  }
}

module.exports = Task;