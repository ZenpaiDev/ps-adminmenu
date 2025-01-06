QBCore = exports['qb-core']:GetCoreObject()

lib.addCommand('adm', {
    help = 'Open the admin menu',
}, function(source)
    TriggerClientEvent('ps-adminmenu:client:OpenUI', source)
end)
-- Callbacks
