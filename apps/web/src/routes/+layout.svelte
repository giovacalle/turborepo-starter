<script lang="ts">
	import '../app.css';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import Icon from '@iconify/svelte';
	import { siteConfig } from '$lib/config/site';
	import LanguageSelector from '$lib/components/language-selector.svelte';

	let { data, children } = $props();
</script>

<QueryClientProvider client={data.queryClient}>
	<div class="flex min-h-screen flex-col">
		<header class="w-full flex items-center justify-between p-5 px-10">
			<a href="/" class="flex items-center gap-2">
				<Icon icon="fluent:fast-acceleration-24-regular" width={20} height={20} />
				<span class="font-bold">{siteConfig.name}</span>
			</a>
			<LanguageSelector />
		</header>
		<main>
			{@render children()}
		</main>
		<footer class="w-full flex items-center justify-between p-5 px-10 border-t">
			<span class="text-sm text-gray-500">
				&copy; {new Date().getFullYear()}
				{siteConfig.name}
			</span>
			<a
				href={siteConfig.github}
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-gray-500 flex items-center gap-1">
				<Icon icon="mdi:github" width={20} height={20} />
				<span>GitHub</span>
			</a>
		</footer>
	</div>
</QueryClientProvider>
