<script lang="ts">
	let option1 = true;
</script>

<div class="px-10 py-14">
	<h1 class="text-3xl font-medium dark:text-white">Configurações</h1>
	<div class="mt-12 space-y-8">
		<div>
			<div class="flex space-x-3">
				<p class="dark:text-white">Opção 1</p>
				<button
					on:click={() => {
						option1 = !option1;
					}}
					class:bg-transparent={!option1}
					class:bg-primary={option1}
					class="flex w-11 rounded-full p-0.5 shadow-inner-light transition duration-200 ease-out dark:shadow-inner-dark"
					><svg
						class:translate-x-0={!option1}
						class:translate-x-full={option1}
						class="transform text-white drop-shadow transition-transform duration-200 ease-in-out"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"
						/></svg
					></button
				>
			</div>
			<p class="mt-1 text-sm text-neutral-500">
				Última alteração por <span class="font-medium">Enrico Ricardo Saez</span> às
				<span class="font-medium">14:56</span> em <span class="font-medium">26/04/2024</span>.
			</p>
		</div>
		<div>
			<div class="flex space-x-3">
				<p class="dark:text-white">Opção 1</p>
				<button
					on:click={() => {
						option1 = !option1;
					}}
					class:bg-transparent={!option1}
					class:bg-primary={option1}
					class="flex w-11 rounded-full p-0.5 shadow-inner-light transition duration-200 ease-out dark:shadow-inner-dark"
					><svg
						class:translate-x-0={!option1}
						class:translate-x-full={option1}
						class="transform text-white drop-shadow transition-transform duration-200 ease-in-out"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"
						/></svg
					></button
				>
			</div>
			<p class="mt-1 text-sm text-neutral-500">
				Última alteração por <span class="font-medium">Enrico Ricardo Saez</span> às
				<span class="font-medium">14:56</span> em <span class="font-medium">26/04/2024</span>.
			</p>
		</div>
		<div>
			<div class="flex space-x-3">
				<p class="dark:text-white">Opção 1</p>
				<button
					on:click={() => {
						option1 = !option1;
					}}
					class:bg-transparent={!option1}
					class:bg-primary={option1}
					class="flex w-11 rounded-full p-0.5 shadow-inner-light transition duration-200 ease-out dark:shadow-inner-dark"
					><svg
						class:translate-x-0={!option1}
						class:translate-x-full={option1}
						class="transform text-white drop-shadow transition-transform duration-200 ease-in-out"
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"
						/></svg
					></button
				>
			</div>
			<p class="mt-1 text-sm text-neutral-500">
				Última alteração por <span class="font-medium">Enrico Ricardo Saez</span> às
				<span class="font-medium">14:56</span> em <span class="font-medium">26/04/2024</span>.
			</p>
		</div>
	</div>
</div>
