const hostName = process.env.VUE_APP_FLAG == 'development' ? 'http://106.14.222.120' : '';
const API = {
    getMusicList: hostName + '/music.php',
    cutSongEnd: [
        'mp3', 'wav', 'flac',
    ],
}
export default API;