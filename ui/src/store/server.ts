import { writable } from "svelte/store";

export const RESOURCE = writable<RESOURCE_DATA[]>(null);
export const RESOURCES = writable<RESOURCE_DATA>(null);
export const COMMANDS = writable<COMMANDS_DATA[]>(null);
export const ITEMS = writable<ITEMS_DATA[]>(null);
export const VEHICLES = writable<VEHICLES_DATA[]>(null);

export const SERVER = writable<SERVER_DATA[]>(null);

interface RESOURCE_DATA {
    name?: string;
    author?: string;
    version?: string;
    description?: string;
    resourceState?: string;
}

interface SERVER_DATA {
    TotalCash?: string;
    TotalBank?: string;
    TotalItems?: string;
    CharacterCount?: string;
    VehicleCount?: string;
    BansCount?: string;
    UniquePlayers?: string;
}

interface COMMANDS_DATA {
    name?: string;
}

interface ITEMS_DATA {
    item?: string;
    name?: string;
    description?: string;
    weight?: string;
}  

interface VEHICLES_DATA {
    name?: string;
    hash?: string;
    model?: string;
    category?: string;
    brand?: string;
    price?: string;
}