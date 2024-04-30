<svelte:head>
	<title>Erro 404 | EcoVision</title>
</svelte:head>

<div class="flex h-screen items-center justify-center bg-white">
	<div>
		<div class="flex items-center space-x-5 text-[10rem] font-bold text-tertiary">
			<span>4</span>
			<img class="mx-auto h-32" src="/images/logo.svg" alt="EcoVision" />
			<span>4</span>
		</div>
		<div class="mt-20 flex justify-center">
			<button
				class="rounded-full bg-neutral-200 px-7 py-4 text-center text-[0.825rem] uppercase tracking-wider transition duration-150 ease-in hover:bg-neutral-300"
				on:click={() => {
					window.location.href = '/';
				}}
			>
				Voltar à página inicial
			</button>
		</div>
	</div>
</div>
