import axios from 'axios'
import { AnyCnameRecord } from 'node:dns'
import React, { ReactElement, useState } from 'react'
import { Container,Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

interface Props {
    
}

export default function Loginpage({}: Props): ReactElement {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const history = useHistory();
    
    const handleSubmit=(e:any)=>{
        e.preventDefault();
        const data={
            email:email,
            password:password
        }

        axios.post("http://localhost:9000/users/login",data)
            .then(res=>{
                localStorage.setItem('token',res.data.token)
                history.push("/books");
            })
            .catch(err=>{
                console.log(err)
            })
    }
    return (
        <Container className="login-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setemail(e.target.value)} value={email}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
                </Form.Group>
                <Button className="submit-btn" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
