<script>
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
</script>
<div class="flex h-screen w-full items-center justify-center px-4">
    <div class="w-full max-w-sm space-y-6">
        <h1 class="text-3xl font-bold text-center">Sign Up</h1>
        <div class="space-y-4">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Button class="w-full" href="/app/dashboard">Create Account</Button>
        </div>
        <div class="text-center text-sm">
            Already have an account? <a href="/login" class="underline">Login</a>
        </div>
    </div>
</div>
