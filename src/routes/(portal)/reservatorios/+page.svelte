<script lang="ts">
	let measureUnit = 'L';

	function convertToLiters() {
		if (measureUnit === 'm³') {
			measureUnit = 'L';
			dangerValue *= 1000;
			for (const reservatory in reservatories) {
				reservatories[reservatory].maxCapacity *= 1000;
				reservatories[reservatory].measurement *= 1000;
			}
		}
	}

	function convertToCubicMeters() {
		if (measureUnit === 'L') {
			measureUnit = 'm³';
			dangerValue /= 1000;
			for (const reservatory in reservatories) {
				reservatories[reservatory].maxCapacity /= 1000;
				reservatories[reservatory].measurement /= 1000;
			}
		}
	}

	let reservatories = {
		0: {
			name: '0',
			maxCapacity: 10000,
			measurement: 300
		},
		1: {
			name: '1',
			maxCapacity: 9000,
			measurement: 7000
		},
		2: {
			name: '2',
			maxCapacity: 15000,
			measurement: 5000
		},
		3: {
			name: '3',
			maxCapacity: 6000,
			measurement: 5500
		},
		4: {
			name: '4',
			maxCapacity: 10000,
			measurement: 10000
		},
		5: {
			name: '5',
			maxCapacity: 8500,
			measurement: 4000
		},
		6: {
			name: '6',
			maxCapacity: 12000,
			measurement: 4000
		},
		7: {
			name: '7',
			maxCapacity: 10000,
			measurement: 4000
		},
		8: {
			name: '8',
			maxCapacity: 4000,
			measurement: 250
		},
		9: {
			name: '9',
			maxCapacity: 9000,
			measurement: 4000
		}
	};

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
							Defina o nível de risco de volume dos reservatórios.
						</p>
					</div>
				</div>
			</div>
			<div class="mt-1 flex space-x-1">
				<input
					bind:value={dangerValueInput}
					class="w-[5.5rem] rounded-full bg-transparent px-2.5 text-neutral-900 shadow-inner-light focus:outline-none focus:ring-2 focus:ring-primary dark:border-neutral-600 dark:text-neutral-100 dark:shadow-inner-dark"
					type="text"
				/>
				<p class="w-[1rem] text-nowrap font-medium text-neutral-900 dark:text-neutral-100">
					{measureUnit}
				</p>
			</div>
		</div>
		<div>
			<p class="text-[0.8rem] font-medium tracking-wide text-neutral-900 dark:text-neutral-100">
				Unidade de Medida
			</p>
			<div class="mt-1 flex space-x-2">
				<button
					class="w-12 py-0.5 text-sm font-medium"
					on:click={convertToLiters}
					class:water-button-pressed={measureUnit === 'L'}
					class:water-button-unpressed={measureUnit === 'm³'}>L</button
				>
				<button
					class="w-12 py-0.5 text-sm font-medium"
					on:click={convertToCubicMeters}
					class:water-button-pressed={measureUnit === 'm³'}
					class:water-button-unpressed={measureUnit === 'L'}>m³</button
				>
			</div>
		</div>
	</div>
</div>

<div class="mt-6 grid grid-cols-4 justify-items-center gap-y-10">
	{#each Object.entries(reservatories) as [key, data]}
		<div
			class="animate-fade-in relative flex h-48 w-48 flex-col justify-end overflow-hidden rounded-xl bg-white dark:bg-neutral-900 dark:shadow-black"
			style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-full" height="20">
				<g class="transition-transform duration-500">
					<path
						class:fill-red={data.measurement <= dangerValue}
						class:fill-cyan={data.measurement > dangerValue}
						class="water"
						d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
					/>
				</g>
			</svg>
			<div
				class:bg-red={data.measurement <= dangerValue}
				class:bg-cyan={data.measurement > dangerValue}
				class="w-full"
				style="height: {Math.floor((11 * data.measurement) / data.maxCapacity)}rem"
			></div>
			<div class="absolute bottom-0 right-0 hidden h-[4.15rem] w-full bg-black/60 dark:block"></div>
			<div
				class:text-red={data.measurement <= dangerValue}
				class:text-cyan={data.measurement > dangerValue}
				class="text-cyan absolute bottom-2 right-3 text-right dark:shadow-black dark:drop-shadow-2xl"
			>
				<h1 class="text-3xl font-semibold">
					{data.measurement}<span class="text-base font-medium opacity-75"
						>/{data.maxCapacity}{measureUnit}</span
					>
				</h1>
				<p class="text-sm font-medium">Reservatório {data.name}</p>
			</div>
			{#if data.measurement <= dangerValue}
				<div class="absolute right-3 top-3">
					<svg
						class="mb-1 animate-pulse text-red-950 dark:text-red-300"
						xmlns="http://www.w3.org/2000/svg"
						width="40"
						height="40"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M2.725 21q-.275 0-.5-.137t-.35-.363q-.125-.225-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3q.25 0 .488.125t.387.375l9.25 16q.15.25.138.513t-.138.487q-.125.225-.35.363t-.5.137zM12 18q.425 0 .713-.288T13 17q0-.425-.288-.712T12 16q-.425 0-.712.288T11 17q0 .425.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10q-.425 0-.712.288T11 11v3q0 .425.288.713T12 15"
						/></svg
					>
				</div>
			{/if}
			<div
				class="absolute bottom-0 left-0 flex h-[11rem] flex-col justify-between *:border-black *:dark:border-white dark:*:border-white"
			>
				<div class="relative w-3 border">
					<div class="absolute -top-2 left-3.5 text-xs font-medium dark:text-white">Máx</div>
				</div>
				<div class="w-2 border"></div>
				<div class="w-2 border"></div>
				<div class="w-2 border"></div>
				<div class="w-2 border"></div>
				<div class="w-3 border"></div>
				<div class="w-2 border"></div>
				<div class="w-2 border"></div>
				<div class="w-2 border"></div>
				<div class="w-2 border"></div>
				<div class="w-0 border"></div>
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
