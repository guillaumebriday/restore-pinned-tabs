browser.browserAction.onClicked.addListener(async function () {
  const { urls } = await browser.storage.local.get(['urls'])

  if (!urls) return

  urls.split(';').forEach(async function (url) {
    await browser.tabs.create({
      url,
      pinned: true
    })
  })
})
