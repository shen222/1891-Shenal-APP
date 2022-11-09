import React, { useState } from 'react';

import Header from './Header';
import ListItems from './ListItems';
import InputModal from './InputModal';

const Home = () => {
  const initialTodos = [
    {
      title: 'Get some snacks',
      date: 'Fri, 08 Jan 2022 16:32:11 GMT',
      key: '1',
    },
    {
      title: 'Get some wheels',
      date: 'Fri, 08 Jan 2022 16:32:11 GMT',
      key: '2',
    },
    {
      title: 'Youtube',
      date: 'Fri, 08 Jan 2022 16:32:11 GMT',
      key: '3',
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const handleClearTodos = () => {
    setTodos([]);
  };

  //Modal Visibility
  const [modalVisible, setModalVisible] = useState(false);
  const [todoInputValue, setTodoInputValue] = useState();

  //function to add a new todo
  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setModalVisible(false);
  };

  //Editing

  const [todoTobeEdited, setTodoTobeEdited] = useState(null);

  const handleTriggerEdit = (item) => {
    setTodoTobeEdited(item);
    setModalVisible(true);
    setTodoInputValue(item.title);
  };

  const handleEditTodo = (editedTodo) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
    newTodos.splice(todoIndex, 1, editedTodo);
    setTodos(newTodos);
    setTodoTobeEdited(null);
    setModalVisible(false);
  };

  return (
    <>
      <Header handleClearTodos={handleClearTodos} />
      <ListItems
        todos={todos}
        setTodos={setTodos}
        handleTriggerEdit={handleTriggerEdit}
      />
      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todoTobeEdited={todoTobeEdited}
        setTodoTobeEdited={setTodoTobeEdited}
        handleEditTodo={handleEditTodo}
        todos={todos}
      />
    </>
  );
};

export default Home;
