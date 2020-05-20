<template>
	<div class="overlay">
		<div v-if="modal" class="modal">
			<p>akun berhasil dibuat silahkan login</p>
			<button>ok</button>
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
			openModal() {
				this.modal = !this.modal;
			}
		}
	};
</script>

<style>
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

	.overlay {
		background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
	}
</style>
