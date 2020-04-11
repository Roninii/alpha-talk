<template>
    <div class="grid justify-center items-center w-full relative">
        <transition name="slide">
            <h2 class="text-6xl text-purple-600 uppercase w-full" ref="letterbox">
                {{ letter }}
            </h2>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'Letterbox',
    props: {
        animate: {
            type: Boolean,
            required: false,
        },
        letter: {
            type: String,
            required: true,
        },
    },
    watch: {
        // eslint-disable-next-line
        letter: function(newValue) {
            this.$refs.letterbox.classList.toggle('slide');

            setTimeout(() => {
                this.$refs.letterbox.classList.toggle('slide');
            }, 1000);
        },
    },
};
</script>

<style scoped>
.slide {
    transition: all 1s ease-in;
    animation: slide-in 1s ease-in 0s;
}

@keyframes slide-in {
    from {
        margin-right: 50px;
        opacity: 0;
    }
    to {
        margin-right: 0;
        opacity: 1;
    }
}
</style>
