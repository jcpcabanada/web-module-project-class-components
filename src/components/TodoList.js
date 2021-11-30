// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    // for sorting the list based on whether an item has been purchased or not
    // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
    return (
        <div className="todo-list">
            {props.tasks.map(task => (
                <Todo handleToggle={props.handleToggle} key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TodoList;