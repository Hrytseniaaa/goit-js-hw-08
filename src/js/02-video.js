import Player from '@vimeo/player';
// var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

const getUpdateTime = (timeupdate) => {
    const currentTimeEl = timeupdate.seconds;

         localStorage.setItem('videoplayer-current-time', JSON.stringify( {currentTimeEl} ));

   console.log(currentTimeEl);
};

// const getThrottleUpdateTime = throttle(getUpdateTime, 1000)
player.on('timeupdate', getUpdateTime);

const savedTime = localStorage.getItem('videoplayer-current-time')
const parsedTime = JSON.parse(savedTime);


player.setCurrentTime(parsedTime.currentTimeEl).then(function (seconds) {
    
});


