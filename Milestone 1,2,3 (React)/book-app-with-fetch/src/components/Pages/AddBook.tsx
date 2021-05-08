import axios from 'axios';
import React, { ReactElement, useEffect , useState } from 'react'
import {Form,Col,Container,Button} from "react-bootstrap"
interface Props {
    
}
export default function AddBook({}: Props): ReactElement {
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [cover, setCover] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const submitFormData=(e:any)=>{
        e.preventDefault();
        const newData = { 
            id : id,
            title : title,
            cover : cover,
            author : author,
            rating : rating,
            price : price,
            description : description
        }
        //  let data = localStorage.getItem('data')
        //  let array:any[] =[]
        //     if(data){
        //         array=JSON.parse(data);
        //     } 
        //     array.push(newData)
        //     localStorage.setItem('data',JSON.stringify(array))
        axios.post("http://localhost:9000/books/",newData, { headers: { 'authorization': localStorage.getItem('token')}})
    }
    return (
        <div>
             <Container className="container-addbook">
                 <Form onSubmit={submitFormData}>
                     <Form.Row>
                        <Form.Group as={Col}>
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" name="id" onChange={(e) => setId(e.target.value)} placeholder="Book ID" value={id}/>
                     </Form.Group>
                     <Form.Group as={Col}>
                     <Form.Label>Cover Image</Form.Label>
                     <Form.Control type="text" name="cover" onChange={(e) => setCover(e.target.value)} placeholder="Enter URL of Book image" value={cover}/>
                     </Form.Group>
                 </Form.Row>
                 <Form.Row>
                     <Form.Group as={Col}>
                     <Form.Label>Title</Form.Label>
                     <Form.Control type="text" name="title" onChange={(e) => setTitle(e.target.value)} placeholder="Enter Book Title" value={title}/>
                     </Form.Group>
                     <Form.Group as={Col}>
                    <Form.Label>Author</Form.Label>
                     <Form.Control type="text" name="author" onChange={(e) => setAuthor(e.target.value)} placeholder="Enter Book Author" value={author}/>                     
                     </Form.Group>
                </Form.Row>
                 <Form.Row>
                     <Form.Group as={Col}>
                     <Form.Label>Price</Form.Label>
                     <Form.Control type="number" name="price" onChange={(e) => setPrice(e.target.value)} placeholder="Enter Price of Book" value={price}/>
                     </Form.Group>
                     <Form.Group as={Col}>
                     <Form.Label>Rating</Form.Label>
                     <Form.Control type="number" step="0.01" name="rating" onChange={(e) => setRating(e.target.value)} placeholder="Enter Rating of Book" value={rating}/>
                     </Form.Group>
                 </Form.Row>
                 <Form.Group >
                     <Form.Label>Description</Form.Label>
                     <Form.Control as="textarea" name="description" onChange={(e) => setDescription(e.target.value)} value={description} rows={3} />
                 </Form.Group>
                 <Button type="submit" className="submit-btn" >Submit</Button>
             </Form>
         </Container>
            
        </div>
    )
}


