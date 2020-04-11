<template>
    <button
        :disabled="disabled"
        class="bg-purple-600 font-black text-md px-4 py-2 rounded text-white disabled:bg-gray-600 disabled:text-white uppercase"
    >
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'BaseButton',
    props: {
        text: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            required: false,
        },
    },
};
</script>

<style lang="scss" scoped></style>
