<script>
  import Card from "./Card.svelte";

  export let sets = [
    {
      weight: 0,
      reps: 0
    }
  ];

  export let unit = "";

  export let total = 0;

  $: {
    total = sets.reduce((acc, cur) => acc + cur.weight * cur.reps, 0);
  }

  function handleClick() {
    sets.push({ weight: 0, reps: 0 });
    sets = sets;
  }

  function removeRow(i) {
    return function() {
      sets.splice(i, 1);
      sets = sets;
    };
  }
</script>

<style>
  th {
    text-align: left;
  }

  input[type="number"] {
    text-align: center;
    margin: 0.5em;
    margin-left: 0;
    border-radius: 10px;
    width: 5em;
    padding: 0.5em;
    border-color: rgb(230, 230, 230);
    background: rgb(245, 245, 245);
    font-size: 1.25em;
    border-width: 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    text-align: left;
    padding: 0;
  }

  th {
    transition: all 1s linear;
    padding: 1em 0;
  }

  tfoot td {
    padding: 1.5em 0;
  }

  .add {
    margin: 1em auto;
    font-size: 1.25em;
    padding: 0.5em;
    display: block;
    border-radius: 10px;
    width: 50%;
    outline-style: none;
  }
</style>

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
        <td>
          <input type="number" min="0" max="999" bind:value={set.weight} />
          {unit}
        </td>
        <td>
          <input type="number" min="0" max="999" bind:value={set.reps} />
        </td>
        <td>{set.weight * set.reps} {unit}</td>
        <button on:click={removeRow(i)}>x</button>
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

<button class="add" on:click={handleClick}>Add Set</button>
