import css from './Options.module.css';

//options bileseni kullanıcıya feedback seceneklerini sunar 
// ve feedback verilerini güncellemek icin fonksiyonları alır

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
