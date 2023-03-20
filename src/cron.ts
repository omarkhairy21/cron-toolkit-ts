type Minutes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59;
type Hours = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
type Days = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
type Months = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type WeekDays = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

type DayName = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
type DayNameToNumber<T extends DayName> = T extends "Sunday" ? 0 : T extends "Monday" ? 1 : T extends "Tuesday" ? 2 : T extends "Wednesday" ? 3 : T extends "Thursday" ? 4 : T extends "Friday" ? 5 : T extends "Saturday" ? 6 : never;


type EveryMinutes<T extends Minutes> = T extends 0 ? "* * * * *" : `*/${T} * * * *`;
type EveryHours<T extends Hours> = T extends 0 ? "0 * * * *" : `0 */${T} * * *`;

type EveryDays<T extends Days> = T extends 0 ? "0 0 * * *" : `0 0 ${T} * *`;
type EveryDayAt<T extends Hours> = T extends 0 ? "0 0 * * *" : `0 ${T} * * *`;
type EveryDayToDay<T extends DayName, U extends DayName> = `0 0 * * ${DayNameToNumber<T >}-${DayNameToNumber<U>}`;
type EveryDayFromDay<T extends DayName> = `0 0 * * ${DayNameToNumber<T >}-6`;
type EveryDayToDayAt<T extends DayName, U extends DayName, V extends Hours> = `0 ${V} * * ${DayNameToNumber<T >}-${DayNameToNumber<U>}`;
type EveryDayFromDayAt<T extends DayName, U extends Hours> = `0 ${U} * * ${DayNameToNumber<T >}-6`;

type EveryMonths<T extends Months> = T extends 0 ? "0 0 1 * *" : `0 0 1 ${T} *`;
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

type CronExpression<T extends string> = T extends `${infer A} ${infer B} ${infer C} ${infer D} ${infer E}` ? `${A} ${B} ${C} ${D} ${E}` : never;

// type FromDayToDay = <T extends DayName, U extends DayName>(from: T, to: U) => CronExpression<`0 0 * * ${DayNameToNumber<T>}-${DayNameToNumber<U>}`>; 

type CRON = {
    everyMinute: () => EveryMinutes<Minutes>;
    everyMinutes: <T extends Minutes>(minute: T) => EveryMinutes<T>;
    everyFiveMinutes: () => CronExpression<"*/5 * * * *">;
    every5Minutes: () => CronExpression<"*/5 * * * *">;
    everyTenMinutes: () => CronExpression<"*/10 * * * *">;
    every10Minutes: () => CronExpression<"*/10 * * * *">;
    every15Minutes: () => CronExpression<"*/15 * * * *">;
    every30Minutes: () => CronExpression<"*/30 * * * *">;
    every45Minutes: () => CronExpression<"*/45 * * * *">;

    everyHour: () => EveryHours<Hours>;
    everyCustomHour: <T extends Hours>(hour: T) => EveryHours<T>;
    every2Hours: () => CronExpression<"0 */2 * * *">;
    every3Hours: () => CronExpression<"0 */3 * * *">;
    every6Hours: () => CronExpression<"0 */6 * * *">;
    every12Hours: () => CronExpression<"0 */12 * * *">;

    everyDay: () => EveryDays<Days>;
    everyDayAt: <T extends Hours>(hour: T) => EveryDays<T>;
    
    fromDay: <T extends DayName>(from: T) => {
        toDay: <U extends DayName>(to: U) => EveryDayToDay<T, U>;
        toDayAt: <U extends DayName, V extends Hours>(to: U, hour: V) => EveryDayToDayAt<T, U, V>;
    };


    everyWeekDay: () => CronExpression<"0 0 * * 1-5">;
    everyMonth: () => EveryMonths<Months>;

    atMinute: <T extends Minutes>(minute: T) => AtMinutes<T>;
    atHour: <T extends Hours>(hour: T) => AtHours<T>;
    atDay: <T extends Days>(day: T) => AtDays<T>;
    atMonth: <T extends Months>(month: T) => AtMonths<T>;

    atStartOfTheDay: () => CronExpression<"0 0 * * *">;
    atMorning: () => CronExpression<"0 9 * * *">;
    atNoon: () => CronExpression<"0 12 * * *">;
    atAfternoon: () => CronExpression<"0 15 * * *">;
    atEvening: () => CronExpression<"0 18 * * *">;
    atNight: () => CronExpression<"0 21 * * *">;


    betweenMinutes: <T extends Minutes, U extends Minutes>(start: T, end: U) => BetweenMinutes<T, U>;
    betweenHours: <T extends Hours, U extends Hours>(start: T, end: U) => BetweenHours<T, U>;
    betweenDays: <T extends Days, U extends Days>(start: T, end: U) => BetweenDays<T, U>;
    betweenMonths: <T extends Months, U extends Months>(start: T, end: U) => BetweenMonths<T, U>;
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
    everyMinute = () => "* * * * *" as CronExpression<"* * * * *">;
    everyMinutes = <T extends Minutes>(minute: T) => `*/${minute} * * * *` as EveryMinutes<T>;

    everyFiveMinutes = () => this.everyMinutes(5);
    every5Minutes = () => this.everyMinutes(5); // alias

    everyTenMinutes = () => this.everyMinutes(10);
    every10Minutes = () => this.everyMinutes(10); // alias

    every15Minutes = () => this.everyMinutes(15);
    every30Minutes = () => this.everyMinutes(30);
    every45Minutes = () => this.everyMinutes(45);

    everyHour = () => "0 * * * *" as CronExpression<"0 * * * *">;
    everyCustomHour = <T extends Hours>(hour: T) => `0 */${hour} * * *` as EveryHours<T>;
    every2Hours = () => this.everyCustomHour(2);
    every3Hours = () => this.everyCustomHour(3);
    every6Hours = () => this.everyCustomHour(6);
    every12Hours = () => this.everyCustomHour(12);

    everyDay = () => "0 0 * * *" as EveryDays<Days>;
    everyDayAt = <T extends Hours>(hour: T) => `0 ${hour} * * *` as EveryDays<T>;
    
    fromDay<T extends DayName>(from: T) {
        return {
            toDay: <U extends DayName>(to: U) => `0 0 * * ${WeekDaysMap.get(from)}-${WeekDaysMap.get(to)}` as EveryDayToDay<T, U>,
            toDayAt: <U extends DayName, V extends Hours>(to: U, hour: V) => `0 ${hour} * * ${WeekDaysMap.get(from)}-${WeekDaysMap.get(to)}` as EveryDayToDayAt<T, U, V>,
        };
    }

    everyWeekDay = () => "0 0 * * 1-5" as CronExpression<"0 0 * * 1-5">;
    everyMonth = () => "0 0 1 * *" as EveryMonths<Months>;

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

}

export type {
    Minutes,
    Hours,
    Days,
    Months,
    WeekDays,
    DayName,
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
};

export default Cron;

