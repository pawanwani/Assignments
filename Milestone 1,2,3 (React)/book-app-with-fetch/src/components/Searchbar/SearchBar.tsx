import React, { ReactElement , useState} from 'react'
import { Form, Button} from 'react-bootstrap'
import SearchIcon from '@material-ui/icons/Search';

interface Props {
    getResult : Function,
}

export default function SearchBar({getResult}: Props): ReactElement {
    const [query, setquery] = useState("")
    const [choice, setchoice] = useState("")
    const [minPrice, setminPrice] = useState("min price")
    const [maxPrice, setmaxPrice] = useState("max price")
    const [inputfield,pricefield] = useState(true)
    let findmethod=(e:any)=>{
        setchoice(e.target.value);
        if(choice === "price"){
            pricefield(false)
        }else{
            pricefield(true);
        }
    }
    let SearchBtn=()=>{
        if(choice === "id"){
            fetch(`http://localhost:9000/books/${query}`)
            .then(res=>res.json())
            .then(json=> {
                console.log(json);
                getResult([json]);
            })
        }else if(choice === "author"){
            fetch(`http://localhost:9000/books/by/${query}`)
            .then(res=>res.json())
            .then(json=> {
                console.log(json);
                getResult(json);
            })
        }else if(choice === "rating"){
            fetch(`http://localhost:9000/books/with-min-rating/${query}`)
            .then(res=>res.json())
            .then(json=> {
                console.log(json);
                getResult(json);
            })
        }else if(choice === "price"){
            fetch(`http://localhost:9000/books/priced/${minPrice}/${maxPrice}`)
            .then(res=>res.json())
            .then(json=> {
                console.log(json);
                getResult(json);
            })
        }
    }
    return (
        <div className="horizontal-view search-area">
                        <div >
                            <Form>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control className="select-search" onClick={findmethod} as="select">
                                    <option disabled>Search By</option>
                                    <option value="id">ID</option>
                                    <option value="title">Title</option>
                                    <option value="author">Author</option>
                                    <option value="rating">Rating</option>
                                    <option value="price">Price</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="search-input">
                            {
                                inputfield ? <Form.Control type="text" onChange={(e)=>setquery(e.target.value)} value={query}></Form.Control> : <div className="horizontal-view"><div><Form.Control type="text" className="search-box" onChange={(e)=>setminPrice(e.target.value)} value={minPrice}></Form.Control></div><div><Form.Control type="text" className="search-box" onChange={(e)=>setmaxPrice(e.target.value)} value={maxPrice}></Form.Control></div></div> 
                            }
                        </div>
                        <div>
                            <Button className="submit-btn" onClick={SearchBtn}><SearchIcon/></Button>
                        </div>
                    </div>
    )
}
