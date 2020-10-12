import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Hero from '../components/Hero';
import Content from '../components/Content';
import emailjs from 'emailjs-com'
import StarfieldAnimation from 'react-starfield-animation'
import { FormGroup, Label, Input } from 'reactstrap'


class ContactPage extends React.Component {
    state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
  handleSubmit(e) {
      e.preventDefault()
      const { name, email, subject, message } = this.state
      let templateParams = {
        from_name: email,
        to_name: 'allimillijyothish506@gmail.com',
        subject: subject,
        message_html: message,
       }
       emailjs.send(
        'gmail',
        'template_pmFScSV7',
         templateParams,
        'user_rBBhXINvhd7Z7pvAUMjCH'
       )
       
       .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        this.setState({
          emailSent: true
        });
     }, (err) => {
        console.log('FAILED...', err);
        this.setState({
          emailSent: false
        });
     });
    

   }
  resetForm() {
      this.setState({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }
  handleChange = (param, e) => {
      this.setState({ [param]: e.target.value })
    }
  render() {
      return (
        <>
        
          <div>
          <StarfieldAnimation
        style={{
            
          position: 'absolute',
          width: '100%',
          height: '100%',
          numParticles:'2000',
          
        }}
      />
          
          <Hero title={this.props.title} />
            <Content>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup controlId="formBasicEmail">
                <Label className="text-muted">Email address</Label>
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, 'email')}
                  placeholder="Enter email"
                />
              </FormGroup>
                    <FormGroup controlId="formBasicName">
                <Label className="text-muted">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, 'name')}
                  placeholder="Name"
                />
              </FormGroup>
                        <FormGroup controlId="formBasicSubject">
                <Label className="text-muted">Subject</Label>
                <Input
                  type="text"
                  name="subject"
                  className="text-primary"
                  value={this.state.subject}
                  onChange={this.handleChange.bind(this, 'subject')}
                  placeholder="Subject"
                />
              </FormGroup>
                    <FormGroup controlId="formBasicMessage">
                <Label className="text-muted">Message</Label>
                <Input
                  type="textarea"
                  name="message"
                  className="text-primary"
                  value={this.state.message}
                  onChange={this.handleChange.bind(this, 'message')}
                />
              </FormGroup>
                    <Button className="d-inline-block" variant="primary" type="submit">
                Submit
              </Button>

              {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
            </Form>
            </Content>
          
        </div>
           
        </>

      )
    }
  }
  export default ContactPage