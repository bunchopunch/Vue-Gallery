export const actions = function (context) {
  return new Promise((resolve) => {
    this.$http.get('...').then((response) => {
      context.commit('updateMessage', response.data.message)
      resolve()
    })
  })
}
