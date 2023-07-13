import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import '../styles/style.css';

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            task: this.props.task,
            done: false,
        };
        this.hideDoneTask = this.hideDoneTask.bind(this);
    }

    hideDoneTask() {
        this.setState({
            task: this.state.task,
            done: true
        });
    }

    

    render(){
        if (!this.state.done){
            return(
                <Container fluid className='todo-not-done'>
                    <Row md={7}>
                        <Col><h2 className='task-text'>{this.state.task}</h2></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" onClick={this. hideDoneTask}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return(
                <Container fluid className='todo-container done'>
                    <Row md={7}>
                        <Col>
                           <h2 className='task-text'><s>{this.state.task}</s></h2>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" onClick={this. hideDoneTask}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
}

export default Todo;