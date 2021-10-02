//CookieClickerLibrary (AKA ccl) v1.0.0 Created by 0x53616d. Https:// github.com/0x53616d/CookieClickerLibrary
function cclCookieSet(cookiestoset) {
Game.Earn(parseInt(cookiestoset) - Game.cookies)
return true;
}

function cclCookieAdd(cookiestoadd) {
Game.cookies = (Game.cookies + parseInt(cookiestoadd))
Game.Earn(parseInt(cookiestoadd))
return true;
}

function cclCookieSub(cookiestosub) {
Game.Earn(-parseInt(cookiestosub))
return true;
}

function cclBeatGame() {
Game.RuinTheFun()
return true;
}

function cclUnlockFps(desiredfps) {
Game.fps = parseInt(desiredfps)
return true;
}

function cclSetPrestigeAndHeavenlyChips(prestige, chips) {
	Game.prestige = parseInt(prestige)
	Game.HeavenlyChips = parseInt(heavenly)
	Game.Ascend(true)
	Game.Achievements['Cheated cookies taste awful'].won=0;
return true;
}

function cclHardReset() {
	Game.Reset(true)
	Game.Achievements['Cheated cookies taste awful'].won=0;
return true;
}

function cclUnlockAllAchievements() {
for (i=0; i<538; i++) {
Game.AchievementsById[i].won=1;
}
return true;
}

if (window.location.href != "https://orteil.dashnet.org/cookieclicker/") {
alert("This script was designed for use on 'https://orteil.dashnet.org/cookieclicker/'. Some things may not work here.")
} else {
ccadblock()
}

function ccadblock() {
try {
var smallad = document.getElementById("smallSupport");
 smallad.parentNode.removeChild(smallad);
} catch{}
try { 
var rightbanner = document.getElementById("support");
 rightbanner.parentNode.removeChild(rightbanner);
} catch{}
try {
var rightbanner2 = document.getElementById("aqad");
 rightbanner2.parentNode.removeChild(rightbanner2);
} catch{}
try {
document.getElementsByClassName('supportComment')[0].style.visibility='hidden';
} catch{}
try {
document.getElementsByClassName('img_ad')[0].style.visibility='hidden';
} catch{}
//lots of try catch try catch because only some of the time do the divs under those names exist.
}

console.clear()
console.log("[=== Script injection seems to be successful! ===]")