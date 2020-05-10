import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Product  from './song-list.json';




@Injectable({ providedIn: 'root' })
export class SongService {
  private songs = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('cart')));
  public share = this.songs.asObservable();
   asyncResult:any[];

  constructor(private http: HttpClient) {}
  private url='assets/song-list.json'

  shareSongs(songs) {
    localStorage.setItem('cart', JSON.stringify(songs));
    let data = JSON.parse(localStorage.getItem('cart'));
    this.songs.next(data);
  }

  getSongs() {
    return SONGS;
  };

  getProduct(): Observable<any> {
    console.time('merkez')
    console.time('merkez1')
    return of(Product).pipe();
 }

  //herhangi bir api fetch etmekte ise yariyor
  async getAsyncData() {
    this.asyncResult = await this.http.get<any>(this.url).toPromise();

    return this.asyncResult
  }
}


const SONGS = [
  {

    "id": "6gr7Wcb6w0DxDhEpzOp6Ct",
    "title": "Lying Together",
    "artist": "FKJ",
    "artistLink": "https:\/\/open.spotify.com\/artist\/2FwDTncULUnmANIh7qKa5z",
    "album": "Lying Together",
    "albumLink": "https:\/\/open.spotify.com\/album\/3e49AjYl1iYeOvAAC3GgKo",
    "isrc": "FR9W11411340",
    "duration": "271",
    "trackLink": "https:\/\/open.spotify.com\/track\/6gr7Wcb6w0DxDhEpzOp6Ct",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/ec8baef0b4e1a9125d146559a8937b6e5c19a555?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/d15cded833fab726ff399237a3f7b6f2d15bb17f",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "0lnfcWRREvnGtXPP2ZDeq7",
    "title": "Que Sera",
    "artist": "Wax Tailor",
    "artistLink": "https:\/\/open.spotify.com\/artist\/3qwxSif06Qwzykdln8ZGfG",
    "album": "Tales of the Forgotten Melodies",
    "albumLink": "https:\/\/open.spotify.com\/album\/1sWIbvCurzF7ZVFYWjLGQO",
    "isrc": "FRP180400180",
    "duration": "164",
    "trackLink": "https:\/\/open.spotify.com\/track\/0lnfcWRREvnGtXPP2ZDeq7",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/65ac0ccb3e6d476abc9bf0300057fa69ebe29ed7?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/c02ccd3c40abbc1385df78f0840ea9ff6a838ecf",
    "addedDate": 1539677057,
    "position": "2",
    "shareUrls": [

    ]
  },
  {

    "id": "29MvtOnoAULKQfEKAPCbja",
    "title": "Southern Man",
    "artist": "Akshin Alizadeh",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6eBIpic8O1RW435sVsjYfy",
    "album": "Street Bangerz Volume 8",
    "albumLink": "https:\/\/open.spotify.com\/album\/5KdKwVnwqDBduNNwOcLcKj",
    "isrc": "USEAX1401587",
    "duration": "237",
    "trackLink": "https:\/\/open.spotify.com\/track\/29MvtOnoAULKQfEKAPCbja",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/4be7f00b91424f619dac504aa3952b8f3b5c631f?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/5e68303576b87feb2ffb3dab6a920efd6781106c",
    "addedDate": 1539677057,
    "position": "5",
    "shareUrls": [

    ]
  },
  {

    "id": "46LwAOzg3UYvxiXyyaFedz",
    "title": "Breathe",
    "artist": "T\u00e9l\u00e9popmusik",
    "artistLink": "https:\/\/open.spotify.com\/artist\/3aKCo8gLJfuPYtr88aWKjF",
    "album": "genetic world",
    "albumLink": "https:\/\/open.spotify.com\/album\/401DhjeJg1yVIfBN2A55JY",
    "isrc": "FR06S0100640",
    "duration": "296",
    "trackLink": "https:\/\/open.spotify.com\/track\/46LwAOzg3UYvxiXyyaFedz",
    "picture": "https:\/\/i.scdn.co\/image\/604adac33fc8434dbd015a33cc96de828109a533",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "2aFCXdFtYxGlNEvgXRbctK",
    "title": "Words Remain",
    "artist": "Moderator",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6fynenqBn7lrlAgVCw5YnB",
    "album": "The World Within",
    "albumLink": "https:\/\/open.spotify.com\/album\/17gN0MsG9WxvEfRNHeKm8F",
    "isrc": "TCACD1599893",
    "duration": "207",
    "trackLink": "https:\/\/open.spotify.com\/track\/2aFCXdFtYxGlNEvgXRbctK",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/6400f9c978f4733591f8fef7ea34e5c0b3c41cb3?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/05979258f7b8cb71ea3b702efdc085da524387db",
    "addedDate": 1539677057,
    "position": "3",
    "shareUrls": [

    ]
  },
  {

    "id": "7eN0Sdh3AE1VKKLSsFwKBh",
    "title": "Want It Back",
    "artist": "Guts, The School Voices NYC, Patrice",
    "artistLink": "https:\/\/open.spotify.com\/artist\/5mMkUZv8uUrlH0SHX89BeS",
    "album": "Hip Hop After All",
    "albumLink": "https:\/\/open.spotify.com\/album\/0w7sDS0APyRmH0HBPtiE8E",
    "isrc": "FR4EO1400039",
    "duration": "212",
    "trackLink": "https:\/\/open.spotify.com\/track\/7eN0Sdh3AE1VKKLSsFwKBh",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/3e09b0d5dd989568f6b35e0c0dc4fc9a64e028b8?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/633dc6aa7c4e85fd6b69a28fecbd1e87d03d0c8a",
    "addedDate": 1539677057,
    "position": "10",
    "shareUrls": [

    ]
  },
  {

    "id": "2UKYMN7VnsQo40n0qCt6Sa",
    "title": "Porcelain",
    "artist": "Moby",
    "artistLink": "https:\/\/open.spotify.com\/artist\/3OsRAKCvk37zwYcnzRf5XF",
    "album": "Play & Play: B Sides",
    "albumLink": "https:\/\/open.spotify.com\/album\/3wRlU7n3LULfjL0e9RtB5Q",
    "isrc": "GBAJH9900036",
    "duration": "241",
    "trackLink": "https:\/\/open.spotify.com\/track\/2UKYMN7VnsQo40n0qCt6Sa",
    "picture": "https:\/\/i.scdn.co\/image\/aeb87b5b989f7d7ba26cd37f45498a42d17f1bc5",
    "addedDate": 1539677057,
    "position": "3",
    "shareUrls": [

    ]
  },
  {

    "id": "5epszgVX6xIOgNdGOQbTmg",
    "title": "Chinese Puzzle",
    "artist": "Kraked Unit",
    "artistLink": "https:\/\/open.spotify.com\/artist\/0opLaXLw5xoaHdpss1Xyny",
    "album": "Casse T\u00eate Chinois (Bande originale du film de C\u00e9dric Klapisch)",
    "albumLink": "https:\/\/open.spotify.com\/album\/0hhIrBVIL2HcUmRrSjVlUS",
    "isrc": "FR6V82060973",
    "duration": "221",
    "trackLink": "https:\/\/open.spotify.com\/track\/5epszgVX6xIOgNdGOQbTmg",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/7c18f3370f52eba30f9cd7631a042121030bfd2d?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/07baf280951e56b2373c5d46954cb4e6a8290812",
    "addedDate": 1539677057,
    "position": "21",
    "shareUrls": [

    ]
  },
  {

    "id": "4ox2odCf0XL0g6692URWwe",
    "title": "But I Do",
    "artist": "Poldoore",
    "artistLink": "https:\/\/open.spotify.com\/artist\/3ph6BKBPsjP7Vhtd1IXhkc",
    "album": "Street Bangerz Volume 6: Playhouse",
    "albumLink": "https:\/\/open.spotify.com\/album\/0BHnSZAC8IfThmwlPcQQMz",
    "isrc": "USEAX1100616",
    "duration": "240",
    "trackLink": "https:\/\/open.spotify.com\/track\/4ox2odCf0XL0g6692URWwe",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/490d00b686f84cbe20580155f54b06ebaf04f01d?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/3d529ab246ae1197ad058ce5afc53e994008935a",
    "addedDate": 1539677057,
    "position": "6",
    "shareUrls": [

    ]
  },
  {

    "id": "7jKp4Yl1p89ByCMOjh2fHR",
    "title": "Peace  to earth",
    "artist": "Roudoudou",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6YTtkGLYyAHNUGD8PVL6SL",
    "album": "listener's digest",
    "albumLink": "https:\/\/open.spotify.com\/album\/6VsiGQn3S3dgape5u4dZhB",
    "isrc": "FRY689701830",
    "duration": "254",
    "trackLink": "https:\/\/open.spotify.com\/track\/7jKp4Yl1p89ByCMOjh2fHR",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/8369b715da3eb7ef9cd4fc851df185a35dc9d52a?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/3223fd2905164c7f84d5e3e34c4904881dbb6bb5",
    "addedDate": 1539677057,
    "position": "7",
    "shareUrls": [

    ]
  },
  {

    "id": "5Nn2Dj7OQsGL6pgQ9iIzPp",
    "title": "Ghostwriter",
    "artist": "RJD2",
    "artistLink": "https:\/\/open.spotify.com\/artist\/1O3ZOjqFLEnbpZexcRjocn",
    "album": "Deadringer: Deluxe",
    "albumLink": "https:\/\/open.spotify.com\/album\/7DmNwRBDJRUEFUlk3oa2Aj",
    "isrc": "USA4T0403506",
    "duration": "318",
    "trackLink": "https:\/\/open.spotify.com\/track\/5Nn2Dj7OQsGL6pgQ9iIzPp",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/d079b16eb0cae5c54fe3f76df0219c72a2f1e173?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/5d81e4e47c27223853b2328186120158a4b48400",
    "addedDate": 1539677057,
    "position": "6",
    "shareUrls": [

    ]
  },
  {

    "id": "5u2chFalnZgdgN8K3YKxI0",
    "title": "Yeah Yeah Yeah",
    "artist": "Kognitif",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6Jv6uJdhLc9R50kSy6RbLz",
    "album": "Soul Food",
    "albumLink": "https:\/\/open.spotify.com\/album\/6grLCGzVBkmrdvYmnLxOwv",
    "isrc": "TCACF1576204",
    "duration": "248",
    "trackLink": "https:\/\/open.spotify.com\/track\/5u2chFalnZgdgN8K3YKxI0",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/659d3328a5c469e12b567aa4848560e91d4d5d63?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/e9d2a422e4ca07da3559ff7de9eff447a824ea8c",
    "addedDate": 1539677057,
    "position": "7",
    "shareUrls": [

    ]
  },
  {

    "id": "49BgdeY01jr63KF3cEttCe",
    "title": "Say It",
    "artist": "The Geek x Vrv",
    "artistLink": "https:\/\/open.spotify.com\/artist\/4JhjlqgMbd4RlrT81VoTIF",
    "album": "Say It",
    "albumLink": "https:\/\/open.spotify.com\/album\/1jfsFps55xV3G7VZiGUHU2",
    "isrc": "USA2P1464970",
    "duration": "207",
    "trackLink": "https:\/\/open.spotify.com\/track\/49BgdeY01jr63KF3cEttCe",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/9be6343f86bed0471a22118b262e583ea7991ea4?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/2b7c418c59f0433f24fcfe01d9b013946773393e",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "3IWpnVYCSypdHFTLxk8MVM",
    "title": "Snow Fire",
    "artist": "AllttA, 20syl, Mr. J. Medeiros",
    "artistLink": "https:\/\/open.spotify.com\/artist\/1si6mnxJ6IpTOTW13ECa0o",
    "album": "Snow Fire (fg. I)",
    "albumLink": "https:\/\/open.spotify.com\/album\/6KDcjmCvKEIZXhzNK9v9j3",
    "isrc": "FR9T31700018",
    "duration": "264",
    "trackLink": "https:\/\/open.spotify.com\/track\/3IWpnVYCSypdHFTLxk8MVM",
    "picture": "https:\/\/i.scdn.co\/image\/451efaf0a272f88ba536dfb108bc213aefc6823c",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "3MDkws8QGzLrMrWVAbzoXO",
    "title": "Every Time",
    "artist": "Boogie Belgique",
    "artistLink": "https:\/\/open.spotify.com\/artist\/4TIrC99WSg0tOtBCGDjMRY",
    "album": "Volta",
    "albumLink": "https:\/\/open.spotify.com\/album\/6xFQdyHr6fQrLOmtRHv1Nb",
    "isrc": "USEAX1603095",
    "duration": "242",
    "trackLink": "https:\/\/open.spotify.com\/track\/3MDkws8QGzLrMrWVAbzoXO",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/699b658d2f4c78a94ebb83e2466629a42191f635?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/f51d9fdea8647d635192652237196db803d2619f",
    "addedDate": 1539677057,
    "position": "4",
    "shareUrls": [

    ]
  },
  {

    "id": "2MXF16lswqJGnW57jhkqBR",
    "title": "Dusk to Dawn",
    "artist": "Emancipator",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6HCnsY0Rxi3cg53xreoAIm",
    "album": "Dusk to Dawn",
    "albumLink": "https:\/\/open.spotify.com\/album\/6RTzC0rDbvagTSJLlY7AKl",
    "isrc": "DEQ121318487",
    "duration": "326",
    "trackLink": "https:\/\/open.spotify.com\/track\/2MXF16lswqJGnW57jhkqBR",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/f7c24eb6d525346ae9cd96b9e64332914ac32ed9?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/7ac15e84eb7768e429d982d21f0a3067cebd7c81",
    "addedDate": 1539677057,
    "position": "5",
    "shareUrls": [

    ]
  },
  {

    "id": "2ycxKZ0HvoSPDbMWHvqztk",
    "title": "Memento",
    "artist": "Omega One",
    "artistLink": "https:\/\/open.spotify.com\/artist\/7gIb88l5X9GpnsKANWuiMH",
    "album": "The Lo-Fi Chronicles",
    "albumLink": "https:\/\/open.spotify.com\/album\/04iAjm4THjvMXOshSfRpPA",
    "isrc": "USHKR0911803",
    "duration": "230",
    "trackLink": "https:\/\/open.spotify.com\/track\/2ycxKZ0HvoSPDbMWHvqztk",
    "picture": "https:\/\/i.scdn.co\/image\/ee81c620e0df14bd60c173a4f6266ed2496528c9",
    "addedDate": 1539677057,
    "position": "3",
    "shareUrls": [

    ]
  },
  {

    "id": "1msXkHv84LKikJGKcfdGBu",
    "title": "Sure Thing",
    "artist": "St Germain",
    "artistLink": "https:\/\/open.spotify.com\/artist\/484sZUYmnRXN84zmk3GY1n",
    "album": "Tourist [Remastered] (Remastered Version)",
    "albumLink": "https:\/\/open.spotify.com\/album\/0YqCvOMhp8enM01an9Nntj",
    "isrc": "FR92S1200006",
    "duration": "380",
    "trackLink": "https:\/\/open.spotify.com\/track\/1msXkHv84LKikJGKcfdGBu",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/eabdb466fb37f1bc7b39edf10b9e9e15183730ce?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/5a06b9ffe763216678ae64150ab0556c09ecfddd",
    "addedDate": 1539677057,
    "position": "6",
    "shareUrls": [

    ]
  },
  {

    "id": "56dDYNRFamq1N6AvaZB0bz",
    "title": "Yep (DJ Greem Remix)",
    "artist": "Antiloops",
    "artistLink": "https:\/\/open.spotify.com\/artist\/7xpNzqZV8QdDRSNA53fUAb",
    "album": "Electroshock Remixed",
    "albumLink": "https:\/\/open.spotify.com\/album\/5iDoc5L8QUztg8kxDUINGb",
    "isrc": "FR0U91501653",
    "duration": "240",
    "trackLink": "https:\/\/open.spotify.com\/track\/56dDYNRFamq1N6AvaZB0bz",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/2c7fd7288236d0e40144a1f9f9eee82c162e84d7?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/13945c4f6bcd06baa0e18b79f8b2d0286006d338",
    "addedDate": 1539677057,
    "position": "2",
    "shareUrls": [

    ]
  },
  {

    "id": "24ylIO48nRsdaONlM8l2HF",
    "title": "Time Is the Enemy",
    "artist": "Quantic",
    "artistLink": "https:\/\/open.spotify.com\/artist\/5ZMwoAjeDtLJ0XRwRTgaK8",
    "album": "The 5th Exotic",
    "albumLink": "https:\/\/open.spotify.com\/album\/2tMQ2DeB9RydEFl1gcRkHb",
    "isrc": "GBEUE0100603",
    "duration": "220",
    "trackLink": "https:\/\/open.spotify.com\/track\/24ylIO48nRsdaONlM8l2HF",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/c6ac5228112365ba7badb0bf4b1a406c0a2212db?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/ea4f00ea51ff88905be8bb72a7c27d46b6a6c8b9",
    "addedDate": 1539677057,
    "position": "10",
    "shareUrls": [

    ]
  },
  {

    "id": "3mgRwzfkoOQROm3ksVpypG",
    "title": "Limbo",
    "artist": "GlobulDub",
    "artistLink": "https:\/\/open.spotify.com\/artist\/5gigjnekB1RsPwKKitalWD",
    "album": "Hip Hop Symposium (Full Compilation)",
    "albumLink": "https:\/\/open.spotify.com\/album\/1EOH2XDgfavkFltfZkX2TW",
    "isrc": "FR9W11707810",
    "duration": "216",
    "trackLink": "https:\/\/open.spotify.com\/track\/3mgRwzfkoOQROm3ksVpypG",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/d99e6b974944ce051359f2ce26b2deba044a46aa?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/3d0b913ba111bbec019f5fbae43158a58f998598",
    "addedDate": 1539677057,
    "position": "11",
    "shareUrls": [

    ]
  },
  {

    "id": "2oFIBSwhuifFB3OLA0ft0Q",
    "title": "Soul Below",
    "artist": "Ljones",
    "artistLink": "https:\/\/open.spotify.com\/artist\/0IsYDDLNbwwyLbkl2kzdF3",
    "album": "Soul Below",
    "albumLink": "https:\/\/open.spotify.com\/album\/4XBPVDluRNPX7A7yaC1yYs",
    "isrc": "TCACP1609610",
    "duration": "195",
    "trackLink": "https:\/\/open.spotify.com\/track\/2oFIBSwhuifFB3OLA0ft0Q",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/d11a4ca063cab7cbfbfbd5fa3732e977f4fc9300?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/d091b007afe33e82eaa172208bdf8a786350d432",
    "addedDate": 1539677057,
    "position": "7",
    "shareUrls": [

    ]
  },
  {

    "id": "6DsGpDGIDRv8EFGgW10T1p",
    "title": "Nevergreen",
    "artist": "Emancipator",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6HCnsY0Rxi3cg53xreoAIm",
    "album": "Safe In the Steep Cliffs",
    "albumLink": "https:\/\/open.spotify.com\/album\/1KHKPYKo4h8btHa8u3wjEB",
    "isrc": "US2WU0901522",
    "duration": "216",
    "trackLink": "https:\/\/open.spotify.com\/track\/6DsGpDGIDRv8EFGgW10T1p",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/c46c516a707f341073102b1b34d0431630100e5a?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/e63292164ad48f99a1e64db8d216dbdecfe3efe0",
    "addedDate": 1539677057,
    "position": "7",
    "shareUrls": [

    ]
  },
  {

    "id": "1B5fbRxnB26duk77yCBWvS",
    "title": "Go Back Home",
    "artist": "FKJ",
    "artistLink": "https:\/\/open.spotify.com\/artist\/2FwDTncULUnmANIh7qKa5z",
    "album": "Go Back Home",
    "albumLink": "https:\/\/open.spotify.com\/album\/6wY7lwUMKCKoWgybrYFxGu",
    "isrc": "FRX201643056",
    "duration": "235",
    "trackLink": "https:\/\/open.spotify.com\/track\/1B5fbRxnB26duk77yCBWvS",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/5447c69ddcb7a205da27379f9f22dffa25e9d339?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/63d312a5c45f16a778a373c88244ed0329808b36",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "6jWFsJT5IYVKCJEQ55L29W",
    "title": "All or Nothing",
    "artist": "Guts, Lorine Chia, Tanya Morgan",
    "artistLink": "https:\/\/open.spotify.com\/artist\/5mMkUZv8uUrlH0SHX89BeS",
    "album": "Eternal",
    "albumLink": "https:\/\/open.spotify.com\/album\/59JNcEwaQUyC2xQzBJTHF9",
    "isrc": "FR4EO1600017",
    "duration": "227",
    "trackLink": "https:\/\/open.spotify.com\/track\/6jWFsJT5IYVKCJEQ55L29W",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/b6236c1bd89b546b449e969ddf9dee5662f2631a?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/a7bc4b2cfa1f2b6b0d7530d8f6cda3135b5744d9",
    "addedDate": 1539677057,
    "position": "3",
    "shareUrls": [

    ]
  },
  {

    "id": "6KhjydP6zMxCrAlK4RWfwO",
    "title": "What's Your Place",
    "artist": "Roger Molls",
    "artistLink": "https:\/\/open.spotify.com\/artist\/2e8lWdeklPbzo7zTn6Mka1",
    "album": "Metamorphosis Of Muses",
    "albumLink": "https:\/\/open.spotify.com\/album\/1KLoxgcOfMnZ5GuKxia71n",
    "isrc": "FRP621201440",
    "duration": "162",
    "trackLink": "https:\/\/open.spotify.com\/track\/6KhjydP6zMxCrAlK4RWfwO",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/f9d798e68d4e47fdd319f2c9e37ad227d82c1ff7?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/25beca79b6b6f97c06f70f8ba1f3fabb911ba452",
    "addedDate": 1539677057,
    "position": "2",
    "shareUrls": [

    ]
  },
  {

    "id": "397Fgk4f6ULuDgVkwSNeAH",
    "title": "Woman",
    "artist": "Akshin Alizadeh",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6eBIpic8O1RW435sVsjYfy",
    "album": "But I Do \/ Woman",
    "albumLink": "https:\/\/open.spotify.com\/album\/70s7nzdFcztvr8d7Z53Eln",
    "isrc": "USEAX1703545",
    "duration": "208",
    "trackLink": "https:\/\/open.spotify.com\/track\/397Fgk4f6ULuDgVkwSNeAH",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/1984c270696e146e7f6d2a0962317d6b02ba706b?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/cb893d3e4c8f73f7fc61c834583084285c280bbb",
    "addedDate": 1539677057,
    "position": "2",
    "shareUrls": [

    ]
  },
  {

    "id": "52VzhpS5lmcrULu2Bn8PnX",
    "title": "Brooklyn Streets",
    "artist": "Sixfingerz",
    "artistLink": "https:\/\/open.spotify.com\/artist\/3LAvXwhlQccG7ztT1NgVUO",
    "album": "Street Bangerz Volume 9",
    "albumLink": "https:\/\/open.spotify.com\/album\/4nTV9Gb7VwYMAgKZySE20x",
    "isrc": "USEAX1502085",
    "duration": "148",
    "trackLink": "https:\/\/open.spotify.com\/track\/52VzhpS5lmcrULu2Bn8PnX",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/729193dbe652cf7c9d649d8733606d87f14b8cc9?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/93f4a6565c7601deec9350823e90437af4e43e00",
    "addedDate": 1539677057,
    "position": "2",
    "shareUrls": [

    ]
  },
  {

    "id": "2rLwz4Eihs3PXhx7e4qhcN",
    "title": "Funk for Food",
    "artist": "Moderator",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6fynenqBn7lrlAgVCw5YnB",
    "album": "Funk for Food",
    "albumLink": "https:\/\/open.spotify.com\/album\/1qBIwBv13XdiXfnU07Fsw9",
    "isrc": "FR9W11620518",
    "duration": "115",
    "trackLink": "https:\/\/open.spotify.com\/track\/2rLwz4Eihs3PXhx7e4qhcN",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/81324dfccc9607d2bed14139ffc51faadf88f0ec?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/6d95e27fadb55aa6ba342282c4f44590b3197d77",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "2o2KHNSVo9VNwMTZkKqHMb",
    "title": "Peace of What",
    "artist": "RJD2, Jordan Brown",
    "artistLink": "https:\/\/open.spotify.com\/artist\/1O3ZOjqFLEnbpZexcRjocn",
    "album": "Dame Fortune",
    "albumLink": "https:\/\/open.spotify.com\/album\/298x29sNXaH7yDgXLoKiQX",
    "isrc": "QMBZ91536818",
    "duration": "209",
    "trackLink": "https:\/\/open.spotify.com\/track\/2o2KHNSVo9VNwMTZkKqHMb",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/9d6f322b6c827e0a166f6830fd637af621df0c4b?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/9cfe932132caab69b06e9b3d88315e0af80d832f",
    "addedDate": 1539677057,
    "position": "3",
    "shareUrls": [

    ]
  },
  {

    "id": "6ucSvvgtszol5tNVJtKane",
    "title": "Rainy Sunday",
    "artist": "Henyao",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6cGhntyNrV6p2Dma040Erk",
    "album": "Coffee And Unicorns",
    "albumLink": "https:\/\/open.spotify.com\/album\/3jQLrnV4sWEvcAFm4tdlcZ",
    "isrc": "SE5Q51800757",
    "duration": "148",
    "trackLink": "https:\/\/open.spotify.com\/track\/6ucSvvgtszol5tNVJtKane",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/a1486229e6b6acbbd2fc1d1d5377cd279c947eab?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/2fab129962b3fae473cf237ba896377333f0d3d9",
    "addedDate": 1539677057,
    "position": "2",
    "shareUrls": [

    ]
  },
  {

    "id": "3AuSogI89rld1KqfUpL3Np",
    "title": "Kerala",
    "artist": "Bonobo",
    "artistLink": "https:\/\/open.spotify.com\/artist\/0cmWgDlu9CwTgxPhf403hb",
    "album": "Kerala",
    "albumLink": "https:\/\/open.spotify.com\/album\/23j5anOx7fWQkppFSHibzm",
    "isrc": "GBCFB1604707",
    "duration": "238",
    "trackLink": "https:\/\/open.spotify.com\/track\/3AuSogI89rld1KqfUpL3Np",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/cfbd193dabf0cb61bca45dc997f9d6b395988483?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/6838af338394bb7a63596505d2182b754a0784af",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "4IUgpL0CgSiloUOHzgd6Qe",
    "title": "Start Shootin'",
    "artist": "Little People",
    "artistLink": "https:\/\/open.spotify.com\/artist\/3cbU0WxlZJTFLTfXEUB433",
    "album": "Mickey Mouse Operation",
    "albumLink": "https:\/\/open.spotify.com\/album\/2ULdmAtiIIn5xok5YCVGpk",
    "isrc": "GBCWH0605515",
    "duration": "217",
    "trackLink": "https:\/\/open.spotify.com\/track\/4IUgpL0CgSiloUOHzgd6Qe",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/0cd1ede88966356c93aa85ef9dee84f85ffdfe5b?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/9e6b939c0d6cebeeb0191bbfdff23d38576ff78d",
    "addedDate": 1539677057,
    "position": "13",
    "shareUrls": [

    ]
  },
  {

    "id": "0w4cAGIHjWLypKaMFm6xL2",
    "title": "Tzen",
    "artist": "Gyvus",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6qNRi3Mn9apPNnMSt6Qbvn",
    "album": "T\u00f4zen",
    "albumLink": "https:\/\/open.spotify.com\/album\/5NvRDbnWpvGiUt0JlFtK8j",
    "isrc": "USLZJ1612628",
    "duration": "171",
    "trackLink": "https:\/\/open.spotify.com\/track\/0w4cAGIHjWLypKaMFm6xL2",
    "picture": "https:\/\/i.scdn.co\/image\/dc5d9d1d1163d53eb334cda1b72b07744521ed82",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "3okj5Ww1BYh7k5VsBFXUw3",
    "title": "Fry Day",
    "artist": "Freckle & Pete",
    "artistLink": "https:\/\/open.spotify.com\/artist\/63NEeSfDLOqSJB1detrXx3",
    "album": "Fry Day",
    "albumLink": "https:\/\/open.spotify.com\/album\/4MwwELQPwTdgaoz0YfiJoR",
    "isrc": "SE5IB1600241",
    "duration": "218",
    "trackLink": "https:\/\/open.spotify.com\/track\/3okj5Ww1BYh7k5VsBFXUw3",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/da0eaae1e41690058b01d1d7708a2675bb3898a0?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/0e9065be7d06de3ac713cd36bafc9d6226fbff0e",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "1IksaRdqvnduRQqNRMdZTn",
    "title": "The Hype",
    "artist": "Cookie Jar",
    "artistLink": "https:\/\/open.spotify.com\/artist\/3pMW594atvqTgp3Uj1IpGF",
    "album": "The Hype",
    "albumLink": "https:\/\/open.spotify.com\/album\/2dmelaRBBhf0RoL2iZIz4M",
    "isrc": "SE5IB1700812",
    "duration": "158",
    "trackLink": "https:\/\/open.spotify.com\/track\/1IksaRdqvnduRQqNRMdZTn",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/a4addb0c8c7eaa8e9b2d50335627a298a6abb314?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/da3b2ec44eacaddaa0c5406284a80bc85e23eacb",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "4kebaMUJlFbzPacKwcAGLZ",
    "title": "Cherry Pie Jam",
    "artist": "Hollow Clouds",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6j46UIFeyGBhixGhFvxdrh",
    "album": "Cherry Pie Jam",
    "albumLink": "https:\/\/open.spotify.com\/album\/50T1ZXJe0cQlOxOGpqWCBl",
    "isrc": "SE5IB1600655",
    "duration": "217",
    "trackLink": "https:\/\/open.spotify.com\/track\/4kebaMUJlFbzPacKwcAGLZ",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/4a48b138f7077423ee123f72b14ed27001f3f230?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/7fd7415b94ca6ea704095dfc36333ef868c2807f",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "1w1CtbbwUZCVVOC5fQTJhU",
    "title": "Gold",
    "artist": "Hugo Kant, Astrid Engberg",
    "artistLink": "https:\/\/open.spotify.com\/artist\/2jvKLLBED6JvKWtT8y3kCu",
    "album": "The Point of No Return",
    "albumLink": "https:\/\/open.spotify.com\/album\/2isxNMBkNYPiOjDA5KOCzG",
    "isrc": "FR9W11401493",
    "duration": "274",
    "trackLink": "https:\/\/open.spotify.com\/track\/1w1CtbbwUZCVVOC5fQTJhU",
    "picture": "https:\/\/i.scdn.co\/image\/93758fc4aa17ff1c66c884da4ed44ac9766dde7c",
    "addedDate": 1539677057,
    "position": "5",
    "shareUrls": [

    ]
  },
  {

    "id": "4DicdCZ3vgY8fOzCiuQ657",
    "title": "Just for a Day",
    "artist": "TM Juke",
    "artistLink": "https:\/\/open.spotify.com\/artist\/4awnjjqiUnSBA4ucPVbF8R",
    "album": "Maps from the Wilderness",
    "albumLink": "https:\/\/open.spotify.com\/album\/7sdJYxemYdWUNldKeFJcKI",
    "isrc": "GBEUE0300449",
    "duration": "273",
    "trackLink": "https:\/\/open.spotify.com\/track\/4DicdCZ3vgY8fOzCiuQ657",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/f5652756d118371d1ed9a371c86008d7f984003e?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/7ac5da82681e0be410d15ec5576cfd7790c11691",
    "addedDate": 1539677057,
    "position": "2",
    "shareUrls": [

    ]
  },
  {

    "id": "3ZB4h7rWKKIMC06EzFiuE9",
    "title": "Shoulder Kiss",
    "artist": "Freddie Joachim",
    "artistLink": "https:\/\/open.spotify.com\/artist\/0GgkfnO3Bu2CFn65ZH31TF",
    "album": "Study Guide",
    "albumLink": "https:\/\/open.spotify.com\/album\/46LudqPGBEIX9l8FlVqe9x",
    "isrc": "jpz920901176",
    "duration": "156",
    "trackLink": "https:\/\/open.spotify.com\/track\/3ZB4h7rWKKIMC06EzFiuE9",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/c6751e1ae2b15f69edc2a9a72f03c7361c3eeca5?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/8b7430686ae449157f7fa78ea9692e0e177dc3a5",
    "addedDate": 1539677057,
    "position": "10",
    "shareUrls": [

    ]
  },
  {

    "id": "0pg2VKzTsBdbxPzcOkReY2",
    "title": "A grand love theme",
    "artist": "Kid Loco",
    "artistLink": "https:\/\/open.spotify.com\/artist\/1ViF5mdcW7pEn7md71YjOL",
    "album": "A Grand Love Story",
    "albumLink": "https:\/\/open.spotify.com\/album\/6R1VyRo1cFv2JDC1diCkPS",
    "isrc": "FRQ260900004",
    "duration": "243",
    "trackLink": "https:\/\/open.spotify.com\/track\/0pg2VKzTsBdbxPzcOkReY2",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/580700f40bb922845494b5cc3866ed4558f57fea?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/822dbea1a7c854a548c7f5e8884413b2a676cef2",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "7qzuwMS8wVfmoC8430eilc",
    "title": "La Cienega",
    "artist": "Mad Chronic",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6EZ4ixvQRudMRAcxGGH3Dt",
    "album": "La Cienega",
    "albumLink": "https:\/\/open.spotify.com\/album\/5HBeiFVPMLF3almA7kI6MS",
    "isrc": "SE5IB1600238",
    "duration": "119",
    "trackLink": "https:\/\/open.spotify.com\/track\/7qzuwMS8wVfmoC8430eilc",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/c88fd2603f5bb17f16246ac57c92a3882f754b28?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/bc79e71981c1b0499921f116c9f6641b7c6f2fe5",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "3au9gDDso4imJhWbJAS5Fp",
    "title": "Hainan Paradise",
    "artist": "SINY",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6d1bmKQyB8OJWCOJJPCkVT",
    "album": "Mitsuwa",
    "albumLink": "https:\/\/open.spotify.com\/album\/02OQlC7v4VlNAB8eJK2R4N",
    "isrc": "SE5Q51800272",
    "duration": "126",
    "trackLink": "https:\/\/open.spotify.com\/track\/3au9gDDso4imJhWbJAS5Fp",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/575087908c44eb90a5b49359b3fb7ead126fdbe2?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/896bb57226ccbf625940173437d818522a5cd6fa",
    "addedDate": 1539677057,
    "position": "5",
    "shareUrls": [

    ]
  },
  {

    "id": "54ah8liCv9mF0VLrvisQeI",
    "title": "A Beautiful Eve",
    "artist": "Poldoore",
    "artistLink": "https:\/\/open.spotify.com\/artist\/3ph6BKBPsjP7Vhtd1IXhkc",
    "album": "The Day After",
    "albumLink": "https:\/\/open.spotify.com\/album\/2TB0dVyAIenZAbADN8PWcL",
    "isrc": "USEAX1602926",
    "duration": "258",
    "trackLink": "https:\/\/open.spotify.com\/track\/54ah8liCv9mF0VLrvisQeI",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/f418e3fd4ed213b9489fc07a69cbf6358aaf4826?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/588da42749db882353f69b525d298d8bb9c6fdcf",
    "addedDate": 1539677057,
    "position": "5",
    "shareUrls": [

    ]
  },
  {

    "id": "7iYlacahYFEKx8cpRNC2Tx",
    "title": "The Bulldog",
    "artist": "Lil Skate",
    "artistLink": "https:\/\/open.spotify.com\/artist\/3nrcM9gaRDpXvGYBxuhxl6",
    "album": "The Bulldog",
    "albumLink": "https:\/\/open.spotify.com\/album\/3HIV2UOXcao1UrJKAEgAcb",
    "isrc": "SE5IB1600654",
    "duration": "184",
    "trackLink": "https:\/\/open.spotify.com\/track\/7iYlacahYFEKx8cpRNC2Tx",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/0e3a06b108d60b9dcb92b167dc5537fc02944283?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/0215500f0735f6136b9b72efaf279c5aca42d9a6",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "2PaFzDcgVZIHqN8XvV4azQ",
    "title": "Ekans",
    "artist": "Molife",
    "artistLink": "https:\/\/open.spotify.com\/artist\/5evuJYN1sgxxSQWs9mw1e3",
    "album": "KEEN: Soft Beats Vol. 1",
    "albumLink": "https:\/\/open.spotify.com\/album\/3VgJOpq6wEKsHtn2zb7LKi",
    "isrc": "SE5Q51700372",
    "duration": "140",
    "trackLink": "https:\/\/open.spotify.com\/track\/2PaFzDcgVZIHqN8XvV4azQ",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/ac491923a4f4b4a0dffd50f6e44a60a4220bf9fa?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/b9ec025ff81a4d8875cf6a99e8ce9a09d604268f",
    "addedDate": 1539677057,
    "position": "7",
    "shareUrls": [

    ]
  },
  {

    "id": "2ygAdR5sXq1VpATied1LDw",
    "title": "Urban Stories",
    "artist": "Chill Cole",
    "artistLink": "https:\/\/open.spotify.com\/artist\/1Ns2CQv733eYFITrIHvW6Z",
    "album": "KEEN: Soft Beats Vol. 1",
    "albumLink": "https:\/\/open.spotify.com\/album\/3VgJOpq6wEKsHtn2zb7LKi",
    "isrc": "SE5Q51701078",
    "duration": "302",
    "trackLink": "https:\/\/open.spotify.com\/track\/2ygAdR5sXq1VpATied1LDw",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/4e88ce991399ccc4fe8f6ff00b35d9a1f49c1d5a?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/b9ec025ff81a4d8875cf6a99e8ce9a09d604268f",
    "addedDate": 1539677057,
    "position": "4",
    "shareUrls": [

    ]
  },
  {

    "id": "4twM58pul3XxJofwirAsJd",
    "title": "The Journey - Lost Mix",
    "artist": "Chinese Man",
    "artistLink": "https:\/\/open.spotify.com\/artist\/6vgw0jwJkUnW2NR1rzsQU3",
    "album": "The Journey",
    "albumLink": "https:\/\/open.spotify.com\/album\/3dquQCPiYO3q7zlMl36EuB",
    "isrc": "FRP7S1500230",
    "duration": "196",
    "trackLink": "https:\/\/open.spotify.com\/track\/4twM58pul3XxJofwirAsJd",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/919f24ba614452e114feb096ca13d93fcf3d6008?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/886158abc4df06b5644ebce0b20d7a44c5b4ae71",
    "addedDate": 1539677057,
    "position": "12",
    "shareUrls": [

    ]
  },
  {

    "id": "5KBh3fUwv6xrDFO6wZzmFI",
    "title": "Zimzilla",
    "artist": "Mad Q",
    "artistLink": "https:\/\/open.spotify.com\/artist\/7IxHBmCE0jN2vhoLKQSZR6",
    "album": "Zimzilla",
    "albumLink": "https:\/\/open.spotify.com\/album\/5LVHMBwC8BMucytnEejcTj",
    "isrc": "SE5IB1600239",
    "duration": "209",
    "trackLink": "https:\/\/open.spotify.com\/track\/5KBh3fUwv6xrDFO6wZzmFI",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/6727d94f4ae7144eb6934be71ecb12722b59a031?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/5166e1a7c2b6f64755c1f791f8fa1287b3d4871d",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  },
  {

    "id": "3i0nDmjTjXDsoMIKUFlhDR",
    "title": "Turning Heads",
    "artist": "Boyakaza",
    "artistLink": "https:\/\/open.spotify.com\/artist\/7CwH4lMBbUZGz10FTJodF5",
    "album": "Turning Heads",
    "albumLink": "https:\/\/open.spotify.com\/album\/0KlIEin7WKKRQ0sGHmfFoA",
    "isrc": "SE5IB1600033",
    "duration": "186",
    "trackLink": "https:\/\/open.spotify.com\/track\/3i0nDmjTjXDsoMIKUFlhDR",
    "preview": "https:\/\/p.scdn.co\/mp3-preview\/212f0cb2555400f8f06955f3059b826e8b89ad99?cid=7d6e6a3d46f443159acf4529c6a2dd06",
    "picture": "https:\/\/i.scdn.co\/image\/bb3e64294380c9d72853af2939d14593d001ada1",
    "addedDate": 1539677057,
    "position": "1",
    "shareUrls": [

    ]
  }
]



