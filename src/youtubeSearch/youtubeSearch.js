import React from "react";
import './youtubeSearch.scss';
import axios from "axios";
import { useState, useEffect } from "react";
import moment from 'moment';
const YoutubeSearch = () => {
    const [videos, setVideos] = useState([]);
    const [query, setQuery] = useState("");
    const handleSearchYoutube = async () => {
        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '20',
                'key': 'AIzaSyB2AK5V_RbfNX-kdn_Gn4m9UelNjndwaOA',
                type: 'video',
                'q': query
            }
        })
        if (res && res.data && res.data.items) {
            let raw = res.data.items;
            let result = [];
            if(raw && raw.length > 0) {
                raw.map(item => {
                    let object = {};
                    object.id = item.id.videoId;
                    object.title = item.snippet.title;
                    object.description = item.snippet.description;
                    object.createdAt = item.snippet.publishedAt;
                    object.author = item.snippet.channelTitle;
                    result.push(object);
                })
            }
            setVideos(result);
            console.log(result);
        }
    }
    return (
        <div className="yt-search">
            <div className="yt-search__input">
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text" />
                <button
                    onClick={handleSearchYoutube}
                    type="button" className="btn">Search</button>
            </div>
            {
                videos && videos.length > 0 &&
                videos.map(
                    (video) => (
                        <div className="yt-result" key = {video.id}>
                            <div className="left">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            </div>
                            <div className="right">
                                <div className="title">
                                   {video.title}
                                </div>
                                <div className="createAt">
                                    {moment(video.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                                </div>
                                <div className="author">
                                    {video.channelTitle}
                                </div>
                                <div className="description">
                                    {video.description}
                                </div>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
}

export default YoutubeSearch;


// {
//     "kind": "youtube#searchListResponse",
//     "etag": "wajdsTr1-_3iem9uDJnognpMfG0",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 1000000,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "t3pGpvsOfJFZ49Bd_sxCardbrw4",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "WPdWvnAAurg"
//         },
//         "snippet": {
//           "publishedAt": "2021-10-05T09:00:00Z",
//           "channelId": "UCEf_Bc-KVd7onSeifS3py9g",
//           "title": "aespa 에스파 &#39;Savage&#39; MV",
//           "description": "aespa's 1st mini album \"Savage\" is out! Listen and download on your favorite platform: https://smarturl.it/ae_Savage [Tracklist] 01 ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/WPdWvnAAurg/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/WPdWvnAAurg/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/WPdWvnAAurg/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "SMTOWN",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-10-05T09:00:00Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "kofd6PteU8cP08HtGcf8q8epqCo",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "H69tJmsgd9I"
//         },
//         "snippet": {
//           "publishedAt": "2021-12-20T09:00:08Z",
//           "channelId": "UCEf_Bc-KVd7onSeifS3py9g",
//           "title": "[STATION] aespa 에스파 &#39;Dreams Come True&#39; MV",
//           "description": "aespa's new single \"Dreams Come True\" is out! Listen and download on your favorite platform: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/H69tJmsgd9I/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/H69tJmsgd9I/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/H69tJmsgd9I/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "SMTOWN",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-12-20T09:00:08Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "XoTzXV_wXpP4nWsOb5kZBK8l1Wc",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "4TWR90KJl84"
//         },
//         "snippet": {
//           "publishedAt": "2021-05-17T09:00:02Z",
//           "channelId": "UCEf_Bc-KVd7onSeifS3py9g",
//           "title": "aespa 에스파 &#39;Next Level&#39; MV",
//           "description": "aespa's new single \"Next Level\" is out! Listen and download on your favorite platform: https://smarturl.it/aespa_NextLevel ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/4TWR90KJl84/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/4TWR90KJl84/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/4TWR90KJl84/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "SMTOWN",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-05-17T09:00:02Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "Hj3T3m6ShRo2etDGWZy2URwjLaE",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "ZeerrnuLi5E"
//         },
//         "snippet": {
//           "publishedAt": "2020-11-17T09:00:22Z",
//           "channelId": "UCEf_Bc-KVd7onSeifS3py9g",
//           "title": "aespa 에스파 &#39;Black Mamba&#39; MV",
//           "description": "Listen and download aespa's debut single \"Black Mamba\": https://smarturl.it/aespa_BlackMamba The Debut Stage ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/ZeerrnuLi5E/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/ZeerrnuLi5E/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/ZeerrnuLi5E/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "SMTOWN",
//           "liveBroadcastContent": "none",
//           "publishTime": "2020-11-17T09:00:22Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "AHpNW5jMJlLjKmWB-trtO8RM0hI",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "HoTRKwssuYY"
//         },
//         "snippet": {
//           "publishedAt": "2021-12-20T10:12:57Z",
//           "channelId": "UCK8S6QMrTk1G8TYQwIyDo-w",
//           "title": "A E S P A (에스파) PLAYLIST 2021 UPDATED (ALL SONGS) | 에스파 노래 모음",
//           "description": "",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/HoTRKwssuYY/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/HoTRKwssuYY/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/HoTRKwssuYY/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "LQ KPOP",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-12-20T10:12:57Z"
//         }
//       }
//     ]
//   }
