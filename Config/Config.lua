Config = {}
Config.Framework = 'ESX' -- 'ESX' or 'QB'
Config.Language = 'es' -- or 'es' for Spanish

Config.DefaultSettings = {
    Website = "github.com",
    ServerLogo = "https://cdn.discordapp.com/icons/1326238872228724746/ea468f7231d91a9b9af4dc9771166261.png",
    SocialMedia = {
        Discord = "https://discord.gg/example",
        YouTube = "https://youtube.com",
        Twitter = "https://twitter.com",
        Instagram = "https://instagram.com"
    },
    MaxPlayers = 32
}

Config.Accounts = {
    Cash = {
        name = 'money',
        icon = 'cash',
        prefix = '$',
        suffix = '',
        enabled = true
    },
    Bank = {
        name = 'bank',
        icon = 'bank',
        prefix = '$',
        suffix = '',
        enabled = true
    },
    Black = {
        name = 'black_money',
        icon = 'black_money',
        prefix = '$',
        suffix = '',
        enabled = true
    },
    Coins = {
        name = 'coins',
        icon = 'coins',
        prefix = '$',
        suffix = '',
        enabled = false
    }
}

Config.Jobs = {
    Police = {
        jobs = {'police'},
        countInOnline = true,
        showInStatus = true
    },
    EMS = {
        jobs = {'ambulance'},
        countInOnline = true,
        showInStatus = true
    },
    Mechanic = {
        jobs = {'mechanic'},
        countInOnline = true,
        showInStatus = true
    }
}

Config.Commands = {
    OpenMenu = "pausemenu"
}

Config.Keys = {
    OpenMenu = 'ESCAPE'
} 