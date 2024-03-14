<script lang="ts">
	let animation: number;
	let width = 0;
	let height = 0;

	function frame() {
		if (height == 150) {
			clearInterval(animation);
			return;
		}
		width += 0.3;
		height += 3;
	}

	setTimeout(() => {
		animation = setInterval(frame, 5);
	}, 600);
</script>

<div class="grid grid-cols-4 justify-items-center gap-y-10">
	<div
		class="animate-fade-in relative h-48 w-48 overflow-hidden rounded-xl bg-white dark:bg-neutral-800 dark:shadow-black"
		style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
	>
		<div class="relative">
			<div class="absolute left-[4.45rem] top-12 z-10">
				<div
					class="animate-current relative w-[0.7rem] bg-cyan-300 dark:bg-cyan-400"
					style="animation-fill-mode: forwards;"
				>
					<div
						class="animate-current-particle-1 absolute left-0.5 top-1 h-5 w-0.5 rounded-full bg-white opacity-0"
					></div>
					<div
						class="animate-current-particle-2 absolute right-0.5 top-1 h-5 w-0.5 rounded-full bg-white opacity-0"
					></div>
					<div
						class="animate-current-particle-3 absolute right-1 top-1 h-5 w-0.5 rounded-full bg-white opacity-0"
					></div>
				</div>
			</div>
			<svg
				class="relative z-20 ml-6 mt-4 text-neutral-900 dark:text-neutral-100"
				xmlns="http://www.w3.org/2000/svg"
				width="60"
				height="60"
				viewBox="0 0 512 512"
				><path
					fill="currentColor"
					d="M192 96v12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12l31-3.9l1-.1l1 .1l31 3.9l96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12V96c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h100.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160h-32l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256v-43.8l-32-4l-32 4V224h-18.7c-8.5 0-16.6 3.4-22.6 9.4L128 256z"
				/></svg
			>
		</div>
		<div
			class="absolute bottom-0 right-0 z-20 hidden h-[4.15rem] w-full bg-black/60 dark:block"
		></div>
		<div class="absolute bottom-2 right-3 z-30 text-right text-cyan-950 dark:text-cyan-100">
			<h1 class="text-3xl font-semibold">
				100<span class="text-base font-medium text-cyan-950/70 dark:text-cyan-300">ml/min</span>
			</h1>
			<p class="text-sm font-medium">Saída de água 1</p>
		</div>
	</div>
	<div
		class="animate-fade-in relative h-48 w-48 overflow-hidden rounded-xl bg-white dark:bg-neutral-800 dark:shadow-black"
		style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
	>
		<div class="relative">
			<div class="absolute left-[1.35rem] top-12">
				<svg>
					<polygon
						class="fill-red-300 dark:fill-red-400"
						points="50,0 60,0 {75 + width},{height} {40 - width},{height}"
					/>
				</svg>
			</div>
			<div class="absolute left-[4.75rem] top-12 z-40 bg-amber-500">
				<div class="relative bg-amber-500">
					<div
						class="animate-waterfall-particle-1 absolute right-1 top-1 h-5 w-0.5 rotate-[11deg] rounded-full bg-white opacity-0"
					></div>
					<div
						class="animate-waterfall-particle-2 absolute right-0.5 top-1 h-5 w-0.5 rotate-[5deg] rounded-full bg-white opacity-0"
					></div>
					<div
						class="animate-waterfall-particle-3 absolute top-1 h-5 w-0.5 rounded-full bg-white opacity-0"
					></div>
					<div
						class="animate-waterfall-particle-4 absolute left-0.5 top-1 h-5 w-0.5 rotate-[-5deg] rounded-full bg-white opacity-0"
					></div>
					<div
						class="animate-waterfall-particle-5 absolute left-1 top-1 h-5 w-0.5 rotate-[-11deg] rounded-full bg-white opacity-0"
					></div>
				</div>
			</div>
			<svg
				class="relative z-20 ml-6 mt-4 text-neutral-900 dark:text-neutral-100"
				xmlns="http://www.w3.org/2000/svg"
				width="60"
				height="60"
				viewBox="0 0 512 512"
				><path
					fill="currentColor"
					d="M192 96v12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12l31-3.9l1-.1l1 .1l31 3.9l96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12V96c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h100.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160h-32l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256v-43.8l-32-4l-32 4V224h-18.7c-8.5 0-16.6 3.4-22.6 9.4L128 256z"
				/></svg
			>
		</div>
		<div
			class="absolute bottom-0 right-0 z-20 hidden h-[4.15rem] w-full bg-black/60 dark:block"
		></div>
		<div class="absolute bottom-2 right-3 z-30 text-right text-red-950 dark:text-red-100">
			<h1 class="text-3xl font-semibold">
				800<span class="text-base font-medium text-red-950/70 dark:text-red-300">ml/min</span>
			</h1>
			<p class="text-sm font-medium">Saída de água 2</p>
		</div>
	</div>
	{#each Array(9) as _, i}
		<div
			class="animate-fade-in relative h-48 w-48 overflow-hidden rounded-xl bg-white dark:bg-neutral-800 dark:shadow-black"
			style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
		>
			<div class="relative">
				<div class="absolute left-[4.5rem] top-16 z-10">
					<div
						class="animate-drip relative top-[-20px] mx-auto h-2.5 w-2.5 rounded-full bg-cyan-300 dark:bg-cyan-400"
					>
						<div
							class="absolute top-[-11px] h-0 w-0 border-x-[5px] border-b-[15px] border-x-transparent border-b-cyan-300 dark:border-b-cyan-400"
						></div>
					</div>
				</div>
				<svg
					class="relative z-20 ml-6 mt-4 text-neutral-900 dark:text-neutral-100"
					xmlns="http://www.w3.org/2000/svg"
					width="60"
					height="60"
					viewBox="0 0 512 512"
					><path
						fill="currentColor"
						d="M192 96v12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12l31-3.9l1-.1l1 .1l31 3.9l96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12V96c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h100.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160h-32l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256v-43.8l-32-4l-32 4V224h-18.7c-8.5 0-16.6 3.4-22.6 9.4L128 256z"
					/></svg
				>
			</div>
			<div
				class="absolute bottom-0 right-0 z-20 hidden h-[4.15rem] w-full bg-black/60 dark:block"
			></div>
			<div class="absolute bottom-2 right-3 z-30 text-right text-cyan-950 dark:text-cyan-100">
				<h1 class="text-3xl font-semibold">
					50<span class="text-base font-medium text-cyan-950/70 dark:text-cyan-300">ml/min</span>
				</h1>
				<p class="text-sm font-medium">Saída de água {i + 3}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	@keyframes drip {
		to {
			top: 11.875rem;
		}
	}

	@keyframes water-current {
		0% {
			height: 0;
		}
		100% {
			height: 200px;
		}
	}

	@keyframes water-current-particle {
		to {
			top: 9rem;
		}
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
	}

	@keyframes waterfall-particle-1 {
		to {
			top: 9rem;
			right: 1.6rem;
		}
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
	}

	@keyframes waterfall-particle-2 {
		to {
			top: 9rem;
			right: 1rem;
		}
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
	}

	@keyframes waterfall-particle-3 {
		to {
			top: 9rem;
		}
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
	}

	@keyframes waterfall-particle-4 {
		to {
			top: 9rem;
			left: 1rem;
		}
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
	}

	@keyframes waterfall-particle-5 {
		to {
			top: 9rem;
			left: 1.6rem;
		}
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
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

	.animate-drip {
		animation: drip 2s cubic-bezier(1, 0, 0.91, 0.19) infinite;
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
		animation: waterfall-particle-1 0.8s 1s infinite;
	}
	.animate-waterfall-particle-2 {
		animation: waterfall-particle-2 0.8s 1.4s infinite;
	}
	.animate-waterfall-particle-3 {
		animation: waterfall-particle-3 0.8s 1s infinite;
	}
	.animate-waterfall-particle-4 {
		animation: waterfall-particle-4 0.8s 1.4s infinite;
	}
	.animate-waterfall-particle-5 {
		animation: waterfall-particle-5 0.8s 1s infinite;
	}
</style>
