<template>
    <footer>
        <p>
            <a href="mailto:thsow.pro@gmail.com">Send me an email</a>
        </p>
    </footer>
</template>

<style scoped>
    footer {
        border-top: 1px solid silver;
        padding: 20px 0;
        min-height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        width: 20%;
        margin: auto;
        text-align: center;
    }

    footer p a {
        border: 1px solid silver;
        color: silver;
        padding: 20px;
    }

    footer p a:hover {
        background-color: black;
        border: 1px solid black;
        color: white;
    }

    @media (max-width: 850px) {
        p {
            width: 80%;
        }
    }
</style>