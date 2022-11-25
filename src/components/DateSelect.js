import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

const DateSelect = ({ setDate, date }) => {
  const [startDate, setStartDate] = useState(new Date());
  const DateInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="date-input"
      onClick={onClick}
      ref={ref}
      style={{
        border: "1px solid gray",
        backgroundColor: "transparent",
        fontSize: "13px",
      }}
    >
      {value}
    </button>
  ));
  return (
    <div className="custom-react-datepicker__wrapper">
      <DatePicker
        locale={ko}
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        maxDate={new Date()}
        onChange={(date) => {
          const d = new Date(date).toISOString().substring(0, 10);
          setDate(d);
          setStartDate(date);
        }}
        closeOnScroll={true}
        customInput={<DateInput />}
      />
    </div>
  );
};

export default DateSelect;

const CustomWrapper = styled.div`
  display: flex;
  font-display: row;
  justify-content: space-between;
  align-items: center;
  width: 272px;
`;
