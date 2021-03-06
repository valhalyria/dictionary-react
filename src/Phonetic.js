import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  if (props.phonetic.audio) {
    return (
      <div>
        <span className="phonetic">{props.phonetic.text}</span>
        <span>
          <ReactAudioPlayer src={props.phonetic.audio} controls />
        </span>
      </div>
    );
  } else {
    return (
      <span>
        <span className="phonetic">{props.phonetic.text}</span>
      </span>
    );
  }
}
