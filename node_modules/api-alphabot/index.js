const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')
const qs = require("qs")
const author = "ZeeoneOfc"

const film = (query) => {
	return new Promise((resolve, reject) => {
		axios.get(`http://167.99.31.48/?s=${query}`)
			.then(({
				data
			}) => {
				const $ = cheerio.load(data)
				const hasil = [];
				$('#content > div > div.los').each(function (a, b) {
                    $(b).find('article').each(function (c, d) {
                        const judul = $(d).find('div > a > div.addinfox > header > h2').text()
                        const quality = $(d).find('div > a > div > div > span').text()
                        const type = $(d).find('div > a > div.addinfox > div > i.type').text()
                        const upload = $(d).find('div > a > div.addinfox > div > span').text()
                        const link = $(d).find('div > a').attr('href');
                        const thumb = $(d).find('div > a > div > img').attr('src');
                        const result = {
                            status: 200,
                        	author: author,
                            judul: judul,
                            quality: quality,
                            type: type,
                            upload: upload,
                            link: link,
                            thumb: thumb,
                        };
                        hasil.push(result);
                    });
                });
				resolve(hasil)
			})
			.catch(reject)
	})
}
const anime = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.anime-planet.com/anime/all?name=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#siteContainer > ul.cardDeck.cardGrid > li ').each(function (a, b) {
                        result = {
                            status: 200,
                            author: author,
                            judul: $(b).find('> a > h3').text(),
                            link: 'https://www.anime-planet.com' + $(b).find('> a').attr('href'),
                            thumbnail: 'https://www.anime-planet.com' + $(b).find('> a > div.crop > img').attr('src')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            })
            .catch(reject)
    })
}
const manga = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.anime-planet.com/manga/all?name=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#siteContainer > ul.cardDeck.cardGrid > li ').each(function (a, b) {
                        result = {
                            status: 200,
                            author: author,
                            judul: $(b).find('> a > h3').text(),
                            link: 'https://www.anime-planet.com' + $(b).find('> a').attr('href'),
                            thumbnail: 'https://www.anime-planet.com' + $(b).find('> a > div.crop > img').attr('src')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            })
            .catch(reject)
    })
}
const character = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.anime-planet.com/characters/all?name=${query}`)
            .then(({
                data
            }) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#siteContainer > table > tbody > tr').each(function (a, b) {
                        result = {
                            status: 200,
                            author: author,
                            character: $(b).find('> td.tableCharInfo > a').text(),
                            link: 'https://www.anime-planet.com' + $(b).find('> td.tableCharInfo > a').attr('href'),
                            thumbnail: $(b).find('> td.tableAvatar > a > img').attr('src').startsWith('https://') ? $(b).find('> td.tableAvatar > a > img').attr('src') : 'https://www.anime.planet.com' + $(b).find('> td.tableAvatar > a > img').attr('src')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            })
            .catch(reject)
    })
}
const jadwalbola = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://m.bola.net/jadwal_televisi/')
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                $('#main_mid_headline_sub_topic').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    jadwal: $(b).find(' > div.main_mid_headline_topic > div > a').text(),
                    tanggal: $(b).find(' > div.main_mid_headline_topic_grouped_time_list').text().split('\n')[1].split('                            ')[1],
                    jam: $(b).find(' > div.main_mid_headline_topic > span').text(),
                    url: $(b).find(' > div.main_mid_headline_topic > div > a').attr('href'),
                    thumb: $(b).find(' > div.main_mid_headline_topic > img').attr('src')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
const jadwaltv = () => {
    return new Promise((resolve, reject) => {
        axios.get('http://www.dokitv.com/jadwal-acara-tv')
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                $('#tabeljadwaltv > tbody > tr ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    acara: $(b).find('> td:nth-child(2)').text(),
                    channel: $(b).find('> td > a').text(),
                    jam: $(b).find('> td.jfx').text(),
                    source: $(b).find('> td > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
const jadwalsholat = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://umrotix.com/jadwal-sholat/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                $('body > div > div.main-wrapper.scrollspy-action > div:nth-child(3) ').each(function(a, b) {   
                    result = {
                    status: 200,
                    author: author,
                    tanggal: $(b).find('> div:nth-child(2)').text(),
                    imsyak: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(1) > p:nth-child(2)').text(),
                    subuh: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(2) > p:nth-child(2)').text(),
                    dzuhur: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(3) > p:nth-child(2)').text(),
                    ashar: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(4) > p:nth-child(2)').text(),
                    maghrib: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(5) > p:nth-child(2)').text(),
                    isya: $(b).find('> div.panel.daily > div > div > div > div > div:nth-child(6) > p:nth-child(2)').text()
                }
                resolve(result)
                })
            })
            .catch(reject)
    })
}
const wattpad = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.wattpad.com/search/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('div.story-card-data.hidden-xxs > div.story-info ').each(function(a, b) {
                    $('ul.list-group > li.list-group-item').each(function(c,d) {
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> div.title').text(),
                    dibaca: $(b).find('> ul > li:nth-child(1) > div.icon-container > div > span.stats-value').text(),
                    divote: $(b).find('> ul > li:nth-child(2) > div.icon-container > div > span.stats-value').text(),
                    bab: $(b).find('> ul > li:nth-child(3) > div.icon-container > div > span.stats-value').text(),
                    waktu: $(b).find('> ul > li:nth-child(4) > div.icon-container > div > span.stats-value').text(),
                    url:'https://www.wattpad.com' + $(d).find('a').attr('href'),
                    thumb: $(d).find('img').attr('src'),
                    description: $(b).find('> div.description').text().replace(/\n/g,'')
                }
                hasil.push(result)
                })
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
const wattpaduser = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.wattpad.com/user/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                $('#app-container > div > header ').each(function(a, b) {
                    $('#profile-about > div > div ').each(function(c, d) {
                    result = {
                    status: 200,
                    author: author,
                    username: $(b).find('> div.badges > h1').text().trim(),
                    works: $(b).find('> div.row.header-metadata > div:nth-child(1) > p:nth-child(1)').text(),
                    reading_list: $(b).find('> div.row.header-metadata > div.col-xs-4.scroll-to-element > p:nth-child(1)').text(),
                    followers: $(b).find('> div.row.header-metadata > div.col-xs-4.on-followers > p.followers-count').text(),
                    joined: $(d).find('> ul > li.date.col-xs-12.col-sm-12 > span').text().trim().replace('Joined',''),
                    pp_picture: `https://img.wattpad.com/useravatar/${query}.128.851744.jpg`,
                    about: $(d).find('> div.description > pre').text() ? $(d).find('> div.description > pre').text() : 'Not found'
                }
                resolve(result)
                })
                })
            })
            .catch(reject)
    })
}
const mangatoons = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://mangatoon.mobi/en/search?word=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#page-content > div.search-page > div > div.comics-result > div.recommended-wrap > div > div ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> div.recommend-comics-title > span').text(),
                    genre: $(b).find('> div.comics-type > span').text().trim(),
                    link: 'https://mangatoon.mobi' + $(b).find('> a').attr('href'),
                    thumbnail: $(b).find('> a > div > img').attr('src')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
