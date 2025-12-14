<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
</script>

<div class="flex h-screen w-full items-center justify-center px-4">
	<div class="w-full max-w-sm space-y-6">
		<div class="space-y-2 text-center">
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
