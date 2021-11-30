import React from "react";

const Task = props => {
    const handleClick = () => {
        props.handleToggleItem(props.item);
        console.log("click", props);
    }

    return (
        <div onClick={handleClick} className={`item${props.item.completed ? ' purchased' : ''}`}>
            <p>{props.item.task}</p>
        </div>
    );
};

export default Task;