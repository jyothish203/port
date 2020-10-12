import React from 'react';
import Hero from '../components/Hero';
import StarfieldAnimation from 'react-starfield-animation'
const divStyle = {
    color:'white',
    margin: '0 auto'
  };


function AboutPage(props) {

    return(
        
        <div id="aparent" style={divStyle}>
            <StarfieldAnimation
        style={{
            
          position: 'absolute',
          width: '100%',
          height: '100%',
          numParticles:'2000',
          
        }}
      />

            <Hero title={props.title} />

            <div id="div1">
<h3>I am an enthusiastic Full Stack Developer who loves to build solutions. I rate myself to be a good problem solver. Being an AWS Solution Architect, my cloud migration skills are a bonus to my Full Stack abilities. </h3>
<h3> All my previous projects were built in different frameworks and variety of coding languages. I love learning new stuff.  </h3>
<h1 style={{ color: '#e5e014' }}>I am open for new opportunities, Please contact me if you believe I fit to any requirement.</h1>
             </div>
            <div id="div2"  >
            <h1 class><u><span>Education </span></u></h1>
            <h3> University of Cincinnati, Cincinnati, Ohio, United States. </h3>
            <p><font size="10px">Master of Engineering, Major in Computer Science </font></p> 
            <p>Courses : Advance Algorithm, Cloud Computing, Intelligent Data Analysis, Machine Learning </p>
            </div>
            <div id = "div3">
            <h3> Malla Reddy College of Engineering and Technology, Hyderabad, Telangana, India. </h3>
            <p>Bachelor of Technology, Major in Computer Science </p> 
            <p>Courses : Web Development, Information Security , Compiler Design, Data Structures in Java </p>
            </div>
            
            
           
        </div>
       
       

    );

}

export default AboutPage;