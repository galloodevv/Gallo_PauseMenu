local Framework = nil
local display = false
local X = {}
X.Open = false
local sleep = 1000
local menuOpen = false
local otherMenuOpen = false

if Config.Framework == 'ESX' then
    Framework = exports["es_extended"]:getSharedObject()
elseif Config.Framework == 'QB' then
    Framework = exports['qb-core']:GetCoreObject()
end

CreateThread(function()
    while true do
        SetPauseMenuActive(false)
        Wait(0)
    end
end)

CreateThread(function()
    while true do
        DisableControlAction(0, 200, true)
        SetPauseMenuActive(false)
        if IsDisabledControlJustReleased(0, 200) then
            if not otherMenuOpen then
                if IsPauseMenuActive() then return end
                SwitchPM()
            end
        end
        Wait(0)
    end
end)

function SwitchPM()
    X.Open = not X.Open

    if X.Open then
        TriggerServerEvent('pausemenu:requestJobsUpdate')
        SetDisplay(true)
        TriggerScreenblurFadeIn(200)
    else
        SetDisplay(false)
        TriggerScreenblurFadeOut(200)
    end
end

local cachedPlayerData = nil
local lastUpdate = 0
local function GetPlayerData()
    local currentTime = GetGameTimer()
    if cachedPlayerData and (currentTime - lastUpdate) < 1000 then
        return cachedPlayerData
    end

    local moneyData = {}
    if Config.Framework == 'ESX' then
        local player = Framework.PlayerData
        local accounts = player.accounts or {}
        local job = player.job or {}
        local secondJob = player.job2

        for accountType, accountConfig in pairs(Config.Accounts) do
            moneyData[accountConfig.name] = 0
            if accounts then
                for _, account in pairs(accounts) do
                    if account.name == accountConfig.name then
                        moneyData[accountConfig.name] = account.money
                        break
                    end
                end
            end
        end

        cachedPlayerData = {
            name = GetPlayerName(PlayerId()),
            job = job.label or 'Unemployed',
            secondJob = secondJob and secondJob.label or nil,
            showSecondJob = secondJob ~= nil,
            avatar = Config.DefaultSettings.ServerLogo,
            cashMoney = Framework.Math.GroupDigits(moneyData['money']) .. Config.Accounts.Cash.prefix,
            bankMoney = Framework.Math.GroupDigits(moneyData['bank']) .. Config.Accounts.Bank.prefix,
            blackMoney = Framework.Math.GroupDigits(moneyData['black_money']) .. Config.Accounts.Black.prefix,
            vipMoney = "0" .. Config.Accounts.Coins.suffix
        }
    else
        local Player = Framework.Functions.GetPlayerData()
        local job = Player.job or {}
        
        cachedPlayerData = {
            name = GetPlayerName(PlayerId()),
            job = job.label or 'Unemployed',
            secondJob = nil,
            showSecondJob = false,
            avatar = Config.DefaultSettings.ServerLogo,
            cashMoney = Framework.Shared.Round(Player.money['cash']) .. Config.Accounts.Cash.prefix,
            bankMoney = Framework.Shared.Round(Player.money['bank']) .. Config.Accounts.Bank.prefix,
            blackMoney = Framework.Shared.Round(Player.money['crypto']) .. Config.Accounts.Black.prefix,
            vipMoney = "0" .. Config.Accounts.Coins.suffix
        }
    end
    
    lastUpdate = currentTime
    return cachedPlayerData
end

local cachedStatusData = nil
local lastStatusUpdate = 0
local function GetServerStatus()
    local currentTime = GetGameTimer()
    if cachedStatusData and (currentTime - lastStatusUpdate) < 5000 then
        return cachedStatusData
    end

    cachedStatusData = {
        playersOnline = #GetActivePlayers() .. '/' .. GetConvarInt('sv_maxclients', 32),
        police = '0 online',
        ems = '0 online',
        mechanic = '0 online'
    }
    
    lastStatusUpdate = currentTime
    return cachedStatusData
end

