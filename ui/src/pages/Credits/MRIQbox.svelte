<script lang="ts">
    import Header from '@components/Header.svelte';
    import Spinner from '@components/Spinner.svelte';

    let loading = true;
</script>

<div class="h-full w-full px-[2vh]">
    <Header title="Credits" />
    <div class="w-full h-[90%] mt-[1vh] rounded-[0.5vh] border-none overflow-hidden relative">
        {#if loading}
            <div class="absolute inset-0 flex items-center justify-center bg-secondary/50 z-10">
                <Spinner />
            </div>
        {/if}
        <iframe
            src="https://docs.mriqbox.com.br/"
            class="w-full h-full"
            on:load={() => (loading = false)}
            sandbox="allow-same-origin allow-scripts"
        ></iframe>
    </div>
</div>
