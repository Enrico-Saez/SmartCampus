<script lang="ts">
	import { page } from '$app/stores';
	import { darkMode } from '$lib/scripts/stores/darkMode';

	function toggleLightMode() {
		$darkMode = false;
		document.body.classList.remove('dark');
	}
	function toggleDarkMode() {
		$darkMode = true;
		document.body.classList.add('dark');
	}
</script>

<nav class="fixed top-0 z-10 w-full bg-white dark:bg-neutral-800">
	<div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
		<p class="text-neutral-900 dark:text-neutral-100">Logo Smart Campus</p>

		<div class="flex space-x-12">
			<div class="flex space-x-3">
				<button
					class="cursor-default rounded-full p-1 transition dark:hover:cursor-pointer dark:hover:bg-neutral-600"
					on:click={toggleLightMode}
				>
					<svg
						class="text-orange-400 dark:text-neutral-700"
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17M2 13q-.425 0-.712-.288T1 12q0-.425.288-.712T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13zm18 0q-.425 0-.712-.288T19 12q0-.425.288-.712T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13zm-8-8q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5m0 18q-.425 0-.712-.288T11 22v-2q0-.425.288-.712T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23M5.65 7.05L4.575 6q-.3-.275-.288-.7t.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7t-.275.7q-.275.3-.687.288T5.65 7.05M18 19.425l-1.05-1.075q-.275-.3-.275-.712t.275-.688q.275-.3.688-.287t.712.287L19.425 18q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M16.95 7.05q-.3-.275-.288-.687t.288-.713L18 4.575q.275-.3.7-.288t.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275t-.7-.275M4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.712-.275t.688.275q.3.275.288.688t-.288.712L6 19.425q-.275.3-.7.288t-.725-.288"
						/></svg
					>
				</button>
				<button
					class="rounded-full p-1 transition hover:bg-neutral-200 dark:cursor-default dark:hover:cursor-default dark:hover:bg-transparent"
					on:click={toggleDarkMode}
				>
					<svg
						class="text-neutral-400 dark:text-indigo-400"
						xmlns="http://www.w3.org/2000/svg"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M9.5 22q-.875 0-1.75-.175T6.075 21.3q-.275-.125-.45-.375t-.175-.55q0-.225.1-.425t.3-.35q1.75-1.375 2.7-3.375T9.5 12q0-2.225-.962-4.213T5.825 4.4q-.175-.15-.275-.35t-.1-.425q0-.3.163-.55T6.05 2.7q.825-.35 1.7-.525T9.5 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T19.5 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T9.5 22"
						/></svg
					>
				</button>
			</div>
			<div class="flex items-center space-x-2">
				<p class="font-medium text-neutral-900 dark:text-neutral-100">Nuncio</p>
				<svg
					class="text-neutral-900 dark:text-neutral-100"
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
					/></svg
				>
			</div>
		</div>
	</div>
</nav>
<div class="flex h-screen divide-x divide-neutral-300 dark:divide-neutral-700">
	<nav class="fixed top-14 h-full w-56 bg-neutral-100 px-6 py-8 dark:bg-[#121212]">
		<div class="flex flex-col space-y-3">
			<a
				class="block text-nowrap rounded-full px-5 py-2 text-[15px] transition"
				class:nav-button-pressed={$page.route.id?.match(/reservatorios/g)}
				class:nav-button-unpressed={!$page.route.id?.match(/reservatorios/g)}
				href="/reservatorios">RESERVATÓRIOS</a
			>
			<a
				class="block text-nowrap rounded-full px-5 py-2 text-[15px] transition"
				class:nav-button-pressed={$page.route.id?.match(/saidas-de-agua/g)}
				class:nav-button-unpressed={!$page.route.id?.match(/saidas-de-agua/g)}
				href="/saidas-de-agua">SAÍDAS DE ÁGUA</a
			>
			<a
				class="block text-nowrap rounded-full px-5 py-2 text-[15px] transition"
				class:nav-button-pressed={$page.route.id?.match(/poco/g)}
				class:nav-button-unpressed={!$page.route.id?.match(/poco/g)}
				href="/poco">POÇO</a
			>
		</div>
	</nav>
	<div class="ml-56 w-full overflow-y-auto bg-neutral-100 p-8 py-[5.5rem] dark:bg-[#121212]">
		<div class="h-full">
			<slot />
		</div>
	</div>
</div>
