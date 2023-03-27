import { css } from '@emotion/react';
import { DatePicker } from '@atoms/DatePicker/DatePicker';
import { Interval } from '@resources/Interval';
import { useEffect, useState } from 'react';

const style = css`
  display: inline-block;
`;

interface IntervalSelectorProps {
  interval: Interval;
  onChange: (interval: Interval) => void;
}

export const IntervalSelector = ({
  interval,
  onChange,
}: IntervalSelectorProps): JSX.Element => {
  const [start, updateStart] = useState(interval.start);
  const [end, updateEnd] = useState(interval.end);

  useEffect(() => {
    onChange({ start, end });
  }, [start, end]);

  return (
    <div css={style} data-testid="IntervalSelector">
      <DatePicker value={start} onChange={updateStart} />
      <span className="px-2">～</span>
      <DatePicker value={end} onChange={updateEnd} />
    </div>
  );
};
