<script lang="ts">
	let dangerValue: number = 300;
	let dangerValueInput: String = String(dangerValue);

	$: {
		// Replace any non-digit characters
		dangerValueInput = dangerValueInput.replace(/\D/g, '');
		dangerValue = Number(dangerValueInput);
	}
</script>

<div class="sticky top-0 z-40 w-full bg-neutral-50/30 p-8 backdrop-blur-sm dark:bg-[#121212]/30">
	<div
		class="flex w-fit min-w-52 items-center space-x-14 rounded-full bg-white px-7 py-2 dark:bg-neutral-900"
		style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
	>
		<div>
			<div class="flex items-center space-x-1">
				<p class="text-[0.8rem] font-medium tracking-wide text-neutral-900 dark:text-neutral-100">
					Nível de Risco
				</p>
				<div class="group relative">
					<p class="cursor-default leading-none text-neutral-900 dark:text-neutral-100">🛈</p>
					<div
						class="animate-fade-in absolute left-4 top-4 z-40 hidden w-max border border-neutral-300 bg-white px-2 py-1 group-hover:block dark:border-neutral-700 dark:bg-neutral-800"
					>
						<p class="text-nowrap text-sm text-neutral-900 dark:text-neutral-100">
							Defina o nível de risco das pressões do poço.
						</p>
					</div>
				</div>
			</div>
			<div class="mt-1 flex space-x-1">
				<input
					bind:value={dangerValueInput}
					class="shadow-inner-light focus:ring-primary dark:shadow-inner-dark w-[5.5rem] rounded-full bg-transparent px-2.5 text-neutral-900 focus:outline-none focus:ring-2 dark:border-neutral-600 dark:text-neutral-100"
					type="text"
				/>
				<p class="w-[1rem] text-nowrap font-medium text-neutral-900 dark:text-neutral-100">N/m²</p>
			</div>
		</div>
	</div>
</div>

<div class="grid grid-flow-col justify-items-center gap-x-2">
	{#each Array(2) as _, i}
		<div
			class="animate-fade-in relative h-48 w-72 overflow-hidden rounded-xl bg-white dark:bg-neutral-900 dark:shadow-black"
			style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
		>
			<div class="relative">
				<!-- <svg
					class=""
					xmlns="http://www.w3.org/2000/svg"
					width="24px"
					height="24px"
					viewBox="0 -960 960 960"
					fill="#FFFFFF"
					><path
						fill="currentColor"
						d="M120-280h164q-17-17-31.5-37T227-360H120v80Zm360 0q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm253-320h107v-80H676q17 17 31.5 37t25.5 43ZM40-160v-320h80v40h83q-2-10-2.5-19.5T200-480q0-117 81.5-198.5T480-760h360v-40h80v320h-80v-40h-83q2 10 2.5 19.5t.5 20.5q0 117-81.5 198.5T480-200H120v40H40Zm80-120v-80 80Zm720-320v-80 80ZM480-480Zm0 120q-33 0-56.5-23.5T400-440q0-23 9.5-45.5T446-550l34-50 34 50q27 42 36.5 64.5T560-440q0 33-23.5 56.5T480-360Z"
					/></svg
				> -->
			</div>
			<div
				class="absolute bottom-0 right-0 z-20 hidden h-[4.15rem] w-full bg-black/60 dark:block"
			></div>
		</div>
	{/each}
	<div
			class="animate-fade-in relative h-48 w-72 overflow-hidden rounded-xl bg-white dark:bg-neutral-900 dark:shadow-black"
			style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
		>
			<div class="relative">
				<!-- <svg
					class=""
					xmlns="http://www.w3.org/2000/svg"
					width="24px"
					height="24px"
					viewBox="0 -960 960 960"
					fill="#FFFFFF"
					><path
						fill="currentColor"
						d="M120-280h164q-17-17-31.5-37T227-360H120v80Zm360 0q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm253-320h107v-80H676q17 17 31.5 37t25.5 43ZM40-160v-320h80v40h83q-2-10-2.5-19.5T200-480q0-117 81.5-198.5T480-760h360v-40h80v320h-80v-40h-83q2 10 2.5 19.5t.5 20.5q0 117-81.5 198.5T480-200H120v40H40Zm80-120v-80 80Zm720-320v-80 80ZM480-480Zm0 120q-33 0-56.5-23.5T400-440q0-23 9.5-45.5T446-550l34-50 34 50q27 42 36.5 64.5T560-440q0 33-23.5 56.5T480-360Z"
					/></svg
				> -->
			</div>
			<div
				class="absolute bottom-0 right-0 z-20 hidden h-[4.15rem] w-full bg-black/60 dark:block"
			></div>
		</div>
</div>
