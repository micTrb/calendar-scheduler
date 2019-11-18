import React from 'react';
import * as dateFns from "date-fns";

const CalendarHeader = (props) => {
  const dateFormat = "MMMM yyyy";
  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={props.prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="col col-center">
        <span>{props.currentMonth ? dateFns.format(props.currentMonth, dateFormat) : null}</span>
      </div>
      <div className="col col-end" onClick={props.nextMonth}>
        <div className="icon">chevron_right</div>
      </div>
    </div>
  );
}

export default CalendarHeader;
