import React from 'react';
import Todo from './Todo';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list: [],
            
        };
    }
}

export default TodoList;