import React from 'react';

const Form = () => {
    return (
        <form>
            <input type="text" class="todo-input"/>
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="completed">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;