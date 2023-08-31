import React, { useEffect, useState } from "react";
import clapSound from "../../audios/clap-132993.mp3";
import hihat from "../../audios/hi-hat100639.mp3";
import kick from "../../audios/rock-kick-130755.mp3";
import openHat from "../../audios/open-hat-snake-100639 (1).mp3";
import floor from "../../audios/floor_tom-96475.mp3";
import ride from "../../audios/long-ride-cymbal-2-36337.mp3";
import snare from "../../audios/drum-roll-please-6386.mp3";
import conga from "../../audios/fillin-fill-timbal-edm-reggae-loop-18-12766.mp3";
import crash from "../../audios/crash_a_ms1-90008.mp3";
import "./index.css";

export const Main = () => {
  const [playingKey, setPlayingKey] = useState(null);

  const keys = [
    { letter: "A", dataKey: 65, sound: "CLAP", audio: clapSound },
    { letter: "D", dataKey: 68, sound: "HIHAT", audio: hihat },
    { letter: "P", dataKey: 80, sound: "KICK", audio: kick },
    { letter: "F", dataKey: 70, sound: "OPENHAT", audio: openHat },
    { letter: "K", dataKey: 75, sound: "FLOOR", audio: floor },
    { letter: "H", dataKey: 72, sound: "RIDE", audio: ride },
    { letter: "S", dataKey: 83, sound: "SNARE", audio: snare },
    { letter: "J", dataKey: 74, sound: "TOM", audio: conga },
    { letter: "R", dataKey: 82, sound: "TINK", audio: crash },
  ];

  const diferentsLetters = (keyData) => {
    const audio = new Audio(keyData.audio);
    audio.play();
    setPlayingKey(keyData.dataKey);
    setTimeout(() => {
      setPlayingKey(null);
    }, 500);
  };

  const handleKeyDown = (e) => {
    const keyData = keys.find((key) => key.dataKey === e.keyCode);

    if (keyData) {
      if (keyData.dataKey === 65) {
        diferentsLetters(keyData);
      }
      if (keyData.dataKey === 68) {
        diferentsLetters(keyData);
      }
      if (keyData.dataKey === 80) {
        diferentsLetters(keyData);
      }
      if (keyData.dataKey === 70) {
        diferentsLetters(keyData);
      }
      if (keyData.dataKey === 75) {
        diferentsLetters(keyData);
      }
      if (keyData.dataKey === 72) {
        diferentsLetters(keyData);
      }
      if (keyData.dataKey === 83) {
        diferentsLetters(keyData);
      }
      if (keyData.dataKey === 74) {
        diferentsLetters(keyData);
      }
      if (keyData.dataKey === 82) {
        diferentsLetters(keyData);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    // <div className="content_image">
    <div className="content_divs">
      {keys.map((el, index) => (
        <div
          key={el.dataKey}
          id={el.dataKey}
          className={playingKey === el.dataKey ? "playing" : "content_letter"}
        >
          <span className="letter">{el.letter}</span>
          <span className="sound">{el.sound}</span>
        </div>
      ))}
    </div>
    // </div>
  );
};
