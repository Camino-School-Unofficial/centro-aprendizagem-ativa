// 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;

    var divTempo = document.getElementById('tempo');

    function onYouTubeIframeAPIReady() {
        console.log('frame ready');

      player = new YT.Player('AA_be', {
        height: '390',
        width: '640',
        videoId: '0zv3qWjy7P4', //M7lc1UVf-VE //OjwpBjHE9xg
        playerVars: {
          'autoplay': 1,
          'controls': 0,
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

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      console.log('onPlayerReady', event);
      
      setTimeout(() => {
          event.target.playVideo();
      }, 500);
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    var tmr = null;
    function onPlayerStateChange(event) {
        console.log('onPlayerStateChange', event);

        if (event.data == YT.PlayerState.CUED) {
            console.log('trocando video');
            event.target.playVideo();
        }

        if (event.data == YT.PlayerState.ENDED) {
            console.log('ended');

            player.seekTo(10);
             player.loadVideoById({'videoId': 'OjwpBjHE9xg',
              'startSeconds': 10,
              'endSeconds': 15})

        }

        if (event.data == YT.PlayerState.PLAYING) {
            if (tmr) {
              clearInterval(tmr);
              tmr = null
            };

            tmr = setInterval(()=> {
              divTempo.style.display = 'block';
              divTempo.innerText = player.getCurrentTime();
              if (player.getCurrentTime() > 10 && player.getCurrentTime() < 30) {
                  divTempo.innerText += ' >>> EXIBIR DIFERENTE <<<';
              
              }
              if (player.isMuted()) {
                  divTempo.innerText += ' >>> MUTADO! <<<';
              }
            }, 500);
        }

        if (event.data != YT.PlayerState.PLAYING) {
          divTempo.style.display = 'none';
        }

      if (event.data == YT.PlayerState.PLAYING && !done) {
      //   setTimeout(stopVideo, 6000);
      //   done = true;
      }
    }
    function stopVideo() {
      // player.stopVideo();
    }