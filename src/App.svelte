<script>
	import Workout from './Workout.svelte';
	let name = 'world';
	
	let previousWorkout = {};
	let currentWorkout = {};
	
	let unit = 'kg';
</script>

<h1>Rep Calculator</h1>
<select bind:value={unit}>
	<option>kg</option>
	<option>lbs</option>
</select>

<h2>Previous Workout</h2>
<Workout bind:this={previousWorkout} unit={unit}/>

<h2>Target</h2>


<h2>Current Workout</h2>
<Workout bind:this={currentWorkout} sets={[]}/>