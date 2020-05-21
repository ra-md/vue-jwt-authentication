<template>
	<div v-show="modal" class="overlay">
		<div class="modal">
			<slot name="content"></slot>
			<slot name="button"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Modal',
		data() {
			return {
				modal: false
			};
		},
		methods: {
			showModal() {
				this.modal = !this.modal;
			}
		}
	};
</script>

<style>
	.overlay {
		background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
	}

	.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1em;
    background-color: white;
    border-radius: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
	}
</style>
