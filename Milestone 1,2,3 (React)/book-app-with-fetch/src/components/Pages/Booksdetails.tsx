import React, { ReactElement, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import axios from 'axios';
interface Props {
}
type param={
    id : string;
}
export default function Booksdetails({}: Props): ReactElement {
    const [data, setdata] = useState([])
    let { id } = useParams<param>();
    // let data:any =fetchData();
    const isUserLoggedIn = localStorage.getItem('token');
    useEffect(() => {
        fetch("http://localhost:9000/books")
            .then(res=>res.json())
            .then(json=>{
            setdata(json)
    })
    }, [])
    const deleteBook=(id:any)=>{
        axios.delete(`http://localhost:9000/books/${id}`,{ headers: { 'authorization': localStorage.getItem('token')}})
            .then(res=> console.log(res))
            .catch(err=> console.log(err))
    }
    return (
        <div>
            {
                data.map((book:any)=>{
                    if(book._id === id){
                        return(
                            <Container>
                                <Row>
                                    <Col md={4} xs={6}>
                                        <img className="detail-cover-img" src={book.cover} alt="cover-image"/>
                                        {
                                            isUserLoggedIn ? <Link to="/books" ><Button onClick={()=>deleteBook(book._id)} className="submit-btn delete-btn">Delete</Button></Link>:null
                                        } 
                                    </Col>
                                    <Col xs={12} md={8}>
                                        <h1 className="title">{book.title}</h1>                    
                                        <h3 className="sub-title">{book.author}</h3>
                                        <div className="horizontal-view">
                                            <div>
                                                <h5>Price: {book.price}</h5>
                                            </div>
                                            <div className="star-rating">
                                            <Rating 
                                                name="half-rating-read" 
                                                defaultValue={book.rating}
                                                precision={0.5}
                                                readOnly
                                            />
                                            </div>
                                        </div>
                                        <p> <span>Description:</span><br></br>
                                            {book.description}
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        )
                    }
                })
            }
        </div>
    )
}
