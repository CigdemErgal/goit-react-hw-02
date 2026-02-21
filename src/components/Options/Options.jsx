import css from './Options.module.css';

// options bileþeni içine 3 buton ekledik ve her butona týklandýðýnda
// onLeaveFeedback fonksiyonunu çaðýrarak ilgili feedback türünü güncelliyoruz

export default function Options({ onLeaveFeedback, onReset, totalFeedback }) {
  return (
    <div className={css.box}>
      <button className={css.button} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}
