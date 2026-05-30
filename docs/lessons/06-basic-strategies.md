# Базовые стратегии

Урок 6 · `basic-strategies`

## Цель

Перейти от одиночных options к конструкциям. Стратегия - это форма риска: где max loss, где max profit, где breakeven.

## Главное

`Bull call spread`: купить call ниже и продать call выше. Ты платишь меньше, чем за один long call, но прибыль ограничена верхним strike.

| Strategy | Состав | Когда логична | Главный риск |
| --- | --- | --- | --- |
| `bull call spread` | buy call + sell higher call | умеренный рост | ограниченный upside |
| `bear put spread` | buy put + sell lower put | умеренное падение | ограниченный downside profit |
| `covered call` | long stock + short call | боковик/умеренный рост | упущенный сильный рост |
| `cash-secured put` | short put + cash | готов купить актив ниже | падение underlying |

## Практика

SPY = $500. Bull call spread: buy 500 call за $12, sell 520 call за $5.

Решение: debit = $7, max loss = $7, max profit = $13, breakeven = $507.
