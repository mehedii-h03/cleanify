"use-client";

import React, { useEffect, useState } from "react";

type TCountDownProps = {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

const CompletionMessage = () => <span>Sorry, the offer has ended.</span>;

const CountdownContainer = ({
  hours,
  minutes,
  seconds,
  completed,
}: TCountDownProps) => {
  if (completed) {
    return <CompletionMessage />;
  } else {
    return (
      <div className="text-center my-10 text-TPrimary space-y-3">
        <h1 className="text-4xl font-bold">Flash Sale</h1>
        <p className="mt-3 text-lg">
          Great offer, save up to 35%! Only for short time
        </p>
        <div className="flex justify-center gap-2">
          <div className="bg-TPrimary border-gray-500 text-white p-2 rounded-md">
            <p className="text-2xl font-bold">
              {hours > 9 ? hours : "0" + hours}
            </p>
          </div>
          <div className="bg-TPrimary border-gray-500 text-white p-2 rounded-md">
            <p className="text-2xl font-bold">
              {minutes > 9 ? minutes : "0" + minutes}
            </p>
          </div>
          <div className="bg-TPrimary border-gray-500 text-white p-2 rounded-md">
            <p className="text-2xl font-bold">
              {seconds > 9 ? seconds : "0" + seconds}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 25,
    seconds: 50,
  });
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft.seconds === 0) {
        if (timeLeft.minutes === 0) {
          if (timeLeft.hours === 0) {
            clearInterval(timer);
            setCompleted(true);
          } else {
            setTimeLeft({
              hours: timeLeft.hours - 1,
              minutes: 59,
              seconds: 59,
            });
          }
        } else {
          setTimeLeft({
            hours: timeLeft.hours,
            minutes: timeLeft.minutes - 1,
            seconds: 59,
          });
        }
      } else {
        setTimeLeft({
          hours: timeLeft.hours,
          minutes: timeLeft.minutes,
          seconds: timeLeft.seconds - 1,
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <CountdownContainer
      hours={timeLeft.hours}
      minutes={timeLeft.minutes}
      seconds={timeLeft.seconds}
      completed={completed}
    />
  );
};

export default Countdown;
