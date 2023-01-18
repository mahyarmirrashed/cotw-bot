

## [0.3.0](https://github.com/mahyarmirrashed/cotw-bot/compare/v0.2.0...v0.3.0) (2023-01-18)


### Features

* add basic outline of `champ` command ([05d7225](https://github.com/mahyarmirrashed/cotw-bot/commit/05d7225b1add9dfa1a878fa260d4c9ea82cbaf97))
* add basic outline of `chump` command ([74531b8](https://github.com/mahyarmirrashed/cotw-bot/commit/74531b8a62c03df3b3e91e607101849548cbbd9f))
* add basic outline of `set` command ([690c7df](https://github.com/mahyarmirrashed/cotw-bot/commit/690c7dfcfe45a3a1f9520c836d1c1db87cae0a12))
* add basic outline of `vote` command ([ba40049](https://github.com/mahyarmirrashed/cotw-bot/commit/ba400498d151ce7b82d9b35d3ec50ec31946e466))

## [0.2.0](https://github.com/mahyarmirrashed/cotw-bot/compare/v0.1.1...v0.2.0) (2023-01-16)


### Features

* add checking if command called in permitted channel ([5c8ef6e](https://github.com/mahyarmirrashed/cotw-bot/commit/5c8ef6eb153afd71185f0a3ca33b9c012aa23843))
* add command searching ability using promises ([5f59d22](https://github.com/mahyarmirrashed/cotw-bot/commit/5f59d22681ab52d04d04d9466ce1a80f862aa395))
* add interaction creation event handler ([cf20b14](https://github.com/mahyarmirrashed/cotw-bot/commit/cf20b14120c84f0a0ecadad5cafe77de7ff6a06c))
* add method to check if calling user has necessary permissions for the command ([283fb74](https://github.com/mahyarmirrashed/cotw-bot/commit/283fb7464763a7bff9f9c7d640708db0cea3af7f))
* add readonly field for registered commands ([043e760](https://github.com/mahyarmirrashed/cotw-bot/commit/043e760942730cc56361b02cdd8eb87df7fbb1e8))
* register commands when looping over them ([84cb092](https://github.com/mahyarmirrashed/cotw-bot/commit/84cb09252757792fbd10ff735195117c7feeb194))
* set to debug console logging ([bd6ec1b](https://github.com/mahyarmirrashed/cotw-bot/commit/bd6ec1beb6517a5b2dfa77405bc74bf512b8fbb9))


### Bug Fixes

* enable guilds intent for channel caching ([a9f3154](https://github.com/mahyarmirrashed/cotw-bot/commit/a9f3154c82b53bf137612a37daafd30ffd9f38e1))
* enable interactionCreate event ([7a643bd](https://github.com/mahyarmirrashed/cotw-bot/commit/7a643bdcc3a7faf91a6294c131bf278a97b921a8))

### [0.1.1](https://github.com/mahyarmirrashed/cotw-bot/compare/v0.1.0...v0.1.1) (2023-01-16)

## [0.1.0](https://github.com/mahyarmirrashed/cotw-bot/compare/v0.0.2...v0.1.0) (2023-01-16)


### Features

* add ability to register commands to guild quickly ([ed68f89](https://github.com/mahyarmirrashed/cotw-bot/commit/ed68f892ca4d4465ca4dd66de2a365a9ad1aa4bd))
* add blacklist and whitelist channel testing ([64d9ba8](https://github.com/mahyarmirrashed/cotw-bot/commit/64d9ba86a831f4dc9df3f2f157c683cab166c3a3))
* add colored output when logging messages ([d759808](https://github.com/mahyarmirrashed/cotw-bot/commit/d759808eb68801534e605340946cacda0e49ff2f))
* add command class for interacting with slash commands ([518a474](https://github.com/mahyarmirrashed/cotw-bot/commit/518a47496e0fb1bec0d6e71dd2c593b540539e64))
* add Command type ([b0c1389](https://github.com/mahyarmirrashed/cotw-bot/commit/b0c1389df35e566d416ef65def336cc532dfb1ab))
* add event handler for when client is ready ([dbbfc5e](https://github.com/mahyarmirrashed/cotw-bot/commit/dbbfc5e8d284b6cb8f88861b7f01316212987af8))
* add improved logging messages ([4b6624e](https://github.com/mahyarmirrashed/cotw-bot/commit/4b6624edd96254b22067f23407c5c5ec6f3206bb))
* add interface for cron events ([8c2f1b0](https://github.com/mahyarmirrashed/cotw-bot/commit/8c2f1b0fce0b5251fe05025ec011441e79f2101b))
* add interface for guild events ([3c2d032](https://github.com/mahyarmirrashed/cotw-bot/commit/3c2d0328dee4e3b070c424694f49c57ee21d790c))
* add simple ping command ([5ba5020](https://github.com/mahyarmirrashed/cotw-bot/commit/5ba502065af7e6882f7604a8f2c8df14c43934e0))
* display which command is being registered locally ([31e4ec1](https://github.com/mahyarmirrashed/cotw-bot/commit/31e4ec1c865f03af53ac7c6648b328c8feaa810a))
* list enabled cron and guild events ([384ea53](https://github.com/mahyarmirrashed/cotw-bot/commit/384ea532c75f74dd5fdde2e9990f7b0ab4bf2a7d))
* register events onto bot ([6c7d439](https://github.com/mahyarmirrashed/cotw-bot/commit/6c7d4399c48b2013e6ede5746c10807cfbd5201b))
* split registration of guild and cron events ([a50325c](https://github.com/mahyarmirrashed/cotw-bot/commit/a50325ccb08eefc7c1c80344f02a17aa1b4a6bcf))


### Bug Fixes

* add requirement for DISCORD_CLIENT_ID envvar ([997bded](https://github.com/mahyarmirrashed/cotw-bot/commit/997bded674fdd0d030e63d270107e3c22f36a1e9))
* make logger public for other methods to use ([4f277c0](https://github.com/mahyarmirrashed/cotw-bot/commit/4f277c08692456ee67778a1fb5a099830034330a))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.2](https://github.com/mahyarmirrashed/cotw-bot/compare/v0.0.1...v0.0.2) (2023-01-06)


### Features

* add logging into client endpoint ([c0c3ef2](https://github.com/mahyarmirrashed/cotw-bot/commit/c0c3ef292a63e3a9762b58a640b401633215c8fc))

### 0.0.1 (2022-12-30)


### Features

* indicate that bot has started ([26e10fa](https://github.com/mahyarmirrashed/cotw-bot/commit/26e10fab763461ffbfcef423086d5464a618450c))