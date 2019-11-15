import React from "react";
import * as dateFns from 'date-fns';
import './CalendarComponent.css';
import connect from "react-redux/es/connect/connect";
import { store } from '../../redux/store';

import CalendarHeader from './CalendarHeader';
import CalendarWeekDays from './CalendarWeekDays';
import CalendarCells from './CalendarCells';
import ReminderPopOver from "./ReminderPopOver";

import {
  getCurrentMonthAction,
  openPopOverAction,
  selectDateAction,
  setAnchorElAction
} from "../../redux/actions/calendarActions";

class CalendarComponent extends React.Component {

  onDateClick = day => {
    console.log(day);
    this.props.selectDate(day);
  };

  onClickPopOver = event => {
    this.props.openPopOver();
    this.props.setAnchorEl(event.currentTarget);
    console.log(store.getState());
  }


  nextMonth = () => {
    let nextMonth = dateFns.addMonths(this.props.currentMonth, 1);
    this.props.getCurrentMonth(nextMonth);
  };

  prevMonth = () => {
    let prevMonth = dateFns.subMonths(this.props.currentMonth, 1);
    this.props.getCurrentMonth(prevMonth);
  };

  render() {
    const { selectedDate, currentMonth } = this.props;

    return (
      <div className="calendar">
        <CalendarHeader
          currentMonth={currentMonth}
          prevMonth={this.prevMonth}
          nextMonth={this.nextMonth}
        />
        <CalendarWeekDays
          currentMonth={currentMonth}
        />

        <CalendarCells
          currentMonth={currentMonth}
          selectedDate={selectedDate}
          onDateClick={this.onDateClick}
          onClickPopOver={this.onClickPopOver}
        />

        <ReminderPopOver
          openPopOver={store.getState().openedPopOver}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { selectedDate, currentMonth } = state;
  return { selectedDate, currentMonth };
};

const mapDispatchToProps = (dispatch) => ({
  selectDate: (date) => dispatch(selectDateAction(date)),
  getCurrentMonth: (date) => dispatch(getCurrentMonthAction(date)),
  openPopOver: () => dispatch(openPopOverAction()),
  setAnchorEl: (e) => dispatch(setAnchorElAction(e))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarComponent);

