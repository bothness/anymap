<script>
	import Icon from "$lib/Icon.svelte";

	export let open = false;
	export let message = "";
  export let url = "";

	let copiedMessage = false;

	async function copyLink() {
		try {
			await navigator.clipboard.writeText(`${decodeURIComponent(message)} ${url}`);
			open = false;
			copiedMessage = true;
			await new Promise(r => setTimeout(r, 4000));
			copiedMessage = false;
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	}
</script>

{#if open}
	<div class="share-icons">
		<button class="icon-button" title="Copy sharing link" on:click={copyLink}><Icon type="link" margin /></button>
		<a target="_blank" class="icon-button" title="Share on Bluesky" href="https://bsky.app/intent/compose?text={message} {url}"><Icon type="bluesky" margin /></a>
		<a target="_blank" class="icon-button" title="Share on Reddit" href="https://reddit.com/submit?title={message}&url={url}"><Icon type="reddit" margin /></a>
		<a target="_blank" class="icon-button" title="Share on Whatsapp" href="whatsapp://send?text={message} {url}"><Icon type="whatsapp" margin /></a>
		<a target="_blank" class="icon-button" title="Share on Twitter" href="https://twitter.com/intent/tweet?text={message}&url={url}"><Icon type="twitter" margin /></a>
		<a target="_blank" class="icon-button" title="Share on Facebook" href="https://www.facebook.com/sharer/sharer.php?u={url}"><Icon type="facebook" margin /></a>
		<a target="_blank" class="icon-button" title="Share by Email" href="mailto:?subject={message}&body={url}"><Icon type="email" margin /></a>
		<button class="icon-button" on:click={() => (open = false)}><Icon type="close" /></button>
	</div>
{/if}

{#if copiedMessage}
	<div class="copied-message">
		Copied to clipboard!
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
	.copied-message {
		position: fixed;
		left: 12px;
		top: 12px;
		padding: 6px;
		border-radius: 4px;
		background: rgba(64, 64, 64, 0.8);
		color: white;
	}
</style>
