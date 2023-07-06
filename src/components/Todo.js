import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
            <Container>
                <Row>
                    <Col>
                        <h1>hello!</h1>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Todo;