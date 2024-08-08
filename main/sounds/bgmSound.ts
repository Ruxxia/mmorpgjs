import { Sound } from '@rpgjs/client'

@Sound({
    sounds: {
        menu:require('./menu.ogg')
    },
    loop: true
})
export default class BgmMusic {}