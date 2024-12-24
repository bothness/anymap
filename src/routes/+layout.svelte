<script>
  import { writable } from 'svelte/store';
  import { setContext } from "svelte";
  import "../app.css";

  export let data;

  let config = writable(data);
  setContext("config", config);

  function updateConfig(data) {
    if (data.place) config.set(data);
  }
  $: updateConfig(data);

</script>

<slot/>