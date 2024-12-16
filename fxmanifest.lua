fx_version 'cerulean'

game "gta5"

author 'mur4i'
version '2.0.0'
description 'mri Admin Menu'
credits "Project Sloth & OK1ez"

lua54 'yes'

ui_page 'html/index.html'

client_script {
  'client/**',
}

server_script {
  "server/**",
  "@oxmysql/lib/MySQL.lua",
}

shared_script {
  '@ox_lib/init.lua',
  "shared/**",
}

files {
  'html/**',
  'data/ped.lua',
  'data/object.lua',
  'locales/*.json',
}

ox_lib 'locale'
