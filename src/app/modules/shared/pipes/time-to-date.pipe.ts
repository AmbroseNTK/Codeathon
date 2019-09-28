import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeToDate'
})
export class TimeToDatePipe implements PipeTransform {

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  numberTwoDigits(num) {
    if (num < 10) {
      return "0" + num;
    }
    return num;
  }

  transform(value: any, ...args: any[]): any {
    if (value == undefined) {
      return "N/A";
    }
    let date = new Date(value);
    return this.months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " " + this.numberTwoDigits(date.getHours()) + ":" + this.numberTwoDigits(date.getMinutes());
  }

}
