import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import addButton from '../static/images/plus.svg';
import '../static/css/AddTaskForm.css';
import axios from 'axios';

class AddTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            TaskInput: "",
            TaskList: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        /*
        const updatedTaskList = ;

        this.setState({TaskList: })

        axios.post(``, { user })
        .then(res => {
            console.log(res);
            console.log(res.data);
        })*/
    }

    componentDidMount() {

        axios.get(`http://localhost:5000/readTable/User`)
        .then(res => {
            const output = res.data[0];
            console.log("Successfully Fetch");

            const tasks = [];

            for (const task in JSON.parse(output.tasks)) {
                tasks.push(JSON.parse(output.tasks)[task]);
            }

            this.setState({TaskList: tasks});

        })

        
    }
  
    render() {
    return (
    <div>
    <Container fluid = {true} className = "add-task-container">
        <Row>
            <Col>
                <Container className = "add-task-content">
                    <Row className = "add-task-row">
                    <Col md = {11} sm = {10} xs = {9} className = "add-task-col-1">
                        <Form.Control placeholder="Add Task" onChange = {this.handleChange} style = {{border: "1.3px solid grey"}} value = {this.state.TaskInput}/>
                    </Col>
                    <Col md = {1} sm = {2} xs = {3} className = "add-task-col-2">
                        <img src = {addButton} className = "add-button" width = "35px" height = "35px" alt = "Add Button"/>
                    </Col>
                    </Row>
                </Container>
            </Col>
        </Row>
    </Container>

    <Container fluid = {true} className = "to-do-container">
        <Row>
            <Col>
                <Container className = "to-do-content">
                    <Row className = "to-do-row">
                        <Col className = "to-do-col" style = {{backgroundColor: "#292b2c", color: "white", margin: 0}}>
                            Unfinished Task
                        </Col>
                    </Row>
                    {this.state.TaskList.map((value, key) => (
                    <Row>
                        <Col key = {key} className = "to-do-col">
                            {value}
                        </Col>
                    </Row>
                    ))}
                </Container>
            </Col>
        </Row>
    </Container>
    </div>
)}}

export default AddTaskForm;