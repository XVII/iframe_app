var client = ZAFClient.init()

client.on('app.registered', function (context) {
  var settings = context.metadata.settings
  console.log("iframe app.registered")
  window.location.replace((settings.zafSdkSupport) ? buildUrl(window.location.href, settings.iframeURL) : settings.iframeURL)
})

function buildUrl(currentUrl, newUrl) {
    if (!/^https?:/.test(newUrl)) {
      newUrl = 'http://' + newUrl
    }
    var settingsUrl = urlParser(newUrl)
    var newParams = [].concat(queryParameters(currentUrl), queryParameters(newUrl)).join('&')
    var insertIEslash = settingsUrl.pathname.indexOf('/') === 0 ? '' : '/' // IE doesn't start pathname with a slash
    return settingsUrl.protocol + '//' + settingsUrl.host + insertIEslash + settingsUrl.pathname + '?' + newParams + settingsUrl.hash
}

function urlParser(url) {
    var $a = document.createElement('a')
    $a.href = url

    // IE 9, 10, 11 CRUFT: when the url is relative the protocol is ':', so we force it to be absolute
    $a.href = $a.href
    return $a
}

// returns array of queryString Params ['zat=true', 'zaf=local']
function queryParameters(url) {
    // remove inital ? and split
    return urlParser(url).search.replace(/^\?/, '').split('&').filter(function (p) { return !!p })
}

