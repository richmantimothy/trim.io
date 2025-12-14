<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
  import { Loader2, Wand2, Image as ImageIcon, Send } from "lucide-svelte";

  let topic = "";
  let tone = "Professional";
  let prompt = "";
  let generatedContent = "";
  let isLoading = false;
  let error = "";
  
  // Canva State
  let canvaApi: any = null;
  let designUrl = "";

  async function generatePost() {
    isLoading = true;
    error = "";
    try {
      const response = await fetch("/api/generate-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, tone, prompt }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to generate");
      }

      generatedContent = data.content;
    } catch (e: any) {
      error = e.message;
    } finally {
      isLoading = false;
    }
  }

  function openCanva() {
    if (window.Canva && window.Canva.DesignButton) {
      const api = window.Canva.DesignButton.initialize({
        apiKey: "YOUR_CANVA_API_KEY", // Placeholder - User needs to replace this
      });
      // In a real implementation, this would trigger the Canva modal
      // For this demo, we'll simulate an alert as we don't have a real API key
      alert("Canva integration requires a valid API Key. In production, this opens the Canva editor.");
    } else {
      // Fallback or simulation for demo
      alert("Canva SDK loading... (If this persists, check your internet connection)");
      // Simulate receiving a design
      designUrl = "https://placehold.co/600x400/png?text=Designed+with+Canva";
    }
  }
</script>

<svelte:head>
  <script src="https://sdk.canva.com/designbutton/v2/api.js"></script>
</svelte:head>

<div class="space-y-6 max-w-4xl mx-auto pb-10">
  <div class="flex flex-col gap-2">
    <h1 class="text-3xl font-bold tracking-tight">Create New Post</h1>
    <p class="text-muted-foreground">
      Generate engaging content with Gemini AI and design stunning visuals with Canva.
    </p>
  </div>

  <div class="grid gap-6 md:grid-cols-2">
    <!-- Left Column: Content Generation -->
    <div class="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <Wand2 class="h-5 w-5 text-teal-600" />
            AI Content Generator
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="topic">
              Topic / Main Idea
            </label>
            <Input id="topic" bind:value={topic} placeholder="e.g., New Product Launch, Summer Sale..." />
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="tone">
              Tone of Voice
            </label>
            <select 
              id="tone" 
              bind:value={tone}
              class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="Professional">Professional</option>
              <option value="Casual">Casual</option>
              <option value="Excited">Excited</option>
              <option value="Witty">Witty</option>
              <option value="Urgent">Urgent</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="prompt">
              Additional Instructions (Optional)
            </label>
            <textarea
              id="prompt"
              bind:value={prompt}
              class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Include specific keywords, hashtags, or call to action..."
            ></textarea>
          </div>

          <Button class="w-full bg-teal-600 hover:bg-teal-700 text-white" on:click={generatePost} disabled={isLoading || !topic}>
            {#if isLoading}
              <Loader2 class="mr-2 h-4 w-4 animate-spin" />
              Generating...
            {:else}
              <Wand2 class="mr-2 h-4 w-4" />
              Generate with Gemini
            {/if}
          </Button>

          {#if error}
            <p class="text-sm text-red-500">{error}</p>
          {/if}
        </CardContent>
      </Card>
    </div>

    <!-- Right Column: Preview & Design -->
    <div class="space-y-6">
      <Card class="h-full flex flex-col">
        <CardHeader>
          <CardTitle class="flex items-center gap-2">
            <ImageIcon class="h-5 w-5 text-blue-500" />
            Post Preview & Design
          </CardTitle>
        </CardHeader>
        <CardContent class="flex-1 space-y-4 flex flex-col">
          <div class="space-y-2">
            <label class="text-sm font-medium leading-none" for="result">Post Content</label>
            <textarea
              id="result"
              bind:value={generatedContent}
              class="flex min-h-[150px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Generated content will appear here..."
            ></textarea>
          </div>

          <div class="border-2 border-dashed border-muted rounded-lg p-4 flex flex-col items-center justify-center text-center space-y-3 min-h-[200px] bg-muted/10 relative overflow-hidden">
            {#if designUrl}
              <img src={designUrl} alt="Designed visual" class="absolute inset-0 w-full h-full object-cover" />
              <Button variant="secondary" size="sm" class="absolute bottom-2 right-2 bg-white/90 hover:bg-white" on:click={() => designUrl = ""}>Remove</Button>
            {:else}
              <div class="p-4 rounded-full bg-blue-100 dark:bg-blue-900/20">
                <ImageIcon class="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p class="text-sm font-medium">Add Visuals</p>
                <p class="text-xs text-muted-foreground">Design stunning graphics with Canva</p>
              </div>
              <Button variant="outline" class="mt-2 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:hover:bg-blue-900/20" on:click={openCanva}>
                Design with Canva
              </Button>
            {/if}
          </div>

          <div class="pt-4 mt-auto">
            <Button class="w-full" size="lg" disabled={!generatedContent}>
              <Send class="mr-2 h-4 w-4" />
              Schedule Post
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</div>