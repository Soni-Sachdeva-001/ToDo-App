import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const TodoForm = ({ saveTodo }) => {
    const classes = useStyles();
    const { value, reset, onChange } = useInputState();


    return (
        <form className={classes.formControl}
            onSubmit={event => {
                event.preventDefault();

                saveTodo(value);
                reset();
            }}
        >
            <TextField
                variant="outlined"
                placeholder="Task Name"
                margin="normal"
                onChange={onChange}
                value={value}
                required={true}
            />

        </form>
    );
};

export default TodoForm;
