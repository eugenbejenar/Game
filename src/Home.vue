<template>
<div class="container">
    <controls-cmp :isRunning="gameisRunning" ref="foo"></controls-cmp >    
</div>
</template>

<script>

import Controls from '@/components/Controls'

export default {
  
    components: {
        'controls-cmp': Controls,
    },

    data: () => {
        return {
            gameisRunning: false
        }
    },
    methods: {
        startGame () {
            this.gameisRunning = true;
        }
    }
  
}
</script>

<style lang="css" src="./css/foundation.min.css">

</style>