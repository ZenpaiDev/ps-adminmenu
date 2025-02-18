<script lang="ts">
	import { MENU_WIDE } from '@store/stores';
	import { PLAYER, PLAYER_VEHICLES, SELECTED_PLAYER } from '@store/players';
	import Header from '@components/Header.svelte';
	import Button from './components/Button.svelte';
	import { onMount } from 'svelte';
	import { SendNUI } from '@utils/SendNUI';
	import Spinner from '@components/Spinner.svelte';
	import Autofill from '@components/Autofill.svelte';
	import Modal from '@components/Modal.svelte';
	import Input from '@pages/Actions/components/Input.svelte';

	let search = '';
	let loading = false;
	let playersOnline = [];
	let playersOffline = [];
	let banPlayer = false;
	let kickPlayer = false;
	let selectedDataArray = {};

	let banData = [
		{ label: 'Permanent', value: '2147483647' },
		{ label: '10 Minutes', value: '600' },
		{ label: '30 Minutes', value: '1800' },
		{ label: '1 Hour', value: '3600' },
		{ label: '6 Hours', value: '21600' },
		{ label: '12 Hours', value: '43200' },
		{ label: '1 Day', value: '86400' },
		{ label: '3 Days', value: '259200' },
		{ label: '1 Week', value: '604800' },
		{ label: '3 Weeks', value: '1814400' },
	];

	function SelectData(selectedData) {
		selectedDataArray[selectedData.id] = selectedData;
	}

	onMount(async () => {
		try {
			loading = true;
			const players = await SendNUI('getPlayers');
			if (players) {
				playersOnline = players.filter((player) => player.online);
				playersOffline = players.filter((player) => !player.online);
				PLAYER.set(players);
			}
		} catch (error) {
			console.error('Error loading players:', error);
		} finally {
			loading = false;
		}
	});
</script>

