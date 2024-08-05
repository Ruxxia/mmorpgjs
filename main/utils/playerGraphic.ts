export const getPlayerGraphics = (graphics) => {
    const { pernament, baseEquipment } = graphics;
    const { torso, legs } = baseEquipment

    return [ torso, legs, ...pernament ]
}