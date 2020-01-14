import React, { useState } from "react";
import * as dateFns from "date-fns";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Calendar.scss";

// let hrs = [];
//     for (let i = 0; i <= 47; i++) {
//       let n = i%2===0 ? i/2+':00' : (i+1)/2-1+':30';
//       if(n<10) {
//         n = '0'+n;
//       }
//       hrs.push(n);
//     }
//     console.log(hrs);

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(dateFns.subMonths(currentDate, 1));
  };

  const header = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="header">
        
            <div className="header-date">
            <TransitionGroup>
          <CSSTransition
            in={true}
            appear={false}
            key={currentDate}
            timeout={900}
            classNames={"slide"}
          >
              <span>{dateFns.format(currentDate, dateFormat)}</span>
              </CSSTransition>
            </TransitionGroup>
            </div>
          
        <div className="icons">
          <div className=" icon prev-arrow" onClick={prevMonth}>
            chevron_left
          </div>

          <div className="icon prev-arrow" onClick={nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    );
  };

  const daysOfWeek = () => {
const days = [
    'SUN',
    'MON',
    'TUE',
    'WED',
    'THU',
    'FRI',
    'SAT'
];
   return <div className="days">{days.map(day => (
       <div className='day'>{day}</div>
   ))}</div>;
  };

  const cells = () => {};

  return (
    <div className="calendar">
      <div>{header()}</div>
      <div>{daysOfWeek()}</div>
      <div>{cells()}</div>
    </div>
  );
};

export default Calendar;
