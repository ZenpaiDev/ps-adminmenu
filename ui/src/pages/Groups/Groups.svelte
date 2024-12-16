<script>
  import { onMount } from 'svelte';
  import { MENU_WIDE } from '@store/stores';
  import Header from '@components/Header.svelte';
  import { SendNUI } from '@utils/SendNUI';

  let search = '';
  let loading = true;
  let errorMessage = '';
  let groups = { jobs: [], gangs: [] };
  let collapsed = {};

  let filteredGroups = { jobs: [], gangs: [] };

  onMount(async () => {
    await reloadGroups();
  });

  async function reloadGroups() {
    loading = true;
    try {
      const response = await SendNUI('getGroupsData');
      if (!response) throw new Error('Dados de grupos inválidos.');

      groups.jobs = (response.jobs || []).filter(job => job.name.toLowerCase() !== 'unemployed');
      groups.gangs = (response.gangs || []).filter(gang => gang.name.toLowerCase() !== 'none');

      collapsed = {};
      [...groups.jobs, ...groups.gangs].forEach((group, index) => {
        collapsed[`${group.name}-${index}`] = false;
      });

      updateFilteredGroups();
    } catch (e) {
      errorMessage = e.message;
    } finally {
      loading = false;
    }
  }

  $: updateFilteredGroups();

  function updateFilteredGroups() {
    const filterText = search.toLowerCase();

    filteredGroups.jobs = groups.jobs
      .map(job => ({
        ...job,
        members: job.members.filter(m => m.name.toLowerCase().includes(filterText))
      }))
      .filter(job => job.members.length > 0 || job.name.toLowerCase().includes(filterText));

    filteredGroups.gangs = groups.gangs
      .map(gang => ({
        ...gang,
        members: gang.members.filter(m => m.name.toLowerCase().includes(filterText))
      }))
      .filter(gang => gang.members.length > 0 || gang.name.toLowerCase().includes(filterText));
  }

  function toggleCollapse(key) {
    collapsed[key] = !collapsed[key];
  }

  function fireMember(member, groupType) {
    const action = groupType === 'gangs' ? 'fire_gang' : 'fire_job';
    const groupField = groupType === 'gangs' ? { Gang: { value: 'none' } } : { Job: { value: 'unemployed' } };

    SendNUI('clickButton', {
      data: action,
      selectedData: {
        Player: { value: member.id },
        ...groupField,
        Grade: { value: 0 }
      }
    });
  }

  function changeMemberRole(member, groupType) {
    const action = groupType === 'gangs' ? 'set_gang' : 'set_job';

    SendNUI('clickButton', {
      data: action,
      selectedData: {
        Player: { value: member.id },
        Job: { value: member.job },
        Grade: { value: 0 }
      }
    });
  }
</script>

<div class={`h-full ${$MENU_WIDE ? 'w-full' : 'w-[33vh]'} px-4`}>
  <div class="flex flex-col h-full gap-4">
    <Header
      title="Grupos - Jobs & Gangs"
      hasSearch={true}
      hasLargeMenu={$MENU_WIDE}
      onSearchInput={(e) => (search = e.target.value)}
    />
    <button
      class="self-end bg-accent text-white px-4 py-2 rounded hover:bg-green-500 transition duration-200"
      on:click={reloadGroups}
      disabled={loading}
    >
      {loading ? 'Atualizando...' : 'Atualizar'}
    </button>

    <div class="flex flex-col md:flex-row gap-4 h-full overflow-hidden pb-2">
      {#each ['jobs', 'gangs'] as type}
        <div class="flex-1 flex flex-col space-y-4 overflow-auto">
          <div class="flex items-center gap-2">
            <i class={`fas ${type === 'jobs' ? 'fa-briefcase' : 'fa-skull-crossbones'} text-gray-300`}></i>
            <span class="font-bold text-white text-xl">
              {type === 'jobs' ? 'Jobs' : 'Gangs'}
            </span>
          </div>
          {#each filteredGroups[type] as group, index}
            {#key `${group.name}-${index}`}
              <div class="bg-secondary rounded-lg shadow-md border border-border_primary">
                <div
                  class="flex items-center justify-between cursor-pointer px-4 py-3 border-b border-border_primary hover:bg-hover_secondary"
                  on:click={() => toggleCollapse(`${group.name}-${index}`)}
                >
                  <div class="flex flex-col">
                    <span class="text-white font-semibold text-xl">{group.label} ({group.name})</span>
                    <small class="text-gray-400">Membros: {group.members?.length || 0}</small>
                  </div>
                  <i
                    class="fas fa-chevron-down text-gray-300 transition-transform duration-200"
                    class:rotate-180={!collapsed[`${group.name}-${index}`]}
                  ></i>
                </div>
                {#if !collapsed[`${group.name}-${index}`]}
                  <div class="px-4 py-2 space-y-2">
                    {#if group.members?.length === 0}
                      <div class="text-gray-500 text-sm font-medium">Sem membros neste grupo.</div>
                    {:else}
                      {#each group.members as member (member.id)}
                        <div class="flex items-center justify-between py-1 border-b border-border_primary last:border-b-0">
                          <span class="truncate">{member.name}</span>
                          <div class="flex items-center gap-4">
                            <div class="flex items-center gap-1">
                              <span
                                class="inline-block w-2 h-2 rounded-full"
                                class:bg-green-400={member.online}
                                class:bg-red-400={!member.online}
                              ></span>
                              <span
                                class="text-sm font-medium"
                                class:text-green-400={member.online}
                                class:text-red-400={!member.online}
                              >{member.online ? 'Online' : 'Offline'}</span>
                            </div>
                            <i
                              class="fas fa-user-slash text-red-500 hover:text-red-400 cursor-pointer"
                              on:click={() => fireMember(member, type)}
                            ></i>
                            <i
                              class="fas fa-user-edit text-blue-500 hover:text-blue-400 cursor-pointer"
                              on:click={() => changeMemberRole(member, type)}
                            ></i>
                          </div>
                        </div>
                      {/each}
                    {/if}
                  </div>
                {/if}
              </div>
            {/key}
          {/each}
        </div>
      {/each}
    </div>
  </div>
</div>
