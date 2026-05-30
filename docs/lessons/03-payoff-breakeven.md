# Payoff и breakeven

Урок 3 · 20-30 минут · `payoff-breakeven`

## Цель

Научиться смотреть на option как на набор сценариев. `Payoff` показывает, что будет с P/L при разных ценах underlying на `expiry`.

Главный вывод: правильное направление не гарантирует прибыль. Цена должна пройти через `breakeven`.

## Long call

BTC стоит $100,000. Ты покупаешь `long call`: strike $110,000, premium $3,000.

`Breakeven = strike + premium = $113,000`.

| BTC на expiry | Intrinsic value | P/L | Вывод |
| ---: | ---: | ---: | --- |
| $105,000 | $0 | -$3,000 | call сгорел |
| $110,000 | $0 | -$3,000 | на strike еще нет прибыли |
| $113,000 | $3,000 | $0 | breakeven |
| $120,000 | $10,000 | +$7,000 | прибыль после premium |

## Формулы

- `Long call intrinsic value = max(underlying price - strike, 0)`
- `P/L = intrinsic value - premium`
- `Breakeven = strike + premium`

## Long put

Для `long put` прибыль появляется ниже breakeven. Если SPY = $500, put strike $480, premium $8, то `breakeven = $480 - $8 = $472`.

## Практика

ETH = $4,000. Long call strike $4,300, premium $120. Посчитай breakeven, max loss и P/L при ETH = $4,200, $4,420, $4,700.

Решение:

- `Breakeven = $4,300 + $120 = $4,420`.
- Max loss = $120.
- При $4,200 P/L = -$120.
- При $4,420 P/L = $0.
- При $4,700 intrinsic value = $400, P/L = +$280.

## Вывод

- `Payoff` показывает P/L по сценариям на expiry.
- `Breakeven` важнее голого направления.
- Long call имеет ограниченный max loss и растущий upside.
- Long put имеет ограниченный max loss и зарабатывает на падении ниже breakeven.
