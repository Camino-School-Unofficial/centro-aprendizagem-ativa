//This function creates an <iframe> (and YouTube player)
    let playerAE_01, playerAE_02, playerAE_03, playerAE_04, playerAE_bs;
    let playerROA_01, playerROA_02, playerROA_03, playerROA_04, playerROA_bs;
    let playerEA_01, playerEA_02, playerEA_03, playerEA_04, playerEA_bs;
    
    function onYouTubeIframeAPIReady() {
        console.log('frame ready');

      playerAE_01 = new YT.Player('AE_01', {
        height: '1080',
        width: '1920',
        videoId: 'iQ97vVRFLao',
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
      playerAE_02 = new YT.Player('AE_02', {
        height: '1080',
        width: '1920',
        videoId: 'D8iCC570dPY',
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
      playerAE_03 = new YT.Player('AE_03', {
        height: '1080',
        width: '1920',
        videoId: 'xMlzNgSlV3E',
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
      playerAE_04 = new YT.Player('AE_04', {
        height: '1080',
        width: '1920',
        videoId: 'dap3qR0QrIY',
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
      playerAE_bs = new YT.Player('AE_bs', {
        height: '1080',
        width: '1920',
        videoId: '0ea2dmoGu0I',
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

      playerROA_01 = new YT.Player('ROA_01', {
        height: '1080',
        width: '1920',
        videoId: 'Nsw1fLLERkA',
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
      playerROA_02 = new YT.Player('ROA_02', {
        height: '1080',
        width: '1920',
        videoId: 'tZTQM5FidC4',
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
      playerROA_03 = new YT.Player('ROA_03', {
        height: '1080',
        width: '1920',
        videoId: 'tbMZG4sidM0',
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
      playerROA_04 = new YT.Player('ROA_04', {
        height: '1080',
        width: '1920',
        videoId: 'RpvyRR_u6zM',
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
      playerROA_bs = new YT.Player('ROA_bs', {
        height: '1080',
        width: '1920',
        videoId: 'ksqvrhWQr3A',
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

      playerEA_01 = new YT.Player('EA_01', {
        height: '1080',
        width: '1920',
        videoId: 'aKUPTuoJZX8',
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
      playerEA_02 = new YT.Player('EA_02', {
        height: '1080',
        width: '1920',
        videoId: 'oskCVTsi8sM',
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
      playerEA_03 = new YT.Player('EA_03', {
        height: '1080',
        width: '1920',
        videoId: '-h3E06cP8UA',
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
      playerEA_04 = new YT.Player('EA_04', {
        height: '1080',
        width: '1920',
        videoId: 'zlCGCCr3QOM',
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
      playerEA_bs = new YT.Player('EA_bs', {
        height: '1080',
        width: '1920',
        videoId: 'Q74pDzIuNY4',
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