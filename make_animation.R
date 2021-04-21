library(tidyverse)
library(gapminder)
library(gganimate)

gap_anim <- gapminder %>%
  filter(continent != "Oceania") %>%
  ggplot(aes(gdpPercap, lifeExp, color = continent)) +
  geom_point(show.legend = FALSE, alpha = 0.7) +
  facet_wrap(~continent, nrow = 1) +
  scale_size(range = c(2, 12)) +
  scale_x_log10() +
  labs(subtitle = "Life Expectancy and GDP per Capita (1952-2007)",
       x = "GDP per Capita, USD",
       y = "Life Expectancy, Years") +
  theme_linedraw() +
  transition_time(year) +
  labs(title = "Year: {frame_time}") +
  shadow_wake(wake_length = 0.1, alpha = FALSE)

gap_anim

write_rds(gap_anim, file = "animation.rds")
