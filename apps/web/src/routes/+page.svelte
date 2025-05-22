<script lang="ts">
	import { siteConfig } from '$lib/config/site';
	import Hero from './components/hero.svelte';
	import Features from './components/features.svelte';
	import Contributions from './components/contributions.svelte';
</script>

<svelte:head>
	<title>{siteConfig.name} - {siteConfig.description}</title>
	<meta name="description" content={siteConfig.description} />
	<meta property="og:title" content={siteConfig.name} />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:image" content={siteConfig.ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<Hero />
<Features />
<Contributions />
