<script>
	import { MENU_WIDE } from '@store/stores';
	import { VEHICLES } from '@store/server';
	import Header from '@components/Header.svelte';
	import { SendNUI } from '@utils/SendNUI';

	let search = '';

	$: SortedVehicles = $VEHICLES
		? $VEHICLES.slice().sort((a, b) => a.name.localeCompare(b.name))
		: [];
	$: FilteredVehicles = SortedVehicles.filter((vehicle) =>
		[
			vehicle.name?.toLowerCase(),
			vehicle.brand?.toLowerCase(),
			vehicle.category?.toLowerCase(),
			vehicle.model?.toLowerCase(),
			vehicle.price?.toString(),
		].some((property) => property?.includes(search.toLowerCase()))
	);

	function spawnVehicle(vehicle) {
		SendNUI('clickButton', {
			type: 'client',
			data: 'spawn_vehicle',
			selectedData: {
				["Vehicle"]: { value: vehicle.model },
			},
		});
	}

	const getVehicleImage = (model) =>
		`https://docs.fivem.net/vehicles/${model}.webp`;
</script>

<div class={`h-full ${$MENU_WIDE ? 'w-full' : 'w-[33vh]'} px-4`}>
	<div class="flex flex-col h-full gap-4">
		<Header
			title="Vehicles"
			hasSearch={true}
			hasLargeMenu={true}
			onSearchInput={(event) => (search = event.target.value)}
		/>

		<div class="w-full h-[84%] flex flex-col gap-4 mt-4 overflow-auto">
			{#if $VEHICLES}
				{#if FilteredVehicles.length === 0}
					<div class="text-gray-500 text-center text-sm font-medium mt-4">
						No vehicles found.
					</div>
				{:else}
					<small class="text-gray-400 font-medium">
						Total Vehicles: {SortedVehicles.length}
					</small>
					{#each FilteredVehicles as vehicle (vehicle.hash)}
						<div class="relative flex items-center gap-6 bg-secondary p-6 rounded-lg shadow-md">
							<img
								src={getVehicleImage(vehicle.model)}
								onerror="this.src='https://via.placeholder.com/128x80?text=No+Image'"
								alt={vehicle.name}
								class="vehicle-image rounded-lg object-cover"
							/>
							<div class="flex flex-col flex-grow">
								<span class="text-white font-bold text-xl truncate">
									{$MENU_WIDE ? vehicle.name || 'No name' : (vehicle.name || 'No name').substring(0, 20) + (vehicle.name.length > 20 ? '...' : '')}
								</span>
								<div class="text-gray-400 text-base">
									Brand: {vehicle.brand || 'No brand'}
								</div>
								<div class="text-gray-400 text-base">
									Category: {vehicle.category || 'No category'}
								</div>
								<div class="flex justify-between text-base text-gray-300 font-medium mt-2">
									<span>Model: {vehicle.model || 'N/A'}</span>
									<span>Price: ${vehicle.price || 'N/A'}</span>
								</div>
							</div>
							<button
								class="spawn-button absolute top-4 right-4 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded"
								on:click={() => spawnVehicle(vehicle)}
							>
								Spawn
							</button>
						</div>
					{/each}
				{/if}
			{/if}
		</div>
	</div>
</div>

<style>
	.spawn-button {
		cursor: pointer;
		font-size: 1rem;
		font-weight: bold;
		transition: background-color 0.3s;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	.spawn-button:hover {
		background-color: #45a049;
	}

	.truncate {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.vehicle-image {
		width: 10rem;
		height: 6rem;
		object-fit: cover;
		border: 1px solid #444;
		background-color: #2c2c2c;

		/* Adding properties for smoothing */
		image-rendering: auto;
		image-rendering: smooth;
	}

</style>
