import "./footer.css";
import webcuts from "../../images/webcuts.png";

const footer = () => {


return (
<footer className="footer">
<div className="footer-main">
             <div className="footer-section">
                <h1 className="text-footer">
                        <img src={webcuts}   alt="Logo" />
                        Testing Soft Solution</h1>
                        <h4 style={{ textAlign: 'left', color: 'white' }}>
                         Our mission is to enhance business growth 
                         of our customer with creative design, 
                         development and to deliver high quality solutions
                         that create value and reliable competitive
                          advantage to customers around the
                           globe... job.
                        </h4>
            </div>
            <div className="footer-section">
                     <h1 className="text-footer">
                            Company
                        </h1>
                        <h5 className="text-footer">
                            About Us
                        </h5>
                        <h5 className="text-footer">
                            Contact Us
                        </h5>
                        <h5 className="text-footer">
                            Service
                        </h5>
                        <h5 className="text-footer">
                            Contact Us
                        </h5>
                        <h5 className="text-footer">
                            Contact Us
                        </h5>
           </div>
            <div className="footer-section">
            <h1 className="text-footer">
                            Contact
                        </h1>
                        <h4 style={{ textAlign: 'left', color: 'white' }}>Testing soft Solution pvt.  Phase 1,Ludhiana (Punjab)  </h4>
                        <h4 style={{ textAlign: 'left', color: 'white' }}>  +(91) 172-4028-670   </h4>
                        <h4 style={{ textAlign: 'left', color: 'white' }}>  info@testing.com  </h4>
                        <h4 style={{ textAlign: 'left', color: 'white' }}> Testing Soft Solutions</h4>
                        <input type="text" name="search" placeholder="Enter Email Address" className="form-control" />
                 </div>
        </div>   
<p style={{ textAlign: 'center', color: 'white' }}>Copyright ©-All rights are reserved</p>
</footer>

);
};

export default footer;