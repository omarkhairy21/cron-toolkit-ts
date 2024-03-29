import Cron from "./cron";
describe("Standard Cron Expressions", () => {
  let cron = new Cron();

  describe("Minutes", () => {
    it("gets every minute expressions", () => {
      expect(cron.everyMinute()).toEqual("* * * * *");
    });

    it("gets every 5 minutes expressions", () => {
      expect(cron.everyFiveMinutes()).toEqual("*/5 * * * *");
      // alternative
      expect(cron.everyCustomMinute(5)).toEqual("*/5 * * * *");
    });

    it("gets every 10 minutes expressions", () => {
      expect(cron.everyTenMinutes()).toEqual("*/10 * * * *");
      // alternative
      expect(cron.everyCustomMinute(10)).toEqual("*/10 * * * *");
    });

    it("gets every 15 minutes expressions", () => {
      expect(cron.every15Minutes()).toEqual("*/15 * * * *");
    });

    it("gets every 30 minutes expressions", () => {
      expect(cron.every30Minutes()).toEqual("*/30 * * * *");
    });

    it("gets every 45 minutes expressions", () => {
      expect(cron.every45Minutes()).toEqual("*/45 * * * *");
    });

    it("every custom minute", () => {
      expect(cron.everyCustomMinute(3)).toEqual("*/3 * * * *");
      expect(cron.everyCustomMinute(7)).toEqual("*/7 * * * *");
      expect(cron.everyCustomMinute(11)).toEqual("*/11 * * * *");
    });

    it("gets at minute expressions", () => {
      expect(cron.atMinute(5)).toEqual("5 * * * *");
      expect(cron.atMinute(15)).toEqual("15 * * * *");
      expect(cron.atMinute(30)).toEqual("30 * * * *");
      expect(cron.atMinute(45)).toEqual("45 * * * *");
    });

    it("gets between minutes expressions", () => {
      expect(cron.betweenMinutes(0, 59)).toEqual("0-59 * * * *");
    })
  });

  describe("Hours", () => {
    it("gets every hour at minute 0 expressions", () => {
      expect(cron.everyHour()).toEqual("0 * * * *");
    });

    it("gets every 2 hours at minute 0 expressions", () => {
      expect(cron.every2Hours()).toEqual("0 */2 * * *");
      // alternative
      expect(cron.everyCustomHour(2)).toEqual("0 */2 * * *");
    });

    expect(cron.every3Hours()).toEqual("0 */3 * * *");
    // alternative
    expect(cron.everyCustomHour(3)).toEqual("0 */3 * * *");
    expect(cron.everyCustomHour(4)).toEqual("0 */4 * * *");

    it("gets between hours expressions", () => {
      expect(cron.betweenHours(0, 23)).toEqual("0 0-23 * * *");
    })
  });

  describe("Days", () => {
    it("gets every day expressions at 00:00", () => {
      expect(cron.everyDay().get()).toEqual("0 0 * * *");
    });

    it("gets every day at hour and minute 0 expressions", () => {
      expect(cron.everyDay().atHour(1).get()).toEqual("0 1 * * *");
    });

    it("gets every day at hour and minute expressions", () => {
      expect(cron.everyDay().atHour(1).atMinute(1)).toEqual("1 1 * * *");
    });

    it("gets every day at 12:00 expression", () => {
      expect(cron.everyDayAt(12)).toEqual("0 12 * * *");
    });

    it("gets every days from monday to friday at 00:00", () => {
      expect(cron.fromDay("Monday").toDay("Friday")).toEqual("0 0 * * 1-5");
    });

    it("gets every weekend days at 09:00", () => {
      expect(cron.fromDay("Saturday").toDayAt("Sunday", 9)).toEqual(
        "0 9 * * 6-0"
      );
    });

    it("gets every week day expressions at 00:00", () => {
      expect(cron.everyWeekDay()).toEqual("0 0 * * 1-5");
    });

    it("gets at day expressions", () => {
      expect(cron.atDay(1)).toEqual("0 0 1 * *");
    })

    it("gets between days expressions", () => {
      expect(cron.betweenDays(0, 31)).toEqual("0 0 0-31 * *");
    })
  });

  describe('Month', () => {
    it('gets expression: At 00:00, on day 1 of the month, only in January', () => {
      expect(cron.atMonth(1)).toEqual("0 0 1 1 *");
     })

     it('gets expression: At 00:00, on day 1 of every month from January to November', () => {
      expect(cron.betweenMonths(1, 11)).toEqual("0 0 1 1-11 *");
     })

     it('gets expression: At 00:00 on day 1 of every month', () => {
      expect(cron.everyMonth().get()).toEqual("0 0 1 * *");
     })

     it('gets expression: At 00:00 on day 12 of every month', () => {
      expect(cron.everyMonth().onDay(12).get()).toEqual("0 0 12 * *");
     })

     it('gets expression: At 01:00 on day 1 of every month', () => {
      expect(cron.everyMonth().onDay(1).atHour(1).get()).toEqual("0 1 1 * *");
     })

     it('gets expression: At 01:01 on day 1 of every month', () => {
      expect(cron.everyMonth().onDay(1).atHour(1).atMinute(1)).toEqual("1 1 1 * *");
     })
   })

  describe("Through The Day", () => {
    it("gets 12:00 AM", () => {
      expect(cron.atStartOfTheDay()).toEqual("0 0 * * *");
    });

    it("gets 12:00 PM", () => {
      expect(cron.atNoon()).toEqual("0 12 * * *");
    });

    it("gets at mooring time = 09:00 AM", () => {
      expect(cron.atMorning()).toEqual("0 9 * * *");
    });

    it("gets at afternoon time = 03:00 PM", () => {
      expect(cron.atAfternoon()).toEqual("0 15 * * *");
    });

    it("gets at evening time = 06:00 PM", () => {
      expect(cron.atEvening()).toEqual("0 18 * * *");
    });

    it("gets at night time = 09:00 PM", () => {
      expect(cron.atNight()).toEqual("0 21 * * *");
    });
  });
});

describe("Non Standard Cron Expressions", () => {
    const cron = new Cron();
  describe("Seconds", () => {
    it("gets every second expressions", () => {
      expect(cron.useNonStandard().everySecond()).toEqual("* * * * * *");
    });

    it("gets every 5 seconds expressions", () => {
      expect(cron.useNonStandard().everyCustomSecond(5)).toEqual("*/5 * * * * *");
    });

    it("gets every 10 seconds expressions", () => {
      expect(cron.useNonStandard().everyCustomSecond(10)).toEqual("*/10 * * * * *");
    });

    it("gets every 15 seconds expressions", () => {
      expect(cron.useNonStandard().everyCustomSecond(15)).toEqual("*/15 * * * * *");
    });

    it("gets every 30 seconds expressions", () => {
      expect(cron.useNonStandard().everyCustomSecond(30)).toEqual("*/30 * * * * *");
    });

    it("gets every 45 seconds expressions", () => {
      expect(cron.useNonStandard().everyCustomSecond(45)).toEqual("*/45 * * * * *");
    });

    it("every custom second", () => {
      expect(cron.useNonStandard().everyCustomSecond(3)).toEqual("*/3 * * * * *");
      expect(cron.useNonStandard().everyCustomSecond(7)).toEqual("*/7 * * * * *");
      expect(cron.useNonStandard().everyCustomSecond(11)).toEqual("*/11 * * * * *");
    });

  });
});
