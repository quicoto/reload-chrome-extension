// eslint-disable-next-line no-console
console.log("Reload extension -> " + location.hostname);

if(location.hostname === "wwwapps.ups.com"){
	setTimeout(function(){ location.reload(); }, 60000);
}
