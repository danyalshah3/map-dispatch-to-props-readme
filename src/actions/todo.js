import React, {Component} from "react";


export const addTodo = (todo) => {
    return { 
      type: 'ADD_TODO',
      todo: todo
    };
  };


//   export default addTodo;