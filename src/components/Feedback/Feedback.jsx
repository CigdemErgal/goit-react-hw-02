import css from "./Feedback.module.css";

//feedback coponentine gelen propsları kullanarak feedback istatistiklerini gösteriyoruz

export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <section className={css.box}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positive}%</p>
    </section>
  );
}
