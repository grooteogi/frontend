import { useEffect, useState } from 'react';
import Typography from '@components/common/Typography';
import theme from '@styles/theme';

const Timer = ({
  isStart = false,
  limitMin,
  fontColor,
}: {
  isStart: boolean;
  limitMin: number;
  fontColor: keyof typeof theme.color;
}) => {
  const [minutes, setMinutes] = useState(limitMin);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isStart) {
      const countdown = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdown);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [minutes, seconds, isStart]);

  return (
    <Typography size={'sm'} color={fontColor}>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Typography>
  );
};

export default Timer;
