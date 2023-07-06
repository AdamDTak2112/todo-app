import React from 'react';

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            message: '',
            checked: false
        };
    }

    render(){
        return(
            <h1>Hello!</h1>
        );
    }
}

export default Todo;