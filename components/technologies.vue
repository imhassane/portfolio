<template>
    <div id="knowledge">
        <div class="break"></div>
        <div class="list">
            <technology
                v-for="tech in technologies" :key="tech.id"
                :url="tech.logo.url" :description="tech.description"
            />
        </div>
    </div>
</template>

<script>
import { TECHNOLOGIES } from "~/apollo/queries/technology";
import Technology from "./technology";

export default {
    name: 'technologies',
    components: { Technology },
    apollo: {
        $loadingKey: 'Loading...',
        technologies: {
            query: TECHNOLOGIES
        }
    }
}
</script>

<style scoped>
    .list {
        display: grid;
        grid-template-columns: repeat(10, 1fr);
    }

    @media (max-width: 450px) {
        .list {
            margin: auto; padding: 0;
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media (min-width: 451px) and (max-width: 650px) {
        .list {
            margin: auto; padding: 0;
            grid-template-columns: repeat(5, 1fr);
        }
    }
</style>
