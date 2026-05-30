# Risk system

Урок 9 · `risk-system`

## Цель

Перейти от отдельных идей к процессу. Сначала определяется `risk per trade`, потом выбирается позиция.

## Risk loop

1. Plan: сценарий, invalidation, max loss.
2. Size: размер позиции от риска.
3. Execute: цена входа, spread, liquidity.
4. Review: process error vs outcome error.

## Position sizing

Если счет $10,000, а risk per trade = 1%, максимальный риск на сделку = $100. Если option premium $250 и max loss равен premium, один контракт уже слишком большой.

## Вывод

- Сначала risk, потом позиция.
- Размер сделки подчиняется max loss.
- Journal превращает случайные сделки в данные.
