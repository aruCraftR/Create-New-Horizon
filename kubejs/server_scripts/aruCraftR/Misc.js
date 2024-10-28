ServerEvents.recipes(event => {
    event.recipes.create.mixing('kubejs:tallow', ['minecraft:porkchop']).heated()
    event.recipes.create.mixing('kubejs:tallow', ['minecraft:chicken']).heated()
    event.recipes.create.mixing('kubejs:tallow', ['minecraft:beef']).heated()
    event.recipes.create.mixing('9x gtceu:tiny_flint_dust', ['gtceu:flint_dust'])
    event.recipes.create.mixing('2x minecraft:netherrack', [Fluid.of('minecraft:lava',25), '2x minecraft:cobblestone', 'create:cinder_flour'])
    event.recipes.create.mixing('cataclysm:dying_ember', ['3x create:cinder_flour','minecraft:blaze_powder','create:cinder_flour']).heated()
    event.shaped("1x enderio:void_chassis", [
      "ABA",
      "BCB",
      "ABA"
    ] , {
      A: "minecraft:iron_bars",
      B: "gtceu:steel_plate",
      C: "#gtceu:circuits/lv",
    })
    event.shaped("1x ctnhcore:pulsating_photovoltaic_block", [
      "AA",
      "BB",
      "CC"
    ] , {
      A: "enderio:photovoltaic_plate",
      B: "gtceu:pulsating_alloy_plate",
      C: "gtceu:tempered_glass",
    })
    event.shaped("1x minecraft:iron_shovel", [
      "A",
      "B",
      "C"
    ] , {
      A: "minecraft:iron_ingot",
      B: "minecraft:stick",
      C: "minecraft:iron_nugget",
    })
    event.shaped("1x create_new_age:fluxuated_magnetite", [
      "BAB",
      "CBC"
    ] , {
      A: "create_new_age:layered_magnet",
      B: "create_new_age:overcharged_diamond",
      C: "gtceu:diamond_screw",
    })
    event.shaped("1x ctnhcore:vibrant_photovoltaic_block", [
      "AA",
      "BB",
      "CC"
    ] , {
      A: "enderio:photovoltaic_plate",
      B: "gtceu:vibrant_alloy_plate",
      C: "gtceu:tempered_glass",
    })
    event.shaped("1x ad_astra:space_boots", [
      "AA",
      "BB",
      "BB"
    ] , {
      A: "gtnn:heavy_plate_t1",
      B: "kubejs:space_fabric",
    })
    remove_recipes_output(event, [
      "gtceu:blaze_blast_furnace"
    ])
    event.recipes.gtceu.assembler("blaze_blast_furnace_1")
    .EUt(480)
    .duration(200)
    .itemInputs(["4x #gtceu:circuits/ev", "2x kubejs:blaze_blast_furnace_casing", "4x gtceu:pyrotheum_dust", "2x gtceu:hv_sensor", "gtceu:hv_field_generator"])
    .inputFluids(Fluid.of("gtceu:polyvinyl_chloride", 288))
    .itemOutputs("gtceu:blaze_blast_furnace")
  })
