<script>
	import "./search.css";
	import {createEventDispatcher} from "svelte";
	// import accessibleAutocomplete from "accessible-autocomplete";
	
	export let value = "";
	export let options = [];
	export let id = "autocomplete";
	export let label = "Select a place";
	export let hideLabel = false;
	export let mode = "search";
	export let placeholder = mode === "search" ? "Type any place name" : "Select one";
	export let labelKey = "name";
	export let groupKey = "group";
	
	export let suggest = (query, populateResults) => {
		const filteredResults = options.filter(opt => opt[labelKey].match(new RegExp(`\\b${query.replace(/[^\w\s]/gi, "")}`, "i")));
	  populateResults(filteredResults);
	};

	const dispatch = createEventDispatcher();

	function inputValueTemplate (result) {
		return result?.[labelKey] || result || "";
	}

	function suggestionTemplate (result) {
		return result?.[labelKey] ? (groupKey ? `${result[labelKey]} <span class="muted-text">${result[groupKey]}</span>` : result[labelKey]) : result;
	}

	function select(option) {
		if (option) {
			value = option;
			dispatch("change", option);
		}
	}

	function initAutocomplete(element) {
		window.accessibleAutocomplete({
		  element,
		  id,
			defaultValue: value,	
			displayMenu: "overlay",
		  source: suggest, 
			autoselect: mode === "search",
			onConfirm: select,
			placeholder,
			showAllValues: mode === "default",
			minLength: mode === "search" ? 3 : 0,
			templates: {
				inputValue: inputValueTemplate,
				suggestion: suggestionTemplate
			}
		});
	}
</script>

{#if label}<label for="{id}" style:display={hideLabel ? 'none' : null}>{label}</label>{/if}
<div id="{id}-container" class="autocomplete-container" use:initAutocomplete></div>

<style>
	.autocomplete-container {
		max-width: 800px;
		margin-bottom: 12px;
	}
	.autocomplete-container :global(.muted-text) {
		opacity: 0.8;
		font-size: smaller;
	}
</style>