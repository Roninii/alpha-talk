<template functional>
    <div class="grid max-w-lg mx-auto">
        <h1 class="text-3xl block text-white">
            💔 We're sorry, but due to technology limitations this site only works on the following
            browsers:
        </h1>
        <ul class="text-white grid gap-4 mt-4">
            <li>
                <span class="text-purple-600 text-4xl">&rsaquo;</span>
                <a href="https://www.microsoft.com/en-us/edge" class="underline-purple text-xl">
                    Microsoft Edge</a
                >
            </li>
            <li>
                <span class="text-purple-600 text-4xl">&rsaquo;</span>
                <a href="https://www.google.com/chrome/" class="underline-purple text-xl">
                    Google Chrome</a
                >
            </li>
            <li>
                <span class="text-purple-600 text-4xl">&rsaquo;</span>
                <a
                    href="https://play.google.com/store/apps/details?id=com.android.chrome&hl=en_US"
                    class="underline-purple text-xl"
                >
                    Chrome for Android</a
                >
            </li>
            <li>
                <span class="text-purple-600 text-4xl">&rsaquo;</span>
                <a
                    href="https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en_US"
                    class="underline-purple text-xl"
                >
                    Samsung Internet</a
                >
            </li>
        </ul>

        <p class="text-white text-sm mt-8">
            Unfortunately, if you're on iOS, it won't work at all 😿
        </p>
        <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition#Browser_compatibility"
            class="text-white text-sm mt-4 underline-purple"
            >For more information, see the speech recognition API on MDN</a
        >
    </div>
</template>

<script>
export default {
    name: 'Unsupported',
    functional: true,
};
</script>

<style scoped>
.underline-purple:hover {
    text-decoration: underline;
    text-decoration-color: #805ad5;
    text-decoration-thickness: 2px;
}
</style>
