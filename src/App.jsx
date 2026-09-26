import { useState } from 'react'

import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import SearchOverlay from './components/SearchOverlay'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Category from './components/Category'
import About from './components/About'
import Menu from './components/Menu'
import MenuPopup from './components/MenuPopup'
import Cart from './components/Cart'
import SpecialOffer from './components/SpecialOffer'
import Gallery from './components/Gallery'
import GalleryPopup from './components/GalleryPopup'
import History from './components/History'
import Chefs from './components/Chefs'
import Hours from './components/Hours'
import Testimonials from './components/Testimonials'
import Reservation from './components/Reservation'
import Blog from './components/Blog'
import NewsLetter from './components/NewsLetter'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  const [searchOpen, setSearchOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedMenuItem, setSelectedMenuItem] = useState(null)
  const [cartItems, setCartItems] = useState([])
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  )
  const handleCheckout = () => {
    setCartOpen(false)

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  const increaseQuantity = (itemTitle) => {

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === itemTitle
          ? {
            ...item,
            quantity: item.quantity + 1
          }
          : item
      )
    )

  }
  const decreaseQuantity = (itemTitle) => {

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === itemTitle
          ? {
            ...item,
            quantity: item.quantity > 1
              ? item.quantity - 1
              : 1
          }
          : item
      )
    )

  }
  const removeFromCart = (itemTitle) => {

    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.title !== itemTitle
      )
    )

  }
  const [cartOpen, setCartOpen] = useState(false)
  const galleryItems = [
    {
      img: "/img/portfolio/work1.jpg",
      title: "Gourmet Burgers",
      desc: "Our award-winning smash burgers, hand-crafted with 100% premium beef, aged cheddar and house-made sauces."
    },
    {
      img: "/img/portfolio/work2.jpg",
      title: "Wood-Fired Pizza",
      desc: "Authentic Neapolitan-style pizzas fired at 900deg F in our wood-burning stone oven for the perfect char."
    },
    {
      img: "/img/portfolio/work3.jpg",
      title: "Crispy Fried Chicken",
      desc: "Double-brined, hand-battered chicken fried to golden perfection using our 15-spice secret blend."
    },
    {
      img: "/img/portfolio/work4.jpg",
      title: "Sweet Desserts",
      desc: "Handcrafted desserts - from molten lava cakes to artisan ice cream sundaes and seasonal pastries."
    },
    {
      img: "/img/portfolio/work5.jpg",
      title: "Fresh Wraps & Rolls",
      desc: "Loaded fresh wraps packed with grilled proteins, crunchy vegetables and our house-made sauces."
    }
  ]
  const [galleryIndex, setGalleryIndex] = useState(0)

  return (
    <>
      <Topbar />
      <Navbar
        onSearchOpen={() => setSearchOpen(true)}
        onCartOpen={() => setCartOpen(true)}
        cartCount={cartCount}
      />
      <SearchOverlay isOpen={searchOpen}
        onSearchClose={() => setSearchOpen(false)}
        onCategorySelect={setSelectedCategory} />

      <Hero />
      <Marquee />
      <Category onCategorySelect={setSelectedCategory} />
      <About />

      <Menu selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        onMenuOpen={(item) => {
          setSelectedMenuItem(item)
          setMenuOpen(true)
        }} />
      <MenuPopup
        isOpen={menuOpen}
        item={selectedMenuItem}
        onClose={() => setMenuOpen(false)}

        onAddToCart={(item, quantity) => {

          setCartItems((prevItems) => {

            const existingItem = prevItems.find(
              (cartItem) => cartItem.title === item.title
            )

            if (existingItem) {

              return prevItems.map((cartItem) =>
                cartItem.title === item.title
                  ? {
                    ...cartItem,
                    quantity: cartItem.quantity + quantity
                  }
                  : cartItem
              )

            }

            const newItem = {
              ...item,
              quantity: quantity
            }

            return [
              ...prevItems,
              newItem
            ]

          })

          setMenuOpen(false)
          setCartOpen(true)

        }}
      />


      <Cart
        isOpen={cartOpen}
        cartItems={cartItems}
        onClose={() => setCartOpen(false)}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />
      <SpecialOffer />
      <Gallery
        onGalleryOpen={(index) => {
          setGalleryIndex(index)
          setGalleryOpen(true)
        }} />
      <GalleryPopup
        isOpen={galleryOpen}
        item={galleryItems[galleryIndex]}
        onClose={() => setGalleryOpen(false)}
        onPrev={() => {
          setGalleryIndex((prev) =>
            prev === 0 ? galleryItems.length - 1 : prev - 1
          )
        }}
        onNext={() => {
          setGalleryIndex((prev) =>
            prev === galleryItems.length - 1 ? 0 : prev + 1
          )
        }}
      />
      <History />

      <Chefs />
      <Hours />
      <Testimonials />
      <Reservation />
      <Blog />
      <NewsLetter />
      <Contact />
      <Footer />
    </>
  )
}

export default App