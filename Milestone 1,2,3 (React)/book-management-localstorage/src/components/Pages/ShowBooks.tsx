import React, { ReactElement,useState} from 'react'
import * as reactBootstrap from 'react-bootstrap'
import { BookCard } from '../BookCard'
import { Link } from 'react-router-dom' 
import { fetchData } from '../utils'
import SearchBar from '../Searchbar/SearchBar'


interface Props {
    
}

export default function ShowBooks({}: Props): ReactElement {
    
    const [books, setbooks] = useState(fetchData())
    const getResult=(result:any)=>{
        setbooks(result)
    }
    
            return (
                <div>
                    <SearchBar getResult={getResult}/>
                    <reactBootstrap.Container>
                    <reactBootstrap.Row>
                        {
                            books.map((book:any)=>(
                            <reactBootstrap.Col sm>
                                <Link to ={ "/books/" + book.id}>
                                    <BookCard key={book.id} cover={book.cover} title={book.title} author={book.author} price={book.price} rating={book.rating}/>
                                </Link>
                            </reactBootstrap.Col>   
                        ))
                        }
                    </reactBootstrap.Row>
                </reactBootstrap.Container>
                </div>
            )
}
