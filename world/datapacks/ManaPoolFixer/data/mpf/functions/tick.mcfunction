execute as @a[scores={mana_pool_fixer_trigger=1..}] at @s run function mpf:trigger
scoreboard players reset @a mana_pool_fixer_trigger
scoreboard players enable @a mana_pool_fixer_trigger