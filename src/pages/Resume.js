import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Button from 'react-bootstrap/Button';
import StarfieldAnimation from 'react-starfield-animation';

function Resume(props) {
    return(
        
        <div>
            <StarfieldAnimation
        style={{
            
          position: 'absolute',
          width: '100%',
          height: '100%',
          numParticles:'2000',
          
        }}
      />
             <Hero title={props.title} />
            <Content>
            
            <Button className="d-inline-block" file ="resume.docx" variant="primary"
            
            onClick={(e) => {
                e.preventDefault();
                window.location.href='https://s3.amazonaws.com/jyothishalimilli.vision/port.pdf';
                }}>
                Download        
            </Button>
            
                        
            </Content>
            
        </div>
    );
}


export default Resume;