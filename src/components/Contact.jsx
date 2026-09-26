import { useState } from "react"


function Contact() {

   const [sending, messSending] = useState(false);
   const [sended, messSended] = useState(false);


   const sendMessages = () => {


      messSending(true);

      setTimeout(() => {
         messSending(false);
         messSended(true);
      }, 2000);
   };

   return (


      <section id="contact-section">
         <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
               <span className="slbl">Get In Touch</span>
               <h2 className="stitle">Contact <span>Us</span></h2>
               <div className="sline"></div>
               <p className="sdesc mx-auto" style={{ maxWidth: "480px" }}>Have a question, feedback, or want to plan a special event? We'd love to hear from you.</p>
            </div>
            <div className="row g-4">
               <div className="col-lg-4" data-aos="fade-right">
                  <div className="ctdark">
                     <h4>Let's Talk</h4>
                     <p className="ctsub">We typically respond within 2 hours during business hours.</p>
                     <div className="ctitem">
                        <div className="cticon"><i className="fas fa-map-marker-alt"></i></div>
                        <div className="ctinfo"><strong>Address</strong><span>42 Flavor Street, Manhattan,<br />New York, NY 10001</span></div>
                     </div>
                     <div className="ctitem">
                        <div className="cticon"><i className="fas fa-phone-alt"></i></div>
                        <div className="ctinfo"><strong>Phone</strong><span>+1 (800) 123-4567</span></div>
                     </div>
                     <div className="ctitem">
                        <div className="cticon"><i className="fas fa-envelope"></i></div>
                        <div className="ctinfo"><strong>Email</strong><span>hello@sarabfood.com</span></div>
                     </div>
                     <div className="ctitem">
                        <div className="cticon"><i className="fas fa-clock"></i></div>
                        <div className="ctinfo"><strong>Working Hours</strong><span>Wed - Sun: 9 AM - 11 PM</span></div>
                     </div>
                     <div className="ctsocrow">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-8" data-aos="fade-left">
                  <div className="fcard">
                     <div className="row g-3">
                        <div className="col-sm-6"><label className="flbl">Your Name *</label><input type="text" className="fctrl" placeholder="John Doe" /></div>
                        <div className="col-sm-6"><label className="flbl">Email Address *</label><input type="email" className="fctrl" placeholder="you@email.com" /></div>
                        <div className="col-sm-6"><label className="flbl">Phone Number</label><input type="tel" className="fctrl" placeholder="+1 (800) 000-0000" /></div>
                        <div className="col-sm-6">
                           <label className="flbl">Subject *</label>
                           <select className="fctrl">
                              <option>General Inquiry</option>
                              <option>Catering &amp; Events</option>
                              <option>Feedback</option>
                              <option>Partnership</option>
                              <option>Media &amp; Press</option>
                           </select>
                        </div>
                        <div className="col-12"><label className="flbl">Message *</label><textarea className="fctrl" rows="5" placeholder="Write your message here..."></textarea></div>
                        <div className="col-12"><button type="button" className="btn-red" id="ctcBtn" onClick={sendMessages}
                           disabled={sending}
                        >{sending ? (
                           <>
                              <i className="fas fa-spinner fa-spin"></i>
                              Sending...
                           </>
                        ) : (
                           <>

                              <i className="fas fa-paper-plane"></i>Send Message
                           </>
                        )}
                        </button>
                        </div>
                     </div>
                     {sended && (
                        <div className="sucmsg" id="ctcOk">
                           <i className="fas fa-check-circle"></i>
                           <p>Message sent! We'll reply within 2 hours.</p>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </section>

   )
}
export default Contact