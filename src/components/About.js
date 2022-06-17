import React, { useEffect } from 'react'
import '../stylesheet/About.scss'
import omar from '../assets/omar.png'
import Typical from 'react-typical'
import AOS from "aos";
import "aos/dist/aos.css";


export const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className='about' id='about'>
        <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="2000">About Me</h1>
        <img data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="2000" src={omar} alt="omar"  width='300px'/>
        <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="2000">Hi, I'm Aimaierjiang Mutalifu</h1>
        <p data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="2000">I'm a {' '}
            <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                    'Developer ',
                    1500,
                    'Open Sourcer ',
                    1500,
                    'Husband ',
                    1500,
                    'Father ',
                    1500,
                ]}
            />
        </p>
        <p data-aos="fade-up" className='about_me'>I am a lively, happy and ambitious student from the IT University and also the father of two twin boys. I came to Sweden in 2015 and live in southern Stockholm with my family. In 2021, I decided to change the bus driver profession to become a programmer - a dream I had for many years.</p>

    </div>
  )
}
