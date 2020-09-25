<template>
 <div>
    <section>
        <div class="row">
            <div class="small-12 columns">
                <ul class="ul-style text-center">
                    <li 
                    v-for="(turn, i) in turns" 
                    :key="i"
                    :class="{'li-style': !turn.isStyle}">
                          {{turn.text}}          
                    </li>
                </ul>
            </div>
        </div>
    </section>
 </div>
</template>
<script>

export default {
   props: [
       'turns'
   ]
}
</script>

<style scoped>
    .li-style {
        border-bottom: 1px solid black;
    }
    .ul-style {
        list-style: none;
    }
</style>