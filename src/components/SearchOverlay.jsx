import { useState, useEffect } from 'react'

function SearchOverlay({ isOpen, onSearchClose, onCategorySelect }) {

   const [searchText, setSearchText] = useState("")

   useEffect(() => {
      if (isOpen) {
         document.body.style.overflow = "hidden"
      } else {
         document.body.style.overflow = ""
      }

      return () => {
         document.body.style.overflow = ""
      }
   }, [isOpen])

   return (


      <div id="searchOv"
         style={{ display: isOpen ? "flex" : "none" }}>
         <button
            className="sovclose"
            id="searchClose"
            onClick={onSearchClose}
         >
            <i className="fas fa-times"></i>
         </button>
         <div className="sovbox">
            <h4>What are you craving today?</h4>
            <div className="sovinput">
               <input type="text" id="searchInput" placeholder="Search burgers, pizza, chicken..." autoComplete="off" value={searchText}
                  onChange={(e) => setSearchText(e.target.value)} />
               <button><i className="fas fa-search"></i></button>
            </div>
            {/* Categories inside search box */}
            <div className="sovcats">
               <div className="sovcat active" data-cat="all"
                  onClick={() => {
                     onCategorySelect("all")
                     onSearchClose()

                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}
               >
                  <img src="img/menu/1.jpg" alt="" />All Items
               </div>
               <div className="sovcat" data-cat="burgers"
                  onClick={() => {
                     onCategorySelect("burgers")
                     onSearchClose()

                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}


               >
                  <img src="img/menu/1.jpg" alt="" />Burgers
               </div>
               <div className="sovcat" data-cat="pizza"
                  onClick={() => {
                     onCategorySelect("pizza")
                     onSearchClose()

                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}
               >
                  <img src="img/menu/2.jpg" alt="" />Pizza
               </div>
               <div className="sovcat" data-cat="chicken"
                  onClick={() => {
                     onCategorySelect("chicken")
                     onSearchClose()

                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}
               >
                  <img src="img/menu/3.jpg" alt="" />Chicken
               </div>
               <div className="sovcat" data-cat="wraps"
                  onClick={() => {
                     onCategorySelect("wraps")
                     onSearchClose()

                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}
               >
                  <img src="img/menu/4.jpg" alt="" />Wraps
               </div>
               <div className="sovcat" data-cat="pasta"
                  onClick={() => {
                     onCategorySelect("pasta")
                     onSearchClose()

                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}
               >
                  <img src="img/menu/5.jpg" alt="" />Pasta
               </div>
               <div className="sovcat" data-cat="desserts"
                  onClick={() => {
                     onCategorySelect("desserts")
                     onSearchClose()

                     document.getElementById("menu").scrollIntoView({
                        behavior: "smooth"
                     })
                  }}
               >
                  <img src="img/menu/6.jpg" alt="" />Desserts
               </div>
            </div>
            <div className="sovtrend">
               <p><i className="fas fa-fire me-1" style={{ color: "var(--secondary)" }}></i>Trending Searches</p>
               <span className="ttag" onClick={() => setSearchText("Smash Burger")}>Smash Burger</span>
               <span className="ttag" onClick={() => setSearchText("Nashville Chicken")}>Nashville Chicken</span>
               <span className="ttag" onClick={() => setSearchText("Truffle Pizza")}>Truffle Pizza</span>
               <span className="ttag" onClick={() => setSearchText("Lava Cake")}>Lava Cake</span>
               <span className="ttag" onClick={() => setSearchText("Loaded Fries")}>Loaded Fries</span>
               <span className="ttag" onClick={() => setSearchText("Mango Shake")}>Mango Shake</span>
            </div>
         </div>
      </div>
   )
}

export default SearchOverlay