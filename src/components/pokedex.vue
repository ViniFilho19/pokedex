<template>
	<div class="pokedex">
    
    <topPanel />
    <!--<leftPanel class="Pokedex--left"
    <Divider/>
    <RightPanel class"pokedex--right/>
    -->
    </div>
</template>

<script>
import topPanel from './topPanel/topPanel.vue';
    
//import LeftPanel from './leftPenal/leftPanel.vue'
//import RightPanel from './RightPenal/RightPanel.vue'
//import divider from './Divider/Divider.vue'
	export default{
        nome:'pokemon',
        components:{
            topPanel,
            //LeftPanel,
           // RightPanel,
           // Divider,
    }
    }
</script>
    
<style lang="scss" scoped>
	.pokedex {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 960px;
		height: 100%;

		@media (min-width: $viewport-medium) {
			max-height: 700px;
			flex-direction: row;
		}

		&--left,
		&--right {
			position: relative;
			display: flex;
			height: 50%;
			perspective: 1700px;
			transform-style: preserve-3d;

			@media (min-width: $viewport-medium) {
				height: 100%;
			}
		}
	}
</style>
