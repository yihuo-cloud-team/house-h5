export default class Assist {
  getDateDiff(dateTime) {
    let dateTimeStamp = new Date(dateTime.replace(/-/g, "/")).getTime();
    let result = '';
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let halfamonth = day * 15;
    let month = day * 30;
    let year = day * 365;
    let now = new Date().getTime();
    let diffValue = now - dateTimeStamp;
    if (diffValue < 0) {
      return;
    }
    let monthEnd = diffValue / month;
    let weekEnd = diffValue / (7 * day);
    let dayEnd = diffValue / day;
    let hourEnd = diffValue / hour;
    let minEnd = diffValue / minute;
    let yearEnd = diffValue / year;
    if (yearEnd >= 1) {
      result = dateTime.slice(0, -3);;
    } else if (monthEnd >= 1) {
      result = dateTime.slice(0, -3);;
    } else if (weekEnd >= 1) {
      result = dateTime.slice(0, -3);
    } else if (dayEnd >= 1) {
      result = "" + parseInt(dayEnd) + "天前";
    } else {
      result = "今天" + dateTime.slice(10, -3);
    }
    return result;
  }
}
