local function getVehicles(cid)
    local result = MySQL.query.await(
        'SELECT vehicle, plate, fuel, engine, body FROM player_vehicles WHERE citizenid = ?', { cid }
    )
    local vehicles = {}

    for k, v in pairs(result) do
        local vehicleData = QBCore.Shared.Vehicles[v.vehicle]

        if not vehicleData then
            vehicleData = {
                name = ("Veículo Desconhecido (%s)"):format(v.vehicle or "N/A"),
                brand = "N/A",
                model = v.vehicle or "N/A"
            }
        end
        
        vehicles[#vehicles + 1] = {
            id = k,
            cid = cid,
            label = vehicleData.name,
            brand = vehicleData.brand,
            model = vehicleData.model,
            plate = v.plate,
            fuel = v.fuel,
            engine = v.engine,
            body = v.body
        }
    end

    return vehicles
end

local function getPlayers()
    local players = {}
    local GetPlayers = QBCore.Functions.GetQBPlayers()

    for k, v in pairs(GetPlayers) do
        local playerData = v.PlayerData
        local vehicles = getVehicles(playerData.citizenid)

        players[#players + 1] = {
            id = k,
            name = playerData.charinfo.firstname .. ' ' .. playerData.charinfo.lastname,
            cid = playerData.citizenid,
            license = QBCore.Functions.GetIdentifier(k, 'license'),
            discord = QBCore.Functions.GetIdentifier(k, 'discord'),
            steam = QBCore.Functions.GetIdentifier(k, 'steam'),
            job = playerData.job.label,
            grade = playerData.job.grade.level,
            gang = playerData.gang.label,
            gang_grade = playerData.gang.grade.level,
            dob = playerData.charinfo.birthdate,
            cash = playerData.money.cash,
            bank = playerData.money.bank,
            crypto = playerData.money.crypto,
            phone = playerData.charinfo.phone,
            vehicles = vehicles,
            online = true
        }
    end

    local result = MySQL.Sync.fetchAll("SELECT * FROM players")
    for _, player in ipairs(result) do
        local isOnline = false

        for _, onlinePlayer in ipairs(players) do
            if onlinePlayer.cid == player.citizenid then
                isOnline = true
                break
            end
        end

        if not isOnline then
            local vehicles = getVehicles(player.citizenid)

            local charinfo = json.decode(player.charinfo) or {}
            local jobinfo = json.decode(player.job) or {}
            local ganginfo = json.decode(player.gang) or {}
            local moneyinfo = player.money and json.decode(player.money) or {}

            players[#players + 1] = {
                id = nil,
                name = (charinfo.firstname or "N/A") .. ' ' .. (charinfo.lastname or ""),
                cid = player.citizenid,
                license = player.license,
                discord = nil, 
                steam = nil, 
                job = jobinfo.label or "Desempregado",
                grade = jobinfo.grade or 0,
                gang = ganginfo.label or "Sem filiação",
                dob = charinfo.birthdate or "Desconhecido",
                cash = moneyinfo.cash or 0,
                crypto = moneyinfo.crypto or 0,
                bank = moneyinfo.bank or 0,
                phone = charinfo.phone or "Desconhecido",
                vehicles = vehicles,
                online = false
            }
        end
    end

    table.sort(players, function(a, b)
        if a.online == b.online then
            return a.name < b.name
        end
        return a.online and not b.online
    end)

    return players
end


lib.callback.register('ps-adminmenu:callback:GetPlayers', function(source)
    return getPlayers()
end)

