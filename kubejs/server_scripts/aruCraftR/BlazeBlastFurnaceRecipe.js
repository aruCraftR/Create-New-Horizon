ServerEvents.recipes(event => {
    remove_recipes_output(event, [
      "gtceu:blaze_blast_furnace"
    ])
    event.recipes.gtceu.assembler("fixed_blaze_blast_furnace")
    .EUt(480)
    .duration(200)
    .itemInputs(["4x #gtceu:circuits/ev", "4x kubejs:blaze_blast_furnace_casing", "2x gtceu:pyrotheum_dust", "2x gtceu:hv_sensor", "gtceu:hv_field_generator"])
    .inputFluids(Fluid.of("gtceu:polyvinyl_chloride", 288))
    .itemOutputs("gtceu:blaze_blast_furnace")
  })
