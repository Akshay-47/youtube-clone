import axios from 'axios';

const KEY = 'AIzaSyDaUppb8tQW3Aw2Jcg0HMT8ztgmRFPrl8E';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})