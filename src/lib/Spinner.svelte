<script>
  export let isLoading = true;
  let body;
</script>

{#if isLoading}
  <div class="spinner-container">
    <div class="spinner-border">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
{/if}

<style>
  .spinner-container {
    z-index: 1000;
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .spinner-border {
    box-sizing: border-box;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    border: 0.3em solid rgba(0, 0, 0, 0.2);
    border-right-color: black;
    border-radius: 50%;
    margin: auto;
    animation: 0.75s linear infinite spinner-border;
  }
  @keyframes spinner-border {
    100% {
      transform: rotate(360deg);
    }
  }
  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
</style>
