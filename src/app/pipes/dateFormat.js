var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var DateFormat = /** @class */ (function () {
    function DateFormat() {
    }
    DateFormat.prototype.transform = function (value, args) {
        var date = new Date(value);
        // let now:any = new Date();
        var time = getFormattedTime(date);
        // now =  getFormattedDate(now);
        date = getFormattedDate(date);
        // if(now === date)
        //   date = 'Today';
        date += " " + time;
        return date;
    };
    DateFormat = __decorate([
        Pipe({
            name: 'dateformat'
        })
    ], DateFormat);
    return DateFormat;
}());
export { DateFormat };
function getFormattedTime(date) {
    var amORpm = "";
    var hours = date.getHours();
    var minutes = date.getMinutes();
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
        amORpm = " am";
        if (hours == 0) {
            hours = 12;
        }
    }
    if (minutes < 10) {
        minutes = "0" + minutes.toString();
    }
    var time = hours + ":" + minutes + amORpm;
    return time;
}
function getFormattedDate(date) {
    var dateYear = date.getFullYear();
    var dateMonth = date.getMonth() + 1;
    var dateDay = date.getDate();
    return dateDay + "-" + dateMonth + "-" + dateYear.toString().substring(2, 4) + ",";
}
//# sourceMappingURL=dateFormat.js.map