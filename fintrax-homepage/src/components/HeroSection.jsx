import "../styles/HeroSection.css";
import Button from "./Button";
import botImage from "../assets/bothero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>FintraX tu asistente Virtual con IA.</h1>
        <p>“De la complejidad a la calma: tus finanzas más claras que nunca con Fintrax.”</p>
        <div className="hero-buttons">
          <Button text="Regístrate ahora" variant="primary" />
          <Button text="Descubrir FintraX" variant="secondary" />
        </div>
      </div>

      <div className="hero-image">
        <img src={botImage} alt="Bot de FintraX" />
      </div>
    </section>
  );
}
