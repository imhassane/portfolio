<template>
    <div id="banner">
        <h1>Bonjour !</h1>
        <p>
            <span id="name">My name is Hassane</span>
            <span id="presentation">
                I'm basically someone who accidentaly discovered programming at 12,
                I'm in 😍 since almost {{ years }} years now. Wow!
            </span>
            <span id="goals">
                I learned at lot of technologies without knowing what to do with them,
                but now I'm focusing on some of them.
            </span>
            <span id="enough">That's all I can say about me, 😅</span>
        </p>
    </div>
</template>

<script>

export default {
    name: 'banner',
    computed: {
        years: function() {
            let cur = new Date();
            return parseInt(cur.getFullYear()) - 2013;
        }
    }
}
</script>

<style scoped>
    #banner {
        width: 60%;
        margin: auto;
        text-align: center;
    }

    h1 {
        font-size: 6em;
        margin: 40px 0;
    }

    p span {
        display: block;
        margin: 15px 0;
    }

    #name {
        font-size: xx-large;
    }

    #presentation {
        font-size: x-large;
    }

    #goals {
        font-size: large;
    }

    #enough {
        font-size: large;
    }

    @media (max-width: 450px) {
        #banner {
            width: 100%;
        }
        h1 {
            font-size: 3em;
        }
        span { margin: 3px 0; }
        #name {
            font-size: x-large;
        }
        #presentation { font-size: large; }
        #goals, #enough { font-size: small; }
    }

    @media (min-width: 451px) and (max-width: 650px) {
        #banner {
            width: 100%;
            text-align: center;
        }
        h1 {
            font-size: 4em;
        }
        span { margin: 7px 0; }
        #name {
            font-size: xx-large;
        }
        #presentation { font-size: large; }
        #goals, #enough { font-size: medium; }
    }
    @media (min-width: 651px) and (max-width: 850px) {
        #banner {
            width: 85%;
            text-align: center;
        }
        h1 {
            font-size: 4em;
        }
        span { margin: 10px 0; }
        #name {
            font-size: xx-large;
        }
        #presentation { font-size: large; }
        #goals, #enough { font-size: medium; }
    }
</style>