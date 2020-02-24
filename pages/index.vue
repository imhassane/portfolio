<template>
    <div>
        <banner />
        <banner-nav />
        <technologies />
        <span class="break"></span>
        <projects />
    </div>
</template>

<script>
import Banner from "~/components/banner";
import BannerNav from "~/components/banner-nav";
import Technologies from "~/components/technologies";
import Projects from "~/components/projects";

export default {
    name: 'index',
    head: function() {
        return {
            title: "Just a passionate human being",
            meta: [
                { hid: "description", name: "description", content: "Just a passionate human being" },
            ]
        }
    },
    components: { Banner, Technologies, Projects, BannerNav },
}
</script>
