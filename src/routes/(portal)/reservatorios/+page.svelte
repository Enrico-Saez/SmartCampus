<script lang="ts">
</script>

<div class="grid grid-cols-4 justify-items-center gap-y-10">
	<div
		class="relative flex h-48 w-48 flex-col justify-end overflow-hidden rounded-xl bg-white dark:bg-neutral-800"
	>
		<svg xmlns="http://www.w3.org/2000/svg" class="w-full" height="20">
			<g class="transition-transform duration-500">
				<path
					class="water fill-red-300"
					d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
				/>
			</g>
		</svg>
		<div class="h-0 w-full bg-cyan-300"></div>
		<div class="absolute bottom-2 right-3 text-right text-red-950">
			<div class="flex items-end justify-end space-x-0.5">
				<svg
					class="mb-0.5"
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M2.725 21q-.275 0-.5-.137t-.35-.363q-.125-.225-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3q.25 0 .488.125t.387.375l9.25 16q.15.25.138.513t-.138.487q-.125.225-.35.363t-.5.137zM12 18q.425 0 .713-.288T13 17q0-.425-.288-.712T12 16q-.425 0-.712.288T11 17q0 .425.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10q-.425 0-.712.288T11 11v3q0 .425.288.713T12 15"
					/></svg
				>
				<h1 class="text-3xl font-semibold">30L</h1>
			</div>
			<p class="font-medium">Reservatório 1</p>
		</div>
	</div>
	{#each Array(11) as _, i}
		<div
			class="relative flex h-48 w-48 flex-col justify-end overflow-hidden rounded-xl bg-white dark:bg-neutral-800"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-full" height="20">
				<g class="transition-transform duration-500">
					<path
						class="water fill-cyan-300"
						d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
					/>
				</g>
			</svg>
			<div class="h-20 w-full bg-cyan-300"></div>
			<div class="absolute bottom-2 right-3 text-right text-cyan-950">
				<h1 class="text-3xl font-semibold">500L</h1>
				<p class="font-medium">Reservatório {i + 2}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.water {
		animation: ripple 2.5s infinite linear;
	}

	@keyframes ripple {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(-148%, 0, 0);
		}
	}
</style>
