import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../styles/style.css';

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            task: '',
            checked: false
        };
    }

    render(){
        return(
            <Container fluid className='todo-container'>
                <Row md={4}>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
        );
    }
}

export default Todo;