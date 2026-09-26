import { useState } from "react"

function Menu({ selectedCategory, onCategorySelect, onMenuOpen }) {

    const [likedItems, setLikedItems] = useState([
        false,
        false,
        false,
        false,
        false,
        false
    ])

    const showItem = (category) => {
        return selectedCategory === "all" || selectedCategory === category
    }

    return (

        <section id="menu">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-up">
                    <span className="slbl">What's Cooking</span>
                    <h2 className="stitle">Our Delicious <span>Menu</span></h2>
                    <div className="sline"></div>
                </div>
                {/* FIX 3 � filter buttons */}
                <div className="text-center mb-4" data-aos="fade-up">
                    <button className="filtbtn active" data-f="all" onClick={() => {
                        onCategorySelect("all")
                        document.getElementById("menu").scrollIntoView({
                            behavior: "smooth"
                        })
                    }}>All</button>
                    <button className="filtbtn" data-f="burgers" onClick={() => {
                        onCategorySelect("burgers")
                        document.getElementById("menu").scrollIntoView({
                            behavior: "smooth"
                        })
                    }}>Burgers</button>
                    <button className="filtbtn" data-f="pizza" onClick={() => {
                        onCategorySelect("pizza")
                        document.getElementById("menu").scrollIntoView({
                            behavior: "smooth"
                        })
                    }}>Pizza</button>
                    <button className="filtbtn" data-f="chicken" onClick={() => {
                        onCategorySelect("chicken")
                        document.getElementById("menu").scrollIntoView({
                            behavior: "smooth"
                        })
                    }}>Chicken</button>
                    <button className="filtbtn" data-f="wraps" onClick={() => {
                        onCategorySelect("wraps")
                        document.getElementById("menu").scrollIntoView({
                            behavior: "smooth"
                        })
                    }}>Wraps</button>
                    <button className="filtbtn" data-f="desserts" onClick={() => {
                        onCategorySelect("desserts")
                        document.getElementById("menu").scrollIntoView({
                            behavior: "smooth"
                        })
                    }}>Desserts</button>
                    <button className="filtbtn" data-f="pasta" onClick={() => {
                        onCategorySelect("pasta")
                        document.getElementById("menu").scrollIntoView({
                            behavior: "smooth"
                        })
                    }}>Pasta</button>
                </div>
                <div className="row g-4" id="mgrid">
                    {/* CARD 1: Burgers */}
                    <div className="col-sm-6 col-lg-4 mwrap" data-c="burgers" data-aos="fade-up" style={{ display: showItem("burgers") ? "block" : "none" }} >
                        <div className="mcard"
                            data-img="/img/menu/1.jpg"
                            data-title="classNameic Smash Burger"
                            data-cat="Burgers"
                            data-price="$14.99" data-old="$18.99"
                            data-rating="4.9" data-reviews="128"
                            data-cal="620" data-time="12"
                            data-desc="Double smashed patty, cheddar cheese, caramelized onions, house pickles and our legendary special sauce. Made fresh to order on a toasted brioche bun."
                            data-tags="Spicy,Bestseller,Beef"
                            onClick={() => {
                                onMenuOpen({
                                    img: "/img/menu/1.jpg",
                                    title: "Classic Smash Burger",
                                    cat: "Burgers",
                                    price: "$14.99",
                                    oldPrice: "$18.99",
                                    rating: "4.9",
                                    reviews: "128",
                                    calories: "620",
                                    time: "12",
                                    desc: "Double smashed patty, cheddar cheese, caramelized onions, house pickles and our legendary special sauce. Made fresh to order on a toasted brioche bun.",
                                    tags: ["Spicy", "Bestseller", "Beef"]
                                })
                            }}>
                            <div className="mimg">
                                <img src="/img/menu/1.jpg" alt="Smash Burger" />
                                <div className="mbdg hot"><i ></i> Hot</div>
                                <div className="mhrt" onClick={(e) => {
                                    e.stopPropagation()
                                    const updatedLikes = [...likedItems]
                                    updatedLikes[0] = !updatedLikes[0]
                                    setLikedItems(updatedLikes)
                                }}><i className={likedItems[0] ? "fas fa-heart" : "far fa-heart"}
                                    style={{ color: likedItems[0] ? "red" : "" }}></i></div>
                            </div>
                            <div className="mbody">
                                <div className="mcat">Burgers</div>
                                <div className="mtit">classNameic Smash Burger</div>
                                <div className="mdesc">Double smashed patty, cheddar, caramelized onions, pickles &amp; special sauce</div>
                                <div className="mfoot">
                                    <div>
                                        <div className="mprice">$14.99 <small>$18.99</small></div>
                                        <div className="mstars"><i className="fas fa-star"></i> <span style={{ color: "#bb", fontSize: ".7rem" }}>(128)</span></div>
                                    </div>
                                    <button className="madd" title="View Details"><i className="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 2: Pizza */}
                    <div className="col-sm-6 col-lg-4 mwrap" data-c="pizza" data-aos="fade-up" data-aos-delay="80" style={{ display: showItem("pizza") ? "block" : "none" }}>
                        <div className="mcard"
                            data-img="/img/menu/2.jpg"
                            data-title="Margherita Royale"
                            data-cat="Pizza"
                            data-price="$19.99" data-old="$24.99"
                            data-rating="4.8" data-reviews="95"
                            data-cal="480" data-time="18"
                            data-desc="San Marzano tomatoes, fresh buffalo mozzarella, fragrant basil leaves, drizzled with Italian truffle oil on a hand-stretched sourdough base."
                            data-tags="Vegetarian,New,Italian" onClick={() => {
                                onMenuOpen({
                                    img: "/img/menu/2.jpg",
                                    title: "Margherita Royale",
                                    cat: "Pizza",
                                    price: "$19.99",
                                    oldPrice: "$24.99",
                                    rating: "4.8",
                                    reviews: "95",
                                    calories: "480",
                                    time: "18",
                                    desc: "San Marzano tomatoes, fresh buffalo mozzarella, fragrant basil leaves, drizzled with Italian truffle oil on a hand-stretched sourdough base.",
                                    tags: ["Vegetarian", "New", "Italian"]
                                })
                            }}>
                            <div className="mimg">
                                <img src="/img/menu/2.jpg" alt="Pizza" />
                                <div className="mbdg new"><i className="fas fa-star"></i> New</div>
                                <div className="mhrt" onClick={(e) => {
                                    e.stopPropagation()
                                    const updatedLikes = [...likedItems]
                                    updatedLikes[1] = !updatedLikes[1]
                                    setLikedItems(updatedLikes)
                                }}><i className={likedItems[1] ? "fas fa-heart" : "far fa-heart"}
                                    style={{ color: likedItems[1] ? "red" : "" }}></i></div>
                            </div>
                            <div className="mbody">
                                <div className="mcat">Pizza</div>
                                <div className="mtit">Margherita Royale</div>
                                <div className="mdesc">San Marzano tomatoes, buffalo mozzarella, basil &amp; truffle oil on sourdough</div>
                                <div className="mfoot">
                                    <div>
                                        <div className="mprice">$19.99 <small>$24.99</small></div>
                                        <div className="mstars"><i className="fas fa-star"></i> <span style={{ color: "#bbb", fontSize: ".7rem" }}>(95)</span></div>
                                    </div>
                                    <button className="madd" title="View Details"><i className="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 3: Chicken */}
                    <div className="col-sm-6 col-lg-4 mwrap" data-c="chicken" data-aos="fade-up" data-aos-delay="160" style={{ display: showItem("chicken") ? "block" : "none" }}>
                        <div className="mcard"
                            data-img="/img/menu/3.jpg"
                            data-title="Nashville Hot Chicken"
                            data-cat="Chicken"
                            data-price="$12.99" data-old="$16.99"
                            data-rating="5.0" data-reviews="210"
                            data-cal="710" data-time="15"
                            data-desc="Extra-crispy fried chicken tossed in our signature fiery Nashville spice blend, served with honey drizzle and house pickles on a toasted brioche bun."
                            data-tags="Spicy,Bestseller,Crispy" onClick={() => {
                                onMenuOpen({
                                    img: "/img/menu/3.jpg",
                                    title: "Nashville Hot Chicken",
                                    cat: "Chicken",
                                    price: "$12.99",
                                    oldPrice: "$16.99",
                                    rating: "5.0",
                                    reviews: "210",
                                    calories: "710",
                                    time: "15",
                                    desc: "Extra-crispy fried chicken tossed in our signature fiery Nashville spice blend, served with honey drizzle and house pickles on a toasted brioche bun.",
                                    tags: ["Spicy", "Bestseller", "Crispy"]
                                })
                            }}>
                            <div className="mimg">
                                <img src="/img/menu/3.jpg" alt="Chicken" />
                                <div className="mbdg"><i className="fas fa-star"></i> Best Seller</div>
                                <div className="mhrt" onClick={(e) => {
                                    e.stopPropagation()
                                    const updatedLikes = [...likedItems]
                                    updatedLikes[2] = !updatedLikes[2]
                                    setLikedItems(updatedLikes)
                                }}><i className={likedItems[2] ? "fas fa-heart" : "far fa-heart"}
                                    style={{ color: likedItems[2] ? "red" : "" }}></i></div>
                            </div>
                            <div className="mbody">
                                <div className="mcat">Chicken</div>
                                <div className="mtit">Nashville Hot Chicken</div>
                                <div className="mdesc">Crispy fried chicken in fiery Nashville spice blend with honey drizzle</div>
                                <div className="mfoot">
                                    <div>
                                        <div className="mprice">$12.99 <small>$16.99</small></div>
                                        <div className="mstars"><i className="fas fa-star"></i> <span style={{ color: "#bbb", fontSize: ".7rem" }}>(210)</span></div>
                                    </div>
                                    <button className="madd" title="View Details"><i className="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 4: Wraps */}
                    <div className="col-sm-6 col-lg-4 mwrap" data-c="wraps" data-aos="fade-up" style={{ display: showItem("wraps") ? "block" : "none" }}>
                        <div className="mcard"
                            data-img="/img/menu/4.jpg"
                            data-title="Loaded Fajita Wrap"
                            data-cat="Wraps"
                            data-price="$10.99" data-old=""
                            data-rating="4.5" data-reviews="74"
                            data-cal="520" data-time="10"
                            data-desc="Grilled chicken strips, saut�ed bell peppers and onions, sour cream, fresh guacamole and salsa wrapped in a warm flour tortilla with melted cheddar."
                            data-tags="Grilled,Fresh,Mexican" onClick={() => {
                                onMenuOpen({
                                    img: "/img/menu/4.jpg",
                                    title: "Loaded Fajita Wrap",
                                    cat: "Wraps",
                                    price: "$10.99",
                                    oldPrice: "",
                                    rating: "4.5",
                                    reviews: "74",
                                    calories: "520",
                                    time: "10",
                                    desc: "Grilled chicken strips, sautéed bell peppers and onions, sour cream, fresh guacamole and salsa wrapped in a warm flour tortilla with melted cheddar.",
                                    tags: ["Grilled", "Fresh", "Mexican"]
                                })
                            }}>
                            <div className="mimg">
                                <img src="/img/menu/4.jpg" alt="Wrap" />
                                <div className="mhrt" onClick={(e) => {
                                    e.stopPropagation()
                                    const updatedLikes = [...likedItems]
                                    updatedLikes[3] = !updatedLikes[3]
                                    setLikedItems(updatedLikes)
                                }}><i className={likedItems[3] ? "fas fa-heart" : "far fa-heart"}
                                    style={{ color: likedItems[3] ? "red" : "" }}></i></div>
                            </div>
                            <div className="mbody">
                                <div className="mcat">Wraps</div>
                                <div className="mtit">Loaded Fajita Wrap</div>
                                <div className="mdesc">Grilled chicken, peppers, sour cream &amp; guacamole in a warm tortilla</div>
                                <div className="mfoot">
                                    <div>
                                        <div className="mprice">$10.99</div>
                                        <div className="mstars"><i className="fas fa-star"></i> <span style={{ color: "#bbb", fontSize: ".7rem" }}>(74)</span></div>
                                    </div>
                                    <button className="madd" title="View Details"><i className="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 5: Desserts */}
                    <div className="col-sm-6 col-lg-4 mwrap" data-c="desserts" data-aos="fade-up" data-aos-delay="80" style={{ display: showItem("desserts") ? "block" : "none" }}>
                        <div className="mcard"
                            data-img="/img/menu/5.jpg"
                            data-title="Nutella Lava Cake"
                            data-cat="Desserts"
                            data-price="$8.99" data-old="$11.99"
                            data-rating="4.9" data-reviews="56"
                            data-cal="390" data-time="8"
                            data-desc="Warm molten chocolate cake with a gooey Nutella center, served alongside Madagascar vanilla bean ice cream with salted caramel drizzle and fresh berries."
                            data-tags="Sweet,New,Chocolate" onClick={() => {
                                onMenuOpen({
                                    img: "/img/menu/5.jpg",
                                    title: "Nutella Lava Cake",
                                    cat: "Desserts",
                                    price: "$8.99",
                                    oldPrice: "$11.99",
                                    rating: "4.9",
                                    reviews: "56",
                                    calories: "390",
                                    time: "8",
                                    desc: "Warm molten chocolate cake with a gooey Nutella center, served alongside Madagascar vanilla bean ice cream with salted caramel drizzle and fresh berries.",
                                    tags: ["Sweet", "New", "Chocolate"]
                                })
                            }}>
                            <div className="mimg">
                                <img src="/img/menu/5.jpg" alt="Lava Cake" />
                                <div className="mbdg new"><i className="fas fa-star"></i> New</div>
                                <div className="mhrt" onClick={(e) => {
                                    e.stopPropagation()
                                    const updatedLikes = [...likedItems]
                                    updatedLikes[4] = !updatedLikes[4]
                                    setLikedItems(updatedLikes)
                                }}><i className={likedItems[4] ? "fas fa-heart" : "far fa-heart"}
                                    style={{ color: likedItems[4] ? "red" : "" }}></i></div>
                            </div>
                            <div className="mbody">
                                <div className="mcat">Desserts</div>
                                <div className="mtit">Nutella Lava Cake</div>
                                <div className="mdesc">Molten chocolate cake with Nutella center, vanilla ice cream &amp; caramel</div>
                                <div className="mfoot">
                                    <div>
                                        <div className="mprice">$8.99 <small>$11.99</small></div>
                                        <div className="mstars"><i className="fas fa-star"></i> <span style={{ color: "#bbb", fontSize: ".7rem" }}>(56)</span></div>
                                    </div>
                                    <button className="madd" title="View Details"><i className="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* CARD 6: Pasta */}
                    <div className="col-sm-6 col-lg-4 mwrap" data-c="pasta" data-aos="fade-up" data-aos-delay="160" style={{ display: showItem("pasta") ? "block" : "none" }}>
                        <div className="mcard"
                            data-img="/img/menu/6.jpg"
                            data-title="Truffle Mushroom Pasta"
                            data-cat="Pasta"
                            data-price="$16.99" data-old=""
                            data-rating="4.9" data-reviews="88"
                            data-cal="560" data-time="20"
                            data-desc="Al dente tagliatelle tossed with mixed wild mushrooms, freshly shaved black truffle, aged parmesan, fresh thyme and a touch of cream in garlic butter."
                            data-tags="Vegetarian,Chef's Pick,Italian" onClick={() => {
                                onMenuOpen({
                                    img: "/img/menu/6.jpg",
                                    title: "Truffle Mushroom Pasta",
                                    cat: "Pasta",
                                    price: "$16.99",
                                    oldPrice: "",
                                    rating: "4.9",
                                    reviews: "88",
                                    calories: "560",
                                    time: "20",
                                    desc: "Al dente tagliatelle tossed with mixed wild mushrooms, freshly shaved black truffle, aged parmesan, fresh thyme and a touch of cream in garlic butter.",
                                    tags: ["Vegetarian", "Chef's Pick", "Italian"]
                                })
                            }}>
                            <div className="mimg">
                                <img src="/img/menu/6.jpg" alt="Pasta" />
                                <div className="mbdg hot">Chef's Pick</div>
                                <div className="mhrt" onClick={(e) => {
                                    e.stopPropagation()
                                    const updatedLikes = [...likedItems]
                                    updatedLikes[5] = !updatedLikes[5]
                                    setLikedItems(updatedLikes)
                                }}><i className={likedItems[5] ? "fas fa-heart" : "far fa-heart"}
                                    style={{ color: likedItems[5] ? "red" : "" }}></i></div>
                            </div>
                            <div className="mbody">
                                <div className="mcat">Pasta</div>
                                <div className="mtit">Truffle Mushroom Pasta</div>
                                <div className="mdesc">Al dente tagliatelle, wild mushrooms, black truffle, parmesan &amp; thyme</div>
                                <div className="mfoot">
                                    <div>
                                        <div className="mprice">$16.99</div>
                                        <div className="mstars"><i className="fas fa-star"></i> <span style={{ color: "#bbb", fontSize: ".7rem" }}>(88)</span></div>
                                    </div>
                                    <button className="madd" title="View Details"><i className="fas fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end #mgrid */}
                <div className="text-center mt-5"><a href="#" className="btn-red"><i className="fas fa-th-large"></i>View Full Menu</a></div>
            </div>
        </section>

    )
}

export default Menu