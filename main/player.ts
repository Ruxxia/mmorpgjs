import { RpgPlayer, RpgPlayerHooks, Control, Components, Speed } from '@rpgjs/server'
import ClassGraphics from 'rpgjs-character-select/server/src/graphics/ClassGraphics'
import { getPlayerGraphics } from './utils/playerGraphic'

const player: RpgPlayerHooks = {
    onConnected(player: RpgPlayer) {
        player.speed = 2.3
        player.name = 'YourName'
        player.setComponentsTop(Components.text('{name}'))
    },
    onInput(player: RpgPlayer, { input }) {
        const graphics = getPlayerGraphics(player._class.graphics)
        if (input == Control.Back) {
            player.callMainMenu()
        }

        if (input === 'slash') {
            player.showAnimation(graphics, 'slash', true)
        }

        if (input === 'shoot') {
            player.showAnimation(graphics, 'shoot', true)
        }
    },
    async onJoinMap(player: RpgPlayer) {
        player.save();
    },
    onCharacterSelected(player: RpgPlayer, actorId: string) {
        player.setActor(actorId);
    },
    onAuthSuccess(player: RpgPlayer) {
        const graphics = player._class.graphics as ClassGraphics;

        player.setGraphic([
            ...graphics.pernament,
            ...Object.values(graphics.baseEquipment)
        ])
    },
    onDisconnected(player) {
        player.save()
    },
}

export default player