import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_STORAGE = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveTime, 1000));
function saveTime(data) {
  localStorage.setItem(KEY_STORAGE, data.seconds);
}

function updateTime() {
  const currentTime = localStorage.getItem(KEY_STORAGE);
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
}
updateTime();
