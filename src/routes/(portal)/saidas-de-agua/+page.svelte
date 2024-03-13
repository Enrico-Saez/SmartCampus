<script lang="ts">
</script>

<div class="grid grid-cols-4 justify-items-center gap-y-10">
	<div
		class="animate-fade-in relative flex h-48 w-48 overflow-hidden rounded-xl bg-white dark:bg-neutral-800"
		style="box-shadow: 8px 8px 34px rgba(0,0,0,.2)"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"
			><path
				fill="currentColor"
				d="M192 96v12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12l31-3.9l1-.1l1 .1l31 3.9l96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12V96c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h100.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160h-32l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256v-43.8l-32-4l-32 4V224h-18.7c-8.5 0-16.6 3.4-22.6 9.4L128 256z"
			/></svg
		>
	</div>
	{#each Array(9) as _, i}
		<div
			class="animate-fade-in relative h-48 w-48 overflow-hidden rounded-xl bg-white dark:bg-neutral-800 dark:shadow-black"
			style="box-shadow: 8px 8px 25px rgba(0,0,0,.2)"
		>
			<svg
				class="ml-6 mt-4 bg-red-500 text-neutral-900"
				xmlns="http://www.w3.org/2000/svg"
				width="60"
				height="60"
				viewBox="0 0 512 512"
				><path
					fill="currentColor"
					d="M192 96v12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12l31-3.9l1-.1l1 .1l31 3.9l96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12V96c0-17.7-14.3-32-32-32s-32 14.3-32 32M32 256c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h100.1c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48H352c17.7 0 32 14.3 32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160h-32l-22.6-22.6c-6-6-14.1-9.4-22.6-9.4H256v-43.8l-32-4l-32 4V224h-18.7c-8.5 0-16.6 3.4-22.6 9.4L128 256z"
				/></svg
			>
			<div class="absolute">
				<div class="drop"></div>
			</div>
		</div>
	{/each}
</div>

<style>
	.drop {
		position: relative;
		width: 20px;
		height: 20px;
		top: -30px;
		margin: 0 auto;
		background: #000000;
		-moz-border-radius: 20px;
		-webkit-border-radius: 20px;
		border-radius: 20px;
		-moz-animation-name: drip;
		-webkit-animation-name: drip;
		animation-name: drip;
		-moz-animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
		-webkit-animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
		animation-timing-function: cubic-bezier(1, 0, 0.91, 0.19);
		-moz-animation-duration: 2s;
		-webkit-animation-duration: 2s;
		animation-duration: 2s;
		-moz-animation-iteration-count: infinite;
		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
	}

	.drop:before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-bottom: 30px solid rgba(0, 0, 0, 1);
		top: -22px;
	}

	@keyframes drip {
		to {
			top: 60px;
			opacity: 0;
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
