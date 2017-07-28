import React , {Component} from 'react';
import { Navbar } from 'react-bootstrap';
import "./App.css"

class Footer extends Component{
    render(){
        const footer = (
            <Navbar fixedBottom>
            <Navbar.Text>
            <Navbar.Link href="/about.html">About</Navbar.Link> |   <Navbar.Link href="mailto:hello@swill.tech">Feedback</Navbar.Link>  |   <Navbar.Link href="mailto:hello@swill.tech">Contact Us</Navbar.Link>
            </Navbar.Text>
            </Navbar>
            );
        return(
            <div>
            {footer}
            </div>
            )
    }
    
}

export default Footer;