import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            {/* Navigation Bar */}
            <nav style={styles.navbar}>
                <h2 style={styles.logo}>Sports Slot Booking</h2>
                <ul style={styles.navLinks}>
                    <li style={styles.navItem} onClick={() => navigate("/clubs")}>Clubs</li>
                    <li style={styles.navItem} onClick={() => navigate("/matches")}>Matches</li>
                    <li style={styles.navItem} onClick={() => navigate("/shop")}>Shop</li>
                    <li style={styles.navItem} onClick={() => navigate("/games")}>Games</li>
                    <li style={styles.navItem} onClick={() => navigate("/aboutus")}>About Us</li>
                    <li style={styles.navItem} onClick={() => navigate("/contact")}>Contact Us</li>
                </ul>
            </nav>

            {/* Slot Booking Container */}
            <div style={styles.slotContainer}>
                <h1>Welcome to Sports Slot Booking</h1>
                <p>Book your favorite sports slots quickly and easily!</p>
                <button style={styles.button} onClick={() => navigate("/book-slot")}>Book a Slot</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0d14",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        position: "relative",
        backgroundImage: "url('/images/l1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    navbar: {
        position: "absolute",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#000",
        color: "white",
        boxShadow: "0px 4px 8px rgba(255, 255, 255, 0.1)",
    },
    logo: {
        fontSize: "22px",
        fontWeight: "bold",
    },
    navLinks: {
        display: "flex",
        gap: "15px",
        listStyle: "none",
    },
    navItem: {
        cursor: "pointer",
        padding: "8px 15px",
        borderRadius: "5px",
        transition: "0.3s",
        color: "white",
        fontWeight: "bold",
    },
    slotContainer: {
        marginTop: "70px",
        padding: "30px",
        background: "rgba(0, 0, 0, 0.8)", // Dark transparent box
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(255, 255, 255, 0.2)",
        color: "white",
        maxWidth: "500px",
        width: "90%",
        textAlign: "center",
    },
    button: {
        padding: "12px 20px",
        fontSize: "18px",
        color: "white",
        backgroundColor: "red",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        boxShadow: "0px 4px 8px rgba(111, 255, 0, 0.5)",
    },
};

export default HomePage;
