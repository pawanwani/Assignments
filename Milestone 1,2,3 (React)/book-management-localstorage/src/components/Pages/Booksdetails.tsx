import React, { ReactElement } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { deleteBook, fetchData } from '../utils';
import Rating from '@material-ui/lab/Rating';
interface Props {
    
}
type param={
    id : string;
}
export default function Booksdetails({}: Props): ReactElement {
    
    let { id } = useParams<param>();
    let data:any =fetchData();
    return (
        <div>
            {
                data.map((book:any)=>{
                    if(book.id === id){
                        return(
                            <Container>
                                <Row>
                                    <Col md={4} xs={6}>
                                        <img className="detail-cover-img" src={book.cover} alt="cover-image"/>
                                        <Link to="/books" ><Button onClick={()=>deleteBook(book.id)} className="submit-btn delete-btn">Delete</Button></Link>
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
