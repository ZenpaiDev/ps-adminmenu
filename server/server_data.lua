QBCore = exports['qb-core']:GetCoreObject()

lib.callback.register('ps-adminmenu:callback:GetServerInfo', function(source, cb)
    local totalCash, totalBank, totalCrypto = 0, 0, 0
    local vehicleCount = MySQL.scalar.await('SELECT COUNT(*) FROM player_vehicles') or 0
    local bansCount = MySQL.scalar.await('SELECT COUNT(*) FROM bans') or 0
    local characterCount = MySQL.scalar.await('SELECT COUNT(*) FROM players') or 0

    local playerMoneyData = MySQL.query.await('SELECT money FROM players') or {}

    for _, row in ipairs(playerMoneyData) do
        local money = json.decode(row.money)
        if money then
            totalCash = totalCash + (money.cash or 0)
            totalBank = totalBank + (money.bank or 0)
            totalCrypto = totalCrypto + (money.crypto or 0)
        end
    end

    local players = MySQL.query.await([[
        SELECT p.*
        FROM players p
        INNER JOIN (
            SELECT license, MIN(citizenid) AS citizenid
            FROM players
            GROUP BY license
        ) sub ON p.citizenid = sub.citizenid;
    ]])

    local serverInfo = {
        totalCash = totalCash,
        totalBank = totalBank,
        totalCrypto = totalCrypto,
        uniquePlayers = #players,
        vehicleCount = vehicleCount,
        bansCount = bansCount,
        characterCount = characterCount
    }

    return serverInfo
end)