-- Set Job
RegisterNetEvent('ps-adminmenu:server:SetJob', function(data, selectedData)
    local data = CheckDataFromKey(data)
    if not data or not CheckPerms(source, data.perms) then return end
    local src = source
    local playerId, Job, Grade = selectedData["Player"].value, selectedData["Job"].value, selectedData["Grade"].value
    local Player = QBCore.Functions.GetPlayer(playerId)
    local name = Player.PlayerData.charinfo.firstname .. ' ' .. Player.PlayerData.charinfo.lastname
    local jobInfo = QBCore.Shared.Jobs[Job]

    local grade
    for searchgrade, info in pairs(jobInfo["grades"]) do
        if searchgrade == tonumber(Grade) then
            grade = info
            break
        end
    end

    if not jobInfo then
        TriggerClientEvent('QBCore:Notify', source, 'Trabalho inválido.', 'error')
        return
    end

    if not grade then
        TriggerClientEvent('QBCore:Notify', source, 'Cargo inválido.', 'error')
        return
    end

    Player.Functions.SetJob(tostring(Job), tonumber(Grade))
    if Config.RenewedPhone then
        exports['qb-phone']:hireUser(tostring(Job), Player.PlayerData.citizenid, tonumber(Grade))
    end

    QBCore.Functions.Notify(src, locale("jobset", name, Job, grade.name), 'success', 5000)
end)

-- Set Gang
RegisterNetEvent('ps-adminmenu:server:SetGang', function(data, selectedData)
    local data = CheckDataFromKey(data)
    if not data or not CheckPerms(source, data.perms) then return end
    local src = source
    local playerId, Gang, Grade = selectedData["Player"].value, selectedData["Gang"].value, selectedData["Grade"].value
    local Player = QBCore.Functions.GetPlayer(playerId)
    local name = Player.PlayerData.charinfo.firstname .. ' ' .. Player.PlayerData.charinfo.lastname
    local GangInfo = QBCore.Shared.Gangs[Gang]
    local grade
    for searchgrade, info in pairs(GangInfo["grades"]) do
        if searchgrade == tonumber(Grade) then
            grade = info
            break
        end
    end

    if not GangInfo then
        TriggerClientEvent('QBCore:Notify', source, 'Gangue inválida.', 'error')
        return
    end

    if not grade then
        TriggerClientEvent('QBCore:Notify', source, 'Cargo inválido.', 'error')
        return
    end

    Player.Functions.SetGang(tostring(Gang), tonumber(Grade))
    QBCore.Functions.Notify(src, locale("gangset", name, Gang, grade.name), 'success', 5000)
end)

-- Set Perms
RegisterNetEvent("ps-adminmenu:server:SetPerms", function(data, selectedData)
    local data = CheckDataFromKey(data)
    if not data or not CheckPerms(source, data.perms) then return end
    local src = source
    local rank = selectedData["Permissions"].value
    local targetId = selectedData["Player"].value
    local tPlayer = QBCore.Functions.GetPlayer(tonumber(targetId))

    if not tPlayer then
        QBCore.Functions.Notify(src, locale("not_online"), "error", 5000)
        return
    end

    local name = tPlayer.PlayerData.charinfo.firstname .. ' ' .. tPlayer.PlayerData.charinfo.lastname

    QBCore.Functions.AddPermission(tPlayer.PlayerData.source, tostring(rank))
    QBCore.Functions.Notify(tPlayer.PlayerData.source, locale("player_perms", name, rank), 'success', 5000)
end)

-- Remove Stress
RegisterNetEvent("ps-adminmenu:server:RemoveStress", function(data, selectedData)
    local data = CheckDataFromKey(data)
    if not data or not CheckPerms(source, data.perms) then return end
    local src = source
    local targetId = selectedData['Player (Optional)'] and tonumber(selectedData['Player (Optional)'].value) or src
    local tPlayer = QBCore.Functions.GetPlayer(tonumber(targetId))

    if not tPlayer then
        QBCore.Functions.Notify(src, locale("not_online"), "error", 5000)
        return
    end

    TriggerClientEvent('ps-adminmenu:client:removeStress', targetId)

    QBCore.Functions.Notify(tPlayer.PlayerData.source, locale("removed_stress_player"), 'success', 5000)
end)
