<script>
  import Card from "./Card.svelte";
  import CardTwoRows from "./CardTwoRows.svelte";

  export let previousVolume = 100;
  export let currentVolume = 110;
  export let unit = "";

  let weightPerSet = 0;
  let sets = 0;

  $: repsToMatch = previousVolume / weightPerSet;
  $: difference = currentVolume - previousVolume;
</script>

<style>
* {margin: 0; padding: 0;}
  .top {
    display: flex;
    justify-content: space-evenly;
  }

  .input-container {
    display: flex;
    align-items: center;
    margin: 1.5em auto;
  }

  label {
    display: unset;
  }

  input {
    margin-left: auto;
    width: 5em;
    padding: 0.5em;
    text-align: center;
  }
</style>

    <div class="input-container">
      <label>Weight</label>
      <input bind:value={weightPerSet} />
    </div>

    <div class="input-container">
      <label>Sets</label>
      <input bind:value={sets} />
    </div>

  <br />
  <span>
    Reps at {weightPerSet} {unit} to match previous volume: {repsToMatch}
  </span>

  <div class="top">
    <CardTwoRows
      valueTop={`${previousVolume} ${unit}`}
      valueBottom="Volume to beat" />

    <CardTwoRows
      valueTop={`${currentVolume} ${unit}`}
      valueBottom="Current volume" />

    <CardTwoRows
      valueTop={`${difference > 0 ? '+' : ''} ${currentVolume - previousVolume} ${unit}`}
      valueBottom="Progress" />
  </div>