const webtoons = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.webtoons.com/id/search?keyword=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#content > div.card_wrap.search._searchResult > ul > li ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> a > div > p.subj').text(),
                    like: $(b).find('> a > div > p.grade_area > em').text(),
                    creator: $(b).find('> a > div > p.author').text(),
                    genre: $(b).find('> a > span').text(),
                    thumbnail: $(b).find('> a > img').attr('src'),
                    url: 'https://www.webtoons.com' + $(b).find('> a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
const drakor = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://drakorasia.blog//?s=${query}&post_type=post`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#post > div ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    judul: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a > h2').text().trim(),
                    years: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > div.category.text-gray.font-normal.text-white.text-xs.truncate > a').text(),
                    genre: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > div.genrenya.text-center.text-white.text-opacity-75.text-xs.mt-1').text().trim(),
                    thumbnail: $(b).find('> div.thumbnail > a > img').attr('src'),
                    url: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
const telesticker = async (url) => {
    return new Promise(async (resolve, reject) => {
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const hasil = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: author,
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            hasil.push(result)
        }
    resolve(hasil)
    })
}
const stickersearch = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://getstickerpack.com/stickers?query=${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const source = [];
                const link = [];
                $('#stickerPacks > div > div:nth-child(3) > div > a').each(function(a, b) {
                    source.push($(b).attr('href'))
                })
                axios.get(source[Math.floor(Math.random() * source.length)])
                    .then(({
                        data
                    }) => {
                        const $$ = cheerio.load(data)
                        $$('#stickerPack > div > div.row > div > img').each(function(c, d) {
                            link.push($$(d).attr('src').replace(/&d=200x200/g,''))
                        })
                        result = {
                            status: 200,
                            author: author,
                            title: $$('#intro > div > div > h1').text(),
                            sticker_url: link
                        }
                        resolve(result)
                    })
            }).catch(reject)
    })
}
const listsurah = () => {
            return new Promise((resolve, reject) => {
                  axios.get('https://litequran.net/')
                  .then(({ data }) => {
                       const $ = cheerio.load(data)
                       let listsurah = []
                       $('body > main > section > ol > li > a').each(function(a, b) {
                    listsurah.push($(b).text())
                })
                       result = {
                        status: 200,
                        author: author,
                        listsurah: listsurah
                       }
                       resolve(result)
                  }).catch(reject)
             })
        }
