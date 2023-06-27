type Seconds = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
type Minutes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
type Hours = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
type Days = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
type Months = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type WeekDays = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

type DayName = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
type DayNameToNumber<T extends DayName> = T extends "Sunday" ? 0 : T extends "Monday" ? 1 : T extends "Tuesday" ? 2 : T extends "Wednesday" ? 3 : T extends "Thursday" ? 4 : T extends "Friday" ? 5 : T extends "Saturday" ? 6 : never;

type EverySecond <T extends Seconds> = T extends 0 ? "* * * * * *" : `*/${T} * * * * *`;
type EveryMinute<T extends Minutes> = T extends 0 ? "* * * * *" : `*/${T} * * * *`;
type EveryHour<T extends Hours> = T extends 0 ? "0 * * * *" : `0 */${T} * * *`;

type EveryDay<T extends Days> = T extends 0 ? "0 0 * * *" : `0 0 ${T} * *`;
type EveryDayAt<T extends Hours> = T extends 0 ? "0 0 * * *" : `0 ${T} * * *`;
type EveryDayAtHourAndMinute<T extends Hours, U extends Minutes> = T extends 0 ? `${U} 0 * * *` : `${U} ${T} * * *`;
type EveryDayToDay<T extends DayName, U extends DayName> = `0 0 * * ${DayNameToNumber<T >}-${DayNameToNumber<U>}`;
type EveryDayFromDay<T extends DayName> = `0 0 * * ${DayNameToNumber<T >}-6`;
type EveryDayToDayAt<T extends DayName, U extends DayName, V extends Hours> = `0 ${V} * * ${DayNameToNumber<T >}-${DayNameToNumber<U>}`;
type EveryDayFromDayAt<T extends DayName, U extends Hours> = `0 ${U} * * ${DayNameToNumber<T >}-6`;

type EveryMonths<T extends Months> = T extends 0 ? "0 0 1 * *" : `0 0 1 ${T} *`;
type EveryMonthOn<T extends Days> = `0 0 ${T} * *`;
type EveryWeekDays<T extends WeekDays> = T extends 0 ? "0 0 * * 0" : `0 0 * * ${T}`;

type AtMinutes<T extends Minutes> = T extends 0 ? "0 * * * *" : `${T} * * * *`;
type AtEveryMinutes<T extends Minutes, U extends Minutes> = T extends 0 ? "0 * * * *" : `${T}-${U} * * * *`;

type AtHours<T extends Hours> = T extends 0 ? "0 0 * * *" : `0 ${T} * * *`;
type AtDays<T extends Days> = T extends 0 ? "0 0 1 * *" : `0 0 ${T} * *`;
type AtMonths<T extends Months> = T extends 0 ? "0 0 1 1 *" : `0 0 1 ${T} *`;
type AtWeekDays<T extends WeekDays> = T extends 0 ? "0 0 1 * 0" : `0 0 1 * ${T}`;

type BetweenMinutes<T extends Minutes, U extends Minutes> = `${T}-${U} * * * *`;
type BetweenHours<T extends Hours, U extends Hours> = `0 ${T}-${U} * * *`;
type BetweenDays<T extends Days, U extends Days> = `0 0 ${T}-${U} * *`;
type BetweenMonths<T extends Months, U extends Months> = `0 0 1 ${T}-${U} *`;

type StandardCronExpression<T extends string> = T extends `${infer A} ${infer B} ${infer C} ${infer D} ${infer E}` ? `${A} ${B} ${C} ${D} ${E}` : never;

type NonStandardCronExpression<T extends string> = T extends `${infer A} ${infer B} ${infer C} ${infer D} ${infer E} ${infer F}` ? `${A} ${B} ${C} ${D} ${E} ${F}` : never;

type UseNonStandardCronExpression = {
    everySecond: () => EverySecond<Seconds>;
    everyCustomSecond: <T extends Seconds>(second: T) => EverySecond<T>;
    every5Seconds: () => NonStandardCronExpression<"*/5 * * * * *">;
    every10Seconds: () => NonStandardCronExpression<"*/10 * * * * *">;
    every15Seconds: () => NonStandardCronExpression<"*/15 * * * * *">;
    every30Seconds: () => NonStandardCronExpression<"*/30 * * * * *">;
    every45Seconds: () => NonStandardCronExpression<"*/45 * * * * *">;
}


