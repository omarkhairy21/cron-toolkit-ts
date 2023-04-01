# Cron-Ts

Generate a cron expression from a human readable function. with the type-safe way.

## Install

```bash
npm i cron-toolkit-ts
```

## Usage

### Minutes
```ts
import { Cron } from 'cron-ts';

const everyMinute = Cron.everyMinute(); // 0 * * * * *
 
const every5Minutes = Cron.everyMinutes(5); // */5 * * * *

const every10Minutes = Cron.everyMinutes(10); // */10 * * * *

const every15Minutes = Cron.everyMinutes(15); // */15 * * * *

const every30Minutes = Cron.everyMinutes(30); // */30 * * * *

const every45Minutes = Cron.everyMinutes(45); // */45 * * * *

const customMinutes = Cron.everyCustomMinutes(14); // */14 * * * *

```


### Hours
```ts
import { Cron } from 'cron-ts';

const everyHour = Cron.everyHour(); // 0 * * * * every hour at minute 0

const every2Hours = Cron.every2Hours(); // 0 */2 * * *  every 2 hours at minute 0

const every3Hours = Cron.every3Hours(); // 0 */3 * * * every 3 hours at minute 0

const every6Hours = Cron.every6Hours(); // 0 */6 * * * every 6 hours at minute 0

const every12Hours = Cron.every12Hours(); // 0 */12 * * * every 12 hours at minute 0

const everyCustomHour = Cron.everyCustomHour(14); // 0 */14 * * * every 14 hours at minute 0

```

### Days
```ts

import { Cron } from 'cron-ts';

const everyDay = Cron.everyDay(); // 0 0 * * * every day at 00:00

const everyDayAt12pm = Cron.everyDayAt(12) // 0 12 * * * every day at 12:00

const everyDayAt12am = Cron.everyDayAt(0) // 0 0 * * * every day at 00:00

const weekDaysAt8pm = Cron.fromDay("Monday").toDayAt("Friday", 20); // 0 20 * * 1-5 every week days at 20:00

const inWeekendAt9am = Cron.fromDay("Saturday").toDayAt("Saturday", 9); // 0 9 * * 6-0 every weekend at 09:00

```





