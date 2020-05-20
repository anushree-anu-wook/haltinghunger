import React, { Component, Fragment } from "react";
import "../CSS/Home.css";

class HomeLS extends Component {
  render() {
    return (
      <Fragment>
        <div class="banner">
  <div>
  <section id="section1" className="" style={{ marginRight: 2000 + "px" }}>
  <div className="rightside rollIn animated wow animated">
            <div className="container ">
            <div className="wrapper">
            <div className="bubble">
				   <div className="inner">
            <h4 className="needy"> Welcome to Needy Feedy</h4>
            <p>Feed Your Mind with Other's Hunger </p>
          </div>
          </div>
          {/* <div className="leftside">
            
            <img
              src="https://www.thebetterindia.com/wp-content/uploads/2015/08/10410943_1536413906576327_7533414068352711562_n.jpg"
              alt=""
            />
          </div> */}
          </div>
          </div>
          </div>
          
       
        </section>
  </div>

</div>


        

        <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="heading">Get In Touch : 8673218491</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

     
 <section className="subscribe-section">
   <div className="subscribe-form">
   <form action="#" className="subscribe-form">
   <label for="text"className="clr" >Intrested to know more about us join Now</label>
   <br/>
   <input type="email" name="email" className="clr" placeholder="Enter your email address"/>
   <span className="submit">
    <input type="submit" value="subscribe"/> <a  className="clr" >Subscribe</a>
    </span> 
    
  </form>
</div>
</section>
 </Fragment>
    );
  }
}

export default HomeLS;
