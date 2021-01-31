document.addEventListener('DOMContentLoaded', async function () {
  const { urls } = await browser.storage.local.get(['urls'])

  document.querySelector("#urls").value = urls || null
})

document.querySelector("form").addEventListener("submit", async function (e) {
  e.preventDefault()

  await browser.storage.local.set({
    urls: document.querySelector("#urls").value
  })

  document.querySelector('.alert').classList.remove('d-none')
})
