local Framework = nil

if Config.Framework == 'ESX' then
    Framework = exports["es_extended"]:getSharedObject()
elseif Config.Framework == 'QB' then
    Framework = exports['qb-core']:GetCoreObject()
end

local function GetPlayers()
    if Config.Framework == 'ESX' then
        return Framework.GetPlayers()
    else
        return Framework.Functions.GetPlayers()
    end
end

local function GetPlayer(source)
    if Config.Framework == 'ESX' then
        return Framework.GetPlayerFromId(source)
    else
        return Framework.Functions.GetPlayer(source)
    end
end

local function GetPlayerJob(player)
    if Config.Framework == 'ESX' then
        return player.job.name
    else
        return player.PlayerData.job.name
    end
end


local function CountPlayersByCategory(jobCategory)
    local count = 0
    local players = GetPlayers()
    local jobConfig = Config.Jobs[jobCategory]
    
    if not jobConfig or not jobConfig.showInStatus then return '0 online' end
    
    for _, playerId in ipairs(players) do
        local xPlayer = GetPlayer(playerId)
        if xPlayer then
            for _, jobName in ipairs(jobConfig.jobs) do
                if GetPlayerJob(xPlayer) == jobName then
                    count = count + 1
                    break
                end
            end
        end
    end
    
    return count .. ' online'
end


local function CountOnlinePlayers()
    local players = #GetPlayers()
    local maxPlayers = Config.DefaultSettings.MaxPlayers
    return players .. '/' .. maxPlayers
end

function UpdateServerStatus()
    local statusData = {
        playersOnline = CountOnlinePlayers(),
        police = CountPlayersByCategory('Police'),
        ems = CountPlayersByCategory('EMS'),
        mechanic = CountPlayersByCategory('Mechanic')
    }
    TriggerClientEvent('pausemenu:updateStatus', -1, statusData)
end


AddEventHandler('esx:playerLoaded', function(playerId, xPlayer)
    Wait(2000)
    UpdateServerStatus()
end)


AddEventHandler('playerDropped', function()
    Wait(1000)
    UpdateServerStatus()
end)


RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(source, job, lastJob)
    UpdateServerStatus()
end)


CreateThread(function()
    while true do
        UpdateServerStatus()
        Wait(30000)
    end

end)

RegisterNetEvent('esx:setJob2')
AddEventHandler('esx:setJob2', function(source, job2, lastJob2)
    UpdateServerStatus()
end)


RegisterNetEvent('pausemenu:requestJobsUpdate')
AddEventHandler('pausemenu:requestJobsUpdate', function()
    UpdateServerStatus()
end) 