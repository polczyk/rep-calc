<script>
	export let sets = [
		{
			weight: 0,
			reps: 0,
		}
	]
	
	export let unit = '';
	
	
	$: total = sets.reduce( (acc, cur) => acc + cur.weight * cur.reps, 0);
	
	function handleClick() {
		sets.push({weight: 0, reps: 0});
		sets = sets;
	}
	
	function removeRow(i) {
		return function() {
			sets.splice(i, 1);
			sets = sets;
		}
	}
</script>

<table>
	<thead>
		<tr>
			<th>Weight</th>
			<th>Reps</th>
			<th>Total</th>
		</tr>
	</thead>
	
	<tbody>
		{#each sets as set, i}
		<tr>
			<td><input size="3" maxlength="3" bind:value={set.weight}> {unit}</td>
			<td><input size="3" maxlength="3" bind:value={set.reps}></td>
			<td>{set.weight * set.reps}</td>
			<button on:click={removeRow(i)}>L</button>
		</tr>
		{/each}
	</tbody>
	
	<tfoot>
		<tr>
			<td colspan="2">Total</td>
			<td>{total} {unit}</td>
		</tr>
	</tfoot>
	
	
</table>

<button on:click={handleClick}>
	Add Set
</button>


<style>
	input {
		text-align: center;
		margin: 0.1em;
	}
</style>