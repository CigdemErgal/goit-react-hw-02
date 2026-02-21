import { useEffect, useState } from "react";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notifications from "./components/Notifications/Notifications.jsx";
import css from "./App.module.css";

//STROAGE_KEY sabiti, localStorage'da kullanılacak anahtarı tanımlar
const STROAGE_KEY = "sip-happens-feedback";
const initialFeedback = { good: 0, neutral: 0, bad: 0 };

//App bileseni, kullanıcıdan gelen feedback verilerini yönetir
// ve diger bilesenlere ileterek uygulamanın ana yapısını olusturur
export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem(STROAGE_KEY);
    return saved ? JSON.parse(saved) : initialFeedback;
  });

  useEffect(() => {
    localStorage.setItem(STROAGE_KEY, JSON.stringify(feedback));
  }, [feedback]);

  //feedbacktyple ile hangi feedback türünün güncelleneceğini belirleyerek
  //  feedback state'ini güncelliyoruz

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  //resetFeedback fonksiyonu, feedback state'ini baslangıc degerlerine sıfırlamak icin kullanılır
  const resetFeedback = () => setFeedback(initialFeedback);

  //toplam feedback sayısını ve olumlu feedback yüzdesini hesaplıyoruz
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;
  //olusturduğumuz bilesenleri render ediyoruz
  return (
    <div className={css.container}>
      <Description />
      <Options 
      onLeaveFeedback={updateFeedback}
      onReset={resetFeedback}
      totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
      <Feedback
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={totalFeedback}
        positive={positiveFeedback}
      />
      ) : (
        <Notifications message="No feedback yet" />
      )}
    </div>
  );
}
