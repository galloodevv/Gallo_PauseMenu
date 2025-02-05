fx_version 'cerulean'
game 'gta5'

author 'Gallodevv'
description 'Pause Menu UI for ESX/QB-Core'
version '1.0.0'

ui_page 'web/dist/index.html'

shared_scripts {
    'Config/*.lua'
}

client_scripts {
    'Client/*.lua'
}

server_scripts {
    'Server/*.lua'
}


files {
    'web/dist/index.html',
    'web/dist/assets/**/*'
}
