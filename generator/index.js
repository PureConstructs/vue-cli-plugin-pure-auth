function addDependencies (api) {
  api.extendPackage({
    dependencies: {
      axios: "^0.18.0"
    }
  })
}

function renderFiles (api, opts) {
  // TODO: Add some code dipshit
}

module.exports = {
  addDependencies,
  renderFiles
}
