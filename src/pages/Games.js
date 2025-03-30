import React from "react";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();

  const gamesList = [
    { name: "Cricket", img: "/images/cric.jpg", desc: "A bat-and-ball game played between two teams of eleven players." },
    { name: "Turf Cricket", img: "/images/box.jpg", desc: "Cricket played on artificial turf with smaller teams and fast-paced action." },
    { name: "Football", img: "/images/foot.jpg", desc: "A team sport played with a spherical ball between two teams of eleven players." },
    { name: "Turf Football", img: "/images/turff.jpg", desc: "A fast-paced version of football played on artificial grass." },
    { name: "Badminton", img: "/images/badminton.jpg", desc: "A racket sport played using a shuttlecock across a net." },
    { name: "Tennis", img: "/images/tennis.jpg", desc: "A game where players use a racket to hit a ball over a net." },
    { name: "Table Tennis", img: "/images/tt.jpg", desc: "A sport played on a table using paddles and a lightweight ball." },
    { name: "Snooker", img: "/images/snooker.jpg", desc: "A cue sport that requires skill and precision to pot balls into pockets." },
    { name: "8-Ball Pool", img: "/images/8ball.jpg", desc: "A billiards game where players pot balls numbered 1-15 using a cue ball." },
    { name: "Pickleball", img: "/images/pickleball.jpg", desc: "A paddle sport combining elements of badminton, tennis, and table tennis." },
    { name: "Basketball", img: "/images/bt1.jpg", desc: "Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court." }
  ];

  return (
    <div style={styles.container}>
      <button style={styles.closeButton} onClick={() => navigate("/home")}>&times;</button>
      <h1 style={styles.heading}>Available Games</h1>
      <div style={styles.grid}>
        {gamesList.map((game, index) => (
          <div key={index} style={styles.card}>
            <img src={game.img} alt={game.name} style={styles.image} />
            <h2 style={styles.gameTitle}>{game.name}</h2>
            <p style={styles.description}>{game.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "50px 20px",
    textAlign: "center",
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
    minHeight: "100vh",
    color: "white",
    position: "relative"
  },
  closeButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    fontSize: "24px",
    background: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer"
  },
  heading: {
    fontSize: "36px",
    marginBottom: "20px"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1200px",
    margin: "auto"
  },
  card: {
    background: "rgba(255, 255, 255, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    transition: "transform 0.3s ease",
    cursor: "pointer"
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px"
  },
  gameTitle: {
    fontSize: "24px",
    margin: "10px 0"
  },
  description: {
    fontSize: "14px",
    opacity: "0.9"
  }
};

export default Games;
