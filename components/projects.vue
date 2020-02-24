<template>
    <div id="projects">
        <project v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<script>
import { PROJECTS } from "~/apollo/queries/project";
import Project from "./project";

export default {
    name: 'projects',
    components: { Project },
    apollo: {
        projects: {
            query: PROJECTS
        }
    }
}
</script>

<style scoped>
    #projects {
        width: 50%;
        margin: auto;
    }

    @media (max-width: 650px) {
        #projects {
            width: 100%;
        }
    }
</style>