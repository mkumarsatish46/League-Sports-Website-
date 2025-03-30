import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
    const navigate = useNavigate();

    return (
        <div style={styles.page}>
            <div style={styles.container}>
                {/* Close Button */}
                <button style={styles.closeButton} onClick={() => navigate("/home")}>✖</button>

                <h1 style={styles.title}>About Us</h1>

                {/* Introduction */}
                <section style={styles.section}>
                    <h2 style={styles.subtitle}>Welcome to Sports Arena!</h2>
                    <p style={styles.text}>
                        Your one-stop platform for booking sports slots and purchasing high-quality sports gear. 
                        Designed for <strong>Woxsen University</strong> students and sports enthusiasts, 
                        our goal is to make sports more accessible, convenient, and enjoyable. 
                        Whether you want to play your favorite sport or grab the best equipment, we’ve got you covered!
                    </p>
                </section>

                {/* Mission & Vision */}
                <section style={styles.section}>
                    <h2 style={styles.subtitle}>Our Mission & Vision</h2>
                    <p style={styles.text}>
                        <strong>Mission:</strong> To promote sports participation by providing a seamless booking experience 
                        and access to affordable sports gear. We strive to make sports more accessible for everyone. 
                    </p>
                    <p style={styles.text}>
                        <strong>Vision:</strong> To expand our platform with more sports options, introduce tournaments, 
                        and improve sports facilities for students and enthusiasts.
                    </p>
                </section>

                {/* Features & Offerings */}
                <section style={styles.section}>
                    <h2 style={styles.subtitle}>What We Offer</h2>
                    
                    <div style={styles.featureBox}>
                        <h3 style={styles.featureTitle}>🎯 Game Slot Booking</h3>
                        <ul style={styles.list}>
                            <li>Easy online booking system.</li>
                            <li>Real-time updates on slot availability.</li>
                            <li>Affordable pricing (₹100 per slot, 1-hour duration).</li>
                            <li>Multiple sports options (Cricket, Football, Badminton, etc.).</li>
                            <li>Instant booking confirmation via email/SMS.</li>
                        </ul>
                    </div>

                    <div style={styles.featureBox}>
                        <h3 style={styles.featureTitle}>🛍️ Sports Equipment Shop</h3>
                        <ul style={styles.list}>
                            <li>Wide range of sports gear, including bats, footballs, rackets, gloves, and helmets.</li>
                            <li>Secure and easy checkout process.</li>
                            <li>Multiple payment options.</li>
                            <li>Special discounts and promotions for students.</li>
                        </ul>
                    </div>
                </section>

                {/* Why Choose Us? */}
                <section style={styles.section}>
                    <h2 style={styles.subtitle}>Why Choose Us?</h2>
                    <ul style={styles.list}>
                        <li><strong>✅ Convenient:</strong> Book game slots anytime, anywhere.</li>
                        <li><strong>💰 Affordable:</strong> Best pricing for students.</li>
                        <li><strong>🔒 Reliable:</strong> Guaranteed slot reservations & quality sports gear.</li>
                        <li><strong>📡 Real-Time Updates:</strong> Stay informed about availability & stock.</li>
                    </ul>
                </section>

                {/* Contact Information */}
                <section style={styles.section}>
                    <h2 style={styles.subtitle}>Get in Touch</h2>
                    <p style={styles.text}>📧 Email: SportsAcademy@woxsen.edu.in</p>
                    <p style={styles.text}>📞 Phone: +91 98765 43210</p>
                    <p style={styles.text}>📍 Location: Woxsen University, Sports Arena</p>
                </section>
            </div>
        </div>
    );
};

// Inline CSS Styles
const styles = {
    page: {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "url('https://source.unsplash.com/1600x900/?sports,team') no-repeat center center/cover",
        padding: "20px",
        position: "relative",
    },
    container: {
        width: "70%",
        padding: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        borderRadius: "12px",
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        maxHeight: "90vh",
        overflowY: "auto",
    },
    closeButton: {
        position: "absolute",
        top: "20px",
        right: "30px",
        fontSize: "24px",
        background: "transparent",
        border: "none",
        color: "black",
        cursor: "pointer",
    },
    title: {
        fontSize: "32px",
        fontWeight: "bold",
        marginBottom: "20px",
    },
    section: {
        marginBottom: "20px",
        textAlign: "left",
    },
    subtitle: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
        color: "#007BFF",
    },
    text: {
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#333",
    },
    featureBox: {
        backgroundColor: "#f0f0f0",
        padding: "15px",
        borderRadius: "8px",
        marginBottom: "10px",
    },
    featureTitle: {
        fontSize: "20px",
        fontWeight: "bold",
        color: "#FF5733",
        marginBottom: "5px",
    },
    list: {
        textAlign: "left",
        fontSize: "16px",
        color: "#333",
        paddingLeft: "20px",
    }
};

export default AboutUs;
