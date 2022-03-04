<center><img src="https://github.com/zeeoneofc.png" alt="zee" width="500" />
</p></center>
<p align="center">
<a href="#"><img title="alphabot-api" src="https://img.shields.io/badge/alphabot-api-green?colorA=%23ff0000&colorB=%23017e40&style=for-the-badge"></a>

<p align="center">
<a href="https://github.com/zeeoneofc/alphabot-api"><img title="Followers" src="https://img.shields.io/github/followers/zeeoneofc?color=blue&style=flat-square"></a>
<a href="https://github.com/zeeoneofc/alphabot-api"><img title="Stars" src="https://img.shields.io/github/stars/zeeoneofc/alphabot-api?color=red&style=flat-square"></a>
<a href="https://github.com/zeeoneofc/alphabot-api/network/members"><img title="Forks" src="https://img.shields.io/github/forks/zeeoneofc/alphabot-api?color=red&style=flat-square"></a>
<a href="https://github.com/zeeoneofc/alphabot-api/watchers"><img title="Watching" src="https://img.shields.io/github/watchers/zeeoneofc/alphabot-api?label=Watchers&color=blue&style=flat-square"></a>
</p>

## Penginstalan
> npm install alphabot-api
>
> npm uninstall alphabot-api

## ```Downloader```
```js
const zee = require('alphabot-api');

const url_youtube = 'https://youtu.be/zXiSTrOQhxM'
const url_tiktok = 'https://vt.tiktok.com/ZSehyjVW9/'
const url_instagram = 'https://www.instagram.com/p/CJFsOsKJMHa6FCRkbjn0mR3jJ0KwHOCCMaW7_Q0/?utm_medium=copy_link'
const url_facebook = 'http://www.facebook.com/groups/526909968570398/permalink/571916620736399/'
const url_twitter = 'https://twitter.com/LucuLucuVideo/status/1454834787382816775?s=20'
const url_soundcloud = 'https://soundcloud.com/enggak-tau-829795349/tri-suaka-aku-bukan-jodohnya?utm_campaign=social_sharing&utm_source=mobi&utm_terms=social_sharing_on_mobi.control%2Ctop_curators.top_curators'
const url_imgur = 'https://imgur.com/gallery/rK8ppvC'
const url_imdb = 'https://www.imdb.com/video/vi146981657?listId=ls053181649'
const url_telesticker = 'https://t.me/addstickers/c1129234339_by_HarukaAyaBot'

// youtube
zee.Youtube(url_youtube)
    .then(data => {console.log(data)
});

// tiktok
zee.Tiktok(url_tiktok)
    .then(data => {console.log(data)
});

// instagram
zee.Instagram(url_instagram)
    .then(data => {console.log(data)
});

// facebook
zee.Facebook(url_facebook)
    .then(data => {console.log(data)
});

// twitter
zee.Twitter(url_twitter)
    .then(data => {console.log(data)
});

// soundcloud
zee.SoundCloud(url_soundcloud)
    .then(data => {console.log(data)
});

// imgur
zee.Imgur(url_imgur)
    .then(data => {console.log(data)
});

// imdb
zee.Imdb(url_imdb)
    .then(data => {console.log(data)
});

// telesticker
zee.Telesticker(url_telesticker)
    .then(data => {console.log(data)
});
```

## ```Anime```
```js
const zee = require('alphabot-api');

const query = 'naruto'

// anime
zee.Anime(query)
    .then(data => {console.log(data)
});

// manga
zee.Manga(query)
    .then(data => {console.log(data)
});

// character
zee.Character(query)
    .then(data => {console.log(data)
});
```

## ```Search```
```js
const zee = require('alphabot-api');

const query_pinterest = 'elaina'
const query_film = 'love'
const query_wattpad = 'love'
const query_webtoons = 'love'
const query_mangatoons = 'love'
const query_drakor = 'love'
const query_stickersearch = 'patrick'

// pinterest
zee.Pinterest(query_pinterest)
    .then(data => {console.log(data)
});

// film
zee.Film(query_film)
    .then(data => {console.log(data)
});

// wattpad
zee.Wattpad(query_wattpad)
    .then(data => {console.log(data)
});

// webtoons
zee.Webtoons(query_webtoons)
    .then(data => {console.log(data)
});

// mangatoons
zee.Mangatoons(query_mangatoons)
    .then(data => {console.log(data)
});

// drakor
zee.Drakor(query_drakor)
    .then(data => {console.log(data)
});

// stickersearch
zee.StickerSearch(query_stickersearch)
    .then(data => {console.log(data)
});
```

## ```Islami```
```js
const zee = require('alphabot-api');

const query = 'luqman'

// listsurah
zee.ListSurah()
    .then(data => {console.log(data)
});

// surah
zee.Surah(query)
    .then(data => {console.log(data)
});

// tafsirsurah
zee.TafsirSurah(query)
    .then(data => {console.log(data)
});
```

## ```Information && News && others```
```js
const zee = require('alphabot-api');

const username = 'WattpadRomanceIN'

// jadwalbola
zee.JadwalBola()
    .then(data => {console.log(data)
});

// jadwaltv
zee.JadwalTv()
    .then(data => {console.log(data)
});

// jadwalsholat
zee.JadwalSholat()
    .then(data => {console.log(data)
});

// kompasnews
zee.KompasNews()
    .then(data => {console.log(data)
});

// inews
zee.Inews()
    .then(data => {console.log(data)
});

// wattpaduser
zee.WattpadUser(username)
     .then(data => {console.log(data)
});

//Palingmurah
const query = 'rdp'
zee.palingmurah(query)
    .then(result => {
     console.log(result)
});

//Moddroid
const query = 'freefire'

zee.moddroid(query)
    .then(result => {
     console.log(result)
});

//Happymod
const query = 'freefire'

zee.happymod(query)
    .then(result => {
     console.log(result)
});

//Apkmody
const query = 'freefire'

zee.apkmody(query)
    .then(result => {
     console.log(result)
});

//Wallpaper Search
const query = 'naruto'

zee.wpsearch(query)
    .then(result => {
     console.log(result)
});

//Mui Halal
const query = 'indomie'
const page = '2'

zee.muihalal(query, page)
    .then(result => {
     console.log(result)
});

//MCPEdl
const query = 'naruto'

zee.mcpedl(query)
    .then(result => {
     console.log(result)
});

//Sfile Search
const query = 'vpn'

zee.sfilesearch(query)
    .then(result => {
     console.log(result)
});

//Turnbackhoax
const zee = require('zee-api');

zee.turnbackhoax()
    .then(result => {
     console.log(result)
});

//Server Minecraft Indo
const zee = require('zee-api');

zee.servermc()
    .then(result => {
     console.log(result)
});

//P-STORE
const query = 'rdp'

zee.pstore(query)
    .then(result => {
     console.log(result)
});

//JalanTikus
const query = 'naruto'

zee.jalantikus(query)
    .then(result => {
     console.log(result)
});

//Tribun News
const zee = require('zee-api');

zee.tribunnews()
    .then(result => {
     console.log(result)
});
```

# THANKS TO 🎉
- Xfarr-api
- Hxz-api
- zee-api 
