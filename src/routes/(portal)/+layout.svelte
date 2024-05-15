<script lang="ts">
	import { page } from '$app/stores';
	import { authHandlers } from '$lib/scripts/auth.js';
	import { onMount } from 'svelte';

	let logoutModal: HTMLDialogElement;
	export let data;
	const displayName: String = data.displayName!;
	function toggleLightMode() {
		document.body.classList.remove('dark');
	}
	function toggleDarkMode() {
		document.body.classList.add('dark');
	}

	function titleCase(str: String) {
		let splitStr = str.toLowerCase().split(' ');
		for (let i = 0; i < splitStr.length; i++) {
			splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
		}
		return splitStr.join(' ');
	}

	onMount(() => {
		const handleClickOutside = (event: Event) => {
			if (logoutModal.open && event.target === logoutModal) {
				logoutModal.close();
			}
		};

		window.addEventListener('click', handleClickOutside);

		// Return a function to clean up the event listener
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<nav
	class="fixed top-0 z-50 w-full border-b border-neutral-300 bg-white dark:border-neutral-700 dark:bg-neutral-900"
>
	<div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
		<div class="flex space-x-8">
			<div class="flex items-center space-x-2">
				<div>
					<img class="h-8 dark:hidden" src="/images/logo.svg" alt="EcoVision" />
					<img class="hidden h-8 dark:block" src="/images/logo_negative.svg" alt="EcoVision" />
				</div>
				<p class="font-outfit text-2xl font-medium text-primary">
					Eco<span class="text-tertiary dark:text-white">Vision </span><span
						class="font-outfit text-xl font-normal text-tertiary dark:text-white">| admin</span
					>
				</p>
			</div>
			<div class="flex space-x-3">
				<button
					class="cursor-default rounded-full p-1 transition duration-150 ease-in dark:hover:cursor-pointer dark:hover:bg-neutral-800"
					on:click={toggleLightMode}
				>
					<svg
						class="text-neutral-900 dark:text-neutral-600"
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
						class="text-neutral-400 dark:text-white"
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
		</div>
		<div class="flex items-center space-x-3">
			<p class="text-neutral-900 dark:text-neutral-100">{titleCase(displayName)}</p>
			<button
				class="rounded-full bg-neutral-200 p-1.5 transition duration-150 ease-in hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
				on:click={() => logoutModal.showModal()}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M5 5h6c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6c.55 0 1-.45 1-1s-.45-1-1-1H5z"
					/><path
						fill="currentColor"
						d="m20.65 11.65l-2.79-2.79a.501.501 0 0 0-.86.35V11h-7c-.55 0-1 .45-1 1s.45 1 1 1h7v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7"
					/></svg
				>
			</button>
		</div>
	</div>
</nav>
<div class="mx-auto flex h-screen max-w-7xl divide-x divide-neutral-300 dark:divide-neutral-700">
	<nav class="fixed top-14 w-60 overflow-y-auto px-5 py-8" style="height: calc(100vh - 56px);">
		<div class="flex h-full flex-col justify-between space-y-16">
			<div class="space-y-4">
				<p class="pl-3 font-medium dark:text-white">Água</p>
				<div class="mt-4 flex flex-col space-y-3">
					<a
						class="a flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition"
						class:water-button-pressed={$page.route.id?.match(/reservatorios/g)}
						class:water-button-unpressed={!$page.route.id?.match(/reservatorios/g)}
						href="/reservatorios"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M20 13c.55 0 1-.45 1-1s-.45-1-1-1h-1V5h1c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h1v6H4c-.55 0-1 .45-1 1s.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1h-1v-6zm-8 3c-1.66 0-3-1.32-3-2.95c0-1.16.41-1.58 2.24-3.68a.999.999 0 0 1 1.51 0c1.82 2.09 2.24 2.52 2.24 3.68C15 14.68 13.66 16 12 16"
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
						class:water-button-pressed={$page.route.id?.match(/saidas-de-agua/g)}
						class:water-button-unpressed={!$page.route.id?.match(/saidas-de-agua/g)}
						href="/saidas-de-agua"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"
							><path
								fill="currentColor"
								d="M192 96v12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12l31-3.9l1-.1l1 .1l31 3.9l96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12V96c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h100.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160h-32l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256v-43.8l-32-4l-32 4V224h-18.7c-8.5 0-16.6 3.4-22.6 9.4L128 256z"
							/></svg
						><span>SAÍDAS DE ÁGUA</span></a
					>
					<a
						class="flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition"
						class:water-button-pressed={$page.route.id?.match(/poco/g)}
						class:water-button-unpressed={!$page.route.id?.match(/poco/g)}
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
				<p class="pl-3 font-medium dark:text-white">
					Luz <span class="text-sm">(demonstração)</span>
				</p>
				<div class="mt-4 flex flex-col space-y-3">
					<a
						class="flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition"
						class:light-button-pressed={$page.route.id?.match(/lampadas/g)}
						class:light-button-unpressed={!$page.route.id?.match(/lampadas/g)}
						href="/lampadas"
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
							><path
								fill="currentColor"
								d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m-3-3h6c.55 0 1-.45 1-1s-.45-1-1-1H9c-.55 0-1 .45-1 1s.45 1 1 1m3-17C7.86 2 4.5 5.36 4.5 9.5c0 3.82 2.66 5.86 3.77 6.5h7.46c1.11-.64 3.77-2.68 3.77-6.5C19.5 5.36 16.14 2 12 2"
							/></svg
						>
						<span>LÂMPADAS</span></a
					>
				</div>
			</div>
			<div>
				<a
					class="flex items-center space-x-2 text-nowrap rounded-full px-3 py-2.5 text-[0.825rem] tracking-wide transition"
					class:button-pressed={$page.route.id?.match(/configuracoes/g)}
					class:button-unpressed={!$page.route.id?.match(/configuracoes/g)}
					href="/configuracoes"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M19.5 12c0-.23-.01-.45-.03-.68l1.86-1.41c.4-.3.51-.86.26-1.3l-1.87-3.23a.987.987 0 0 0-1.25-.42l-2.15.91c-.37-.26-.76-.49-1.17-.68l-.29-2.31c-.06-.5-.49-.88-.99-.88h-3.73c-.51 0-.94.38-1 .88l-.29 2.31c-.41.19-.8.42-1.17.68l-2.15-.91c-.46-.2-1-.02-1.25.42L2.41 8.62c-.25.44-.14.99.26 1.3l1.86 1.41a7.343 7.343 0 0 0 0 1.35l-1.86 1.41c-.4.3-.51.86-.26 1.3l1.87 3.23c.25.44.79.62 1.25.42l2.15-.91c.37.26.76.49 1.17.68l.29 2.31c.06.5.49.88.99.88h3.73c.5 0 .93-.38.99-.88l.29-2.31c.41-.19.8-.42 1.17-.68l2.15.91c.46.2 1 .02 1.25-.42l1.87-3.23c.25-.44.14-.99-.26-1.3l-1.86-1.41c.03-.23.04-.45.04-.68m-7.46 3.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5"
						/></svg
					>
					<span>CONFIGURAÇÕES</span></a
				>
			</div>
		</div>
	</nav>
	<div class="ml-60 size-full overflow-y-auto pb-8 pt-14">
		<slot />
	</div>
</div>
<dialog bind:this={logoutModal} class="rounded-xl backdrop:backdrop-blur-[2px] dark:bg-neutral-900">
	<div class="p-8">
		<p class="dark:text-white">Tem certeza que deseja sair?</p>
		<div class="mt-4 flex justify-center">
			<button
				class="rounded-full bg-neutral-200 px-3 py-1.5 text-[0.825rem] tracking-wider transition duration-150 ease-in hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
				on:click={authHandlers.logOutWithMicrosoft}>SAIR</button
			>
		</div>
	</div>
</dialog>
