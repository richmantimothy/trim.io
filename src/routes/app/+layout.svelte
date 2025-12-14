<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { page } from '$app/stores';

	let { children } = $props();

	const navItems = [
		{ name: 'Dashboard', href: '/app/dashboard' },
		{ name: 'Create Post', href: '/app/create' },
		{ name: 'Schedule', href: '/app/schedule' },
		{ name: 'Analytics', href: '/app/analytics' },
		{ name: 'Accounts', href: '/app/accounts' },
		{ name: 'Settings', href: '/app/settings' }
	];
</script>

<div class="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
	<div class="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
		<div class="flex h-full max-h-screen flex-col gap-2">
			<div class="flex h-14 items-center border-b px-6">
				<a class="flex items-center gap-2 font-semibold" href="/app/dashboard">
					<span class="">SocialAI</span>
				</a>
			</div>
			<div class="flex-1 overflow-auto py-2">
				<nav class="grid items-start px-4 text-sm font-medium">
					{#each navItems as item}
						<a
							class="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary {$page.url.pathname === item.href ? 'bg-gray-100 text-primary dark:bg-gray-800' : 'text-gray-500 dark:text-gray-400'}"
							href={item.href}
						>
							{item.name}
						</a>
					{/each}
				</nav>
			</div>
			<div class="mt-auto p-4">
                <Button variant="outline" class="w-full" href="/login">Logout</Button>
			</div>
		</div>
	</div>
	<div class="flex flex-col">
		<header class="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 lg:hidden dark:bg-gray-800/40">
			<a class="flex items-center gap-2 font-semibold" href="/app/dashboard">
				<span class="">SocialAI</span>
			</a>
		</header>
		<main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
			{@render children()}
		</main>
	</div>
</div>
