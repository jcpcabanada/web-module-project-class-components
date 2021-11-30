import React from 'react';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import './style.css';

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

    handleToggle = () => {
        this.setState({
            ...this.state,
            tasks: this.state.tasks.filter(task => {
                return (!task.completed);
            })
        });
    }

    handleAddTask = (task) => {
        const newTask = {
            task: task,
            id: Date.now,
            completed: false
        };

        this.setState({
            tasks: [...this.state.tasks, newTask]
        })
    }

    handleToggleItem = (item) => {
        this.setState({
            ...this.state,
            tasks: this.state.tasks.map(g => {
                if (g.id === item.id) {
                    return { ...g, purchased: !g.purchased }
                } else {
                    return g;
                }
            })
        })
    }


    render() {
        return (
            <div className="App">
                <div className="Header">
                    <h2> Todo List: MVP</h2>
                    <TodoForm handleAddTask={this.handleAddTask}/>
                </div>
                <TodoList handleToggleItem={this.handleToggleItem} tasks={this.state.tasks}/>
                <button onClick={this.handleToggle} className="clear-btn">Clear Completed</button>
            </div>
        );
    }
}

export default App;
