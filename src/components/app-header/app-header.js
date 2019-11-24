import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex bg-primary text-white p-3">
      <h1>Todo List</h1>
      <h2 className="text-white">{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;
