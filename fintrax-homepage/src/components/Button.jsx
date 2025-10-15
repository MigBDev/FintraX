import "../styles/Button.css";

export default function Button({ text, variant = "primary", onClick }) {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}
// pequeño cambio para reactivar el deploy
