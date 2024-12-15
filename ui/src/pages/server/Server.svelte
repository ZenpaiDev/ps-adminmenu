<script>
    import { MENU_WIDE } from '@store/stores';
    import { RESOURCE } from '@store/server';

    import Header from '@components/Header.svelte';
    import ResourceCard from './components/ResourceCard.svelte';
    import Spinner from '@components/Spinner.svelte';

    let search = '';
    let loadingChangelog = true;
    let changelogError = false;
    let changelogs = [];

    let SortedResources = $RESOURCE
        ? $RESOURCE.slice().sort((a, b) => a.name.localeCompare(b.name))
        : [];

    async function fetchChangelogs() {
        try {
            const response = await fetch('https://api.github.com/orgs/mri-Qbox-Brasil/repos?per_page=10&sort=updated');
            if (!response.ok) throw new Error('Failed to fetch changelogs');

            const repos = await response.json();
            for (const repo of repos) {
                const commitsResponse = await fetch(`https://api.github.com/repos/mri-Qbox-Brasil/${repo.name}/commits?per_page=1`);
                if (commitsResponse.ok) {
                    const [latestCommit] = await commitsResponse.json();
                    changelogs.push({
                        repo: repo.name,
                        author: latestCommit.commit.author.name,
                        date: new Date(latestCommit.commit.author.date).toLocaleString(),
                        message: latestCommit.commit.message,
                        url: latestCommit.html_url,
                    });
                }
            }
        } catch (error) {
            changelogError = true;
        } finally {
            loadingChangelog = false;
        }
    }

    fetchChangelogs();
</script>

<div class="h-full w-[33vh] px-[2vh]">
    <Header 
        title={'Resources'} 
        hasSearch={true} 
        onSearchInput={(event) => (search = event.target.value)} 
    />
    <div class="w-full h-[84%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto">
        {#if $RESOURCE}
            {#if $RESOURCE && $RESOURCE.filter((resource) => resource.name.toLowerCase().includes(search.toLowerCase())).length === 0}
                <div class="text-tertiary text-center text-[1.7vh] font-medium mt-[1vh]">No Resource Found.</div>
            {:else}
                {#each SortedResources.filter((resource) => resource.name.toLowerCase().includes(search.toLowerCase())) as resource}
                    <ResourceCard
                        label={resource.name}
                        version={resource.version}
                        author={resource.author}
                        description={resource.description}
                        state={resource.resourceState}
                    />
                {/each}
            {/if}
        {/if}
    </div>
</div>

{#if $MENU_WIDE}
    <div class="h-full w-[66vh] border-l-[0.2vh] border-tertiary px-[2vh]">
        <Header title={'Changelog'} />
        <div class="w-full h-[90%] mt-[1vh] rounded-[0.5vh] p-[2vh] overflow-auto bg-secondary">
            {#if loadingChangelog}
                <div class="flex justify-center items-center h-full">
                    <Spinner />
                </div>
            {:else if changelogError}
                <div class="text-tertiary text-center text-[1.5vh] font-medium">
                    Erro ao carregar changelog.<br />
                </div>
            {:else if changelogs.length === 0}
                <div class="text-tertiary text-center text-[1.5vh] font-medium">
                    Nenhum changelog encontrado.
                </div>
            {:else}
                <ul class="flex flex-col gap-[1vh]">
                    {#each changelogs as changelog}
                        <li class="bg-tertiary rounded-[0.5vh] p-[1.5vh]">
                            <p class="text-[1.7vh] font-medium">{changelog.repo}</p>
                            <p class="text-[1.5vh]">{changelog.message}</p>
                            <p class="text-[1.3vh] text-accent">Autor: {changelog.author} - Data: {changelog.date}</p>
                            <pre class="bg-secondary text-tertiary p-[1vh] rounded-[0.3vh] text-[1.3vh] overflow-auto">{changelog.url}</pre>
                        </li>
                    {/each}
                </ul>
            {/if}
        </div>
    </div>
{/if}
