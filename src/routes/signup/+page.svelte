<script>
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
            <h1 class="text-3xl font-bold text-center">Sign Up</h1>
            <p class="text-gray-500 dark:text-gray-400">Create your account to get started</p>
        </div>
        <div class="space-y-4">
            <div class="space-y-2">
                <Input placeholder="Email" type="email" />
            </div>
            <div class="space-y-2">
                <Input placeholder="Password" type="password" />
            </div>
            <Button class="w-full" href="/app/dashboard">Create Account</Button>
        </div>
        <div class="text-center text-sm">
            Already have an account? <a href="/login" class="underline">Login</a>
        </div>
    </div>
</div>
