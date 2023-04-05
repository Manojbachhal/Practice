let tinyurl = {};
let longurl = {};

function encoding(longUrl) {
  let uid = 0;
  for (let i = 0; longUrl.length; i++) {
    uid += longUrl.charCodeAt(i);
  }
  longurl[uid] = longUrl;
  let url = `http://tinyurl.com/${uid}`;
  tinyurl[url] = uid;
  return url;
}
function decoding(sorturl) {
  let uid = tinyurl[sorturl];
  return longurl[uid];
}
