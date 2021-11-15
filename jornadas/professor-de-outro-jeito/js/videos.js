//This function creates an <iframe> (and YouTube player)
    let playerAA_be, playerAA_02, playerAA_03, playerAA_04, playerAA_05, playerAA_bs;
    let playerCA_be, playerCA_ob, playerCA_02, playerCA_03, playerCA_04, playerCA_05, playerCA_06, playerCA_bs;
    let playerSE_be, playerSE_ob, playerSE_01, playerSE_02, playerSE_03, playerSE_04, playerSE_05, playerSE_bs;
    
    let textoAA_be = document.getElementById('texto-AA_be');

    function onYouTubeIframeAPIReady() {
        console.log('frame ready');

      playerAA_be = new YT.Player('AA_be', {
        height: '1080',
        width: '1920',
        videoId: '0zv3qWjy7P4',
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
      playerAA_02 = new YT.Player('AA_02', {
        height: '1080',
        width: '1920',
        videoId: '-E6O85FxXps',
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
      playerAA_03 = new YT.Player('AA_03', {
        height: '1080',
        width: '1920',
        videoId: 'exJiWLcjk2M',
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
      playerAA_04 = new YT.Player('AA_04', {
        height: '1080',
        width: '1920',
        videoId: 'njgYhLA9rPU',
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
      playerAA_05 = new YT.Player('AA_05', {
        height: '1080',
        width: '1920',
        videoId: 'c7dcX5W3cVQ',
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
      playerAA_bs = new YT.Player('AA_bs', {
        height: '1080',
        width: '1920',
        videoId: 'TGgF3k53KAE',
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

      playerCA_be = new YT.Player('CA_be', {
        height: '1080',
        width: '1920',
        videoId: 'y9_uxScD3Cw',
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
      playerCA_ob = new YT.Player('CA_ob', {
        height: '1080',
        width: '1920',
        videoId: 'mMqp4uez4k8',
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
      playerCA_bs = new YT.Player('CA_bs', {
        height: '1080',
        width: '1920',
        videoId: '-oN2YwsVdoU',
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
      playerCA_02 = new YT.Player('CA_02', {
        height: '1080',
        width: '1920',
        videoId: 'jXgVWv09Fec',
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
      playerCA_03 = new YT.Player('CA_03', {
        height: '1080',
        width: '1920',
        videoId: 'tilhO-M2to8',
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
      playerCA_05 = new YT.Player('CA_05', {
        height: '1080',
        width: '1920',
        videoId: 'XhrpFjWy-AA',
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
      playerCA_06 = new YT.Player('CA_06', {
        height: '1080',
        width: '1920',
        videoId: '456yhyTbHrg',
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

      playerSE_be = new YT.Player('SE_be', {
        height: '1080',
        width: '1920',
        videoId: 'q7TqIa2-bC0',
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
      playerSE_ob = new YT.Player('SE_ob', {
        height: '1080',
        width: '1920',
        videoId: 'Z6HsAdDwkGA',
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
      playerSE_01 = new YT.Player('SE_01', {
        height: '1080',
        width: '1920',
        videoId: 'oMqI1OQhtxc',
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
      playerSE_02 = new YT.Player('SE_02', {
        height: '1080',
        width: '1920',
        videoId: 'uBlcAT29APA',
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
      playerSE_03 = new YT.Player('SE_03', {
        height: '1080',
        width: '1920',
        videoId: '55wL6eA7uLs',
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
      playerSE_04 = new YT.Player('SE_04', {
        height: '1080',
        width: '1920',
        videoId: 'HaCyXr3PntA',
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

      playerES_ob = new YT.Player('ES_ob', {
        height: '1080',
        width: '1920',
        videoId: 'HunQoiiQrlc',
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
      playerES_bs = new YT.Player('ES_bs', {
        height: '1080',
        width: '1920',
        videoId: '0lBCF0wmfQ4',
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
      playerES_01 = new YT.Player('ES_01', {
        height: '1080',
        width: '1920',
        videoId: '4eS41act5S8',
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

      playerPR_be = new YT.Player('PR_be', {
        height: '1080',
        width: '1920',
        videoId: '75ouv5n1CGg',
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
      playerPR_ob = new YT.Player('PR_ob', {
        height: '1080',
        width: '1920',
        videoId: 'Zpj4v5mkzUQ',
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
      playerPR_01 = new YT.Player('PR_01', {
        height: '1080',
        width: '1920',
        videoId: '4eS41act5S8',
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