import dayjs from 'dayjs';
import jalaliday from 'jalaliday';

dayjs.extend(jalaliday);

export const monthNames = (month: number, locale = 'fa', abbreviate = true) => {
  const faMonths = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];
  const enMonthsAbbr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const enMonths = [
    'Janaury',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Auguest',
    'September',
    'October',
    'November',
    'December',
  ];
  if (locale === 'fa') return faMonths[month];
  else return abbreviate ? enMonthsAbbr[month] : enMonths[month];
};

export const weekNames = (week: number, locale = 'fa') => {
  const faWeeks = [
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنج شنبه',
    'جمعه',
    'شنبه',
  ];
  const enWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  if (locale === 'fa') return faWeeks[week];
  else return enWeeks[week];
};

const useTimeConvertor = (timeStamp: string | undefined) => {
  const obj = {
    date: 0,
    dayName: '',
    time: '',
    month: '',
    year: 0,
    clock: '',
    monthIndex: 0,
  };
  if (timeStamp) {
    const ts = new Date(parseInt(timeStamp) * 1000);
    const jalaliDate = dayjs(ts).calendar('jalali');
    obj.clock = jalaliDate.format('HH:mm');
    obj.date = jalaliDate.get('date');
    obj.dayName = weekNames(jalaliDate.get('day'));
    obj.time = `${jalaliDate.get('hour')}:${jalaliDate.get('minute')}`;
    obj.month = monthNames(jalaliDate.get('month'));
    obj.monthIndex = jalaliDate.get('month') + 1;
    obj.year = jalaliDate.get('year');
  }
  return obj;
};

export type UseTimer = {
  date: number;
  dayName: string;
  time: string;
  month: string;
  year: number;
  clock: string;
};

export default useTimeConvertor;
