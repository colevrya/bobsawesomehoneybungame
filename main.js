import {DiscordSDK} from 'https://cdn.skypack.dev/@discord/embedded-app-sdk'
const clientId = new URLSearchParams(window.location.search).get('client_id') || ''
const sdk = new DiscordSDK(clientId)
await sdk.ready()
