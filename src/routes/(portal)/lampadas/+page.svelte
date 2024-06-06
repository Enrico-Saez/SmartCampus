<script lang="ts">
</script>

<div class="sticky top-0 z-40 w-full bg-neutral-50/30 p-8 backdrop-blur-sm dark:bg-[#121212]/30">
	<div
		class="flex w-fit min-w-52 items-center space-x-14 rounded-full bg-white px-7 py-2 dark:bg-neutral-900"
		style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
	></div>
</div>

<div class="grid grid-cols-4 justify-items-center gap-y-10">
	{#each Array(10) as _, i}
		<div
			class="animate-fade-in relative h-48 w-48 overflow-hidden rounded-xl bg-white dark:bg-neutral-900 dark:shadow-black"
			style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
		>
			<div class="relative">
				<svg
					class="relative z-20 ml-6 mt-4 text-neutral-900 dark:text-white"
					xmlns="http://www.w3.org/2000/svg"
					width="60"
					height="60"
					viewBox="0 0 24 24"
					fill="currentColor"
					><path
						fill="currentColor"
						d="M9.97308 18H11V13H13V18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM10 20V21H14V20H10ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992Z"
					/></svg
				>

				<div
					class="lampada absolute left-[24%] top-[30%] h-[18px] w-4 rounded-3xl bg-[#ffe770]"
				></div>
			</div>
			<div
				class="absolute bottom-0 right-0 z-20 hidden h-[4.15rem] w-full bg-black/60 dark:block"
			></div>
			<div class="absolute bottom-2 right-3 z-30 text-right text-yellow-950 dark:text-yellow-100">
				<h1 class="text-xl font-semibold">
					<span class="mr-2 text-base font-medium text-yellow-950/70 dark:text-yellow-300"
						>Luz acesa</span
					>50h
				</h1>
				<p class="text-sm font-medium">Lâmpada {i + 1}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.lampada {
		box-shadow:
			0 0 0 10px #ffe770,
			0 0 300px 10px #ffcd00;
		animation: glow 3s infinite ease-in-out;
	}

	@keyframes glow {
		0% {
			opacity: 0.3;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.3;
		}
	}
</style>
