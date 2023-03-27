import { format, parseISO } from 'date-fns';

interface DatePickerProps {
  value: Date;
  onChange: (value: Date) => void;
}

export const DatePicker = ({
  value,
  onChange,
}: DatePickerProps): JSX.Element => (
  <>
    <input
      type="date"
      className="px-8 py-2 outline-none border-2 border-gray-300 rounded-lg"
      onChange={(e) => onChange(parseISO(e.target.value))}
      value={format(value, 'yyyy-MM-dd')}
      data-testid="DatePicker"
    />
  </>
);
