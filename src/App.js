import React from 'react';

import TodoForm from "./components/TodoForm";

const tasks = [
    {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
    },
    {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
    }
];

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: tasks
        }
    }

    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    render() {
        return (
            <div className="App">
                <div className="Header">
                    <h2> Todo List: MVP</h2>
                    <TodoForm />
                </div>
                {/*<TodoList />*/}
                <button>Clear Completed</button>
            </div>
        );
    }
}

export default App;
