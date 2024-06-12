<script lang="ts">
	import '../app.css';
	import { Toaster } from 'svelte-sonner';
</script>

<svelte:head>
	<title>EcoVision</title>
</svelte:head>

<Toaster position="top-right" expand={true} />
<slot />
