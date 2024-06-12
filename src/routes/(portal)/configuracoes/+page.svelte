<script lang="ts">
	import { enhance } from '$app/forms';
	let option1 = true;
</script>

<div class="px-10 py-14 text-neutral-900 dark:text-neutral-100">
	<h1 class="text-3xl font-medium dark:text-white">Configurações</h1>
	<div class="mt-12 space-y-12 *:space-y-6">
		<div class="hidden">
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
							class="text-white drop-shadow transition-transform duration-200 ease-in-out transform"
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
							class="text-white drop-shadow transition-transform duration-200 ease-in-out transform"
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
							class="text-white drop-shadow transition-transform duration-200 ease-in-out transform"
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
		<div>
			<p class="text-lg font-medium">Bot Telegram</p>
			<div>
				<div class="flex space-x-5">
					<div class="flex w-24 space-x-1">
						<p>ChatID</p>
						<div class="group relative">
							<p class="cursor-default leading-none text-neutral-900 dark:text-neutral-100">🛈</p>
							<div
								class="animate-fade-in absolute left-4 top-4 z-40 hidden w-max border border-neutral-300 bg-white px-2 py-1 group-hover:block dark:border-neutral-700 dark:bg-neutral-800"
							>
								<p class="text-nowrap text-sm text-neutral-900 dark:text-neutral-100">
									Insira o ChatID do destinatário a receber a mensagem de alerta.
								</p>
							</div>
						</div>
					</div>
					<form method="POST" action="?/updateTelegramChatID" use:enhance>
						<div class="flex space-x-2.5">
							<input
								class="w-32 rounded-full bg-transparent px-2.5 text-neutral-900 shadow-inner-light focus:outline-none focus:ring-2 focus:ring-primary dark:border-neutral-600 dark:text-neutral-100 dark:shadow-inner-dark"
								type="text"
								maxlength="10"
								name="chatID"
							/>
							<button
								class="flex size-6 items-center justify-center rounded-full bg-neutral-200 transition duration-150 ease-in hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700"
								type="submit"
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
									><path
										fill="currentColor"
										d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h11.175q.4 0 .763.15t.637.425l2.85 2.85q.275.275.425.638t.15.762V19q0 .825-.587 1.413T19 21zm7-3q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-5-8h7q.425 0 .713-.288T15 9V7q0-.425-.288-.712T14 6H7q-.425 0-.712.288T6 7v2q0 .425.288.713T7 10"
									/></svg
								>
							</button>
						</div>
					</form>
				</div>
				<p class="mt-2 text-sm text-neutral-500">
					Lembre-se de iniciar manualmente uma conversa com o <span class="italic">bot</span> (<a
						href="https://t.me/EcoVisionBot"
						target="_blank"
						class="text-neutral-900 transition hover:text-primary dark:text-neutral-300"
						>@EcoVisionBot</a
					>) para poder receber mensagens.
				</p>
			</div>
			<div class="flex space-x-5">
				<p class="w-24">Mensagem</p>
				<form method="POST" action="?/updateTelegramMessage" use:enhance>
					<div class="flex items-center space-x-2.5">
						<textarea
							class="resize-none rounded-xl bg-transparent px-1.5 py-0.5 text-neutral-900 shadow-inner-light focus:outline-none focus:ring-2 focus:ring-primary dark:border-neutral-600 dark:text-neutral-100 dark:shadow-inner-dark"
							rows="5"
							cols="50"
							name="message"
						></textarea>
						<button
							class="flex size-6 items-center justify-center rounded-full bg-neutral-200 transition duration-150 ease-in hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700"
							type="submit"
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
								><path
									fill="currentColor"
									d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h11.175q.4 0 .763.15t.637.425l2.85 2.85q.275.275.425.638t.15.762V19q0 .825-.587 1.413T19 21zm7-3q1.25 0 2.125-.875T15 15t-.875-2.125T12 12t-2.125.875T9 15t.875 2.125T12 18m-5-8h7q.425 0 .713-.288T15 9V7q0-.425-.288-.712T14 6H7q-.425 0-.712.288T6 7v2q0 .425.288.713T7 10"
								/></svg
							>
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
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
