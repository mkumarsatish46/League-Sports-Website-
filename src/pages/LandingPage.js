import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick"; // ✅ Import Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPage = () => {
    const navigate = useNavigate();
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);

    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
    };

    return (
        <div style={styles.container}>
            {/* Logo */}
            <div style={styles.logoContainer}>
                <img src="/images/logo.jpg" alt="Logo" style={styles.logo} />
            </div>

            {/* Carousel Section */}
           <Slider {...carouselSettings} style={styles.carousel}>
                <div>
                    <img src="/images/league.jpg" alt="Slide 1" style={styles.carouselImage} />
                </div>
                <div>
                    <img src="/images/league.jpg" alt="Slide 2" style={styles.carouselImage} />
                </div>
                <div>
                    <img src="/images/league.jpg" alt="Slide 3" style={styles.carouselImage} />
                </div>
            </Slider>

            {/* Hero Section */}
            <div style={styles.hero}>
                <h1 style={styles.heroTitle}>WOXSEN SPORTS LEAGUE</h1>
                
                {/* Login & Register Buttons */}
                <div style={styles.buttonContainer}>
                    <button
                        style={{
                            ...styles.navButton,
                            ...(hovered ? styles.navButtonHover : {}),
                            ...(clicked ? styles.navButtonClick : {}),
                        }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onMouseDown={() => setClicked(true)}
                        onMouseUp={() => setClicked(false)}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>

                    <button
                        style={{
                            ...styles.navButton,
                            ...(hovered ? styles.navButtonHover : {}),
                            ...(clicked ? styles.navButtonClick : {}),
                        }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onMouseDown={() => setClicked(true)}
                        onMouseUp={() => setClicked(false)}
                        onClick={() => navigate("/signup")}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0d14", // Dark Background
    },
    logoContainer: {
        position: "absolute",
        top: "20px",
        right: "20px",
    },
    logo: {
        width: "300px", 
        height: "auto",
    },
    carousel: {
        position: "absolute",
        width: "100%",
        height: "100%",
        zIndex: -1,
    },
    carouselImage: {
        width: "100%",
        height: "100vh",
        objectFit: "cover",
    },
    hero: {
        textAlign: "center",
        color: "white",
        zIndex: 1,
        position: "absolute",
    },
    heroTitle: {
        fontSize: "100px",
        fontWeight: "bold",
    },
    buttonContainer: {
        display: "flex",
        gap: "15px",
        marginTop: "20px",
    },
    navButton: {
        padding: "14px 24px",
        fontSize: "18px",
        border: "2px solid rgb(7, 255, 69)",
        background: "transparent",
        color: "#FFC107",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "bold",
        transition: "transform 0.3s ease, background 0.4s ease, box-shadow 0.4s ease",
    },
    navButtonHover: {
        transform: "scale(1.1)",
        background: "Yellow",
        color: "black",
        boxShadow: "0px 0px 15px rgb(15, 255, 7)",
    },
    navButtonClick: {
        transform: "scale(0.95)",
        boxShadow: "0px 0px 5px rgb(7, 255, 7)",
    },
};

export default LandingPage;
