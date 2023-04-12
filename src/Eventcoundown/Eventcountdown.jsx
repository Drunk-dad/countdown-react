import cn from 'classnames';
import dayjs, { extend } from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
import { useEffect, useState } from 'react';

import * as style from "./EventCountdown.module.css";

extend(durationPlugin);

const timeDefaulTips = {
  daysTip: 'Days',
  hoursTip: 'Hours',
  minutesTip: 'Minutes',
  secondsTip: 'Seconds',
};

const Eventcountdown = (props) => {
  const {
    className,
    eventDate,
    title = 'Before the event',
    titleClassName,
    timeClassName,
    timeTips = timeDefaulTips,
		onTick,
		onFinish
  } = props;

  const { daysTip, hoursTip, minutesTip, secondsTip } = timeTips;

  const event = dayjs(eventDate);

  const initialTime = '0:0:0:0';

  const [eventDateDiff, setEventDateDiff] = useState(initialTime);
  const isDateInPast = (date) => dayjs().isAfter(dayjs(date));
  const duration = (time) => dayjs.duration(time);

  useEffect(() => {
    const durationToNow = duration(event.diff(dayjs()));
    const durationToNowAsString = `${Math.floor(
      durationToNow.asDays(),
    )}:${durationToNow.hours()}:${durationToNow.minutes()}:${durationToNow.seconds()}`;

    const interval = setInterval(() => {
      setEventDateDiff(isDateInPast(eventDate) ? initialTime : durationToNowAsString);
			onTick()
    }, 1000);

		if(isDateInPast(eventDate)) {
			onFinish()
		}

    return () => clearInterval(interval);
  }, [eventDateDiff]);

  const [days, hours, minutes, seconds] = eventDateDiff.split(':');

  return (
    <div className={className}>
      <p class={cn(style.title, titleClassName)}>{title}</p>
      <p class={cn(style.time, timeClassName)}>
        {days !== 0 && `${days}${daysTip}`} {`${hours}${hoursTip}`} {`${minutes}${minutesTip}`}{' '}
        {`${seconds}${secondsTip}`}
      </p>
    </div>
  );
};

export default Eventcountdown;
