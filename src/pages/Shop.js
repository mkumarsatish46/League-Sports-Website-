import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Shop = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate(); // React Router navigation

    const products = [
        { id: 1, name: "Cricket Bat", price: 1500, image: "/images/bat.jpg" },
        { id: 2, name: "Cricket Ball", price: 300, image: "/images/ball.jpg" },
        { id: 3, name: "Badminton Racket", price: 1200, image: "/images/racket.jpg" },
        { id: 4, name: "Tennis Racket", price: 1800, image: "/images/req.jpg" },
        { id: 5, name: "Table Tennis Paddle", price: 700, image: "/images/table.jpg" },
        { id: 6, name: "Football", price: 1000, image: "/images/football.jpg" },
        { id: 7, name: "Snooker Cue Stick", price: 2500, image: "/images/cue.jpg" },
        { id: 8, name: "Pickleball Set", price: 900, image: "/images/pick.jpg" },
        { id: 9, name: "Cricket Gloves", price: 500, image: "/images/glove.jpg" },
        { id: 10, name: "Cricket Helmet", price: 1300, image: "/images/hel.jpg" },
        { id: 11, name: "Cricket Shoes", price: 2000, image: "/images/shoe.jpg" },
        { id: 12, name: "Adidas Men Socks", price: 250, image: "/images/soc.jpg" },
        { id: 13, name: "Nivia Engraver Basketball", price: 1000, image: "/images/bt.jpg" }
    ];

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div style={styles.container}>
            {/* Back Button */}
            <button style={styles.closeButton} onClick={() => navigate("/home")}>✖</button>

            <h1 style={styles.heading}>Sports X</h1>
            
            <div style={styles.productsGrid}>
                {products.map((product) => (
                    <div key={product.id} style={styles.productCard}>
                        <img src={product.image} alt={product.name} style={styles.image} />
                        <h3>{product.name}</h3>
                        <p>₹{product.price}</p>
                        <button style={styles.button} onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            <h2 style={styles.cartHeading}>Shopping Cart</h2>
            <div style={styles.cart}>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} style={styles.cartItem}>
                            <span>{item.name}</span> - ₹{item.price}
                        </div>
                    ))
                )}
                {cart.length > 0 && <h3>Total: ₹{calculateTotal()}</h3>}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        background: "url('/images/sport.jpg') ",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    backButton: {
        position: "absolute",
        top: "20px",
        left: "20px",
        padding: "10px 15px",
        backgroundColor: "#FF5733",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
    },
    heading: {
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#222"
    },
    productsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        padding: "10px"
    },
    closeButton: {
        position: "absolute",
        top: "20px",
        right: "30px",
        fontSize: "24px",
        background: "transparent",
        border: "none",
        color: "white",
        cursor: "pointer",
    },
    productCard: {
        background: "#fff",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
    },
    image: {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "5px"
    },
    button: {
        marginTop: "10px",
        padding: "10px",
        fontSize: "14px",
        backgroundColor: "#007BFF",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.3s"
    },
    cartHeading: {
        marginTop: "30px",
        fontSize: "24px",
        fontWeight: "bold"
    },
    cart: {
        marginTop: "10px",
        padding: "10px",
        background: "#fff",
        borderRadius: "5px",
        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
    },
    cartItem: {
        padding: "5px 0",
        fontSize: "16px"
    }
};

export default Shop;
