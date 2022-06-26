import React from "react";
import ReactDOM from "react-dom";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>You are good to go!</span>;

const previewDigit = (digit) => {
  const digitComp = Array.from(String(digit)).map((number, index) => {
    return (
      <div className="singleDigit" key={index}>
        {number}
      </div>
    );
  });
  if (Array.from(String(digit))?.length > 1) {
    return digitComp;
  } else {
    return (
      <>
        <div className="singleDigit">0</div>
        {digitComp}
      </>
    );
  }
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <span className="digitList">
        {days ? (
          <>
            <div>
              <div className="digitBox">{previewDigit(days)}</div>
              <p>Days</p>
            </div>
            <div className="dot"></div>
          </>
        ) : (
          ""
        )}
        {hours ? (
          <>
            <div>
              <div className="digitBox">{previewDigit(hours)}</div>
              <p>Hours</p>
            </div>
            <div className="dot"></div>
          </>
        ) : (
          ""
        )}
        {minutes ? (
          <>
            <div>
              <div className="digitBox">{previewDigit(minutes)}</div>
              <p>Minutes</p>
            </div>
            <div className="dot"></div>
          </>
        ) : (
          ""
        )}
        {seconds ? (
          <div>
            <div className="digitBox">{previewDigit(seconds)}</div>
            <p>Seconds</p>
          </div>
        ) : (
          ""
        )}
      </span>
    );
  }
};

const Counter = () => {
  return <Countdown date={Date.now() + 1500000000} renderer={renderer} />;
};

export default Counter;
