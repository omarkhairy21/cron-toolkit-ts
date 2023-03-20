import Cron from "./cron";
describe("Cron Expressions", () => {
  let cron = new Cron();

  describe("Minutes", () => {
    it("gets every minute expressions", () => {
      expect(cron.everyMinute()).toEqual("* * * * *");
    });

    it("gets every 5 minutes expressions", () => {
      expect(cron.everyFiveMinutes()).toEqual("*/5 * * * *");
      // alternative
      expect(cron.everyMinutes(5)).toEqual("*/5 * * * *");
    });

    it("gets every 10 minutes expressions", () => {
      expect(cron.everyTenMinutes()).toEqual("*/10 * * * *");
      // alternative
      expect(cron.everyMinutes(10)).toEqual("*/10 * * * *");
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
      expect(cron.everyMinutes(3)).toEqual("*/3 * * * *");
      expect(cron.everyMinutes(7)).toEqual("*/7 * * * *");
      expect(cron.everyMinutes(11)).toEqual("*/11 * * * *");
    });

    it("gets at minute expressions", () => {
      expect(cron.atMinute(5)).toEqual("5 * * * *");
      expect(cron.atMinute(15)).toEqual("15 * * * *");
      expect(cron.atMinute(30)).toEqual("30 * * * *");
      expect(cron.atMinute(45)).toEqual("45 * * * *");
    });
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
  });

  describe("Days", () => {
    it("gets every day expressions at 00:00", () => {
      expect(cron.everyDay()).toEqual("0 0 * * *");
    });

    it("gets every day at 12:00", () => {
      expect(cron.everyDayAt(12)).toEqual("0 12 * * *");
    });

    it("gets every days form monday to friday at 00:00", () => {
      expect(cron.fromDay("Monday").toDay("Friday")).toEqual("0 0 * * 1-5");
    });

    it("gets every days form sunday to saturday at 4 PM", () => {
      expect(cron.fromDay("Sunday").toDayAt("Saturday", 16)).toEqual(
        "0 16 * * 0-6"
      );
    });

    it("gets every week day expressions at 00:00", () => {
      expect(cron.everyWeekDay()).toEqual("0 0 * * 1-5");
    });
  });

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