<div class="h-full w-[33vh] px-[2vh]">
	<Header
		title={'Players'}
		hasSearch={true}
		onSearchInput={(event) => (search = event.target.value)}
	/>
	<div class="w-full h-[84%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto">
		{#if loading}
			<Spinner />
		{:else}
			<p class="font-medium text-[1.7vh]">Online Players</p>
			{#if playersOnline && playersOnline.filter((player) => player.name.toLowerCase().includes(search.toLowerCase())).length === 0}
				<div class="text-accent text-center text-[1.7vh] font-medium mt-[1vh]">No online players found.</div>
			{:else}
				{#each playersOnline.filter((player) => player.name.toLowerCase().includes(search.toLowerCase())) as player}
					<div class="flex items-center gap-[1vh]">
						<span class="text-green-500 text-[2.5vh]">🟢</span>
						<Button {player} />
					</div>
				{/each}
			{/if}

			<p class="font-medium text-[1.7vh] mt-[2vh]">Offline Players</p>
			{#if playersOffline && playersOffline.filter((player) => player.name.toLowerCase().includes(search.toLowerCase())).length === 0}
				<div class="text-accent text-center text-[1.7vh] font-medium mt-[1vh]">No offline players found.</div>
			{:else}
				{#each playersOffline.filter((player) => player.name.toLowerCase().includes(search.toLowerCase())) as player}
					<div class="flex items-center gap-[1vh]">
						<span class="text-red-500 text-[2.5vh]">🔴</span>
						<Button {player} />
					</div>
				{/each}
			{/if}
		{/if}
	</div>
</div>

{#if $MENU_WIDE}
	<div class="h-full w-[66vh] border-l-[0.2vh] border-tertiary p-[2vh]">
		{#if !$SELECTED_PLAYER}
			<div
				class="h-full w-full flex flex-col items-center justify-center"
			>
			<div class="text-4xl text-accent">No player selected.</div>
		</div>
		{:else}
			<p class="text-[2vh] font-medium">
				ID: {$SELECTED_PLAYER.id} - {$SELECTED_PLAYER.name}
			</p>
			<div class="w-full h-[96.5%] pt-[2vh] flex flex-col gap-[1vh]">
				<p class="font-medium text-[1.7vh]">Quick Actions</p>
				{#if $SELECTED_PLAYER.online}
					<div class="w-full bg-tertiary flex rounded-[0.5vh]">
						<button
							title="Kick"
							class="h-[4.5vh] w-full rounded-l-[0.5vh] hover:bg-secondary
							relative
							before:content-[attr(data-tip)]
							before:absolute
							before:px-3 before:py-2
							before:left-1/2 before:-top-3
							before:w-max before:max-w-xs
							before:-translate-x-1/2 before:-translate-y-full
							before:bg-tertiary before:text-white
							before:rounded-md before:opacity-0
							before:translate-all

							after:absolute
							after:left-1/2 after:-top-3
							after:h-0 after:w-0
							after:-translate-x-1/2 after:border-8
							after:border-t-tertiary
							after:border-l-transparent
							after:border-b-transparent
							after:border-r-transparent
							after:opacity-0
							after:transition-all

							hover:before:opacity-100 hover:after:opacity-100
							"
							data-tip="Kick"
							on:click={() => (kickPlayer = true)}
						>
							<i class="fas fa-user-minus"></i>
						</button>
						<button
							title="Ban"
							class="h-[4.5vh] w-full hover:bg-secondary
							relative
							before:content-[attr(data-tip)]
							before:absolute
							before:px-3 before:py-2
							before:left-1/2 before:-top-3
							before:w-max before:max-w-xs
							before:-translate-x-1/2 before:-translate-y-full
							before:bg-tertiary before:text-white
							before:rounded-md before:opacity-0
							before:translate-all

							after:absolute
							after:left-1/2 after:-top-3
							after:h-0 after:w-0
							after:-translate-x-1/2 after:border-8
							after:border-t-tertiary
							after:border-l-transparent
							after:border-b-transparent
							after:border-r-transparent
							after:opacity-0
							after:transition-all

							hover:before:opacity-100 hover:after:opacity-100
							"
							data-tip="Ban"
							on:click={() => (banPlayer = true)}
						>
							<i class="fas fa-ban"></i>
						</button>
						<button
							title="Teleport"
							class="h-[4.5vh] w-full hover:bg-secondary
							relative
							before:content-[attr(data-tip)]
							before:absolute
							before:px-3 before:py-2
							before:left-1/2 before:-top-3
							before:w-max before:max-w-xs
							before:-translate-x-1/2 before:-translate-y-full
							before:bg-tertiary before:text-white
							before:rounded-md before:opacity-0
							before:translate-all

							after:absolute
							after:left-1/2 after:-top-3
							after:h-0 after:w-0
							after:-translate-x-1/2 after:border-8
							after:border-t-tertiary
							after:border-l-transparent
							after:border-b-transparent
							after:border-r-transparent
							after:opacity-0
							after:transition-all

							hover:before:opacity-100 hover:after:opacity-100
							"
							data-tip="Teleport"
							on:click={() =>
								SendNUI('clickButton', {
									data: 'teleportToPlayer',
									selectedData: {
										['Player']: {
											value: $SELECTED_PLAYER.id,
										},
									},
								})}
						>
							<i class="fas fa-person-walking-arrow-right"></i>
						</button>
						<button
							title="Bring"
							class="h-[4.5vh] w-full hover:bg-secondary
							relative
							before:content-[attr(data-tip)]
							before:absolute
							before:px-3 before:py-2
							before:left-1/2 before:-top-3
							before:w-max before:max-w-xs
							before:-translate-x-1/2 before:-translate-y-full
							before:bg-tertiary before:text-white
							before:rounded-md before:opacity-0
							before:translate-all

							after:absolute
							after:left-1/2 after:-top-3
							after:h-0 after:w-0
							after:-translate-x-1/2 after:border-8
							after:border-t-tertiary
							after:border-l-transparent
							after:border-b-transparent
							after:border-r-transparent
							after:opacity-0
							after:transition-all

							hover:before:opacity-100 hover:after:opacity-100
							"
							data-tip="Bring"
							on:click={() =>
								SendNUI('clickButton', {
									data: 'bringPlayer',
									selectedData: {
										['Player']: {
											value: $SELECTED_PLAYER.id,
										},
									},
								})}
						>
							<i class="fas fa-person-walking-arrow-loop-left"></i>
						</button>
						<button
							title="Revive"
							class="h-[4.5vh] w-full

 rounded-r-[0.5vh] hover:bg-secondary
							relative
							before:content-[attr(data-tip)]
							before:absolute
							before:px-3 before:py-2
							before:left-1/2 before:-top-3
							before:w-max before:max-w-xs
							before:-translate-x-1/2 before:-translate-y-full
							before:bg-tertiary before:text-white
							before:rounded-md before:opacity-0
							before:translate-all

							after:absolute
							after:left-1/2 after:-top-3
							after:h-0 after:w-0
							after:-translate-x-1/2 after:border-8
							after:border-t-tertiary
							after:border-l-transparent
							after:border-b-transparent
							after:border-r-transparent
							after:opacity-0
							after:transition-all

							hover:before:opacity-100 hover:after:opacity-100
							"
							data-tip="Revive"
							on:click={() =>
								SendNUI('clickButton', {
									data: 'revivePlayer',
									selectedData: {
										['Player']: {
											value: $SELECTED_PLAYER.id,
										},
									},
								})}
						>
							<i class="fas fa-user-md"></i>
						</button>
					</div>
				{/if}
			</div>
		{/if}
	</div>
{/if}

{#if banPlayer}
	<Modal onClose={() => (banPlayer = false)} title="Ban Player" height="min-h-[20vh]">
		<div class="w-full flex flex-col gap-[2vh]">
			<p class="text-[1.7vh] font-medium">
				Select a duration for the ban of
				<span class="font-bold"> {$SELECTED_PLAYER.name} </span>
			</p>
			{#each banData as { label, value }}
				<Button
					class="h-[5vh]"
					{label}
					{value}
					on:click={() =>
						SendNUI('clickButton', {
							data: 'banPlayer',
							selectedData: {
								['Player']: {
									value: $SELECTED_PLAYER.id,
								},
								['Ban Duration']: {
									value: value,
								},
							},
						})}
				/>
			{/each}
		</div>
	</Modal>
{/if}

{#if kickPlayer}
	<Modal onClose={() => (kickPlayer = false)} title="Kick Player" height="min-h-[15vh]">
		<div class="w-full flex flex-col gap-[2vh]">
			<p class="text-[1.7vh] font-medium">
				Are you sure you want to kick
				<span class="font-bold"> {$SELECTED_PLAYER.name} </span>?
			</p>
			<Button
				class="h-[5vh]"
				label="Yes"
				on:click={() =>
					SendNUI('clickButton', {
						data: 'kickPlayer',
						selectedData: {
							['Player']: {
								value: $SELECTED_PLAYER.id,
							},
						},
					})}
			/>
			<Button
				class="h-[5vh]"
				label="No"
				on:click={() => (kickPlayer = false)}
			/>
		</div>
	</Modal>
{/if}