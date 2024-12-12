QBCore = exports['qb-core']:GetCoreObject()

lib.addCommand('admin', {
    help = 'Open the admin menu',
}, function(source)
    TriggerClientEvent('ps-adminmenu:client:OpenUI', source)
end)
-- Callbacks
