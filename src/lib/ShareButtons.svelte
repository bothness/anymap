<script>
	import Icon from "$lib/Icon.svelte";

	export let open = false;
	export let message = "";
  export let url = "";
</script>

{#if open}
	<div class="share-icons">
		<a class="icon-button" href="https://bsky.app/intent/compose?text={message} {url}"><Icon type="bluesky" margin /></a>
		<a class="icon-button" href="https://reddit.com/submit?title={message}&url={url}"><Icon type="reddit" margin /></a>
		<a class="icon-button" href="whatsapp://send?text={message} {url}"><Icon type="whatsapp" margin /></a>
		<a class="icon-button" href="https://twitter.com/intent/tweet?text={message}&url={url}"><Icon type="twitter" margin /></a>
		<a class="icon-button" href="https://www.facebook.com/sharer/sharer.php?u={url}"><Icon type="facebook" margin /></a>
		<a class="icon-button" href="mailto:?subject={message}&body={url}"><Icon type="email" margin /></a>
		<button class="icon-button" on:click={() => (open = false)}><Icon type="close" /></button>
	</div>
{/if}

<style>
	.share-icons {
		z-index: 1;
		position: absolute;
		top: calc(100% + 6px);
		right: 0;
		background: white;
		border: 2px solid black;
		border-radius: 8px;
		padding: 6px;
		white-space: nowrap;
	}
</style>
