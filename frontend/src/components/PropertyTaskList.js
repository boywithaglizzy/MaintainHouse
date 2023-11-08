import React, { useEffect, useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { PropertyDoubleButton } from "./PropertyDoubleButton";
import { useNavigate, useParams } from "react-router";
import { SwitchModal } from "./SwitchModal";

export const PropertyTaskList = ({properties}) => {

    const { id } = useParams();

    const today = new Date();
    
    const findProperty = () => {
        for (let i=0; i < properties.length; i++){
            if (properties[i].id === parseInt(id)){
                return properties[i];
            }
        }
    }

    const property = findProperty();

    const [tasks, setTasks] = useState(property.tasks);

    useEffect (() => {
        console.log(tasks);
    }, [tasks])

    const navigate = useNavigate();
    const addTask = () => navigate('/addTask/' + id);

    return (
        <Container className="text-center main" >

            <h1 className="blue-header">{property.address}</h1>
            <h2 className="mb-2 blue-secondary-header">{(property.city) + ", " + (property.province)}</h2>

            <PropertyDoubleButton current={"task"} id={id}/>
            
            <Row className="justify-content-md-center">
                <Form className="my-3 w-50 blue-border" style={{textAlign: "left"}}>

                    <h1 className='mb-3 blue-header'>Outstanding Tasks</h1>
                    {tasks.map((task, i) => {
                        if (new Date(task.completeBy) <= today){
                            return(
                                <SwitchModal task={task} tasks={tasks} setTasks={setTasks} key={"out" + i} i={i}/>
                            )
                        } else {
                            return(null);
                        }
                    })}
                    
                </Form>
            </Row>

            <Row className="justify-content-md-center">
                <Form className="my-3 w-50 justify-content-left blue-border" style={{textAlign: "left"}}>

                    <h1 className='mb-3 blue-header'>Upcoming Tasks</h1>
                    {tasks.map((task, i) => {
                        if (new Date(task.completeBy) > today){
                            return(
                                <SwitchModal task={task} tasks={tasks} setTasks={setTasks} key={"up" + i} i={i}/>
                            )
                        } else {
                            return(null);
                        }
                    })}

                </Form>
                <Row className="justify-content-md-center">
                    <Button className="my-3 green-button non-card-button" type="submit" onClick={addTask}>
                        Add Custom Task 
                    </Button>
                </Row>
            </Row>
        </Container>
    )
}