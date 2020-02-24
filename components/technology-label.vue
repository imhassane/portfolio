<template>
    <span class="technology-label">{{ name }}</span>
</template>

<script>
export default {
    name: 'technology-label',
    props: ['name']
}
</script>

<style scoped>
    .technology-label {
        background-color: black;
        color: white;
        padding: 5px;
        margin: 3px;
    }

</style>