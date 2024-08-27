import React, {  useEffect } from 'react';
import wordpress from "../../images/wordpress-blog.jpg";
import Ai from "../../images/altificial-int.jpg";
import ecommerce from "../../images/ecommerce.jfif";
import social from "../../images/social-media.jpg";
import "./blog.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const AboutUsComponent = () => {
    
};


const AboutUs = () => {
  useEffect(() => {
    AOS.init();
    }, []);


    return (
     <div className="main-blog">
      <div className="blog-section"  data-aos="fade-right" data-aos-duration="1000" >
        <img src={social}  alt="social"/>
              <h5 className="text-big" style={{fontSize: '45px'}} >
              6 Things That Can Mess With Your Social Media Marketing
                   </h5>
                   <p className="text-small" style={{fontSize: '17px', fontStyle: 'oblique'}}>               
                   A wondrous, impeccable socializing & marketing tool called social media. 
                   Everyone has it, everyone uses it. Being the virtual extension of....
                   </p>
                   <button type="submit" className="btn btn-primary">Read More</button>
       </div>

       <div className="blog-section" data-aos="fade-left" data-aos-duration="1000" >
       <img src={ecommerce}  alt="ecommerce"  />
         <h5 className="text-big" style={{fontSize: '50px'}}>
         How Web Development helps Businesses Grow?
                   </h5>
                   <p className="text-small" style={{fontSize: '17px', fontStyle: 'oblique'}}>               
                   With the advent of new technologies and amid pandemic, 
                   it’s a great idea to reap the benefits of those technologies ....
                   </p>
                   <button type="submit" className="btn btn-primary">Read More</button>
       </div>

       <div className="blog-section"  data-aos="fade-right" data-aos-duration="1000">
        <img src={wordpress}  alt="wordpress"  / >
                <h5 className="text-big" style={{fontSize: '50px'}}>
                  Know everything about WordPress website design
                   </h5>
                   <p className="text-small" style={{fontSize: '17px', fontStyle: 'oblique'}}>               
                   What is WordPress? It is the simplest, famous way to generate
                    your WordPress website design & blogs. WordPress powers more ....
                   </p>
                   <button type="submit" className="btn btn-primary">Read More</button>
       </div>

       <div className="blog-section" data-aos="fade-left" data-aos-duration="1000" >
        <img src={Ai}  alt="Ai"  />
         <h5 className="text-big" style={{fontSize: '50px'}} >
         The Role of Artificial Intelligence in Modern Website Development
                   </h5>
                   <p className="text-small" style={{fontSize: '17px', fontStyle: 'oblique'}}>               
                   Web development has noticed a rapid transformation over some years. Here the role of artificial intelligence
                   </p>
                   <button type="submit" className="btn btn-primary">Read More</button>
       </div>
     

       </div>
      );
};

export default AboutUs;