type CRON = {
    everyMinute: () => EveryMinute<Minutes>;
    everyCustomMinute: <T extends Minutes>(minute: T) => EveryMinute<T>;
    everyFiveMinutes: () => StandardCronExpression<"*/5 * * * *">;
    every5Minutes: () => StandardCronExpression<"*/5 * * * *">;
    everyTenMinutes: () => StandardCronExpression<"*/10 * * * *">;
    every10Minutes: () => StandardCronExpression<"*/10 * * * *">;
    every15Minutes: () => StandardCronExpression<"*/15 * * * *">;
    every30Minutes: () => StandardCronExpression<"*/30 * * * *">;
    every45Minutes: () => StandardCronExpression<"*/45 * * * *">;

    everyHour: () => EveryHour<Hours>;
    everyCustomHour: <T extends Hours>(hour: T) => EveryHour<T>;
    every2Hours: () => StandardCronExpression<"0 */2 * * *">;
    every3Hours: () => StandardCronExpression<"0 */3 * * *">;
    every6Hours: () => StandardCronExpression<"0 */6 * * *">;
    every12Hours: () => StandardCronExpression<"0 */12 * * *">;

    everyDay: () => {
        get: () => EveryDay<0>;
        atHour: <T extends Hours>(hour: T) => {
            get: () => EveryDayAt<T>;
            atMinute: <U extends Minutes>(minute: U) => EveryDayAtHourAndMinute<T, U>
        }
    }
    everyDayAt: <T extends Hours>(hour: T) => EveryDayAt<T>;

    fromDay: <T extends DayName>(from: T) => {
        toDay: <U extends DayName>(to: U) => EveryDayToDay<T, U>;
        toDayAt: <U extends DayName, V extends Hours>(to: U, hour: V) => EveryDayToDayAt<T, U, V>;
    };

    everyWeekDay: () => StandardCronExpression<"0 0 * * 1-5">;

    everyMonth: () => {
        get: () => EveryMonths<0>;
        onDay: <T extends Days>(day: T) => {
            get: () =>  EveryMonthOn<T>,
            atHour: <U extends Hours>(hour: U) => {
                get: () =>  EveryDayAt<U>,
                atMinute: <V extends Minutes>(min: V) => EveryDayAtHourAndMinute<U, V>
            }
        }
    }

    atMinute: <T extends Minutes>(minute: T) => AtMinutes<T>;
    atHour: <T extends Hours>(hour: T) => AtHours<T>;
    atDay: <T extends Days>(day: T) => AtDays<T>;
    atMonth: <T extends Months>(month: T) => AtMonths<T>;

    atStartOfTheDay: () => StandardCronExpression<"0 0 * * *">;
    atMorning: () => StandardCronExpression<"0 9 * * *">;
    atNoon: () => StandardCronExpression<"0 12 * * *">;
    atAfternoon: () => StandardCronExpression<"0 15 * * *">;
    atEvening: () => StandardCronExpression<"0 18 * * *">;
    atNight: () => StandardCronExpression<"0 21 * * *">;


    betweenMinutes: <T extends Minutes, U extends Minutes>(start: T, end: U) => BetweenMinutes<T, U>;
    betweenHours: <T extends Hours, U extends Hours>(start: T, end: U) => BetweenHours<T, U>;
    betweenDays: <T extends Days, U extends Days>(start: T, end: U) => BetweenDays<T, U>;
    betweenMonths: <T extends Months, U extends Months>(start: T, end: U) => BetweenMonths<T, U>;

    useNonStandard: () => UseNonStandardCronExpression;
}

const WeekDaysMap: Map<DayName, WeekDays> = new Map<DayName, WeekDays>([
    ["Sunday", 0],
    ["Monday", 1],
    ["Tuesday", 2],
    ["Wednesday", 3],
    ["Thursday", 4],
    ["Friday", 5],
    ["Saturday", 6],
]);


class Cron implements CRON {
    everyMinute = () => "* * * * *" as StandardCronExpression<"* * * * *">;
    everyCustomMinute = <T extends Minutes>(minute: T) => `*/${minute} * * * *` as EveryMinute<T>;

    everyFiveMinutes = () => this.everyCustomMinute(5);
    every5Minutes = () => this.everyCustomMinute(5); // alias

    everyTenMinutes = () => this.everyCustomMinute(10);
    every10Minutes = () => this.everyCustomMinute(10); // alias

