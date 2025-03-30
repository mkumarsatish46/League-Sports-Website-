import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoClose } from "react-icons/io5"; // Import close icon

const LoginPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", formData);
            localStorage.setItem("token", response.data.token);
            alert("Login Successful!");
            navigate("/home");
        } catch (err) {
            setError(err.response?.data?.message || "Invalid login credentials");
        }
    };

    return (
        <div style={styles.background}>
            <IoClose style={styles.closeButton} onClick={() => navigate("/")} />
            <div style={styles.container}>
                {/* Close Button */}
                
                <h2 style={styles.title}>Login</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />

                    {error && <p style={styles.error}>{error}</p>}

                    <button type="submit" style={styles.button}>Login</button>

                    <p style={styles.linkText}>
                        Don't have an account? <span style={styles.link} onClick={() => navigate("/signup")}>Register here</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

const styles = {
    background: {
        height: "100vh",
        width: "100%",
        backgroundImage: "url('/images/Admin.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        width: "90%",
        maxWidth: "400px",
        padding: "25px",
        textAlign: "center",
        background: "rgba(0, 0, 0, 0.75)",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
        position: "relative", // Needed for absolute close button
    },
    closeButton: {
        position: "absolute",
        top: "10px",
        right: "10px",
        fontSize: "24px",
        color: "white",
        cursor: "pointer",
    },
    title: {
        color: "#FFC107",
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "15px",
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px",
    },
    input: {
        padding: "12px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #FFC107",
        background: "rgba(255, 255, 255, 0.1)",
        color: "white",
        outline: "none",
        transition: "0.3s",
    },
    button: {
        padding: "12px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#000",
        backgroundColor: "#FFC107",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.3s",
    },
    error: {
        color: "red",
        fontSize: "14px",
    },
    linkText: {
        marginTop: "10px",
        fontSize: "14px",
        color: "white",
    },
    link: {
        color: "#FFC107",
        cursor: "pointer",
        textDecoration: "underline",
    }
};

export default LoginPage;