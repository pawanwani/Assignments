import React, { ReactElement } from 'react'
import * as reactBootsrap from 'react-bootstrap'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './navbar.css'


export default function Navbar(): ReactElement {
    return (
        <div>
            <reactBootsrap.Navbar className="Nav-bar " collapseOnSelect expand="lg" >
                <reactBootsrap.Navbar.Brand className="text-white brand" href="/"><LibraryBooksIcon/>Book App</reactBootsrap.Navbar.Brand>
                <reactBootsrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <reactBootsrap.Navbar.Collapse id="responsive-navbar-nav">
                    <reactBootsrap.Nav className="ml-auto">
                        <reactBootsrap.Nav.Link className="text-white" href="/books">Books List</reactBootsrap.Nav.Link>
                        <reactBootsrap.Nav.Link className="text-white" href="/addbook">Add Book</reactBootsrap.Nav.Link>
                        <reactBootsrap.Button className="fun-btn" variant="light">Login</reactBootsrap.Button> 
                    </reactBootsrap.Nav>
                </reactBootsrap.Navbar.Collapse>
            </reactBootsrap.Navbar>
        </div>
    )
}

