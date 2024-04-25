<script lang="ts">
	import { authHandlers } from '$lib/scripts/auth';
</script>

<svelte:head>
	<title>EcoVision</title>
</svelte:head>

<div class="flex h-screen items-center justify-center bg-white">
	<div>
		<img class="mx-auto h-40" src="/images/logo.svg" alt="EcoVision" />
		{#if true}
			<h1 class="mt-5 text-center font-outfit text-6xl font-medium tracking-wider text-primary">
				Eco<span class="text-tertiary">Vision</span>
			</h1>
			<div class="mt-20 flex justify-center">
				<button
					class="mx-auto flex items-center space-x-5 rounded-full bg-neutral-200 px-7 py-4 transition duration-150 ease-in hover:bg-neutral-300"
					on:click={authHandlers.loginWithMicrosoft}
				>
					<span class="text-center text-[0.825rem] uppercase tracking-wider">ENTRAR COM</span>
					<img class="h-[1.3rem]" src="/images/Microsoft_365.svg" alt="" /></button
				>
			</div>
		{:else}
			<svg
				class="mx-auto mt-20 animate-spin"
				xmlns="http://www.w3.org/2000/svg"
				width="50"
				height="50"
				viewBox="0 0 24 24"
				><g fill="none" fill-rule="evenodd"
					><path
						d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
					/><path
						fill="currentColor"
						d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5S1.5 17.799 1.5 12"
						opacity=".1"
					/><path
						fill="currentColor"
						d="M12 4.5a7.458 7.458 0 0 0-5.187 2.083a1.5 1.5 0 0 1-2.075-2.166A10.458 10.458 0 0 1 12 1.5a1.5 1.5 0 0 1 0 3"
					/></g
				></svg
			>
		{/if}
	</div>
</div>