    every15Minutes = () => this.everyCustomMinute(15);
    every30Minutes = () => this.everyCustomMinute(30);
    every45Minutes = () => this.everyCustomMinute(45);

    everyHour = () => "0 * * * *" as StandardCronExpression<"0 * * * *">;
    everyCustomHour = <T extends Hours>(hour: T) => `0 */${hour} * * *` as EveryHour<T>;
    every2Hours = () => this.everyCustomHour(2);
    every3Hours = () => this.everyCustomHour(3);
    every6Hours = () => this.everyCustomHour(6);
    every12Hours = () => this.everyCustomHour(12);

    everyDay = () => {
        return {
            /** Everyday at 00:00 */
            get: () => "0 0 * * *" as EveryDay<0>,
            atHour: <T extends Hours>(hour: T) => {
                return {
                    get: () => this.everyDayAt(hour),
                    atMinute: <U extends Minutes>(min: U) => `${min} ${hour} * * *` as EveryDayAtHourAndMinute<T, U>
                }
            }
        }
    }

    everyDayAt = <T extends Hours>(hour: T) => `0 ${hour} * * *` as EveryDayAt<T>;

    fromDay<T extends DayName>(from: T) {
        return {
            toDay: <U extends DayName>(to: U) => `0 0 * * ${WeekDaysMap.get(from)}-${WeekDaysMap.get(to)}` as EveryDayToDay<T, U>,
            toDayAt: <U extends DayName, V extends Hours>(to: U, hour: V) => `0 ${hour} * * ${WeekDaysMap.get(from)}-${WeekDaysMap.get(to)}` as EveryDayToDayAt<T, U, V>,
        };
    }

    everyWeekDay = () => this.fromDay("Monday").toDayAt("Friday", 0);
    // everyMonth = () => "0 0 1 * *" as EveryMonths<Months>;
    everyMonth = () => {
        return {
            /** At 00:00 on day 1 of month */
            get: () => "0 0 1 * *" as EveryMonths<0>,
            onDay: <T extends Days>(day: T) => {
                return {
                    get: () => `0 0 ${day} * *` as EveryMonthOn<T>,
                    atHour: <U extends Hours>(hour: U) => {
                        return {
                            get: () => `0 ${hour} ${day} * *` as EveryDayAt<U>,
                            atMinute: <V extends Minutes>(min: V) => `${min} ${hour} ${day} * *` as EveryDayAtHourAndMinute<U, V>
                        }
                    }
                }
            }
        }
    }

    atMinute = <T extends Minutes>(minute: T) => `${minute} * * * *` as AtMinutes<T>;
    atHour = <T extends Hours>(hour: T) => `0 ${hour} * * *` as AtHours<T>;
    atDay = <T extends Days>(day: T) => `0 0 ${day} * *` as AtDays<T>;
    atMonth = <T extends Months>(month: T) => `0 0 1 ${month} *` as AtMonths<T>;

    atStartOfTheDay = () => this.atHour(0);
    atMorning = () => this.atHour(9);
    atNoon = () => this.atHour(12);
    atAfternoon = () => this.atHour(15);
    atEvening = () => this.atHour(18);
    atNight = () => this.atHour(21);


    betweenMinutes<T extends Minutes, U extends Minutes>(start: T, end: U) {
        return `${start}-${end} * * * *` as BetweenMinutes<T, U>;
    }

    betweenHours<T extends Hours, U extends Hours>(start: T, end: U) {
        return `0 ${start}-${end} * * *` as BetweenHours<T, U>;
    }

    betweenDays<T extends Days, U extends Days>(start: T, end: U) {
        return `0 0 ${start}-${end} * *` as BetweenDays<T, U>;
    }

    betweenMonths<T extends Months, U extends Months>(start: T, end: U) {
        return `0 0 1 ${start}-${end} *` as BetweenMonths<T, U>;
    }

    useNonStandard() {
        const everyCustomSecond = <T extends Seconds>(second: T) => `*/${second} * * * * *` as EverySecond<T>;

        return {
            everySecond: () => "* * * * * *" as NonStandardCronExpression<"* * * * * *">,
            every5Seconds:  () => everyCustomSecond(5),
            every10Seconds: () => everyCustomSecond(10),
            every15Seconds: () => everyCustomSecond(15),
            every30Seconds: () => everyCustomSecond(30),
            every45Seconds: () => everyCustomSecond(45),
            everyCustomSecond,
        };
    }
}

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
};

export default Cron;

