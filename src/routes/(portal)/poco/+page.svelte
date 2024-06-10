<script lang="ts">
	let pressoes = {
		entrada: {
			valor: 80
		},
		saida: {
			valor: 200
		}
	};

	let dangerValue: number = 100;
	let dangerValueInput: String = String(dangerValue);
	
	export let data
	console.log(data.artesianWell)

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
							Defina o nível de risco da pressão do poço.
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

<div class="grid-cols grid justify-items-center gap-y-10">
	<div class="flex w-full items-end">
		<div class="mb-4 grow">
			<div
				class="pl-8 text-left text-cyan-950"
				class:text-red={pressoes.entrada.valor > dangerValue}
				class:text-cyan={pressoes.entrada.valor <= dangerValue}
			>
				<h1 class="text-3xl font-semibold">
					{pressoes.entrada.valor}<span class="text-base font-medium">N/m²</span>
				</h1>
				<p class="text-sm font-medium">Pressão de entrada</p>
			</div>
			<div class="flex items-center">
				<div
					class=" h-14 w-full border-y-4 border-cyan-200"
					class:bg-cyan={pressoes.entrada.valor <= dangerValue}
					class:bg-red={pressoes.entrada.valor > dangerValue}
					class:pipe-red={pressoes.entrada.valor > dangerValue}
					class:pipe-cyan={pressoes.entrada.valor <= dangerValue}
				>
					{#if pressoes.entrada.valor <= dangerValue}
						<div
							class="animate-current-particle-1 relative left-0 top-2 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
						<div
							class="animate-current-particle-2 relative left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
						<div
							class="animate-current-particle-3 relative left-0 top-9 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
					{/if}
					{#if pressoes.entrada.valor > dangerValue}
						<div
							class="animate-waterfall-particle-1 relative left-0 top-2 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
						<div
							class="animate-waterfall-particle-2 relative left-0 top-3 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
						<div
							class="animate-waterfall-particle-3 relative left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
						<div
							class="animate-waterfall-particle-4 relative left-0 top-7 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
					{/if}
				</div>
				<div class="h-20 w-3 rounded-l-3xl bg-cyan-200"></div>
			</div>
		</div>
		<!-- MEU CÓDIGO -->
		<div class="relative hidden">
			<div class="my-3 h-16 w-40 grow border-y-4 border-cyan-100 dark:border-white">
				<div class="relative z-10">
					<div
						class="animate-current absolute -bottom-12 w-full"
						class:h-menor={pressoes.entrada.valor <= dangerValue}
						class:h-maior={pressoes.entrada.valor > dangerValue}
						class:bg-cyan={pressoes.entrada.valor <= dangerValue}
						class:bg-red={pressoes.entrada.valor > dangerValue}
						style="animation-fill-mode: backwards;"
					>
						{#if pressoes.entrada.valor <= dangerValue}
							<div
								class="animate-current-particle-1 absolute left-0 top-1 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
							<div
								class="animate-current-particle-2 absolute left-0 top-3 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
							<div
								class="animate-current-particle-3 absolute left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
						{/if}
						{#if pressoes.entrada.valor > dangerValue}
							<div
								class="animate-waterfall-particle-1 absolute left-0 top-1 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
							<div
								class="animate-waterfall-particle-2 absolute left-0 top-3 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
							<div
								class="animate-waterfall-particle-3 absolute left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
							<div
								class="animate-waterfall-particle-4 absolute left-0 top-7 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
						{/if}
					</div>
				</div>
			</div>
			<div class="mt-1 h-20 w-4 rounded-l-lg bg-cyan-100 dark:border-white"></div>
			<!-- TIRAR DPS PRA CIMA -->
			<div
				class="relative flex h-48 w-48 items-center justify-center overflow-hidden rounded-lg bg-neutral-600/50"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 264 264">
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
						<rect
							class="h-full w-full fill-cyan-300 dark:fill-cyan-400"
							transform="translate(0, 98.4)"
						></rect>

						<g class="transition-transform duration-500" transform="translate(0, 80)">
							<path
								class="water fill-cyan-300 dark:fill-cyan-400"
								d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
							/>
						</g>
					</g>
				</svg>
			</div>
			<div class="mt-1 h-20 w-8 rounded-lg border-[7px] border-black dark:border-white"></div>
			<div class="my-3 h-16 w-40 grow border-y-8 border-black dark:border-white">
				<div class="relative z-10">
					<div
						class="animate-current absolute -bottom-12 w-full"
						class:h-menor={pressoes.saida.valor <= dangerValue}
						class:h-maior={pressoes.saida.valor > dangerValue}
						class:bg-cyan={pressoes.saida.valor <= dangerValue}
						class:bg-red={pressoes.saida.valor > dangerValue}
						style="animation-fill-mode: backwards;"
					>
						{#if pressoes.saida.valor <= dangerValue}
							<div
								class="animate-current-particle-1 absolute left-0 top-1 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
							<div
								class="animate-current-particle-2 absolute left-0 top-3 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
							<div
								class="animate-current-particle-3 absolute left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
						{/if}
						{#if pressoes.saida.valor > dangerValue}
							<div
								class="animate-waterfall-particle-1 absolute left-0 top-1 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
							<div
								class="animate-waterfall-particle-2 absolute left-0 top-3 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
							<div
								class="animate-waterfall-particle-3 absolute left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
							<div
								class="animate-waterfall-particle-4 absolute left-0 top-7 h-[2px] w-5 rounded-full bg-white opacity-0"
							></div>
						{/if}
					</div>
				</div>
			</div>
			<div class="mt-1 h-20 w-8 rounded-lg border-[7px] border-black dark:border-white"></div>
		</div>
		<div
			class="relative flex h-52 w-96 items-end overflow-hidden rounded-xl dark:bg-neutral-900"
			style="box-shadow: 8px 8px 25px rgba(0,0,0,.2);"
		>
			<div class="w-full">
				<div class="relative">
					<svg xmlns="http://www.w3.org/2000/svg" class="water min-w-max" height="20">
						<g>
							<path
								class="fill-cyan-300 dark:fill-cyan-400"
								d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
							/>
						</g>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="water absolute bottom-0 left-[18rem]"
						height="20"
					>
						<g>
							<path
								class="fill-cyan-300 dark:fill-cyan-400"
								d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
							/>
						</g>
					</svg>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="water absolute bottom-0 left-[36rem]"
						height="20"
					>
						<g>
							<path
								class="fill-cyan-300 dark:fill-cyan-400"
								d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
							/>
						</g>
					</svg>
				</div>
				<div class="h-36 w-full bg-cyan-300 dark:bg-cyan-400"></div>
			</div>
			<div
				class="absolute flex size-full items-center justify-center bg-white/50 backdrop-blur-[3px] dark:bg-black/50"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewbox="0 0 264 264">
					<!-- the droplet mask for the bar -->
					<clipPath id="mask_shape">
						<path
							d="M132.281 264.564c51.24 0 92.931-41.681 92.931-92.918 0-50.18-87.094-164.069-90.803-168.891L132.281 0l-2.128 2.773c-3.704 4.813-90.802 118.71-90.802 168.882.001 51.228 41.691 92.909 92.93 92.909z"
							fill="#000000"
						/>
					</clipPath>

					<!-- droplet shape that can be colored -->
					<path
						class="fill-white dark:fill-neutral-900"
						d="M132.281 264.564c51.24 0 92.931-41.681 92.931-92.918 0-50.18-87.094-164.069-90.803-168.891L132.281 0l-2.128 2.773c-3.704 4.813-90.802 118.71-90.802 168.882.001 51.228 41.691 92.909 92.93 92.909z"
					/>

					<g clip-path="url(#mask_shape)">
						<!-- bar that should be the same color as the ripple -->
						<rect
							width="200"
							height="250"
							class="translate-x-10 translate-y-11 fill-cyan-300 dark:fill-cyan-400"
						/>

						<!-- position the ripple at the top of the bar -->
						<g class="-translate-x-[19rem] scale-[2.2]">
							<path
								class="water-droplet fill-cyan-300 dark:fill-cyan-400"
								d="M420 20.0047C441.5 19.6047 458.8 17.5047 471.1 15.5047C484.5 13.3047 497.6 10.3047 498.4 10.1047C514 6.50474 518 4.70474 528.5 2.70474C535.6 1.40474 546.4 -0.0952561 560 0.00474393V20.0047H420ZM420 20.0047C398.5 19.6047 381.2 17.5047 368.9 15.5047C355.5 13.3047 342.4 10.3047 341.6 10.1047C326 6.50474 322 4.70474 311.5 2.70474C304.3 1.40474 293.6 -0.0952561 280 0.00474393V20.0047H420ZM140 20.0047C118.5 19.6047 101.2 17.5047 88.9 15.5047C75.5 13.3047 62.4 10.3047 61.6 10.1047C46 6.50474 42 4.70474 31.5 2.70474C24.3 1.40474 13.6 -0.0952561 0 0.00474393V20.0047H140ZM140 20.0047C161.5 19.6047 178.8 17.5047 191.1 15.5047C204.5 13.3047 217.6 10.3047 218.4 10.1047C234 6.50474 238 4.70474 248.5 2.70474C255.6 1.40474 266.4 -0.0952561 280 0.00474393V20.0047H140Z"
							/>
						</g>
					</g>
				</svg>
			</div>
		</div>
		<div class="mb-4 grow">
			<div
				class="pr-8 text-right text-cyan-950"
				class:text-red={pressoes.saida.valor > dangerValue}
				class:text-cyan={pressoes.saida.valor <= dangerValue}
			>
				<h1 class="text-3xl font-semibold">
					{pressoes.saida.valor}<span class="text-base font-medium">N/m²</span>
				</h1>
				<p class="text-sm font-medium">Pressão de saída</p>
			</div>
			<div class="flex items-center">
				<div class="h-20 w-3 rounded-r-3xl bg-cyan-200"></div>
				<div
					class="h-14 w-full border-y-4 overflow-x-hidden"
					class:bg-cyan={pressoes.saida.valor <= dangerValue}
					class:bg-red={pressoes.saida.valor > dangerValue}
					class:pipe-red={pressoes.saida.valor > dangerValue}
					class:pipe-cyan={pressoes.saida.valor <= dangerValue}
				>
					{#if pressoes.saida.valor <= dangerValue}
						<div
							class="animate-current-particle-1 relative left-0 top-2 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
						<div
							class="animate-current-particle-2 relative left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
						<div
							class="animate-current-particle-3 relative left-0 top-9 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
					{/if}
					{#if pressoes.saida.valor > dangerValue}
						<div
							class="animate-waterfall-particle-1 relative left-0 top-2 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
						<div
							class="animate-waterfall-particle-2 relative left-0 top-3 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
						<div
							class="animate-waterfall-particle-3 relative left-0 top-5 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
						<div
							class="animate-waterfall-particle-4 relative left-0 top-7 h-[2px] w-5 rounded-full bg-white opacity-0"
						></div>
					{/if}
				</div>
			</div>
		</div>
	</div>
	<div
		class="animate-fade-in relative col-span-1 h-48 w-96 rounded-xl ml-4 bg-white dark:bg-neutral-900 dark:shadow-black"
		style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
	>
		<div class="relative">
			<svg
				class="relative ml-6 mt-4 text-neutral-900 dark:text-white"
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
		<div class="absolute bottom-2 right-3 z-30 text-right text-cyan-950 dark:text-white">
			<h1 class="text-4xl font-semibold">
				50<span class="text-xl font-medium text-cyan-950/70 dark:text-slate-100">min</span>
			</h1>
			<div class="flex items-center space-x-1">
				<p class="text-[0.9rem] font-medium tracking-wide text-neutral-900 dark:text-neutral-100">
					Horário de funcionamento
				</p>
				<div class="group relative">
					<p class="cursor-default leading-none text-neutral-900 dark:text-neutral-100">🛈</p>
					<div
						class="animate-fade-in absolute right-2 top-4 hidden w-max border border-neutral-300 bg-white px-2 py-1 group-hover:block dark:border-neutral-700 dark:bg-neutral-800"
					>
						<p class="text-nowrap text-sm text-neutral-900 dark:text-neutral-100">
							Hora relativa à bomba de água do poço.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.water {
		animation: ripple 2.5s infinite linear;
	}

	.water-droplet {
		animation: ripple-droplet 2.5s infinite linear;
	}

	@keyframes ripple {
		0% {
			transform: translate3d(0, 0, 0);
		}
		100% {
			transform: translate3d(-97%, 0, 0);
		}
	}

	@keyframes ripple-droplet {
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

	@keyframes water-current {
		0% {
			width: 0;
		}
		100% {
			width: 100%;
		}
	}

	@keyframes water-current-particle {
		to {
			left: 18rem;
		}
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
	}

	@keyframes waterfall-particle {
		to {
			left: 19rem;
		}
		0% {
			opacity: 0;
		}
		40% {
			opacity: 1;
		}
	}

	.animate-fade-in {
		animation: fade-in 0.4s ease-in-out;
	}

	.animate-current {
		animation: water-current 1.3s 0.6s;
	}

	.animate-current-particle-1 {
		animation: water-current-particle 1.3s 1s infinite;
	}
	.animate-current-particle-2 {
		animation: water-current-particle 1.3s 1.5s infinite;
	}
	.animate-current-particle-3 {
		animation: water-current-particle 1.3s 2s infinite;
	}

	.animate-waterfall-particle-1 {
		animation: waterfall-particle 0.5s 1s infinite linear;
	}
	.animate-waterfall-particle-2 {
		animation: waterfall-particle 0.5s 1.2s infinite linear;
	}
	.animate-waterfall-particle-3 {
		animation: waterfall-particle 0.5s 1.1s infinite linear;
	}
	.animate-waterfall-particle-4 {
		animation: waterfall-particle 0.5s 1.3s infinite linear;
	}
</style>
