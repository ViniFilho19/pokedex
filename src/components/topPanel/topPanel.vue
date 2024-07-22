<template>
	<div class="panel ">
		<div class="container ">
			<!--<TopPanelButton v-for="(button, index) in buttons" :key="index" v-bind="button" />-->
		</div>
	</div>
</template>

<script>
	//import TopPanelButton from './topPanelButton.vue';
	export default {
        nome:'topPanel',
        components : {
            //TopPanelButton,
        }
	 
	};
</script>

<style lang="scss" scoped>
	.panel{
        position: absolute;
        width: 100%;
        background-color: color('red-84');
        clip-path: polygon(0 0, 100% 0, 100% 41px, 270px 41px, 200px 100%, 0 100%);
        z-index: 1;

        @media(min-width: $viewport-medium){
            width: calc(50% + 20px)
        }

        .container{
            display: flex;
            padding: 10px;
            align-items: flex-start;
            height: 75px;
            background-color: color('red-01');
            clip-path: polygon(0 0, 100% 38px, 270px 38, 280px 72px, 0 72px);
            box-shadow: inset -18px 0 0 0 color('red-03');
        }
    }
</style>

