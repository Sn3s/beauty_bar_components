// components/BookingCalendar.tsx
import { useState } from "react";

export default function BookingCalendar() {
  // Configurable style constants
  const styles = {
    fontFamily: "Owners XWide, sans-serif",
    card: "w-[1236px] h-[549px] rounded-lg border p-[1px] flex flex-col md:flex-row gap-6 bg-white",
    title: "text-[24px] leading-[100%] font-normal uppercase text-center",
    subHeading: "text-[14px] leading-[150%] font-normal align-middle",
    price: "text-[14px] leading-[150%] font-normal align-middle",
    description: "text-[14px] leading-[100%] font-normal tracking-[0.5%]",
    sectionTitle: "text-[16px] leading-[100%] font-normal uppercase text-center",
    clientInfo: "text-[14px] leading-[150%] font-normal align-middle",
    dateHeading: "text-[16px] leading-[150%] font-normal align-middle",
    monthLabel: "text-[16px] leading-[150%] font-normal text-center align-middle",
    dayHeader: "text-[12px] leading-[12px] font-normal uppercase text-center align-middle",
    dayNumber: "text-[14px] leading-[150%] font-normal text-center align-middle",
    selectedDateBg: "bg-[#C72E4B] text-white w-[44px] h-[44px] rounded-full",
    unselectedDateBg: "hover:bg-gray-100 w-[44px] h-[44px] rounded-full",
    timeButton: "text-[12px] leading-[20px] font-normal",
    selectedTimeButtonBg: "#C72E4B",
    selectedTimeText: "#fff",
    unselectedTimeBorder: "#ccc",
  };

  // State
  const [currentMonth, setCurrentMonth] = useState<number>(7); // August index = 7
  const [currentYear, setCurrentYear] = useState<number>(2025);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const timeSlots = [
    "10:30am", "11:30am", "02:30pm", "03:00pm", "03:30pm", "04:30pm", "05:00pm"
  ];

  // Helpers to generate calendar
  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getCalendarDays = () => {
    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const daysInCurrentMonth = getDaysInMonth(currentMonth, currentYear);
    const daysArray = Array(firstDayIndex).fill(""); // Empty slots before start
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      daysArray.push(i.toString());
    }
    return daysArray;
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
    setSelectedDate(null);
    setSelectedTime(null);
  };

  const selectedDateObj =
    selectedDate !== null ? new Date(currentYear, currentMonth, selectedDate) : null;

  return (
    <div className={styles.card} style={{ fontFamily: styles.fontFamily }}>
      {/* Left Panel */}
      <div className="w-full md:w-1/3 p-4 border-r flex flex-col">
        <h1 className={styles.title}>THE HYDRATOR</h1>

        <div className="flex items-center mt-4 text-gray-600">
          <span className="mr-2">⏱️</span>
          <span className={styles.subHeading}>30 min</span>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <span className="mr-2">💲</span>
          <span className={styles.price}>25.00</span>
        </div>

        <p className={`${styles.description} mt-4 text-gray-700`}>
          Indulge in a calming galvanic infusion and hydrating sheet mask for plump,
          dewy, and visibly refreshed skin
        </p>

        <h3 className={`${styles.sectionTitle} mt-6`}>Client Details</h3>
        <div className="flex items-center mt-2 text-gray-600">
          <span className="mr-2">👤</span>
          <span className={styles.clientInfo}>Reynan Decena</span>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <span className="mr-2">📧</span>
          <span className={styles.clientInfo}>reynan@testforce.com.au</span>
        </div>
        <div className="flex items-center mt-2 text-gray-600">
          <span className="mr-2">📞</span>
          <span className={styles.clientInfo}>(03) 9046 8168</span>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-2/3 p-4">
        <h3 className={styles.dateHeading}>Select a Date & Time</h3>
        <div className="flex justify-between items-center mt-4">
          <button onClick={handlePrevMonth} className="text-gray-500">&lt;</button>
          <span className={styles.monthLabel}>
            {monthNames[currentMonth]} {currentYear}
          </span>
          <button onClick={handleNextMonth} className="text-gray-500">&gt;</button>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 mt-4 text-center text-gray-500">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
            <div key={d} className={styles.dayHeader}>{d}</div>
          ))}
          {getCalendarDays().map((day, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (day) {
                  setSelectedDate(Number(day));
                  setSelectedTime(null); // Reset time when picking new date
                }
              }}
              className={`flex items-center justify-center cursor-pointer ${styles.dayNumber} 
                ${Number(day) === selectedDate ? styles.selectedDateBg : styles.unselectedDateBg}
              `}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Show time slots only when a date is picked */}
        {selectedDateObj && (
          <>
            <h4 className={`${styles.dateHeading} mt-6`}>
              {`${dayNames[selectedDateObj.getDay()]}, ${selectedDate} ${monthNames[selectedDateObj.getMonth()]}`}
            </h4>

            <div className="flex flex-wrap gap-2 mt-4">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={styles.timeButton}
                  style={{
                    fontFamily: styles.fontFamily,
                    width: time === selectedTime ? "95px" : "98px",
                    height: "36px",
                    borderRadius: "4px",
                    borderWidth: "0.5px",
                    padding: "8px 19px",
                    backgroundColor:
                      time === selectedTime ? styles.selectedTimeButtonBg : "transparent",
                    color: time === selectedTime ? styles.selectedTimeText : "#000",
                    borderColor:
                      time === selectedTime ? styles.selectedTimeButtonBg : styles.unselectedTimeBorder,
                    borderStyle: "solid",
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
