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

<nav
	class="fixed top-0 z-50 w-full border-b border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-800"
>
	<div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
		<p class="font-medium text-neutral-900 dark:text-neutral-100">SmartCampus Mauá</p>

		<div class="flex space-x-12">
			<div class="flex space-x-3">
				<button
					class="cursor-default rounded-full p-1 transition duration-150 ease-in dark:hover:cursor-pointer dark:hover:bg-neutral-700"
					on:click={toggleLightMode}
				>
					<svg
						class="text-orange-400 dark:text-neutral-600"
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
					class="rounded-full p-1 transition duration-150 ease-in hover:bg-neutral-200 dark:cursor-default dark:hover:cursor-default dark:hover:bg-transparent"
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
	<nav class="fixed top-14 h-full w-60 bg-neutral-100 px-5 py-8 dark:bg-[#121212]">
		<div class="flex flex-col space-y-3">
			<a
				class="a flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition"
				class:button-pressed={$page.route.id?.match(/reservatorios/g)}
				class:button-unpressed={!$page.route.id?.match(/reservatorios/g)}
				href="/reservatorios"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M7 20q-.825 0-1.412-.587T5 18v-7.15L3 12.4q-.325.25-.737.2t-.663-.4q-.25-.325-.187-.725t.387-.65l8.975-6.9Q11.325 3.5 12 3.5t1.225.425L22.2 10.8q.325.25.388.65t-.188.75q-.25.35-.65.388t-.75-.213l-2-1.525V18q0 .825-.587 1.413T17 20zm5-4q.825 0 1.413-.587T14 14q0-.675-.375-1.437T12 10q-1.25 1.8-1.625 2.563T10 14q0 .825.588 1.413T12 16"
					/></svg
				><span>RESERVATÓRIOS</span>
				<svg
					class="animate-pulse"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M2.725 21q-.275 0-.5-.137t-.35-.363q-.125-.225-.137-.488t.137-.512l9.25-16q.15-.25.388-.375T12 3q.25 0 .488.125t.387.375l9.25 16q.15.25.138.513t-.138.487q-.125.225-.35.363t-.5.137zM12 18q.425 0 .713-.288T13 17q0-.425-.288-.712T12 16q-.425 0-.712.288T11 17q0 .425.288.713T12 18m0-3q.425 0 .713-.288T13 14v-3q0-.425-.288-.712T12 10q-.425 0-.712.288T11 11v3q0 .425.288.713T12 15"
					/></svg
				></a
			>
			<a
				class="flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition"
				class:button-pressed={$page.route.id?.match(/saidas-de-agua/g)}
				class:button-unpressed={!$page.route.id?.match(/saidas-de-agua/g)}
				href="/saidas-de-agua"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M3 13h4v-1H5q-.425 0-.712-.288T4 11q0-.425.288-.712T5 10h2q.825 0 1.413.588T9 12v1h2V6.1q0-1.725 1.2-2.912T15.125 2q1.15 0 2.125.6t1.5 1.65l.7 1.4q.2.375.063.763T19 7q-.375.2-.763.063t-.587-.513l-.7-1.4q-.275-.525-.775-.837T15.1 4q-.875 0-1.487.613T13 6.1V13h2v-1q0-.825.588-1.412T17 10h2q.425 0 .713.288T20 11q0 .425-.288.713T19 12h-2v1h4q.425 0 .713.288T22 14q0 .425-.288.713T21 15H3q-.425 0-.712-.288T2 14q0-.425.288-.712T3 13m3 8q-.825 0-1.412-.587T4 19v-3h16v3q0 .825-.587 1.413T18 21z"
					/></svg
				><span>SAÍDAS DE ÁGUA</span></a
			>
			<a
				class="flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition"
				class:button-pressed={$page.route.id?.match(/poco/g)}
				class:button-unpressed={!$page.route.id?.match(/poco/g)}
				href="/poco"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M11 5H8q-.425 0-.712-.288T7 4q0-.425.288-.712T8 3h8q.425 0 .713.288T17 4q0 .425-.288.713T16 5h-3v2q0 .425-.288.713T12 8q-.425 0-.712-.288T11 7zM4 20.025v-6.05q0-.425.288-.712T5 12.975q.425 0 .713.288t.287.712V14h3v-3h-.025q-.425 0-.712-.288T7.974 10q0-.425.288-.712T8.975 9h6.05q.425 0 .713.288t.287.712q0 .425-.287.713t-.713.287H15v3h3v-.025q0-.425.288-.712t.712-.288q.425 0 .713.288t.287.712v6.05q0 .425-.288.713t-.712.287q-.425 0-.712-.287T18 20.025V20H6v.025q0 .425-.288.713T5 21.024q-.425 0-.712-.287T4 20.025"
					/></svg
				>
				<span>POÇO</span></a
			>
		</div>
	</nav>
	<div class="ml-60 w-full overflow-y-auto bg-neutral-100 p-8 pt-[5.5rem] dark:bg-[#121212]">
		<div class="h-full">
			<slot />
			<div class="h-8"></div>
		</div>
	</div>
</div>
