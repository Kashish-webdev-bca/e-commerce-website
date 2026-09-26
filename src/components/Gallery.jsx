function Gallery({ onGalleryOpen }) {


    return (

        <section id="gallery">
            <div className="container">
                <div className="text-center mb-5" data-aos="fade-up">
                    <span className="slbl">Food Showcase</span>
                    <h2 className="stitle">Let's See Our <span>Fast Food</span></h2>
                    <div className="sline"></div>
                </div>
                <div className="ggrid" data-aos="fade-up">
                    <div className="gitem"
                        data-gi="0"
                        data-gimg="/img/portfolio/work1.jpg"
                        data-gtitle="Gourmet Burgers"
                        data-gdesc="Our award-winning smash burgers, hand-crafted with 100% premium beef, aged cheddar and house-made sauces."
                        onClick={() => onGalleryOpen(0)}>
                        <img src="/img/portfolio/work1.jpg" alt="Burgers" />
                        <div className="gover"><span><i className="fas fa-expand-alt"></i> Gourmet Burgers</span></div>

                    </div>
                    <div className="gitem"
                        data-gi="1"
                        data-gimg="/img/portfolio/work2.jpg"
                        data-gtitle="Wood-Fired Pizza"
                        data-gdesc="Authentic Neapolitan-style pizzas fired at 900deg F in our wood-burning stone oven for the perfect char."
                        onClick={() => onGalleryOpen(1)}>
                        <img src="/img/portfolio/work2.jpg" alt="Pizza" />
                        <div className="gover"><span><i className="fas fa-expand-alt"></i> Wood-Fired Pizza</span></div>
                    </div>
                    <div className="gitem"
                        data-gi="2"
                        data-gimg="/img/portfolio/work3.jpg"
                        data-gtitle="Crispy Fried Chicken"
                        data-gdesc="Double-brined, hand-battered chicken fried to golden perfection using our 15-spice secret blend."
                        onClick={() => onGalleryOpen(2)}>
                        <img src="/img/portfolio/work3.jpg" alt="Chicken" />
                        <div className="gover"><span><i className="fas fa-expand-alt"></i> Crispy Fried Chicken</span></div>
                    </div>
                    <div className="gitem"
                        data-gi="3"
                        data-gimg="/img/portfolio/work4.jpg"
                        data-gtitle="Sweet Desserts"
                        data-gdesc="Handcrafted desserts - from molten lava cakes to artisan ice cream sundaes and seasonal pastries."
                        onClick={() => onGalleryOpen(3)}>
                        <img src="/img/portfolio/work4.jpg" alt="Desserts" />
                        <div className="gover"><span><i className="fas fa-expand-alt"></i> Sweet Desserts</span></div>
                    </div>
                    <div className="gitem"
                        data-gi="4"
                        data-gimg="/img/portfolio/work5.jpg"
                        data-gtitle="Fresh Wraps &amp; Rolls"
                        data-gdesc="Loaded fresh wraps packed with grilled proteins, crunchy vegetables and our house-made sauces."
                        onClick={() => onGalleryOpen(4)}>
                        <img src="/img/portfolio/work5.jpg" alt="Wraps" />
                        <div className="gover"><span><i className="fas fa-expand-alt"></i> Fresh Wraps &amp; Rolls</span></div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Gallery