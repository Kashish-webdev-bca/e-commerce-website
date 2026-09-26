import { useEffect } from "react"

function Cart({
    isOpen,
    cartItems,
    onClose,
    onIncrease,
    onDecrease,
    onRemove,
    onCheckout
}) {
    // Cart open hone par background scroll lock
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

    const getPrice = (price) => {
        return Number(price.replace("$", ""))
    }

    const subtotal = cartItems.reduce(
        (total, item) => {
            return total + getPrice(item.price) * item.quantity
        },
        0
    )

    // Cart closed hai to kuch bhi render mat karo
    if (!isOpen) {
        return null
    }


    return (

        <div className="cartOverlay">

            <div className="cartDrawer">

                {/* Cart Header */}

                <div className="cartHeader">

                    <h3>Your Cart</h3>

                    <button
                        type="button"
                        className="cartClose"
                        onClick={onClose}
                    >
                        <i className="fas fa-times"></i>
                    </button>

                </div>


                {/* Cart Body */}

                <div className="cartBody">

                    {cartItems.length === 0 ? (

                        <div className="emptyCart">

                            <i className="fas fa-shopping-cart"></i>

                            <h4>Your cart is empty</h4>

                            <p>
                                Add some delicious items to your cart.
                            </p>

                        </div>

                    ) : (

                        cartItems.map((item, index) => (

                            <div
                                className="cartItem"
                                key={index}
                            >

                                <img
                                    src={item.img}
                                    alt={item.title}
                                />

                                <div className="cartItemInfo">

                                    <h5>{item.title}</h5>

                                    <p>{item.price} × {item.quantity}</p>

                                    <strong>
                                        Item Total: $
                                        {(getPrice(item.price) * item.quantity).toFixed(2)}
                                    </strong>

                                    <div className="cartQuantity">

                                        <button
                                            type="button"
                                            onClick={() => onDecrease(item.title)}
                                        >
                                            -
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button
                                            type="button"
                                            onClick={() => onIncrease(item.title)}
                                        >
                                            +
                                        </button>

                                        <button
                                            type="button"
                                            className="cartRemove"
                                            onClick={() => onRemove(item.title)}
                                        >
                                            <i className="fas fa-trash"></i>
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))

                    )}

                </div>

                {cartItems.length > 0 && (

                    <div className="cartFooter">

                        <div className="cartSubtotal">

                            <span>Subtotal</span>

                            <strong>
                                ${subtotal.toFixed(2)}
                            </strong>

                        </div>

                        <button
                            className="checkoutBtn"
                            onClick={onCheckout}
                        >
                            Checkout
                        </button>

                    </div>

                )}

            </div>

        </div>
    )
}

export default Cart