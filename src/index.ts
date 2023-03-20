export type {
    CronExpression,
    EveryMinutes,
    EveryHours,
    EveryDays,
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