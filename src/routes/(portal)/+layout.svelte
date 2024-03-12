<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav class="fixed top-0 w-full bg-white">
	<div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
		<p>Logo Smart Campus</p>
		<div class="flex items-center space-x-2">
			<p class="font-medium">Nuncio</p>
			<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"
				/></svg
			>
		</div>
	</div>
</nav>
<div class="flex h-screen divide-x divide-neutral-300">
	<nav class="fixed top-14 h-full w-56 bg-neutral-100 px-6 py-8">
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
	<div class="ml-56 w-full overflow-y-auto bg-neutral-100 p-8 py-[5.5rem]">
		<div class="h-full">
			<slot />
		</div>
	</div>
</div>
