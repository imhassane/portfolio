<template>
    <div>
        <div class="break"></div>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#knowledge">What do I know</a></li>
            <li><a href="/#projects">Projects</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'banner-nav',
}
</script>

<style scoped>
    ul {
        width: 60%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
    }

    @media (max-width: 450px) {
        ul {
            width: 100%;
            margin: 0; padding: 0;
        }
    }
</style>