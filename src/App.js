import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Resume from './pages/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';


class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false,
      title: 'Jyothish Alimilli',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Resume', path: '/resume' },
        { title: 'Contact', path: '/contact' },
        {title: 'Resume', path: '/resume'}
      ],
      home: {
        title: 'I Code to solve a problem',
        subTitle: 'Skills that make a difference',
        text: 'Checkout my skills below'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      },
      resume: {
        title: 'You can download my resume here'
      },
     
    }
  }
  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  setNavClose = () => {
    this.setState({ navExpanded: false });
  }
  
    
  render() {
    return (
      <Router>
        
        <Container className="p-0" fluid={true} >
          
          <Navbar className="static-top navbar-light" style={{backgroundColor: '#e5e014'}}  expand="lg" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}  >
            <Navbar.Brand>Jyothish Alimilli</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto" onClick={this.setNavClose}>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
                
                <Link className="nav-link" to="/resume">Resume</Link>
               
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          
          <Route path="/resume" render={() => <Resume title={this.state.resume.title} />} />
          
          
          <Footer />

        </Container>
        
      </Router>
    );
  }
}

export default App;