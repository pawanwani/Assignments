import axios from 'axios'
import React,{ ReactElement, useState } from 'react'
import { Container,Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
interface Props {
    
}

export default function Registerpage({}: Props): ReactElement {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const history = useHistory();
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password
        }
        axios.post("http://localhost:9000/users/register",data)
            .then(res=>{
                console.log(res)
                history.push("user/login")
            })
            .catch(err=>{
                console.log(err);
            })
    };
    
    return (
        <Container className="login-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" onChange={ (e)=>{setname(e.target.value)}} value={name}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}} value={email}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
                </Form.Group>
                <Button className="submit-btn" type="submit">
                    Register
                </Button>
            </Form>
        </Container>
    )
}
