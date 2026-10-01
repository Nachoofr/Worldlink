import { useState } from "react";
import { Moon, Sun } from "lucide-react";

type TimeRangePickerProps = {
  startTime?: string;
  endTime?: string;
  onStartTimeChange?: (value: string) => void;
  onEndTimeChange?: (value: string) => void;
};

type TimeIconProps = {
  value: string;
};

// returns true if the given "HH:MM" 24-hour value falls in PM (12:00–23:59)
const isPM = (value: string): boolean => {
  if (!value) return false;
  const hour = parseInt(value.split(":")[0], 10);
  return hour >= 12;
};

const TimeIcon = ({ value }: TimeIconProps) =>
  isPM(value) ? (
    <Moon className="w-4 h-4 text-[#8A8C99] absolute right-3 top-1/2 -translate-y-1/2" />
  ) : (
    <Sun className="w-4 h-4 text-[#8A8C99] absolute right-3 top-1/2 -translate-y-1/2" />
  );

export default function TimeRangePicker({
  startTime: startTimeProp,
  endTime: endTimeProp,
  onStartTimeChange,
  onEndTimeChange,
}: TimeRangePickerProps) {
  const [internalStartTime, setInternalStartTime] = useState("22:00");
  const [internalEndTime, setInternalEndTime] = useState("07:00");

  //left ko value use gar yedi tyo value xaina bhaney right ko use gar
  const startTime = startTimeProp ?? internalStartTime;
  const endTime = endTimeProp ?? internalEndTime;

  const handleStartTimeChange = (value: string) => {
    setInternalStartTime(value);
    onStartTimeChange?.(value);
  };

  const handleEndTimeChange = (value: string) => {
    setInternalEndTime(value);
    onEndTimeChange?.(value);
  };


  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Start Time */}
      <div>
        <label className="block text-[#454652] text-sm mb-2">Start Time</label>
        <div className="relative">
          <input
            type="time"
            value={startTime}
            onChange={(e) => handleStartTimeChange(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-[#C5C5D4] text-[#191C1E] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#24389C]/30 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full"
          />
          <TimeIcon value={startTime} />
        </div>
      </div>

      {/* End Time */}
      <div>
        <label className="block text-[#454652] text-sm mb-2">End Time</label>
        <div className="relative">
          <input
            type="time"
            value={endTime}
            onChange={(e) => handleEndTimeChange(e.target.value)}
            className="w-full px-3 py-2.5 rounded-lg border border-[#C5C5D4] text-[#191C1E] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#24389C]/30 [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:right-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full"
          />
          <TimeIcon value={endTime} />
        </div>
      </div>
    </div>
  );
}
