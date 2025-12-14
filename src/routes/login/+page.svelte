<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
	<div class="w-full max-w-sm space-y-6">
		<div class="space-y-2 text-center">
			<a href="/" class="flex items-center justify-center gap-2 mb-4">
				<div class="bg-primary text-primary-foreground p-1 rounded-md">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scissors"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.47" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/></svg>
				</div>
				<span class="text-xl font-bold tracking-tight">Trim.io</span>
			</a>
			<h1 class="text-3xl font-bold">Login</h1>
			<p class="text-gray-500 dark:text-gray-400">Enter your email below to login to your account</p>
		</div>
		<div class="space-y-4">
			<div class="space-y-2">
				<label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label>
				<Input id="email" placeholder="m@example.com" required type="email" />
			</div>
			<div class="space-y-2">
				<div class="flex items-center">
					<label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password">Password</label>
					<a class="ml-auto text-sm underline" href="/forgot-password">Forgot your password?</a>
				</div>
				<Input id="password" required type="password" />
			</div>
			<Button class="w-full" href="/app/dashboard">Login</Button>
			<Button variant="outline" class="w-full" href="#">Login with Google</Button>
		</div>
		<div class="mt-4 text-center text-sm">
			Don't have an account?
			<a class="underline" href="/signup">Sign up</a>
		</div>
	</div>
</div>
