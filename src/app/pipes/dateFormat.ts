import { Pipe } from '@angular/core';

@Pipe({
  name: 'dateformat'
})
export class DateFormat {
  transform(value, args) {
    let date: any = new Date(value);
    // let now:any = new Date();
    let time = getFormattedTime(date);
    // now =  getFormattedDate(now);
    date = getFormattedDate(date);

    // if(now === date)
    //   date = 'Today';

    date += ` ${time}`;
    return date;
  }

}

function getFormattedTime(date) {

  let amORpm = ""
  let hours: any = date.getHours()
  let minutes: any = date.getMinutes()
  if (hours >= 12 && hours <= 23) {
    amORpm = " pm";
    if (hours > 12) {
      hours = hours - 12;
      if (hours < 10) {
        hours = "0" + hours.toString();
      }
    }
  }
  else {
    amORpm = " am"
    if (hours == 0) {
      hours = 12
    }
  }
  if (minutes < 10) {
    minutes = "0" + minutes.toString();
  }
  let time = hours + ":" + minutes + amORpm;
  return time
}

function getFormattedDate(date) {
  let dateYear = date.getFullYear();
  let dateMonth = date.getMonth() + 1;
  let dateDay = date.getDate();
  return dateDay + "-" + dateMonth + "-" + dateYear.toString().substring(2, 4) + ",";
}