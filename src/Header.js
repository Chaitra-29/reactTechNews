import React , {Component} from 'react';
import { Navbar } from 'react-bootstrap';
import "./App.css"

class Header extends Component{

	
	render(){
		const headerOnTop = (
		<Navbar inverse>
		    <Navbar.Header>
		      	<h2 className="App-header">swill.tech</h2>
		    </Navbar.Header>
  </Navbar>
		);
		return(
			<div>
				{headerOnTop}
			</div>
			)
	}
	
}

export default Header;