import {APP_KEY, APP_ID} from './config.js'

const AV = require('leancloud-storage');

export const SERVER_STATUS = {
  ONLINE: 0,
  OFFLINE: 1,
  ABORTED: 2,
}

const fakeData = [
    {
      "host": "unraidarch",
      "lastUpdate": 1617954550,
      "status": "online",
    },
    {
      "host": "tower",
      "lastUpdate": 1617935392,
      "status": "offline",
    },
    {
      "host": "810openwrt",
      "lastUpdate": 1617935392,
      "status": "offline",
    }
]

export function GetServers() {
  const query = new AV.Query('Server')
  return query.find().then(e => {
    const ret = []
    e.forEach(x => ret.push(x.toFullJSON()))
    return ret
  })
}

export function ApiInit() {
  AV.init({
    appId: APP_ID,
    appKey: APP_KEY,
  });
}
