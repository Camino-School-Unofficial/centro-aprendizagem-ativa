//This function creates an <iframe> (and YouTube player)
    let playerCE_01, playerCS_01, playerCSM_01, playerEUM_01;
    
    function onYouTubeIframeAPIReady() {
        console.log('frame ready');

      playerCE_01 = new YT.Player('CE_01', {
        height: '1080',
        width: '1920',
        videoId: 'zB8JLXp7xrw',
        playerVars: {
          'autoplay': 0,
          'controls': 1,
          'disablekb': 1,
          'loop': 1,
          'modestbranding': 1,
          'rel': 0,
          'autohide': 1,
          'showinfo': 0,
          'egm': 1,
          'playsinline': 0,
          'enablejsapi': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
      playerCSM_01 = new YT.Player('CSM_01', {
        height: '1080',
        width: '1920',
        videoId: 'BEEvZUUG0rs',
        playerVars: {
          'autoplay': 0,
          'controls': 1,
          'disablekb': 1,
          'loop': 1,
          'modestbranding': 1,
          'rel': 0,
          'autohide': 1,
          'showinfo': 0,
          'egm': 1,
          'playsinline': 0,
          'enablejsapi': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
      playerEUM_01 = new YT.Player('EUM_01', {
        height: '1080',
        width: '1920',
        videoId: '11VfEuO7d3I',
        playerVars: {
          'autoplay': 0,
          'controls': 1,
          'disablekb': 1,
          'loop': 1,
          'modestbranding': 1,
          'rel': 0,
          'autohide': 1,
          'showinfo': 0,
          'egm': 1,
          'playsinline': 0,
          'enablejsapi': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
      playerEUM_02 = new YT.Player('EUM_02', {
        height: '1080',
        width: '1920',
        videoId: 'DMb380w7Bkw',
        playerVars: {
          'autoplay': 0,
          'controls': 1,
          'disablekb': 1,
          'loop': 1,
          'modestbranding': 1,
          'rel': 0,
          'autohide': 1,
          'showinfo': 0,
          'egm': 1,
          'playsinline': 0,
          'enablejsapi': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
      playerCS_01 = new YT.Player('CS_01', {
        height: '1080',
        width: '1920',
        videoId: '2fjI1LlhqCc',
        playerVars: {
          'autoplay': 0,
          'controls': 1,
          'disablekb': 1,
          'loop': 1,
          'modestbranding': 1,
          'rel': 0,
          'autohide': 1,
          'showinfo': 0,
          'egm': 1,
          'playsinline': 0,
          'enablejsapi': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
      
    }


    // API will call this function when the video player is ready.
    function onPlayerReady(event) {
      console.log('onPlayerReady', event);
      
      // setTimeout(() => {
      //     event.target.playVideo();
      // }, 500);
    }

    //    The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    let done = false;
    let tmr = null;
    function onPlayerStateChange(event) {
        console.log('onPlayerStateChange', event);

        switch(event.data) {
          case YT.PlayerState.CUED:
            console.log('trocando video');
            event.target.playVideo();
            break;

          case YT.PlayerState.ENDED:
            if (tmr) {
              clearInterval(tmr);
              tmr = null
            };

            console.log('ended');
            textoAA_be.style.display = 'block';
            textoAA_be.innerText = 'FIM';
            break;

          case YT.PlayerState.PLAYING:
            if (tmr) {
              clearInterval(tmr);
              tmr = null
            };

            tmr = setInterval(()=> {
              textoAA_be.style.display = 'block';
            //   textoAA_be.innerText = player.getCurrentTime();
              if (playerAA_be.getCurrentTime() > 29 && playerAA_be.getCurrentTime() < 35) {
                textoAA_be.innerText = '1. Como você aprende?';
              }
              if (playerAA_be.getCurrentTime() > 37 && playerAA_be.getCurrentTime() < 50) {
                textoAA_be.innerText = '2. Como você sabe que aprendeu alguma coisa?';
              }
              if (playerAA_be.getCurrentTime() > 51 && playerAA_be.getCurrentTime() < 60) {
                textoAA_be.innerText = '3. Como você sabe que que outra pessoa aprendeu alguma coisa? Como você sabe que que outra pessoa aprendeu alguma coisa?';
              }
              if (playerAA_be.getCurrentTime() > 62) {
                textoAA_be.innerText = '';
              }
            }, 500);
            break;
            
          default:
            textoAA_be.style.display = 'none';
            if (tmr) {
              clearInterval(tmr);
              tmr = null
            };

        }


      if (event.data == YT.PlayerState.PLAYING && !done) {
      //   setTimeout(stopVideo, 6000);
      //   done = true;
      }
    }
    function stopVideo() {
      // playerAA_be.stopVideo();
    }