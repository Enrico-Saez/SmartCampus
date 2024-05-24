<script lang="ts">
	let dangerValue: number = 300;
	let dangerValueInput: String = String(dangerValue);

	$: {
		// Replace any non-digit characters
		dangerValueInput = dangerValueInput.replace(/\D/g, '');
		dangerValue = Number(dangerValueInput);
	}

	let ratio: number = 0.5;
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

<div class="grid-cols mx-8 grid justify-items-center gap-y-10">
	<div
		class="animate-fade-in relative h-48 w-full overflow-hidden rounded-xl bg-white dark:bg-neutral-900 dark:shadow-black"
		style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
	>
		<div class="relative flex">
			<div class="mt-1 h-20 w-8 rounded-lg border-[7px] border-black"></div>
			<div class="my-3 h-16 w-40 grow border-y-8 border-black"></div>
			<div class="mt-1 h-20 w-8 rounded-lg border-[7px] border-black"></div>
			<div class="relative h-48 w-48 overflow-hidden rounded-lg bg-neutral-600">
				<svg
					class="ml-1 mt-[6px]"
					xmlns="http://www.w3.org/2000/svg"
					width="180"
					height="180"
					viewBox="0 0 264 264"
				>
					<clipPath id="dropMask">
						<path
							d="M132.281 264.564c51.24 0 92.931-41.681 92.931-92.918 0-50.18-87.094-164.069-90.803-168.891L132.281 0l-2.128 2.773c-3.704 4.813-90.802 118.71-90.802 168.882.001 51.228 41.691 92.909 92.93 92.909z"
							fill="black"
						/>
					</clipPath>
					<path
						d="M132.281 264.564c51.24 0 92.931-41.681 92.931-92.918 0-50.18-87.094-164.069-90.803-168.891L132.281 0l-2.128 2.773c-3.704 4.813-90.802 118.71-90.802 168.882.001 51.228 41.691 92.909 92.93 92.909z"
						fill="black"
					/>
					<g clip-path="url(#dropMask)">
						<rect class="w-full h-full" fill="#4DD0E1" transform="translate(0, 98)"></rect>

						<g class="transition-transform duration-500" transform="translate(0, 80)">
							<path
								class="water"
								d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
							/>
						</g>
					</g>
				</svg>
			</div>
			<div class="mt-1 h-20 w-8 rounded-lg border-[7px] border-black"></div>
			<div class="my-3 h-16 w-40 grow border-y-8 border-black"></div>
			<div class="mt-1 h-20 w-8 rounded-lg border-[7px] border-black"></div>
		</div>
	</div>
	<div
		class="animate-fade-in relative col-span-1 h-48 w-96 overflow-hidden rounded-xl bg-white dark:bg-neutral-900 dark:shadow-black"
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
					d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"
				/></svg
			>
		</div>
	</div>
</div>

<style>
	.water {
		animation: ripple 1.5s infinite linear;
		fill: #4dd0e1;
	}

	@keyframes ripple {
		0% {	
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(-105%, 0, 0);
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
