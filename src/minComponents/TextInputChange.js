import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function TextInputChange(props) {

    const [inputValue, setInputValue] = React.useState(props.value);

    const changeHandler = (event) => {
        setInputValue(event.target.value);
        let data = {
            row: props.row,
            col: props.col,
            value: event.target.value
        }
        props.onChangeData(data);
    }

    return (
          <>
            <TextField
                error = {props.error}
                type="number"
                value={inputValue}
                onChange={changeHandler}
                label={"row_" + props.row + "-col_" + props.col}
                variant="outlined"
            />
          </>
        )
}