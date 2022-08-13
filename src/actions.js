// Action Creator
export function addPlayer(player) {
  return {
    type: 'ADD_PLAYER',
    data: player
  }
}