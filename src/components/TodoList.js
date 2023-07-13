import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list: [Todo],
            
        };
    }

    render(){
        return (
            <Todo task="newtask" />
        );
    }
}

export default TodoList;