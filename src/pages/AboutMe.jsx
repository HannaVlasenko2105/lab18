import React from 'react';
import mobPhoto from "./photos/mobPhoto.jpg";
import mob2 from "./photos/mob2.jpg";
import mob4 from "./photos/mob4.jpg";

function AboutMe() {
  return (
    <div className="container">
      <h1>Трішечки про мене</h1>
      <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "30px", marginTop: "20px", flexWrap: "nowrap"}}
      >
        <img src={mobPhoto} alt="Моє фото" style={{
            width: "200px",
            minWidth: "200px", 
            height: "auto",
            borderRadius: "20px"
          }}
        />

        <div style={{ flex: 1, textAlign: "left" }}>
          <p>Мене звати Ганна, але мені сильно не подобається повна форма мого імені. Проте ще більш не люблю, коли мене називають Анною, адже це не моє ім'я. Ніколи не звіть мене так!</p>
          <p>Мені 20 та я інтроверт, що не любить великі компанії людей, тому мені набагато цікавіше провести вечір за чашечкою чаю та прочитанням хорошої книги.</p>
        </div>
      </div>

      <div className="container2">
      <h2>Мої хобі</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "30px",
          marginTop: "20px",
          flexWrap: "nowrap",
        }}
      >
        <div style={{ flex: 1, textAlign: "left" }}>
          <p>
            Я — людина різностороння, і мені завжди складно зупинитися на чомусь одному.
            Саме тому у моєму житті є багато захоплень, кожне з яких додає барв у мою щоденність.
            Я читаю: моє захоплення охоплює як художню літературу, так і комікси
            та манґу, це справжній відпочинок для душі. Час від часу я поринаю у світ фільмів та аніме,
            що допомагає мені відкривати нові культури та ідеї. Музика також займає особливе місце у моєму житті.
          </p>
          <p>
            Також певний інтерес у мене викликає ІТ. Я зацікавилась після проходження безкоштовного курсу з розробки гри на Python.
            Це було цікаво, тому я вирішила трохи глибше ознайомитися з темою програмування.
          </p>
        </div>

        <img src={mob2} alt="Моє фото"
          style={{
            width: "200px",
            minWidth: "200px",
            height: "auto",
            borderRadius: "20px",
          }}
        />
      </div>
    </div>

    <div className="container2">
    <h2> Мій досвід</h2>
      <div style={{ textAlign: "center", display: 'inline-block'}}>
        <ul style={{ listStyle: 'none', paddingLeft: 0, textAlign: "left" }}>
          <li>💠HTML & CSS — базовий рівень</li>
          <li>💠JavaScript — створення інтерактивності</li>
          <li>💠React — базовий рівень</li>
          <li>💠С, С++, С# — базовий рівень </li>
          <li>💠Phyton — новачок </li>
          <li>💠MatchCad — базовий рівень</li>
          <li>💠Пакет Microsoft Office — впевнений користувач</li>
          <li>💠SQL — базовий рівень</li>
        </ul>
        </div>
      </div>

      <div className="container2">
      <h2>Мої проєкти</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "30px",
          marginTop: "20px",
          flexWrap: "nowrap"
        }}
      >
        <img src={mob4} alt="Моє фото"
          style={{
            width: "200px",
            minWidth: "200px",
            height: "auto",
            borderRadius: "20px",
          }}
        />

        <div style={{ flex: 1, textAlign: "left" }}>
          <p>
            HTML + CSS:{" "}
            <a href="https://github.com/HannaVlasenko2105/html-css-landing.git" target="_blank" rel="noopener noreferrer">
              html-css-landing
            </a>
          </p>
          <p>
            JavaScript:{" "}
            <a href="https://github.com/HannaVlasenko2105/js-DOM1.git" target="_blank" rel="noopener noreferrer">
              js-DOM1
            </a>,{" "}
            <a href="https://github.com/HannaVlasenko2105/js-DOM2.git" target="_blank" rel="noopener noreferrer">
              js-DOM2
            </a>
          </p>
          <p>
            React:{" "}
            <a href="https://github.com/HannaVlasenko2105/react-first-lab.git" target="_blank" rel="noopener noreferrer">
              react-first-lab
            </a>,{" "}
            <a href="https://github.com/HannaVlasenko2105/react-second-lab.git" target="_blank" rel="noopener noreferrer">
              react-second-lab
            </a>
          </p>
        </div>
      </div>
    </div>

    </div>
  );
};

export default AboutMe;
