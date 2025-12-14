<script lang="ts">
	import { Button } from "$lib/components/ui/button";
</script>

<div class="flex min-h-screen flex-col">
	<header class="container flex h-14 items-center px-4 lg:px-6">
		<a class="flex items-center justify-center" href="/">
			<span class="text-xl font-bold">SocialAI</span>
		</a>
		<nav class="ml-auto flex gap-4 sm:gap-6">
			<a class="text-sm font-medium hover:underline underline-offset-4" href="#features">Features</a>
			<a class="text-sm font-medium hover:underline underline-offset-4" href="#pricing">Pricing</a>
			<a class="text-sm font-medium hover:underline underline-offset-4" href="/login">Login</a>
		</nav>
	</header>
	<main class="flex-1">
		<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center space-y-4 text-center">
					<div class="space-y-2">
						<h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
							Supercharge Your Social Media with AI
						</h1>
						<p class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
							Create, schedule, and analyze your content with the power of artificial intelligence.
							Save time and grow your audience.
						</p>
					</div>
					<div class="space-x-4">
						<Button href="/signup" size="lg">Get Started</Button>
						<Button href="#features" variant="outline" size="lg">Learn More</Button>
					</div>
				</div>
			</div>
		</section>
		<section id="features" class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
			<div class="container px-4 md:px-6">
				<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
					Features
				</h2>
				<div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
					<div class="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-background">
						<div class="p-2 bg-black/10 dark:bg-white/10 rounded-full">
							<svg
								class="h-6 w-6"
								fill="none"
								height="24"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								width="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
								<polyline points="17 8 12 3 7 8" />
								<line x1="12" x2="12" y1="3" y2="15" />
							</svg>
						</div>
						<h3 class="text-xl font-bold">AI Content Generation</h3>
						<p class="text-sm text-gray-500 dark:text-gray-400 text-center">
							Generate engaging posts and captions in seconds with our advanced AI.
						</p>
					</div>
					<div class="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-background">
						<div class="p-2 bg-black/10 dark:bg-white/10 rounded-full">
							<svg
								class="h-6 w-6"
								fill="none"
								height="24"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								width="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<rect height="18" rx="2" ry="2" width="18" x="3" y="4" />
								<line x1="16" x2="16" y1="2" y2="6" />
								<line x1="8" x2="8" y1="2" y2="6" />
								<line x1="3" x2="21" y1="10" y2="10" />
							</svg>
						</div>
						<h3 class="text-xl font-bold">Smart Scheduling</h3>
						<p class="text-sm text-gray-500 dark:text-gray-400 text-center">
							Schedule your posts for optimal times to maximize reach and engagement.
						</p>
					</div>
					<div class="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-background">
						<div class="p-2 bg-black/10 dark:bg-white/10 rounded-full">
							<svg
								class="h-6 w-6"
								fill="none"
								height="24"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								viewBox="0 0 24 24"
								width="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M3 3v18h18" />
								<path d="m19 9-5 5-4-4-3 3" />
							</svg>
						</div>
						<h3 class="text-xl font-bold">Detailed Analytics</h3>
						<p class="text-sm text-gray-500 dark:text-gray-400 text-center">
							Track performance with in-depth analytics and actionable insights.
						</p>
					</div>
				</div>
			</div>
		</section>
	</main>
	<footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
		<p class="text-xs text-gray-500 dark:text-gray-400">© 2025 SocialAI. All rights reserved.</p>
		<nav class="sm:ml-auto flex gap-4 sm:gap-6">
			<a class="text-xs hover:underline underline-offset-4" href="#">Terms of Service</a>
			<a class="text-xs hover:underline underline-offset-4" href="#">Privacy</a>
		</nav>
	</footer>
</div>