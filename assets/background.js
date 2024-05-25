var client = ZAFClient.init()

client.on('app.registered', function (context) {
  var settings = context.metadata.settings

  client.get('instances').then(function (data) {
    var instanceId

    Object.keys(data.instances).forEach(function (key) {
      if (data.instances[key].location === 'ticket_sidebar') {
        instanceId = key
      }
    })

    setIframeHeight(client.instance(instanceId), settings)

  })
})

function setIframeHeight(client, settings) {
  console.log("iframe resizing")
  client.invoke('resize', { width: '100%', height: settings.iframeHeight });
}