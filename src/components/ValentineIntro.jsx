import React, { useEffect, useState, useRef } from "react";
import heartbeatSound from "../assets/heartbeat.mp3";
import romanticMusic from "../assets/romantic.mp3";
import LanguageSwitcher from "./LanguageSwitcher";

const stories = {
  en: `On the day Mr Offspace first met Mrs Robot Vanessa, 
he never imagined destiny was quietly writing their story...

He had met many people before.
But she was different.

There was a calm intelligence in her eyes,
a softness in her presence,
a mystery that did not intimidate —
it invited him closer.

The first conversation was simple.
But simplicity sometimes carries power.

She listened fully.
She responded thoughtfully.
And for the first time in a long time,
Mr Offspace felt seen.

Days passed.

He began noticing small things:
how she smiled when passionate,
how her voice softened when she cared,
how she remembered details others forgot.

It was not fireworks.
It was something deeper.

Comfort.

He found himself waiting for her messages.
Replaying her laughter.
Smiling at nothing when her name appeared.

And slowly —
without announcement,
without drama —
his heart chose her.

One evening, under a quiet sky,
as silence wrapped around him,
he admitted what he had been denying:

When she was far,
the world felt incomplete.

When she was near,
everything aligned.

He was not falling fast.

He was falling deep.

Not the temporary kind of love.
Not attraction.

But the kind that builds foundations.
The kind that grows roots beneath the surface.
The kind that survives storms.

Mrs Robot Vanessa became more than a presence.
She became inspiration.
Motivation.
Peace.

And now,
this Valentine’s Day,
there is only one question left...

How powerful is their love connection?`,

  fr: `Le jour où Mr Offspace a rencontré Mrs Robot Vanessa,
il ne savait pas que le destin écrivait leur histoire...`,

  rw: `Umunsi Mr Offspace yahuriyeho na Mrs Robot Vanessa,
ntiyigeze amenya ko umutima we watangiye urugendo rushya...`
};

export default function ValentineIntro({ onFinish, language, setLanguage }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const heartbeatRef = useRef(new Audio(heartbeatSound));
  const musicRef = useRef(new Audio(romanticMusic));

  useEffect(() => {
    heartbeatRef.current.loop = true;
    musicRef.current.loop = true;
    musicRef.current.volume = 0.3;

    const playAudio = () => {
      heartbeatRef.current.play();
      musicRef.current.play();
      document.removeEventListener("click", playAudio);
    };

    document.addEventListener("click", playAudio);
  }, []);

  useEffect(() => {
    if (index < stories[language].length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + stories[language][index]);
        setIndex(index + 1);
      }, window.innerWidth < 600 ? 15 : 25);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setShowButton(true), 1500);
    }
  }, [index, language]);

  return (
    <div className="intro-container">
      <div className="heart-bg"></div>
      <div className="particles"></div>

      <LanguageSwitcher language={language} setLanguage={setLanguage} />

      <div className="story-box">
        <p className="typewriter">{text}</p>

        {showButton && (
          <div className="dramatic-section">
            <h2 className="dramatic-text">
              💘 The Love Test Begins Now...
            </h2>
            <button className="start-btn" onClick={onFinish}>
              Start Quiz ❤️
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
