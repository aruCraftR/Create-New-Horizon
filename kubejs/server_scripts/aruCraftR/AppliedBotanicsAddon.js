ServerEvents.recipes(event => {
  remove_recipes_output(event, [
    "appbot:mana_cell_housing"
  ])
  event.recipes.gtceu.assembler("mana_housing")
        .EUt(480)
        .duration(100)
        .itemInputs(["3x gtceu:steel_plate", "2x gtceu:steel_screw", "3x botania:dragonstone_block", "2x ae2:quartz_glass"])
        .itemOutputs("appbot:mana_cell_housing")
  })
