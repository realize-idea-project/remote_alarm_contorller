import dayjs, { Dayjs } from "dayjs";
import { PickersDay, PickersDayProps } from "@mui/x-date-pickers/PickersDay";

export const Day = (
  props: PickersDayProps<Dayjs> & { selectedDay?: Dayjs | null }
) => {
  const { day, selectedDay, ...other } = props;

  const getColor = (day: dayjs.Dayjs) => {
    if (day.day() === 6) return "blue";
  };

  return (
    <PickersDay
      day={day}
      sx={{
        color: getColor(day),
        width: "15vw",
        maxHeight: "50px",
      }}
      {...other}
    />
  );
};