const surah = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://litequran.net/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = []
                $('body > main > article > ol > li').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    arab: $(b).find('> span.ayat').text(),
                    latin: $(b).find('> span.bacaan').text(),
                    translate: $(b).find('> span.arti').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
const tafsirsurah = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://tafsirq.com/topik/${query}`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = []
                $('body > div:nth-child(4) > div > div.col-md-6 > div ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    surah: $(b).find('> div.panel-heading.panel-choco > div > div > a').text(),
                    tafsir: $(b).find('> div.panel-body.excerpt').text().trim(),
                    type: $(b).find('> div.panel-heading.panel-choco > div > div > span').text(),
                    source: $(b).find('> div.panel-heading.panel-choco > div > div > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
const downloader = async (url) => {
    return new Promise((resolve, reject) => {
        axios({url: 'https://aiovideodl.ml/',method: 'GET',headers: {"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36","cookie": "PHPSESSID=3893d5f173e91261118a1d8b2dc985c3; _ga=GA1.2.792478743.1635388171;"}}).then((data) => {
            let a = cheerio.load(data.data)
            let token = a('#token').attr('value')
            const options = {
                method: 'POST',
                url: `https://aiovideodl.ml/wp-json/aio-dl/video-data/`,
                headers: {"content-type": "application/x-www-form-urlencoded; charset=UTF-8","user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36","cookie": "PHPSESSID=3893d5f173e91261118a1d8b2dc985c3; _ga=GA1.2.792478743.1635388171;"
                },
                formData: {url: url,token: token}
            };
            request(options, async function(error, response, body) {
                if (error) throw new Error(error)
                res = JSON.parse(body)
                res.status = 200
                res.author = "ZeeoneOfc"
                resolve(res);
            });
        })
    })
}
const pinterest = (query) => {
    return new Promise((resolve, reject) => {
         axios(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`).then((data) => {
                const random = data.data.resource_response.data.results[Math.floor(Math.random() * (data.data.resource_response.data.results.length))]
                var result = [];
                result = {
                        status: 200,
                        author: author,
                        url: random.images.orig.url
                }
                resolve(result)
            }).catch(reject)
        })
    }
const kompasnews = () => {
    return new Promise((resolve, reject) => {
        axios.get(`https://news.kompas.com/`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('body > div > div.container.clearfix > div:nth-child(3) > div.col-bs10-7 > div:nth-child(3) > div.latest.ga--latest.mt2.clearfix > div > div ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    berita: $(b).find('> div > div.article__box > h3').text(),
                    upload_time: $(b).find('> div > div.article__box > div.article__date').text(),
                    type_berita: $(b).find('> div > div.article__boxsubtitle > h2').text(),
                    link: $(b).find('> div > div.article__box > h3 > a').attr('href'),
                    thumbnail: $(b).find('> div > div.article__asset > a > img').attr('data-src'),
                    info_berita: $(b).find('> div > div.article__box > div.article__lead').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
const inews = () => {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.inews.id/news`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#news-list > li ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: author,
                    berita: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > h3').text().trim(),
                    upload_time: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > div.date.margin-10px-left').text().trim().split('|')[0],
                    link: $(b).find('> a').attr('href'),
                    thumbnail: $(b).find('> a > div > div > div.float-left.width-130px.position-absolute > img').attr('data-original'),
                    info_berita: $(b).find('> a > div > div > div.float-left.width-400px.margin-130px-left > p').text()
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}

function igstory(username){
	return new Promise(async(resolve, reject) => {
		axios.request({
			url: 'https://www.instagramsave.com/instagram-story-downloader.php',
			method: 'GET',
			headers:{
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const token = $('#token').attr('value')
			let config ={
				headers: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
					"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
					"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
				data: {
					'url':'https://www.instagram.com/'+ username,
					'action': 'story',
					'token': token
				}
			}
		axios.post('https://www.instagramsave.com/system/action.php',qs.stringify(config.data), { headers: config.headers })
		.then(({ data }) => {
		resolve(data)
		   })
		})
	.catch(reject)
	})
}

function ttdownloader(url){
	return new Promise(async(resolve, reject) => {
		axios.get('https://ttdownloader.com/',{
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			let token = $('#token').attr('value')
			let config = {
				'url': url,
				'format': '',
				'token': token
			}
		axios('https://ttdownloader.com/req/',{
			method: 'POST',
			data : new URLSearchParams(Object.entries(config)),
			headers: {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
			}
			})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			resolve({
				message: 'By ZeeoneOfc',
				nowm: $('div:nth-child(2) > div.download > a').attr('href'),
				wm: $('div:nth-child(3) > div.download > a').attr('href'),
				audio: $('div:nth-child(4) > div.download > a').attr('href')
				})
			})
		})
	.catch(reject)
	})
}
function igdl(url){
	return new Promise(async(resolve, reject) => {
		axios.request({
			url: 'https://www.instagramsave.com/download-instagram-videos.php',
			method: 'GET',
			headers:{
				"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
			}
		})
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const token = $('#token').attr('value')
			let config ={
				headers: {
					'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
					"sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
					"cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
					"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
				},
				data: {
					'url': url,
					'action': 'post',
					'token': token
				}
			}
		axios.post('https://www.instagramsave.com/system/action.php',qs.stringify(config.data), { headers: config.headers })
		.then(({ data }) => {
		resolve(data)
		   })
		})
	.catch(reject)
	})
}

function palingmurah(query) {
return new Promise((resolve, reject) => {
  axios.get(`https://palingmurah.net/pencarian-produk/?term=${query}`).then(async tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
  $("div.ui.card.wpj-card-style-2").each(function(c, d) {
    //INFO BARANG
    name = $(d).find("div.content.wpj-small.list-70-right > a.list-header").text().trim();
    link = $(d).find("div.content.wpj-small.list-70-right > a.list-header").attr('href');
    img = $(d).find("div.card-image-helper > img").attr('data-src');
    harga = $(d).find("div.flex-master.card-job-price.text-right.text-vertical-center").text().trim();
    //user
    usernamepenjual = $(d).find("strong").text().trim();
    linkpenjual = $(d).find("a.ui.wpj-big.avatar.image").attr('href');
    iconpenjual = $(d).find("a.ui.wpj-big.avatar.image > img").attr('data-src');
    const Data = {
      author: author,
      name: name,
      harga: harga,
      img: img,
      link: link,
      usernamepenjual: usernamepenjual,
      linkpenjual: linkpenjual,
      iconpenjual: iconpenjual
    }
    hasil.push(Data)
  })
  resolve(hasil)
  }).catch(reject)
  });
}
function moddroid(query) {
return new Promise((resolve, reject) => {
  axios.get(`https://moddroid.com/?s=${query}`).then( tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
  $("div.col-12.col-md-6.mb-4").each(function(c, d) {
    link = $(d).find("a.d-flex.position-relative.archive-post").attr('href');
    name = $(d).find("div > h3.h5.font-weight-semibold.text-truncate.text-primary.w-100").text().trim();
    img = $(d).find("div.flex-shrink-0.mr-2 > img").attr('src');
    desc = $(d).find("div.text-truncate.text-muted > span.align-middle").text();
    const Data = {
      author: author,
      img: img,
      name: name,
      desc: desc,
      link: link
    }
    hasil.push(Data)
  })
  resolve(hasil)
  }).catch(reject)
  });
}  
function apkmody(query) {
return new Promise((resolve, reject) => {
  axios.get(`https://apkmody.io/?s=${query}`).then( tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
  $("div.flex-item").each(function(c, d) {
    name = $(d).find("div.card-title > h2.truncate").text();
    desc = $(d).find("div.card-body > p.card-excerpt.has-small-font-size.truncate").text().trim();
    img = $(d).find("div.card-image > img").attr('src');
    link = $(d).find("article.card.has-shadow.clickable > a").attr('href');
    const Data = {
      author: author,
      img: img,
      name: name,
      desc: desc,
      link: link
    }
    hasil.push(Data)
  })
  resolve(hasil)
  }).catch(reject)
  });
}
function wpsearch(query) {
return new Promise((resolve, reject) => {
  axios.get(`https://www.wallpaperflare.com/search?wallpaper=${query}`).then(async tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
    $("#gallery > li > figure> a").each(function(i, cuk) {
    const img = $(cuk).find("img").attr('data-src');
    hasil.push(img)
  })
  resolve(hasil)
  }).catch(reject);
  });
}
function happymod(query) {
  return new Promise((resolve, reject) => {
  axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
   $("div.pdt-app-box").each(function(c, d) {
  
     
        name = $(d).find("a").text().trim();
        icon = $(d).find("img.lazy").attr('data-original');
        link = $(d).find("a").attr('href');
        link2 = `https://www.happymod.com${link}`
        const Data = {
          author: author,
          icon: icon,
          name: name,
          link: link2
        }
        hasil.push(Data)
   })
   resolve(hasil);
  }).catch(reject)
  });
  }
  function muihalal(query, page) {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.halalmui.org/mui14/searchproduk/search/?kategori=nama_produk&katakunci=${query}&page=${page}`).then( tod => {
    const $ = cheerio.load(tod.data)
    
    hasil = []
    
    $("tr > td").each(function(c, d) {
      name = $(d).find("span").eq(0).text()
      namee = name.replace('Nama Produk :', '')
      nmr = $(d).find("span").eq(1).text()
      nmrr = nmr.replace('Nomor Sertifikat :', '')
      const Data = {
        author: author,
        title: namee,
        nomorsertifikat: nmrr
      }
      hasil.push(Data)
    resolve(hasil)
    }).catch(reject)
  })
  })
}
  function mcpedl(query) {
    return new Promise((resolve, reject) => {
    axios.get(`https://mcpedl.com/?s=${query}`).then(async tod => {
    const $ = cheerio.load(tod.data)
    
    hasil = []
    
    $("div.post").each(function(c, d) {
      
      name = $(d).find("h2.post__title").text().trim();
      date = $(d).find("div.post__date").text().trim();
      desc = $(d).find("p.post__text").text().trim();
      category = $(d).find("div.post__category > a").text().trim();
      link = $(d).find("a").attr('href')
      link2 = `https://mcpedl.com${link}`
      const Data = {
        author: author,
        name: name,
        category: category,
        date: date,
        desc: desc,
        link: link2
      }
      hasil.push(Data)
      
    })
     resolve(hasil)
    }).catch(reject)
    });
    }
