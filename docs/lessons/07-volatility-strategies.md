# Volatility strategies

Урок 7 · `volatility-strategies`

## Цель

Понять стратегии, где ставка делается на размер движения, диапазон или распад premium.

| Strategy | Ожидание | Что помогает | Что мешает |
| --- | --- | --- | --- |
| `long straddle` | большое движение | realized move, IV up | theta, IV crush |
| `long strangle` | очень большое движение | breakout | дорогой premium |
| `iron condor` | range | theta, IV down | trend, gap |
| `calendar spread` | время и term structure | front expiry decay | резкий move |

Главный вывод: сначала выбирается market regime, потом strategy.
