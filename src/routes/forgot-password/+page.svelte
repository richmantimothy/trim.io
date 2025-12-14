<script>
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
</script>
<div class="flex h-screen w-full items-center justify-center px-4">
    <div class="w-full max-w-sm space-y-6">
        <h1 class="text-3xl font-bold text-center">Reset Password</h1>
        <div class="space-y-4">
            <Input placeholder="Email" type="email" />
            <Button class="w-full">Send Reset Link</Button>
        </div>
        <div class="text-center text-sm">
            <a href="/login" class="underline">Back to Login</a>
        </div>
    </div>
</div>