function sfilesearch(query) {
return new Promise((resolve, reject) => {
axios.get(`https://sfile.mobi/search.php?q=${query}&search=Search`).then(async tod => {
const $ = cheerio.load(tod.data)

hasil = []

  $("div.list").each(function(i, cuk) {
  ico  = $(cuk).find("img").attr("src");
  lin  = $(cuk).find("a").attr("href");
  name  = $(cuk).find("a").text();
  const Data = {
    author: author,
    icon: ico,
    name: name,
    link: lin
  }
  hasil.push(Data)

})
resolve(hasil)
});
});
}
function turnbackhoax() {
return new Promise((resolve, reject) => {
  axios.get(`https://turnbackhoax.id/`).then( tod => {
  const $ = cheerio.load(tod.data)
  
  hasil = []
  
  $("figure.mh-loop-thumb").each(function(a, b) {
    $("div.mh-loop-content.mh-clearfix").each(function(c, d) {
    link = $(d).find("h3.entry-title.mh-loop-title > a").attr('href');
    img = $(b).find("img.attachment-mh-magazine-lite-medium.size-mh-magazine-lite-medium.wp-post-image").attr('src');
    title = $(d).find("h3.entry-title.mh-loop-title > a").text().trim();
    desc = $(d).find("div.mh-excerpt > p").text().trim();
    date = $(d).find("span.mh-meta-date.updated").text().trim();
    const Data = {
      author: author,
      title: title,
      thumbnail: img,
      desc: desc,
      date: date,
      link: link
    }
    hasil.push(Data)
    })
  })
  resolve(hasil)
  }).catch(reject)
  });
}
function igvideo(link) {
  return new Promise(async(resolve, reject) => {
    let config = {
      'url': link,
      'submit': ''
    }
      axios('https://downloadgram.org/video-downloader.php',{
        method: 'POST',
        data : new URLSearchParams(Object.entries(config)),
        headers: {
          "cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
          "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
          }
        })
      .then(tod => {
        const $ = cheerio.load(tod.data)
        resolve({
          link: $('#downloadBox > a').attr('href')
      })
        })
        })
  }
  function igfoto(link) {
    return new Promise(async(resolve, reject) => {
      let config = {
        'url': link,
        'submit': ''
      }
        axios('https://downloadgram.org/photo-downloader.php',{
          method: 'POST',
          data : new URLSearchParams(Object.entries(config)),
          headers: {
            "cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
          })
        .then(tod => {
          const $ = cheerio.load(tod.data)
          resolve({
            link: $('#downloadBox > a').attr('href')
        })
          })
          })
    }
    function igtv(link) {
      return new Promise(async(resolve, reject) => {
        let config = {
          'url': link,
          'submit': ''
        }
          axios('https://downloadgram.org/igtv-downloader.php',{
            method: 'POST',
            data : new URLSearchParams(Object.entries(config)),
            headers: {
              "cookie": "_ga=GA1.2.623704211.1625264926; __gads=ID=a078e4fc2781b47b-22330cd520ca006e:T=1625264920:RT=1625264920:S=ALNI_MYS-jyPCjNa94DU8n-sX4aNF-ODOg; __atssc=google%3B3; _gid=GA1.2.1953813019.1625397379; __atuvc=4%7C26%2C6%7C27; __atuvs=60e2ab6d67a322ec003",
              "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
              }
            })
          .then(tod => {
            const $ = cheerio.load(tod.data)
            resolve({
              link: $('#downloadBox > a').attr('href')
          })
            })
            })
      }
      function servermc() {
      return new Promise((resolve, reject) => {
        axios.get(`https://minecraftpocket-servers.com/country/indonesia/`).then( tod => {
        const $ = cheerio.load(tod.data)
        
        hasil = []
        
        $("tr").each(function(c, d) {
          ip = $(d).find("button.btn.btn-secondary.btn-sm").eq(1).text().trim().replace(':19132', '')
          port = '19132'
          versi = $(d).find("a.btn.btn-info.btn-sm").text()
          player = $(d).find("td.d-none.d-md-table-cell > strong").eq(1).text().trim()
          const Data = {
            author: author,
            ip: ip,
            port: port,
            versi: versi,
            player: player
          }
          hasil.push(Data)
        })
        resolve(hasil)
      }).catch(reject)
      })
    }
    function pstore(query, page) {
    return new Promise((resolve, reject) => {
      axios.get(`https://p-store.net/search?query=${query}&page=${page}`).then(async tod => {
      const $ = cheerio.load(tod.data)
      
      hasil = []
      
        $("div.col-xs-6.col-md-4.col-cusong").each(function(i, cuk) {
        title  = $(cuk).find("p > a").text();
        thumb  = $(cuk).find("a > img").attr("src");
        link  = $(cuk).find("p > a").attr("href");
        harga  = $(cuk).find("div.price").text();
        const Data = {
            author: author,
            title: title,
            thumb: thumb,
            link: link,
            harga: harga
          }
          hasil.push(Data)
      
      })
      resolve(hasil)
      });
      });
    }
    function jalantikus(query) {
    return new Promise((resolve, reject) => {
      axios.get(`https://jalantikus.com/search/articles/${query}/`).then( tod => {
      const $ = cheerio.load(tod.data)
      
      hasil = []
      
      $("div.post-block-with-category").each(function(c, d) {
        title = $(d).find("a.post-block-with-category__link").text()
        category = $(d).find("a.post-info__category-link").text()
      date = $(d).find("time").text()
        link = `https://jalantikus.com${$(d).find("a").attr('href')}`
      const Data = {
          author: author,
          title: title,
          category: category,
          date: date,
          link: link
        }
        hasil.push(Data)
      })
      resolve(hasil)
    }).catch(reject)
    })
    }
//BERITA API
function tribunnews() {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.tribunnews.com/news`).then( tod => {
    const $ = cheerio.load(tod.data)
    
    hasil = []
    
    $("li.p1520.art-list.pos_rel").each(function(c, d) {
      title = $(d).find("div.mr140 > h3 > a.f20.ln24.fbo.txt-oev-2").text().trim()
      thumb = $(d).find("div.fr.mt5.pos_rel > a > img.shou2.bgwhite").attr('src')
      desc = $(d).find("div.grey2.pt5.f13.ln18.txt-oev-3").text().trim()
      date = $(d).find("div.grey.pt5 > time.foot.timeago").text().trim()
      link = $(d).find("div.fr.mt5.pos_rel > a").attr('href')
      const Data = {
        author: author,
        title: title,
        thumb: thumb,
        desc: desc,
        date: date,
        link: link
      }
      hasil.push(Data)
    })
    resolve(hasil)
  }).catch(reject)
  })
}


module.exports.Palingmurah = palingmurah
module.exports.Moddroid = moddroid
module.exports.Apkmody = apkmody
module.exports.Happymod = happymod
module.exports.Wpsearch = wpsearch
module.exports.Muihalal = muihalal
module.exports.Mcpedl = mcpedl
module.exports.Servermc = servermc
module.exports.Pstore = pstore
module.exports.Jalantikus = jalantikus
module.exports.Sfilesearch = sfilesearch
module.exports.Turnbackhoax = turnbackhoax
module.exports.Igfoto = igfoto
module.exports.Igvideo = igvideo
module.exports.Igtv = igtv
module.exports.Tribunnews = tribunnews
module.exports.Igstory = igstory
module.exports.Ttdownloader = ttdownloader
module.exports.Igdl = igdl
module.exports.Downloader = downloader
module.exports.Anime = anime
module.exports.Manga = manga
module.exports.Character = character
module.exports.JadwalBola = jadwalbola
module.exports.JadwalTv = jadwaltv
module.exports.JadwalSholat = jadwalsholat
module.exports.Pinterest = pinterest
module.exports.Film = film
module.exports.Wattpad = wattpad
module.exports.WattpadUser = wattpaduser
module.exports.Webtoons = webtoons
module.exports.Mangatoons = mangatoons
module.exports.Drakor = drakor
module.exports.Telesticker = telesticker
module.exports.StickerSearch = stickersearch
module.exports.ListSurah = listsurah
module.exports.Surah = surah
module.exports.TafsirSurah = tafsirsurah
module.exports.KompasNews = kompasnews
module.exports.INews = inews
