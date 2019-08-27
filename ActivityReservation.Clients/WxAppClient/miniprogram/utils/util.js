"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatTime(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
}
exports.formatTime = formatTime;
function addDays(date, days) {
    var adjustDate = new Date(date.getTime() + 24 * 60 * 60 * 1000 * days);
    return adjustDate;
}
exports.addDays = addDays;
function formatDate(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return [year, month, day].map(formatNumber).join('-');
}
exports.formatDate = formatDate;
var formatNumber = function (n) {
    var str = n.toString();
    return str[1] ? str : '0' + str;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFnQixVQUFVLENBQUMsSUFBVTtJQUNuQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDL0IsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNqQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDMUIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQzVCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNoQyxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFFaEMsT0FBTyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkgsQ0FBQztBQVRELGdDQVNDO0FBRUQsU0FBZ0IsT0FBTyxDQUFDLElBQVUsRUFBRSxJQUFZO0lBQzlDLElBQUksVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdkUsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQztBQUhELDBCQUdDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLElBQVU7SUFDbkMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO0lBRXhCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQU5ELGdDQU1DO0FBRUQsSUFBTSxZQUFZLEdBQUcsVUFBQyxDQUFTO0lBQzdCLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUN4QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2xDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBmb3JtYXRUaW1lKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcclxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDFcclxuICBjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKVxyXG4gIGNvbnN0IGhvdXIgPSBkYXRlLmdldEhvdXJzKClcclxuICBjb25zdCBtaW51dGUgPSBkYXRlLmdldE1pbnV0ZXMoKVxyXG4gIGNvbnN0IHNlY29uZCA9IGRhdGUuZ2V0U2Vjb25kcygpXHJcblxyXG4gIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0ubWFwKGZvcm1hdE51bWJlcikuam9pbignLycpICsgJyAnICsgW2hvdXIsIG1pbnV0ZSwgc2Vjb25kXS5tYXAoZm9ybWF0TnVtYmVyKS5qb2luKCc6Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGU6IERhdGUsIGRheXM6IG51bWJlcikge1xyXG4gIHZhciBhZGp1c3REYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwICogZGF5cyk7XHJcbiAgcmV0dXJuIGFkanVzdERhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMVxyXG4gIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKVxyXG5cclxuICByZXR1cm4gW3llYXIsIG1vbnRoLCBkYXldLm1hcChmb3JtYXROdW1iZXIpLmpvaW4oJy0nKTtcclxufVxyXG5cclxuY29uc3QgZm9ybWF0TnVtYmVyID0gKG46IG51bWJlcikgPT4ge1xyXG4gIGNvbnN0IHN0ciA9IG4udG9TdHJpbmcoKVxyXG4gIHJldHVybiBzdHJbMV0gPyBzdHIgOiAnMCcgKyBzdHI7XHJcbn1cclxuIl19