import Player from '@vimeo/player';
console.log(Player);

    const iframe = document.querySelector('#vimeo-player');
const iframePlayer = new Player(iframe);
    console.log(iframePlayer);
    

iframePlayer.on('play', onTimeUpdate)
    
function onTimeUpdate() {
    seconds: 3.034
}





//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });
//     player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });