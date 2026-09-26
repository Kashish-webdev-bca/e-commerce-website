function Blog() {
   return (

      <section id="blog">
         <div className="container">
            <div className="text-center mb-5" data-aos="fade-up">
               <span className="slbl">News &amp; Updates</span>
               <h2 className="stitle">Our Latest <span>Blog</span> Posts</h2>
               <div className="sline"></div>
            </div>
            <div className="row g-4">
               <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="0">
                  <div className="blcard">
                     <div className="blimg">
                        <img src="img/blog/1.jpg" alt="" />
                        <div className="bldatebdg"><span className="bd">14</span><span className="bm">Mar</span></div>
                     </div>
                     <div className="blbody">
                        <div className="bltag">Food &amp; Health</div>
                        <div className="bltit"><a href="#">Healthy Fast Food: A Myth or Beautiful Reality</a></div>
                        <div className="blmeta"><span><i className="fas fa-user"></i>James Writer</span><span><i className="fas fa-comment"></i>24 Comments</span></div>
                        <a href="#" className="blmore">Read More <i className="fas fa-arrow-right"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="80">
                  <div className="blcard">
                     <div className="blimg">
                        <img src="img/blog/2.jpg" alt="" />
                        <div className="bldatebdg"><span className="bd">28</span><span className="bm">Feb</span></div>
                     </div>
                     <div className="blbody">
                        <div className="bltag">Food Science</div>
                        <div className="bltit"><a href="#">Is Fast Food Getting Healthier? Here's What We Found</a></div>
                        <div className="blmeta"><span><i className="fas fa-user"></i>Sarah Grain</span><span><i className="fas fa-comment"></i>18 Comments</span></div>
                        <a href="#" className="blmore">Read More <i className="fas fa-arrow-right"></i></a>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="160">
                  <div className="blcard">
                     <div className="blimg">
                        <img src="img/blog/3.jpg" alt="" />
                        <div className="bldatebdg"><span className="bd">05</span><span className="bm">Jan</span></div>
                     </div>
                     <div className="blbody">
                        <div className="bltag">Recipes</div>
                        <div className="bltit"><a href="#">Innovative Hot Chickpeas Flake Crackin' Recipe at Home</a></div>
                        <div className="blmeta"><span><i className="fas fa-user"></i>Chef Marcus</span><span><i className="fas fa-comment"></i>32 Comments</span></div>
                        <a href="#" className="blmore">Read More <i className="fas fa-arrow-right"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
export default Blog
