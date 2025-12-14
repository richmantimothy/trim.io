<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
</script>

<div class="flex items-center">
	<h1 class="text-lg font-semibold md:text-2xl">Dashboard</h1>
</div>
<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
	<Card>
		<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
			<CardTitle class="text-sm font-medium">Total Posts</CardTitle>
			<svg
				class="h-4 w-4 text-muted-foreground"
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
				<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
				<circle cx="9" cy="7" r="4" />
				<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
				<path d="M16 3.13a4 4 0 0 1 0 7.75" />
			</svg>
		</CardHeader>
		<CardContent>
			<div class="text-2xl font-bold">128</div>
			<p class="text-xs text-muted-foreground">+19% from last month</p>
		</CardContent>
	</Card>
	<Card>
		<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
			<CardTitle class="text-sm font-medium">Scheduled</CardTitle>
			<svg
				class="h-4 w-4 text-muted-foreground"
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
		</CardHeader>
		<CardContent>
			<div class="text-2xl font-bold">12</div>
			<p class="text-xs text-muted-foreground">Upcoming this week</p>
		</CardContent>
	</Card>
	<Card>
		<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
			<CardTitle class="text-sm font-medium">Engagement</CardTitle>
			<svg
				class="h-4 w-4 text-muted-foreground"
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
				<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
			</svg>
		</CardHeader>
		<CardContent>
			<div class="text-2xl font-bold">24.5%</div>
			<p class="text-xs text-muted-foreground">+2% from last week</p>
		</CardContent>
	</Card>
	<Card>
		<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
			<CardTitle class="text-sm font-medium">Followers</CardTitle>
			<svg
				class="h-4 w-4 text-muted-foreground"
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
				<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
				<circle cx="9" cy="7" r="4" />
			</svg>
		</CardHeader>
		<CardContent>
			<div class="text-2xl font-bold">10.4k</div>
			<p class="text-xs text-muted-foreground">+540 since last month</p>
		</CardContent>
	</Card>
</div>
<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
	<Card class="col-span-4">
		<CardHeader>
			<CardTitle>Recent Activity</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="space-y-8">
				<div class="flex items-center">
					<div class="ml-4 space-y-1">
						<p class="text-sm font-medium leading-none">New follower</p>
						<p class="text-sm text-muted-foreground">You have a new follower on Twitter</p>
					</div>
					<div class="ml-auto font-medium">2m ago</div>
				</div>
                <div class="flex items-center">
					<div class="ml-4 space-y-1">
						<p class="text-sm font-medium leading-none">Post published</p>
						<p class="text-sm text-muted-foreground">"Top 5 AI Tools" was published on LinkedIn</p>
					</div>
					<div class="ml-auto font-medium">1h ago</div>
				</div>
			</div>
		</CardContent>
	</Card>
	<Card class="col-span-3">
		<CardHeader>
			<CardTitle>Upcoming Posts</CardTitle>
		</CardHeader>
		<CardContent>
			<div class="space-y-8">
				<div class="flex items-center">
					<div class="ml-4 space-y-1">
						<p class="text-sm font-medium leading-none">AI Marketing Trends</p>
						<p class="text-sm text-muted-foreground">Tomorrow at 10:00 AM</p>
					</div>
				</div>
                <div class="flex items-center">
					<div class="ml-4 space-y-1">
						<p class="text-sm font-medium leading-none">Weekly Recap</p>
						<p class="text-sm text-muted-foreground">Friday at 5:00 PM</p>
					</div>
				</div>
			</div>
		</CardContent>
	</Card>
</div>
