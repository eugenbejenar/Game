<template>
    <div class="row">
        <div class="col-xs-12">
            <header v-if="title">
                <h1>Vue App {{title}}</h1>
            </header>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'title'
    ]
}
</script>

<style>

</style>
