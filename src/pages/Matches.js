import React, { useState, useEffect } from "react";

const matchesData = [
    { id: 1, sport: "Cricket", date: "2025-04-01", time: "10:00 AM", teams: "Team A vs Team B", status: "Upcoming" },
    { id: 2, sport: "Football", date: "2025-04-01", time: "12:00 PM", teams: "Team C vs Team D", status: "Ongoing" },
    { id: 3, sport: "Basketball", date: "2025-03-30", time: "03:00 PM", teams: "Team E vs Team F", status: "Completed" },
];

const Matches = () => {
    const [selectedSport, setSelectedSport] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [filteredMatches, setFilteredMatches] = useState(matchesData);

    useEffect(() => {
        let filtered = matchesData;
        if (selectedSport) {
            filtered = filtered.filter(match => match.sport === selectedSport);
        }
        if (selectedDate) {
            filtered = filtered.filter(match => match.date === selectedDate);
        }
        setFilteredMatches(filtered);
    }, [selectedSport, selectedDate]);

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Matches</h2>
            <div style={styles.filters}>
                <select style={styles.select} onChange={(e) => setSelectedSport(e.target.value)}>
                    <option value="">All Sports</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Football">Football</option>
                    <option value="Basketball">Basketball</option>
                </select>
                <input type="date" style={styles.input} onChange={(e) => setSelectedDate(e.target.value)} />
            </div>
            <div style={styles.matchesList}>
                {filteredMatches.map(match => (
                    <div key={match.id} style={styles.matchCard}>
                        <h3>{match.sport}</h3>
                        <p><strong>Teams:</strong> {match.teams}</p>
                        <p><strong>Date:</strong> {match.date}</p>
                        <p><strong>Time:</strong> {match.time}</p>
                        <p style={{ color: match.status === "Ongoing" ? "orange" : match.status === "Completed" ? "gray" : "green" }}>
                            <strong>Status:</strong> {match.status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: { textAlign: "center", padding: "20px", color: "white" },
    heading: { fontSize: "24px", marginBottom: "10px" },
    filters: { display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" },
    select: { padding: "8px", fontSize: "16px" },
    input: { padding: "8px", fontSize: "16px" },
    matchesList: { display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" },
    matchCard: { background: "#222", padding: "15px", borderRadius: "8px", width: "250px", boxShadow: "0 4px 10px rgba(255,140,0,0.5)" },
};

export default Matches;
