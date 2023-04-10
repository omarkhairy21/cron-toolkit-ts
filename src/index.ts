export type {
    Minutes,
    Hours,
    Days,
    Months,
    WeekDays,
    DayName,
    StandardCronExpression,
    NonStandardCronExpression,
    EveryMinute,
    EveryHour,
    EveryDay,
    EveryWeekDays,
    EveryMonths,
    AtMinutes,
    AtHours,
    AtDays,
    AtMonths,
    AtEveryMinutes,
    BetweenMinutes,
    BetweenHours,
    BetweenDays,
    BetweenMonths,
} from "./cron";

import Cron from "./cron";

export default new Cron();