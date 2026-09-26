import { useState, useEffect } from "react"

function MenuPopup({ isOpen,
    item,
    onClose,
    onAddToCart }) {

    //Popup open hone par body scroll lock
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

    // Quantity
    const [quantity, setQuantity] = useState(1)

    // Popup open hone par quantity ko 1 par reset karo
    useEffect(() => {
        if (isOpen) {
            setQuantity(1)
        }
    }, [isOpen, item])

    if (!isOpen || !item) {
        return null
    }
    return (

        <div id="menuPop" style={{ display: "flex" }}>
            <div className="mpbox">
                <button className="mpclose" id="mpClose" onClick={onClose}><i className="fas fa-times"></i></button>
                <div className="mpimg"><img id="mpImg" src={item.img} alt={item.title} /></div>
                <div className="mpbody">
                    <div id="mpCat">{item.cat}</div>
                    <div id="mpTitle">{item.title}</div>
                    <div id="mpStars">
                        <span className="stars">★★★★★</span>
                        <span className="rating">
                            {item.rating} ({item.reviews} reviews)
                        </span>
                    </div>
                    <div id="mpDesc">{item.desc}</div>
                    <div id="mpPrice">{item.price}
                        <small>{item.oldPrice}</small></div>
                    <div className="mpmeta" id="mpMeta">
                        <div className="metaBox">
                            <strong>{item.calories}&nbsp;kcal</strong><br />
                            <span>Calories</span>
                        </div>

                        <div className="metaBox">
                            <strong>{item.time}&nbsp;min</strong><br />
                            <span>Prep Time</span>
                        </div>

                        <div className="metaBox">
                            <strong>{item.rating}/5</strong><br />
                            <span>Rating</span>
                        </div>
                    </div>

                    <div className="mpqty">
                        <button className="mpqbtn" id="mpMinus" onClick={() => {
                            if (quantity > 1) {
                                setQuantity(quantity - 1)
                            }
                        }}>-</button>
                        <span className="mpqnum" id="mpQnum">{quantity}</span>
                        <button className="mpqbtn" id="mpPlus" onClick={() => setQuantity(quantity + 1)}>+</button>
                        <span style={{ fontSize: ".82rem", color: "#aaa", marginLeft: "9px" }}>portion</span>
                    </div>
                    <div className="mptags" id="mpTags">
                        {item.tags.map((tag, index) => (
                            <span className="tag" key={index}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <button
                        className="mpaddcart"
                        id="mpAddCart"
                        onClick={() => {
                            onAddToCart(item, quantity)
                            onClose()
                        }}
                    >
                        <i className="fas fa-shopping-cart"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

    )
}

export default MenuPopup