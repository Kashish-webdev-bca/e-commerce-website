
function Category({ onCategorySelect }) {
   return (

      <section id="category">
         <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
               <span className="slbl">What We Offer</span>
               <h2 className="stitle">Browse by <span>Category</span></h2>
               <div className="sline"></div>
               <p className="sdesc mx-auto" style={{ maxWidth: "480px" }}>From sizzling burgers to exotic world cuisines - find your favourite in our menu</p>
            </div>
            <div className="row g-3 justify-content-center">
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="0">
                  <div className="catcard active" data-filter="all" onClick={() => {
                     onCategorySelect("all")
                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}>
                     <img className="catimg" src="img/category/1.jpg" alt="" />
                     <div className="catnm">All Items</div>
                     <div className="catct">99 items</div>
                  </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="70">
                  <div className="catcard" data-filter="burgers" onClick={() => {
                     onCategorySelect("burgers")
                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}>
                     <img className="catimg" src="img/category/2.jpg" alt="" />
                     <div className="catnm">Burgers</div>
                     <div className="catct">24 items</div>
                  </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="140">
                  <div className="catcard" data-filter="pizza" onClick={() => {
                     onCategorySelect("pizza")
                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}>
                     <img className="catimg" src="img/category/3.jpg" alt="" />
                     <div className="catnm">Pizza</div>
                     <div className="catct">18 items</div>
                  </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="210">
                  <div className="catcard" data-filter="chicken" onClick={() => {
                     onCategorySelect("chicken")
                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}>
                     <img className="catimg" src="img/category/4.jpg" alt="" />
                     <div className="catnm">Fried Chicken</div>
                     <div className="catct">15 items</div>
                  </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="280">
                  <div className="catcard" data-filter="wraps" onClick={() => {
                     onCategorySelect("wraps")
                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}>
                     <img className="catimg" src="img/category/5.jpg" alt="" />
                     <div className="catnm">Wraps</div>
                     <div className="catct">12 items</div>
                  </div>
               </div>
               <div className="col-6 col-sm-4 col-md-3 col-lg-2" data-aos="zoom-in" data-aos-delay="350">
                  <div className="catcard" data-filter="desserts" onClick={() => {
                     onCategorySelect("desserts")
                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}>
                     <img className="catimg" src="img/category/6.jpg" alt="" />
                     <div className="catnm">Desserts</div>
                     <div className="catct">20 items</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

   )
}

export default Category