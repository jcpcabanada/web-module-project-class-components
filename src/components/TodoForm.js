import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }

    handleClick = e => {
        e.preventDefault();

        this.props.handleAddTask(this.state.input);
    }


    render() {
        return (
            <div>
                <form>
                    <input
                        onChange={this.handleChanges}
                        type="text"
                        name="task"
                    />
                    <button onClick={this.handleClick}> Add Todo</button>
                </form>
                <button onClick={this.props.handleToggle} className="clear-btn">Clear Completed</button>
            </div>

        )
    }


}

export default TodoForm;