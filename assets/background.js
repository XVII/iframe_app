var client = ZAFClient.init()

client.on('app.registered', function (context) {
  var settings = context.metadata.settings

  client.get('instances').then(function(data) {
    var instanceId

    Object.keys(data.instances).forEach(function(key) {
      if (data.instances[key].location === 'nav_bar') {
        instanceId = key
      }
    })
  })
})
