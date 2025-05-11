import React from 'react';
import cat4 from "./photos/cat4.jpg";
import cat3 from "./photos/cat3.jpg";
import cat2 from "./photos/cat2.jpg";

function MyFuture() {
  return (
    <div className="container">
      <h1>Моє майбутнє</h1>

      <div style={{ display: "flex", alignItems: "center", flexDirection: "row-reverse" }}>
        <div style={{ textAlign: "left" }}>
          <p>
            Я ще не вирішила остаточно чим займатимуся в майбутньому, але роздумую над розробкою сайтів.
          </p>
          <p>
            Важливо для мене - мати гнучкість у роботі: мати змогу працювати віддалено, подорожувати, відкривати нові місця і культури,
            не втрачаючи при цьому зв'язку з улюбленою справою. Мені хочеться, щоб моя робота поєднувала свободу, розвиток і творче самовираження.
          </p>
          <p>
            Мати змогу працювати у колективі з чудовими людьми, де панує атмосфера взаємоповаги, відкритості та підтримки. Там, де кожен може висловити свою ідею, 
            отримати зворотний зв’язок і не боїться помилитися, бо знає — завжди можна розв’язати проблему разом.
          </p>
          
          <h4>Мої найближчі плани 💭</h4>
            <ol>
              <li>Пройти більше курсів по розробці сайтів</li>
              <li>Розробити свої перші проекти</li>
              <li>Створити портфоліо зі своїх робіт</li>
              <li>Знайти першу роботу в ІТ</li>
            </ol>
        </div>
        <img
          src={cat3}
          alt="cat3"
          style={{
            width: "200px",
            height: "auto",
            borderRadius: "20px",
            marginRight: "20px"
          }}
        />
      </div>

      <div className="container2" style={{ display: "flex", alignItems: "center", marginBottom: "20px"  }}>
        <div style={{ flex: 1, textAlign: "left" }}>
          <h3 style={{textAlign: "left" }}>Кроки в майбутнє:</h3>
          <h4>Дослухатися до себе</h4> 
          <p> Важливо вміти зупинитися, подумати, що справді цікаво, 
          і не боятися змінювати напрям, якщо щось більше не надихає. Світ змінюється — і ми теж.</p>
          <h4>Розвивати навички, навіть якщо не впевнений, що це «моє»</h4>
          <p>Часто ми відкриваємо захоплення лише через спробу. Інколи те, що здавалось «не моїм», стає справжнім відкриттям.</p>
          <h4>Бути відкритим до нових людей і досвіду</h4>
          <p>Розвиток — це не лише знання, а й розмови, поради, підтримка. У сильному колі друзів, наставників
            і навіть випадкових знайомств ми ростемо швидше.</p>
        </div>
        <img
          src={cat4}
          alt="cat4"
          style={{
            width: "200px",
            height: "auto",
            borderRadius: "20px",
            marginRight: "20px"
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", flexDirection: "row-reverse" }}>
        <div style={{ flex: 1, textAlign: "left" }}>
          <h3>"Є ще багато доріг. Завжди можна обрати щось краще. І ваша дорога стане щасливіше."</h3>
        </div>
        <img
          src={cat2}
          alt="cat2"
          style={{
            width: "200px",
            height: "auto",
            borderRadius: "20px",
            marginRight: "20px"
          }}
        />
      </div>
    </div>
  );
};

export default MyFuture;
