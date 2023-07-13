import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list: [],
            
        };
    }

    render(){
        return (
            <h1>Hello World!</h1>
        );
    }
}

export default TodoList;