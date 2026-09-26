import { useState } from "react";

function NewsLetter() {

   const [subscribe, doSubscribe] = useState(false);
   const [email, setEmail] = useState("");


   const doneSubscription = () => {
      setEmail("");

      doSubscribe(true);

      setTimeout(() => {
         doSubscribe(false);
      }, 2000);
   };

   return (

      <section id="newsletter">
         <div className="nlbg"></div>

         <div className="container">
            <div className="nlw text-center" data-aos="zoom-in">

               <span
                  className="slbl"
                  style={{ color: "rgba(255,255,255,.7)" }}
               >
                  Stay Connected
               </span>

               <h2
                  className="mb-3"
                  style={{ color: "#fff" }}
               >
                  Subscribe &amp; Get Exclusive{" "}
                  <span style={{ color: "var(--secondary)" }}>
                     Deals
                  </span>
               </h2>

               <p
                  className="mb-4"
                  style={{ color: "rgba(255,255,255,.78)" }}
               >
                  Get 15% off your first order plus early access to new menu items
               </p>

               <div className="nl-form-wrap">

                  <input
                     className="nlinput"
                     type="email"
                     id="nlEmail"
                     placeholder="Enter your email address..."
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                  />


                  <button
                     type="button"
                     className="nlbtn"
                     id="nlBtn"
                     onClick={doneSubscription}
                     disabled={subscribe || !email.trim()}
                     style={{
                        backgroundColor: subscribe ? "#2d6a4f" : "#f9a825",
                        color: "#fff",
                        transition: "all 0.3s ease",
                        opacity: !email.trim() && !subscribe ? 0.6 : 1,
                        cursor: !email.trim() ? "not-allowed" : "pointer"
                     }}
                  >
                     {subscribe ? (
                        <>

                           Subscribed!
                        </>
                     ) : (
                        <>
                           <i className="fas fa-paper-plane me-1"></i>
                           Subscribe
                        </>
                     )}
                  </button>


               </div>

               <p
                  style={{
                     color: "rgba(255,255,255,.45)",
                     fontSize: ".76rem",
                     marginTop: "11px"
                  }}
               >
                  <i className="fas fa-lock me-1"></i>
                  No spam, unsubscribe anytime.
               </p>

            </div>
         </div>
      </section>
   );
}

export default NewsLetter;
