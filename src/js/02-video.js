import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

const getUpdateTime = (timeUpdate) => {
    const currentTime = timeUpdate.seconds;

    localStorage.setItem('videoplayer-current-time', JSON.stringify({ currentTime }));
};

const getTrottleUpdateTime = throttle(getUpdateTime, 1000)
player.on('play', getTrottleUpdateTime);

const savedTime = localStorage.getItem('videoplayer-current-time')
const parsedTime = JSON.parse(savedTime);


player.setCurrentTime(parsedTime.currentTime).then(function (seconds) {
    
});

