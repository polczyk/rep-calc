<script>
  import Card from "./Card.svelte";
  import Target from "./Target.svelte";
  import Workout from "./Workout.svelte";

  let name = "world";

  let previousWorkout = {};
  let currentWorkout = {};

  let unit = "kg";

  let currentVolume = 0;
  let previousVolume = 0;
</script>

<style>
  h1 {
    background: white;
    margin: 0;
    padding: 2em 0.5em;
  }
  .container {
    margin: auto;
    position: relative;
  }

</style>

<div class="container">
  <h1>Rep Calculator</h1>

  

  <Card>
    <h2>Previous Workout</h2>
    <Workout bind:total={previousVolume} bind:this={previousWorkout} {unit} />
  </Card>

  <Card>
    <h2>Target</h2>
    <Target bind:previousVolume bind:currentVolume {unit} />
  </Card>

  <Card>
    <h2>Current Workout</h2>
    <Workout bind:total={currentVolume} bind:this={currentWorkout} sets={[]} />
  </Card>

  <select bind:value={unit}>
    <option>kg</option>
    <option>lbs</option>
  </select>

</div>
