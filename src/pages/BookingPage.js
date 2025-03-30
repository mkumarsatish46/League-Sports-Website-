import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const sportsList = [
    "Cricket", "Football", "Basketball", "Box-Cricket", "Box-Football",
    "Badminton", "Pickle Ball", "Volleyball", "Sand Volleyball",
    "Kabaddi", "Golf", "Tennis"
];

const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 6; hour < 22; hour++) {
        const ampm = hour < 12 ? "AM" : "PM";
        const displayHour = hour % 12 === 0 ? 12 : hour % 12;
        slots.push(`${displayHour}:00 ${ampm}`);
    }
    return slots;
};

const timeSlots = generateTimeSlots();

const BookingPage = () => {
    const navigate = useNavigate();
    const [selectedSport, setSelectedSport] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [bookedSlots, setBookedSlots] = useState({});
    const [isBooked, setIsBooked] = useState(false);

    useEffect(() => {
        if (selectedSport && selectedDate) {
            const mockBooked = {
                "Cricket": { "2025-04-01": ["10:00 AM", "02:00 PM"] },
                "Football": { "2025-04-01": ["12:00 PM"] }
            };
            setBookedSlots(mockBooked);
        }
    }, [selectedSport, selectedDate]);

    const handleBooking = () => {
        if (!selectedSport || !selectedDate || !selectedTime) {
            alert("⚠️ Please select a sport, date, and time first.");
            return;
        }

        if (bookedSlots[selectedSport]?.[selectedDate]?.includes(selectedTime)) {
            alert("❌ This slot is already booked!");
            return;
        }

        alert(`✅ Booking Confirmed! You have booked ${selectedSport} on ${selectedDate} at ${selectedTime} for ₹100.`);
        
        setBookedSlots((prev) => ({
            ...prev,
            [selectedSport]: {
                ...prev[selectedSport],
                [selectedDate]: [...(prev[selectedSport]?.[selectedDate] || []), selectedTime]
            }
        }));
        setIsBooked(true);
    };

    const today = new Date().toISOString().split("T")[0];

    return (
        <div style={styles.page}>
            <div style={styles.backgroundOverlay}></div>
            <div style={styles.container}>
                <button style={styles.closeButton} onClick={() => navigate("/home")}>✖</button>
                <h2 style={styles.heading}>Book Your Sports Slot</h2>
                <p style={styles.subText}>Each slot for <strong>1</strong> hour</p>

                <div style={styles.sportsGrid}>
                    {sportsList.map((sport, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.sportItem,
                                backgroundColor: selectedSport === sport ? "#ff4500" : "#222",
                                color: selectedSport === sport ? "white" : "lightgray"
                            }}
                            onClick={() => setSelectedSport(selectedSport === sport ? "" : sport)}
                        >
                            {sport}
                        </div>
                    ))}
                </div>

                {selectedSport && (
                    <>
                        <label style={styles.label}>Select Date:</label>
                        <input type="date" style={styles.input} value={selectedDate} min={today} max={today} onChange={(e) => setSelectedDate(e.target.value)} />

                        <label style={styles.label}>Select Time Slot:</label>
                        <div style={styles.timeGrid}>
                            {timeSlots.map((time, index) => (
                                <div
                                    key={index}
                                    style={{
                                        ...styles.timeSlot,
                                        backgroundColor: bookedSlots[selectedSport]?.[selectedDate]?.includes(time) ? "#555" : selectedTime === time ? "#ff4500" : "#333",
                                        color: bookedSlots[selectedSport]?.[selectedDate]?.includes(time) ? "gray" : selectedTime === time ? "white" : "lightgray",
                                        border: "1px solid #ff4500",
                                        cursor: bookedSlots[selectedSport]?.[selectedDate]?.includes(time) ? "not-allowed" : "pointer"
                                    }}
                                    onClick={() => !bookedSlots[selectedSport]?.[selectedDate]?.includes(time) && setSelectedTime(time)}
                                >
                                    {time} {bookedSlots[selectedSport]?.[selectedDate]?.includes(time) ? "(Unavailable)" : "(Available)"}
                                </div>
                            ))}
                        </div>

                        <button
                            style={styles.button}
                            onClick={handleBooking}
                            disabled={isBooked}
                        >
                            {isBooked ? "Booked ✅" : " Book Slot"}
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

const styles = {
    page: {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    backgroundOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('./images/l2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.4)",
        zIndex: -1,
    },
    container: {
        width: "600px",
        padding: "30px",
        textAlign: "center",
        borderRadius: "12px",
        boxShadow: "0px 6px 15px rgba(255, 140, 0, 0.5)",
        background:"transparent",
        backdropFilter: "blur(10px)",
        position: "relative",
        color: "white",
        animation: "fadeIn 0.8s ease-in-out"
    },
    closeButton: {
        position: "absolute",
        top: "10px",
        right: "15px",
        fontSize: "20px",
        background: "transparent",
        border: "none",
        color: "#ff4500",
        cursor: "pointer",
        transition: "0.3s",
    },
    heading: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px"
    },
    subText: {
        fontSize: "16px",
        opacity: "0.8",
        marginBottom: "20px"
    },
    sportsGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        margin: "20px 0",
    },
    sportItem: {
        padding: "12px",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.3s ease",
    },
    label: {
        fontSize: "16px",
        fontWeight: "bold",
        marginTop: "10px",
        display: "block",
    },
    input: {
        padding: "10px",
        width: "100%",
        margin: "10px 0",
        borderRadius: "6px",
        border: "1px solid rgb(0, 255, 234)",
        backgroundColor: "#222",
        color: "white",
    },
    timeGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        margin: "20px 0",
    },
    timeSlot: {
        padding: "12px",
        textAlign: "center",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all 0.3s ease",
    },
    button: {
        padding: "12px",
        fontSize: "18px",
        color: "white",
        backgroundColor: "#ff4500",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        transition: "0.3s ease",
        marginTop: "15px",
    }
};

export default BookingPage;
