import React from 'react';
import Typography from '@material-ui/core/Typography';
import CreateToDo from './CreateToDo';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';

const App = () => {
    const { todos, addTodo } = useTodoState([]);

    return (
        <div className="App">
            <Typography component="h1" variant="h2">
                Todos
            </Typography>

            <CreateToDo
                saveTodo={todoText => {
                    const trimmedText = todoText.trim();

                    if (trimmedText.length > 0) {
                        addTodo(trimmedText);
                    }
                }}
            />

            <TodoList todos={todos}/>
        </div>
    );
};

export default App;
