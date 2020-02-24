<template>
    <div class="project">
        <h3>{{ project.name }}</h3>
        <div>
            <div>
                <img :src="thumbnail" :alt="name" />
            </div>
            <div class="description">
                <p>
                    {{ project.description }}
                </p>

                <p><strong>This project is using:</strong></p>
                <technology-label v-for="label in project.technologies" :key="label.id" :name="label.name" />

                <div class="_break"></div>

                <p>Created in: <span class="date">{{ project.year }}</span></p>
                <p>
                    <a :href="project.url" target="_blank">View site</a>
                    <a :href="project.githubUrl" target="_blank">View on GitHub</a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import TechnologyLabel from "./technology-label";
export default {
    name: 'project',
    props: ['project'],
    components: { TechnologyLabel },
    data: function() {
        return {
            API_FLASH_KEY: process.env.API_FLASH_KEY || '9c91d5ea772a436e9d4c308f971d53f2',
        }
    },
    computed: {
        thumbnail: function() {
            return `https://api.apiflash.com/v1/urltoimage?access_key=${this.API_FLASH_KEY}&url=${this.project.url}&format=png`
        }
    }
}
</script>

<style scoped>

    ._break {
        border-bottom: 1px solid silver;
        margin: 8px 0; padding: 0;
    }

    .project {
        margin: 50px 0;
    }

    .project > div {
        display: grid;
        grid-template-areas: "name"
                             "cover description"
                             "cover description";
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 3%;
    }

    .description > p {
        font-size: small;
        font-weight: bold;
    }

    .description > p a {
        margin: 0 10px;
    }

    img {
        width: 100%;
    }

    @media (max-width: 650px) {
        .project > div {
            grid-template-columns: 1fr;
        }
    }
</style>