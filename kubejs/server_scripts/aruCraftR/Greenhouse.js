ServerEvents.recipes(event => {
    function Greenhouse(id, input, fluid, output, boosted) {
      if (boosted) {
        event.recipes.gtceu.greenhouse(id)
          .circuit(2)
          .notConsumable(InputItem.of(input))
          .itemInputs('4x gtceu:fertilizer')
          .inputFluids(Fluid.of('minecraft:water', fluid))
          .itemOutputs(output)
          .duration(320)
          .EUt(120)
      } else {
        event.recipes.gtceu.greenhouse(id)
          .circuit(1)
          .notConsumable(InputItem.of(input))
          .inputFluids(Fluid.of('minecraft:water', fluid))
          .itemOutputs(output)
          .duration(640)
          .EUt(120)
      }
    }

    // Powder Cannon
    Greenhouse('powder_cannon', 'mynethersdelight:powder_cannon', 1000, ['18x mynethersdelight:powder_cannon','6x mynethersdelight:bullet_pepper'], false)
    Greenhouse('powder_cannon_boosted', 'mynethersdelight:powder_cannon', 1000, ['36x mynethersdelight:powder_cannon','12x mynethersdelight:bullet_pepper'], true)
  })