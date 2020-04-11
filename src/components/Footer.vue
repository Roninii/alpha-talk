<template functional>
    <footer class="absolute bottom-0 w-full px-8 py-4 grid justify-center">
        <p class="text-sm text-white">Made with 💜 by Ronnie Villarini</p>
        <div class="grid grid-flow-col place-center">
            <a href="https://twitter.com/_ronini" class="px-4 py-2">
                <i class="fab fa-twitter text-xl text-purple-600"></i>
            </a>
            <a href="https://github.com/roninii/" class="px-4 py-2">
                <i class="fab fa-github text-xl text-purple-600"></i>
            </a>
            <a href="https://ronini.dev/" class="px-4 py-2">
                <i class="fas fa-user-astronaut text-xl text-purple-600"></i>
            </a>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    functional: true,
};
</script>

<style lang="scss" scoped></style>
