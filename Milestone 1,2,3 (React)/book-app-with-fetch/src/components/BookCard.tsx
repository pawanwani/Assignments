import React from 'react'
import { Card, Row } from 'react-bootstrap'
import Rating from '@material-ui/lab/Rating';
interface Props {
    cover : string,
    title : string,
    author : string,
    price : string,
    rating:string
}

export const BookCard = (props: Props) => {
    // const [value, setValue] = React.useState<number | null>(2);
    let rating = props.rating;
    return (
        <div>   
            <Card className="book-card" style={{ width: '14rem' }}>
                <Card.Img variant="top" className="cover-img"  src = {props.cover}/>
                <Card.Body>
                    <h6 className="card-title">{props.title}</h6>
                    <p>{props.author}</p>
                    <h6>Price:{props.price}</h6>
                    <Rating 
                        name="half-rating-read" 
                        defaultValue={parseInt(rating)}
                        precision={0.5}
                        readOnly
                    />
                </Card.Body>
            </Card>
        </div>
    )
}
