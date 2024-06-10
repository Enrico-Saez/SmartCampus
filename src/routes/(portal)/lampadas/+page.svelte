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
					class="relative z-10 mx-auto mt-5 fill-none text-neutral-500 shadow-yellow-300 drop-shadow-2xl dark:text-neutral-700"
					xmlns="http://www.w3.org/2000/svg"
					width="90"
					height="90"
					viewBox="0 0 24 24"
					><path
						d="M12 4a5.51 5.51 0 0 0-5.5 5.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5C17.5 6.47 15.03 4 12 4"
						opacity=".3"
					/><path
						fill="currentColor"
						d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m-4-5h8v2H8zm4-15C7.86 2 4.5 5.36 4.5 9.5c0 3.82 2.66 5.86 3.77 6.5h7.46c1.11-.64 3.77-2.68 3.77-6.5C19.5 5.36 16.14 2 12 2m3.15 12h-6.3c-.86-.61-2.35-2.03-2.35-4.5C6.5 6.47 8.97 4 12 4s5.5 2.47 5.5 5.5c0 2.47-1.49 3.89-2.35 4.5"
					/></svg
				>

				<div class="lampada absolute left-[5.1rem] top-6 h-6 w-7 rounded-3xl bg-yellow-300"></div>
			</div>
			<div class="absolute bottom-2 right-3 z-30 text-right text-yellow-950 dark:text-yellow-100">
				<h1 class="text-xl font-semibold">
					<span class="mr-2 text-base font-medium text-yellow-600 dark:text-yellow-300"
						>Luz acesa há</span
					>50h
				</h1>
				<p class="text-sm font-medium">Lâmpada {i + 1}</p>
			</div>
		</div>
	{/each}
	<div
		class="animate-fade-in relative h-48 w-48 overflow-hidden rounded-xl bg-white dark:bg-neutral-900 dark:shadow-black"
		style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
	>
		<div class="relative">
			<svg
				class="relative z-10 mx-auto mt-5 fill-none text-neutral-500 shadow-yellow-300 drop-shadow-2xl dark:text-neutral-700"
				xmlns="http://www.w3.org/2000/svg"
				width="90"
				height="90"
				viewBox="0 0 24 24"
				><path
					d="M12 4a5.51 5.51 0 0 0-5.5 5.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5C17.5 6.47 15.03 4 12 4"
					opacity=".3"
				/><path
					fill="currentColor"
					d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m-4-5h8v2H8zm4-15C7.86 2 4.5 5.36 4.5 9.5c0 3.82 2.66 5.86 3.77 6.5h7.46c1.11-.64 3.77-2.68 3.77-6.5C19.5 5.36 16.14 2 12 2m3.15 12h-6.3c-.86-.61-2.35-2.03-2.35-4.5C6.5 6.47 8.97 4 12 4s5.5 2.47 5.5 5.5c0 2.47-1.49 3.89-2.35 4.5"
				/></svg
			>
		</div>
		<div class="absolute bottom-2 right-3 z-30 text-right text-yellow-950 dark:text-yellow-100">
			<h1 class="text-xl font-semibold">
				<span class="text-base font-medium text-yellow-600 dark:text-yellow-300">Luz apagada</span>
			</h1>
			<p class="text-sm font-medium">Lâmpada 11</p>
		</div>
	</div>
</div>

<style>
	.lampada {
		box-shadow:
			0 0 0 10px #ffe770,
			0 0 300px 10px #ffcd00;
		animation: glow 4s infinite ease-in-out;
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

	@keyframes fade-in {
		0% {
			opacity: 0;
			transform: translate(0px, 10px);
		}
		100% {
			opacity: 1;
			transform: translate(0px, 0px);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.4s ease-in-out;
	}
</style>
