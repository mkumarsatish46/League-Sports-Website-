import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
    };

    return (
        <div style={styles.container}>
            {/* Close Button */}
            <button style={styles.closeButton} onClick={() => navigate("/home")}>✖</button>

            <h1 style={styles.heading}>Contact Us</h1>
            <p style={styles.subtext}>We’d love to hear from you!</p>

            {/* Contact Form */}
            <form style={styles.form} onSubmit={handleSubmit}>
                <label style={styles.label}>Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} style={styles.input} required />

                <label style={styles.label}>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} style={styles.input} required />

                <label style={styles.label}>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="4" style={styles.textarea} required />

                <button type="submit" style={styles.button}>Send Message</button>
            </form>

            {/* Contact Info */}
            <div style={styles.infoContainer}>
                <p style={styles.infoText}>📍 Location: Woxsen University, Telangana, India</p>
                <p style={styles.infoText}>📧 Email: SportsAcademy@woxsen.edu.in</p>
                <p style={styles.infoText}>📞 Phone: +91 8328533891</p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "url('/images/league2.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        padding: "50px",
        position: "relative",
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
    heading: {
        fontSize: "3rem",
        fontWeight: "bold",
        marginTop: "50px",
    },
    subtext: {
        marginTop: "10px",
        fontSize: "1.2rem",
    },
    form: {
        marginTop: "30px",
        background: "transparent",
        color: "white",
        padding: "25px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        width: "350px",
        display: "flex",
        flexDirection: "column",
    },
    label: {
        fontWeight: "bold",
        marginBottom: "5px",
    },
    input: {
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        marginBottom: "15px",
        background: "transparent",
        color: "white",
    },
    textarea: {
        width: "100%",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        color: "white",
        marginBottom: "15px",
        resize: "none",
        background: "transparent",
    },
    button: {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        backgroundColor: "#ffcc00",
        color: "white",
        fontWeight: "bold",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "0.3s",
    },
    infoContainer: {
        marginTop: "40px",
    },
    infoText: {
        fontSize: "1.1rem",
        marginTop: "10px",
    },
};

export default ContactUs;
