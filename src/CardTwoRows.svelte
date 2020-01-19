<script>
  export let valueTop = "";
  export let valueBottom = "";
</script>

<div class="container">
  <div class="top">{valueTop}</div>
  <div class="spacer"></div>
  <div class="bottom">{valueBottom}</div>
</div>

<style>
  .container {
    text-align: center;
    background: rgb(0, 211, 190);
    padding: 0.5em;
    border-radius: 15px;
    box-shadow: 1px 1px 5px 1px hsla(0, 0%, 0%, 0.027);
    margin: 0.5em;

    flex: 1 1 0;
  }

  .top {
    font-size: 1.25em;
    padding: 0.25em 0.1em;
    font-weight: bolder;
  }

  .bottom {
    padding: 0.5em 0.1em;
    font-size: 0.7em;
  }

  .spacer {
    border: 1px solid rgba(0, 0, 0, 0.246);
  }
</style>