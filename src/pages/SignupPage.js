import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoClose } from "react-icons/io5";
const SignupPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/signup", formData);
            setSuccess("Signup successful! Redirecting...");
            setError("");
            setTimeout(() => navigate("/login"), 2000);
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div style={styles.background}>
              <IoClose style={styles.closeButton} onClick={() => navigate("/")} />
            <div style={styles.container}>
                <h2 style={styles.title}>Signup</h2>
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required style={styles.input} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={styles.input} />
                    <input type="text" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} required style={styles.input} />
                    <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={styles.input} />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required style={styles.input} />

                    {error && <p style={styles.error}>{error}</p>}
                    {success && <p style={styles.success}>{success}</p>}

                    <button type="submit" style={styles.button}>Signup</button>

                    <p style={styles.linkText}>
                        Already have an account? <span style={styles.link} onClick={() => navigate("/login")}>Login here</span>
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
        backgroundImage: "url('/images/spool.jpg')",
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
        animation: "fadeIn 1s ease-in-out",
    },
    title: {
        color: "#FFC107",
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "15px",
    },
    closeButton: {
        position: "absolute",
        top: "10px",
        right: "10px",
        fontSize: "24px",
        color: "white",
        cursor: "pointer",
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
    success: {
        color: "green",
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

export default SignupPage;
