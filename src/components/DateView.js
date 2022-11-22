import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";

const DateView = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const DateInput = React.forwardRef(({ value, onClick }, ref) => (
    <button
      className="date-input"
      ref={ref}
      style={{ border: "none", backgroundColor: "transparent" }}
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
        onChange={(date) => setStartDate(date)}
        closeOnScroll={true}
        customInput={<DateInput />}
      />
    </div>
  );
};

export default DateView;

const CustomWrapper = styled.div`
  display: flex;
  font-display: row;
  justify-content: space-between;
  align-items: center;
  width: 272px;
`;
