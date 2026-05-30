# Карта курса Delta Path

Карта курса показывает не "что можно когда-нибудь изучить", а порядок, в котором темы начинают складываться в рабочую систему.

## Ближайший маршрут

1. [Начать здесь](start-here.md) - понять, как устроен курс.
2. [Урок 1: Основа рынка](lessons/01-market-basics.md) - собрать базу рынка без options.
3. [Урок 2: Что такое option](lessons/02-what-is-an-option.md) - понять option как контракт.
4. [Урок 3: Payoff и breakeven](lessons/03-payoff-breakeven.md) - считать сценарии прибыли и убытка.
5. [Урок 4: Greeks](lessons/04-greeks.md) - понять чувствительности option price.
6. [Урок 5: Volatility](lessons/05-volatility.md) - отличать движение цены от ожидания движения.
7. [Урок 6: Базовые стратегии](lessons/06-basic-strategies.md) - собирать defined-risk конструкции.
8. [Урок 7: Volatility strategies](lessons/07-volatility-strategies.md) - выбирать стратегию под режим рынка.
9. [Урок 8: Crypto options](lessons/08-crypto-options.md) - учитывать crypto-specific risks.
10. [Урок 9: Risk system](lessons/09-risk-system.md) - превратить сделки в процесс.

## Уровни курса

| Уровень | Тема | Главный результат |
| --- | --- | --- |
| 1 | Основа рынка | Понимать `bid`, `ask`, `spread`, `liquidity`, `spot`, `futures`, `perps` |
| 2 | Опцион как контракт | Понимать `call`, `put`, `strike`, `premium`, `expiry` |
| 3 | Payoff и первые позиции | Читать `payoff`, считать `breakeven`, `max loss`, `max profit` |
| 4 | Greeks | Понимать `delta`, `gamma`, `theta`, `vega`, `rho` |
| 5 | Volatility | Отличать `historical volatility`, `implied volatility`, `realized volatility` |
| 6 | Базовые стратегии | Собирать `vertical spreads`, `covered call`, `cash-secured put` |
| 7 | Volatility strategies | Разбирать `straddle`, `strangle`, `iron condor`, `calendar spread` |
| 8 | Crypto options | Учитывать 24/7 рынок, `funding`, `open interest`, `platform risk` |
| 9 | Risk system | Вести журнал, считать риск, оценивать процесс и статистику |

## Детальная карта

### 1. Основа рынка

Зачем: опционы нельзя понимать в вакууме. Если непонятно, что такое `spread` и `liquidity`, цена опциона выглядит как магия. Дорогая магия.

Темы:

- `spot market`;
- `bid / ask / spread`;
- market order и limit order;
- long и short;
- margin и leverage;
- futures и perpetual futures;
- `funding rate`;
- `basis`;
- expiry;
- риск на сделку.

Практика:

- сравнить два рынка по `spread`;
- найти, где вход дороже;
- объяснить, почему низкая ликвидность портит сделку еще до прогноза.

### 2. Опцион как контракт

Зачем: понять механику права купить или продать.

Темы:

- `call`;
- `put`;
- `strike`;
- `premium`;
- `expiry`;
- `ITM`, `ATM`, `OTM`;
- `intrinsic value`;
- `extrinsic value`;
- `breakeven`.

Практика:

- классифицировать опционы как `ITM / ATM / OTM`;
- посчитать `breakeven`;
- определить, где option сгорает.

### 3. Payoff и первые позиции

Зачем: видеть форму риска до входа.

Темы:

- `payoff table`;
- `long call`;
- `long put`;
- `short call`;
- `short put`;
- `max loss`;
- `max profit`;
- defined risk и undefined risk.

Практика:

- построить таблицу payoff;
- найти `max loss`;
- объяснить, почему naked short call - не "пассивный доход", а финансовый прыжок без проверки глубины бассейна.

### 4. Greeks

Зачем: понять, почему option price меняется даже без сильного движения underlying.

Темы:

- `delta`;
- `gamma`;
- `theta`;
- `vega`;
- `rho`;
- Greeks near expiry;
- Greeks как система, а не отдельные кнопки.

Практика:

- оценить изменение цены опциона через `delta`;
- посчитать потери от `theta`;
- разобрать влияние изменения `implied volatility` через `vega`.

### 5. Volatility

Зачем: понять, что options - это торговля ожиданием движения, а не только направлением.

Темы:

- `historical volatility`;
- `implied volatility`;
- `realized volatility`;
- `IV rank`;
- `IV crush`;
- `skew`;
- `term structure`;
- event risk.

Исторические примеры:

- earnings и `IV crush` на акциях;
- резкие движения BTC после макро-новостей;
- периоды, когда рынок "знал", что будет движение, но не знал куда.

### 6. Базовые стратегии

Зачем: перейти от одиночных options к конструкциям с ограниченным риском.

Темы:

- `bull call spread`;
- `bear put spread`;
- `covered call`;
- `cash-secured put`;
- debit spread;
- credit spread.

Практика:

- сравнить `long call` и `bull call spread`;
- посчитать `max loss / max profit`;
- объяснить, что покупается и что продается в каждом leg.

### 7. Volatility strategies

Зачем: понять стратегии, где ставка делается на движение, диапазон или время.

Темы:

- `straddle`;
- `strangle`;
- `iron condor`;
- `butterfly`;
- `calendar spread`;
- `diagonal spread`.

Практика:

- выбрать стратегию для trend, range, event;
- объяснить, как `theta` и `vega` помогают или мешают.

### 8. Crypto options

Зачем: увидеть, чем BTC/ETH options отличаются от equity/index options.

Темы:

- рынок 24/7;
- BTC и ETH как главные ликвидные underlyings;
- `funding`;
- `open interest`;
- liquidation levels;
- perp basis;
- settlement;
- platform risk;
- stablecoin risk.

Практика:

- сравнить BTC option chain и SPY option chain;
- найти, где spread шире;
- объяснить дополнительный platform risk.

### 9. Risk system

Зачем: перейти от отдельных сделок к процессу.

Темы:

- trading plan;
- trade journal;
- scenario analysis;
- `position sizing`;
- `expectancy`;
- `drawdown`;
- `risk of ruin`;
- process error vs outcome error.

Практика:

- заполнить journal entry;
- найти повторяющуюся ошибку;
- определить, можно ли увеличивать размер позиции.

## Маршрут по времени

| Период | Фокус | Результат |
| --- | --- | --- |
| Недели 1-2 | Market basics + option contract | Понимаешь, что такое call/put и как читать базовые параметры |
| Недели 3-4 | Breakeven + payoff | Умеешь считать результат на expiry |
| Месяц 2 | Greeks | Понимаешь, почему option price меняется |
| Месяц 3 | Volatility | Видишь IV, IV crush и event risk |
| Месяц 4 | Spreads | Ограничиваешь риск через конструкции |
| Месяц 5 | Volatility strategies | Разбираешь рынок через режимы |
| Месяц 6 | Crypto options | Понимаешь crypto-specific risks |
| Месяц 7-9 | Risk system | Ведешь журнал, делаешь review, работаешь со статистикой |
