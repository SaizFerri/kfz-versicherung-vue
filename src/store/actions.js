export default {
  addCarAlert (context) {
    context.commit('addCarShowAlert')
    setTimeout(() => {
      context.commit('addCarHideAlert')
    }, 2000)
  }
}
