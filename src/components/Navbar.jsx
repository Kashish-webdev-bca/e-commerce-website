function Navbar({
    onSearchOpen,
    onCartOpen,
    cartCount
}) {
    return (


        <nav className="navbar navbar-expand-lg" id="nav">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <div className="blogo">
                        <div className="bico"><i className="fas fa-utensils"></i></div>
                        <div>
                            <div className="bname">Sar<span>ab</span></div>
                            <div className="bsub">Fast Food & Restaurant</div>
                        </div>
                    </div>
                </a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <i className="fas fa-bars" style={{ color: "var(--primary)", fontSize: "1.35rem" }}></i>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><a className="nav-link active" href="#hero">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#menu">Menu</a></li>
                        <li className="nav-item"><a className="nav-link" href="#chefs">Chefs</a></li>
                        <li className="nav-item"><a className="nav-link" href="#reservation">Reservation</a></li>
                        <li className="nav-item"><a className="nav-link" href="#testimonials">Reviews</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact-section">Contact</a></li>
                    </ul>
                    <div className="d-flex align-items-center gap-1">
                        {/* FIX 1: Search button */}
                        <button
                            id="navSearchBtn"
                            title="Search"
                            onClick={onSearchOpen}
                        >
                            <i className="fas fa-search"></i>
                        </button>
                        <button
                            className="btn-red cartNavBtn"
                            onClick={onCartOpen}
                        >
                            <i className="fas fa-shopping-cart"></i>

                            Cart

                            {cartCount > 0 && (
                                <span className="cartBadge">
                                    {cartCount}
                                </span>
                            )}
                        </button>

                    </div>
                </div>
            </div>
        </nav>

    )

}

export default Navbar