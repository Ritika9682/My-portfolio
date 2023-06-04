import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import Ritika from './../../assets/Ritika.png';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Computer Science Student | Web developer | Explorer | Learner | Tech Lover'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Student</h3>
                    <p className='about-details'>
                        Hey! I am currently pursuing my BTech degree in Computer Science from Shri Mata Vaishno Devi University. Check out{' '}
                        <a
                            className='about-link-element'
                            // href='https://github.com/Ritika9682'
                            href='https://www.linkedin.com/in/ritika-sharma-501b85244/'
                            target="_blank"
                        >
                            my linkedin!
                        </a>
                    </p>

                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Web developer</h3>
                    <p className='about-details'>
                        I am very much interested in developing new websites by using various technologies such as react, javascript, mongoDB etc. Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/Ritika9682'
                            target="_blank"
                        >
                            my github!
                        </a>
                        
                    </p>

                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Explorer</h3>
                    <p className='about-details'>
                        I love to explore new technologies and love working with them.
                    </p>
                </div>

                <div className='about-main-right'>
                    <img
                        src={Ritika}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='skills!'
                toAdress='/skills'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;