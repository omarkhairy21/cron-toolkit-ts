# Cron-Ts

Generate a cron expression from a human readable string. with the type-safe way.

## Install

```bash
npm install cron-ts
```

## Usage

```ts
import { Cron } from 'cron-ts';

const everyMinute = Cron.everyMinute(); // 0 * * * * *

const everyHour = Cron.everyHour(); // 0 0 * * * *

const everyDay = Cron.everyDay(); // 0 0 0 * * *

const everyWeek = Cron.everyWeek(); // 0 0 0 * * 0

const everyMonth = Cron.everyMonth(); // 0 0 0 1 * *

const everyYear = Cron.everyYear(); // 0 0 0 1 1 *

