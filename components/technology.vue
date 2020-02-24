<template>
    <div>
        <img @mouseover="onHover" @mouseleave="onLeave" :src="url" :alt="url" />
        <span>
            {{ description }}
        </span>
    </div>
</template>

<script>
export default {
    name: 'technology',
    props: ['url', 'description'],
    methods: {
        onHover: function(e) {
            e.target.parentNode.lastChild.classList.add('span');
        },
        onLeave: function(e) {
            e.target.parentNode.lastChild.classList.remove('span');
        }
    }
}
</script>

<style scoped>
    div {
        width: 50px;
    }

    div img {
        height: 50px;
    }

    div span {
        display: none;
    }

    .span {
        display: block;
        background-color: rgba(0, 0, 0, .9);
        color: white;
        padding: 10px;
        width: 450px;
        z-index: 5;
    }

    @media (max-width: 450px) {
        div img {
            height: 35px;
        }
    }
</style>