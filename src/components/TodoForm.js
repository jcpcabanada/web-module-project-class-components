import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        }
    }


    render() {
        return (
            <form>
                <input
                    onChange={this.handleChanges}
                    type="text"
                    name="task"
                />
                <button> Add Todo</button>
            </form>
        )
    }


}

export default TodoForm;