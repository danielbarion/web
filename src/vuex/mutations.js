export default {
  addPlayer(state, playerData) {
    const {
      id,
      name,
      hp,
      mp,
      atk,
      atkspd,
      atkbar
    } = playerData

    state.players.push({
      id,
      name,
      hp,
      mp,
      atk,
      atkspd,
      atkbar
    })
  },

  addMe(state, playerData) {
    const {
      id,
      name,
      hp,
      mp,
      atk,
      atkspd,
      atkbar
    } = playerData

    state.me = {
      id,
      name,
      hp,
      mp,
      atk,
      atkspd,
      atkbar
    }
  }
}