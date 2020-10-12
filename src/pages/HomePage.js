import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Hero from '../components/Hero';
import profilepic from '../assets/images/sunny.jpg';
import Carousel from '../components/Carousel';
import StarfieldAnimation from 'react-starfield-animation'
import { SocialIcon } from 'react-social-icons';

function HomePage(props) {

    return(
        
        <div id ="hparent" >
            
            <StarfieldAnimation
        style={{
            
          position: 'absolute',
          width: '100%',
          height: '100%',
          numParticles:'4000',
          
        }}
      />
            <div>

            <Hero title={props.title}  />
            <img src={profilepic} className="profilepic" alt="profile pic"></img>
            <ReactTypingEffect className="typingeffect" style={{ color: 'white' }} text={['I am Jyothish Alimilli.','I am a Full Stack Developer.']} speed={200} eraseDelay={600}
            />
            </div>
            <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}}>
<SocialIcon url="http://www.linkedin.com/in/jyothish-alimilli-a464b6156" fgColor="white"/>  &nbsp;
<SocialIcon url="https://www.facebook.com/AllimilliSunny"  fgColor="white"/>  &nbsp;
<SocialIcon url="https://www.instagram.com/jyothish1198/?hl=en" fgColor="white"/>  &nbsp;
</div>
            <Hero subTitle={props.subTitle} />
            <Carousel />

          


        </div>



    );

}

export default HomePage;