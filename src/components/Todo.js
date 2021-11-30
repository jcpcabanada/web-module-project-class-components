import React from "react";

const Task = props => {
    const handleClick = () => {
        props.handleToggle(props.task);
    }

    return (
        <div onClick={handleClick} className={`item${props.task.completed ? ' purchased' : ''}`}>
            <p>{props.item.name}</p>
        </div>
    );
};

export default Task;