import React from "react";
import { useNavigate } from "react-router-dom";

const Clubs = () => {
    const navigate = useNavigate();

    const clubs = [
        { id: 1, name: "Cricket Club", image: "/images/c1.jpg" },
        { id: 2, name: "Football Club", image: "/images/c2.jpg" },
        { id: 3, name: "Badminton Club", image: "/images/c3.jpg" },
        { id: 4, name: "Basketball Club", image: "/images/c3.jpg" },
        { id: 5, name: "Table Tennis Club", image: "/images/table_tennis_club.jpg" },
        { id: 6, name: "Volleyball Club", image: "/images/volleyball_club.jpg" },
        { id: 7, name: "Tennis Club", image: "/images/tennis_club.jpg" },
        { id: 8, name: "Swimming Club", image: "/images/swimming_club.jpg" },
        { id: 9, name: "Chess Club", image: "/images/chess_club.jpg" }
    ];

    return (
        <div style={styles.container}>
            <button style={styles.closeButton} onClick={() => navigate("/home")}>&times;</button>
            <h1 style={styles.heading}>WOXSEN SPORTS Academy</h1>
            <div style={styles.clubsGrid}>
                {clubs.map((club) => (
                    <div key={club.id} style={styles.clubCard}>
                        <img src={club.image} alt={club.name} style={styles.image} />
                        <h3 style={styles.clubName}>{club.name}</h3>
                    </div>
                ))}
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
        position: "relative"
    },
    closeButton: {
        position: "absolute",
        top: "20px",
        right: "20px",
        fontSize: "24px",
        background: "transparent",
        border: "none",
        color: "black",
        cursor: "pointer"
    },
    heading: {
        fontSize: "28px",
        fontWeight: "bold",
        marginBottom: "20px",
        color: "#222"
    },
    clubsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        padding: "10px"
    }, 
    clubCard: {
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
    clubName: {
        marginTop: "10px",
        fontSize: "18px",
        fontWeight: "bold",
        color: "#007BFF"
    }
};

export default Clubs;
