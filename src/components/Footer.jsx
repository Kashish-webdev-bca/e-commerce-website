import { useEffect, useState } from "react";

function Footer() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (

        <footer>
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="fnm">Sar<span>ab</span></div>
                        <p className="fdesc">We bring the world's finest flavors together in a fast, friendly, and affordable experience. Every meal crafted with love.</p>
                        <div className="fsoc">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-tiktok"></i></a>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="ftit">Quick Links</div>
                        <ul className="flinks ps-0">
                            <li><a href="#hero"><i className="fas fa-chevron-right"></i>Home</a></li>
                            <li><a href="#about"><i className="fas fa-chevron-right"></i>About Us</a></li>
                            <li><a href="#menu"><i className="fas fa-chevron-right"></i>Our Menu</a></li>
                            <li><a href="#reservation"><i className="fas fa-chevron-right"></i>Reservation</a></li>
                            <li><a href="#blog"><i className="fas fa-chevron-right"></i>Blog</a></li>
                            <li><a href="#contact-section"><i className="fas fa-chevron-right"></i>Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-2">
                        <div className="ftit">Our Menu</div>
                        <ul className="flinks ps-0">
                            <li><a href="#menu"><i className="fas fa-chevron-right"></i>Burgers</a></li>
                            <li><a href="#menu"><i className="fas fa-chevron-right"></i>Pizza</a></li>
                            <li><a href="#menu"><i className="fas fa-chevron-right"></i>Fried Chicken</a></li>
                            <li><a href="#menu"><i className="fas fa-chevron-right"></i>Wraps &amp; Rolls</a></li>
                            <li><a href="#menu"><i className="fas fa-chevron-right"></i>Pasta</a></li>
                            <li><a href="#menu"><i className="fas fa-chevron-right"></i>Desserts</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <div className="ftit">Get In Touch</div>
                        <div className="fci">
                            <div className="fciico"><i className="fas fa-map-marker-alt"></i></div>
                            <div className="fciinfo"><strong>Address</strong>42 Flavor Street, Manhattan, NY 10001</div>
                        </div>
                        <div className="fci">
                            <div className="fciico"><i className="fas fa-phone-alt"></i></div>
                            <div className="fciinfo"><strong>Phone</strong>+1 (800) 123-4567</div>
                        </div>
                        <div className="fci">
                            <div className="fciico"><i className="fas fa-envelope"></i></div>
                            <div className="fciinfo"><strong>Email</strong>hello@sarabfood.com</div>
                        </div>
                        <div className="fci">
                            <div className="fciico"><i className="fas fa-clock"></i></div>
                            <div className="fciinfo"><strong>Hours</strong>Wed - Sun: 09 AM - 11 PM</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fbot">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                        <p>
                            &copy; 2026 <span>Sarab Restaurant</span>. All Rights Reserved.
                            <br />
                            A handcrafted restaurant experience, built with <span><i className="fas fa-heart"></i></span>.
                        </p>
                        <div><a href="#">Privacy Policy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
                    </div>
                </div>
            </div>

            {/* Floating cart */}
            {/* <div className="cartfl"><i className="fas fa-shopping-cart"></i><span>My Cart</span><div className="ccount" id="cartCount">0</div></div> */}
            {/* Back to top */}
            <button
                id="btt"
                type="button"
                className={showButton ? "show" : ""}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
            >
                <i className="fas fa-chevron-up"></i>
            </button>

        </footer>
    )
}
export default Footer

