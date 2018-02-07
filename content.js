const hostname = `XXXXX`
const timeout = 600000

// eslint-disable-next-line no-console
console.log(`Reload extension -> ${window.location.hostname}`)

if (window.location.hostname === hostname) {
  setTimeout(() => { window.location.reload() }, timeout)
}
