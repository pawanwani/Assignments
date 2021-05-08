import React, { ReactElement } from 'react'
import * as reactBootsrap from 'react-bootstrap'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import './navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar(): ReactElement {
    const UserLogin = localStorage.getItem('token')
    const doLogout=()=>{
        localStorage.removeItem('token');
    }
    return (
        <div>
            <reactBootsrap.Navbar className="Nav-bar " collapseOnSelect expand="lg" >
                <reactBootsrap.Navbar.Brand className="text-white brand" href="/">
                    <LibraryBooksIcon/>Book App
                </reactBootsrap.Navbar.Brand>
                <reactBootsrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <reactBootsrap.Navbar.Collapse id="responsive-navbar-nav">
                        <reactBootsrap.Nav className="ml-auto">
                            <reactBootsrap.Nav.Link className="text-white" href="/books">
                                    Books List
                            </reactBootsrap.Nav.Link>
                            {
                                UserLogin ? <reactBootsrap.Nav.Link className="text-white" href="/addbook">
                                            Add Book
                                            </reactBootsrap.Nav.Link>
                                            : null
                            }   
                            {
                                UserLogin ? 
                                <reactBootsrap.Button onClick={doLogout} variant="light">
                                    Logout
                                </reactBootsrap.Button>  : 
                                <Link className="fun-btn" to="/user/login"><reactBootsrap.Button  variant="light">
                                    Login
                                </reactBootsrap.Button></Link>
                            }
                            <Link className="fun-btn" to="/user/register"><reactBootsrap.Button  variant="light">
                                    Register
                            </reactBootsrap.Button></Link> 
                        </reactBootsrap.Nav>
                    </reactBootsrap.Navbar.Collapse>
            </reactBootsrap.Navbar>
        </div>
    )
}

