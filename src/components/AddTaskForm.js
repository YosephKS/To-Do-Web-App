import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import addButton from '../static/images/plus.svg';
import '../static/css/AddTaskForm.css';
import axios from 'axios';
import deleteButton from '../static/images/error.svg';

class AddTaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            TaskInput: "",
            TaskList: [],
            TaskJSON: {},
            countTask: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event) {
        this.setState({ TaskInput: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        // Clear the data after clicking the submit button
        this.setState({TaskInput: ''})

        const taskJSON = this.state.TaskJSON;
        const taskList = this.state.TaskList;
        const newCountTask = parseInt(this.state.countTask) + 1;

        // Add the Inputed Task into the JSON and Array data
        taskJSON["task " + (newCountTask)] = this.state.TaskInput;
        taskList.push(this.state.TaskInput);

        this.setState({
            TaskJSON: taskJSON,
            TaskList: taskList,
            countTask: newCountTask})

        console.log("Successfully Submitted");

        axios.post(`http://localhost:5000/updateTable/` + this.props.username, {tasks: this.state.TaskJSON})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => {
            console.log("ERROR 404!");
        })
    }

    handleDelete(event) {
        event.preventDefault();

        const key = event.target.id;

        const taskJSON = this.state.TaskJSON;
        const taskList = this.state.TaskList;

        delete taskJSON["task " + (parseInt(key) + 1)];
        taskList.splice(key, 1);
        
        let count = 1;
        const newTaskJSON = {};

        for (const task in taskJSON) {
            newTaskJSON["task " + count] = taskJSON[task];
            count += 1;
        }

        this.setState({TaskList: taskList, TaskJSON: newTaskJSON});

        axios.post(`http://localhost:5000/updateTable/` + this.props.username, {tasks: newTaskJSON})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })

    }

    componentDidMount() {

        // Read the Existing MySQL Table Using the Implemented API
        axios.get(`http://localhost:5000/readTable/` + this.props.username)
        .then(res => {
            const output = res.data[0];
            console.log(output);
            console.log("Successfully Fetch");

            const tasks = [];   // task in Array (for Map method)
            const tasksJSON = JSON.parse(output.tasks) // task in JSON Object

            for (const task in tasksJSON) {
                tasks.push(tasksJSON[task]);
            }

            this.setState({
                TaskList: tasks, 
                TaskJSON: tasksJSON,
                countTask: Object.keys(tasksJSON).length
            });

        })
        .catch(error => {
            console.log("ERROR 404!");
        })  
        
    }

    handleKeyDown(event) {
        if (event.key === 'Enter') {
            this.handleSubmit(event);
        }
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
                        <Form.Control placeholder="Add Task" className = "add-task-input" value = {this.state.TaskInput} onKeyDown = {this.handleKeyDown} onChange = {this.handleChange} />
                    </Col>
                    <Col md = {1} sm = {2} xs = {3} className = "add-task-col-2">
                        <img src = {addButton} onClick = {this.handleSubmit} className = "add-button" width = "35px" height = "35px" alt = "Add Button"/>
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
                        <Col className = "to-do-col" style = {{backgroundColor: "#292b2c", color: "white", margin: 0, fontFamily: "'Anton', sans-serif", fontSize: "30px"}}>
                            UNFINISHED TASKS
                        </Col>
                    </Row>
                    {this.state.TaskList.map((value, key) => (
                    <Row style = {{borderBottom: "1px solid grey"}}>
                        <Col xs = {10} key = {key} className = "to-do-col" style = {{paddingLeft: "17.5%", fontFamily: "'Courgette', cursive", fontSize: "20px"}}>
                            {value}
                        </Col>
                        <Col xs = {2} className = "to-do-button-col" style = {{paddingLeft: "7%"}}>
                            <img src = {deleteButton} id = {key} onClick = {this.handleDelete} className = "delete-button" width = "35px" height = "35px" alt = "Delete Button"/>
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