function SetDisplay(bool)
    display = bool
    SetNuiFocus(bool, bool)
    
    local data = {
        type = "ui",
        status = bool,
    }
    
    if bool then
        data.playerData = GetPlayerData()
        data.statusData = GetServerStatus()
        data.labels = Locales[Config.Language]
        data.accounts = {
            cash = Config.Accounts.Cash.enabled,
            bank = Config.Accounts.Bank.enabled,
            black = Config.Accounts.Black.enabled,
            coins = Config.Accounts.Coins.enabled
        }
    end
    
    SendNUIMessage(data)
end

if Config.Framework == 'ESX' then
    RegisterNetEvent('esx:playerLoaded')
    AddEventHandler('esx:playerLoaded', function(xPlayer)
        Framework.PlayerData = xPlayer
        cachedPlayerData = nil
        if display then SetDisplay(true) end
    end)

    RegisterNetEvent('esx:setJob')
    AddEventHandler('esx:setJob', function(job)
        Framework.PlayerData.job = job
        cachedPlayerData = nil
        if display then SetDisplay(true) end
    end)

    RegisterNetEvent('esx:setJob2')
    AddEventHandler('esx:setJob2', function(job2)
        Framework.PlayerData.job2 = job2
        cachedPlayerData = nil
        if display then SetDisplay(true) end
    end)
else
    RegisterNetEvent('QBCore:Client:OnPlayerLoaded')
    AddEventHandler('QBCore:Client:OnPlayerLoaded', function()
        cachedPlayerData = nil
        if display then SetDisplay(true) end
    end)

    RegisterNetEvent('QBCore:Client:OnJobUpdate')
    AddEventHandler('QBCore:Client:OnJobUpdate', function(job)
        cachedPlayerData = nil
        if display then SetDisplay(true) end
    end)
end

RegisterNUICallback('close', function(data, cb)
    X.Open = false
    SetDisplay(false)
    TriggerScreenblurFadeOut(200)
    cb('ok')
end)

RegisterNUICallback('exit', function(data, cb)
    X.Open = false
    SetDisplay(false)
    TriggerScreenblurFadeOut(200)
    cb('ok')
end)

RegisterNUICallback('openSettings', function(data, cb)
    X.Open = false
    SetDisplay(false)
    TriggerScreenblurFadeOut(200)
    Wait(100)
    otherMenuOpen = true
    SetFrontendActive(true)
    ActivateFrontendMenu(GetHashKey('FE_MENU_VERSION_LANDING_MENU'), false, -1)
    cb('ok')
end)

RegisterNUICallback('openMap', function(data, cb)
    X.Open = false
    SetDisplay(false)
    TriggerScreenblurFadeOut(200)
    Wait(100)
    otherMenuOpen = true
    SetFrontendActive(true)
    ActivateFrontendMenu(GetHashKey('FE_MENU_VERSION_MP_PAUSE'), 0, -1)
    DisplayRadar(true)
    cb('ok')
end)

RegisterNUICallback('openBindings', function(data, cb)
    X.Open = false
    SetDisplay(false)
    TriggerScreenblurFadeOut(200)
    Wait(100)
    otherMenuOpen = true
    SetFrontendActive(true)
    ActivateFrontendMenu(GetHashKey('FE_MENU_VERSION_LANDING_KEYMAPPING_MENU'), false, -1)
    cb('ok')
end)

RegisterNUICallback('openSocialMedia', function(data, cb)
    local urls = Config.DefaultSettings.SocialMedia
    local url = urls[data.type]
    if url then
        SendNUIMessage({
            type = "openUrl",
            url = url
        })
    end
    cb('ok')
end)

RegisterCommand(Config.Commands.OpenMenu, function()
    SetDisplay(not display)
end)

RegisterNetEvent('pausemenu:updateStatus')
AddEventHandler('pausemenu:updateStatus', function(status)
    cachedStatusData = status
    lastStatusUpdate = GetGameTimer()
    if display then
        SendNUIMessage({
            type = "updateStatus",
            statusData = status
        })
    end
end)

-- Detectar cuando se cierra el menú de GTA
CreateThread(function()
    while true do
        if otherMenuOpen then
            if not IsPauseMenuActive() then
                otherMenuOpen = false
            end
        end
        Wait(100)
    end
end) 