const hostname = 'XXXXX'
const timeout = 600000

// eslint-disable-next-line no-console
console.log("Reload extension -> " + location.hostname);

if(location.hostname === hostname){
	setTimeout(function(){ location.reload(); }, timout);
}
