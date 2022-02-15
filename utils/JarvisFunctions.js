// START ARTYOM
// Esta funcion inicia artyom en el reconocimiento discontinuo (para conexiones http)
function startOneCommandArtyom() {
  artyom.fatality(); // Detener cualquier instancia previa

  setTimeout(function () { // Esperar 250ms para inicializar
    artyom.initialize({
      lang: "en-GB", // Más lenguajes son soportados, lee la documentación
      continuous: false, // Reconoce 1 solo comando y basta de escuchar
      listen: true, // Iniciar !
      debug: true, // Muestra un informe en la consola
      speed: 1 // Habla normalmente
    }).then(function () {
      console.log("Ready to work !");
    });
  }, 250);
}

function startArtyom(language, mode, recognizeType = true) {
  if (!language)
    language = Jarvis.getLanguage();

  let _startArtyom = function () {
    Jarvis.initialize({
      lang: language, // Start artyom with provided language
      continuous: recognizeType ? true : false, // Continuous mode enabled
      listen: true, // Start recognizing
      debug: true, // Show everything in the console
      speed: 5, // talk normally
      volume: 1,
      soundex: true, // Use the soundex algorithm to understand different words
      mode: mode, // Opciones: quick, normal, slow
      // name: "jarvis"
      // obeyKeyword: "start again",
      // executionKeyword: "now" // say "now" at the end of a command to execute it immediately
    });
  }

  console.log("Artyom is listening to your commands");

  // stop artyom if stills active
  Jarvis.fatality();
  setTimeout(_startArtyom, 250);
}

function configVideos(arrVideoElementsIds =
  [
    "reposoTrack",
    "saludoTrack",
    "preguntaTrack",
    "respuestaTrack",
    "cierreTrack",
    "galeriasTrack",
    "galeriasChicoTrack",
    "tellmoreTrack",
    "tellmoreChicoTrack",
    "openquestionTrack",
    "openquestionChicoTrack",
  ]) {

  arrVideoElementsIds.forEach(video => {
    let videoElement = document.getElementById(video);
    videoElement.style.width = screen.width;
    videoElement.style.height = screen.height;

    if (video != 'reposoTrack') {
      document.getElementById(video).addEventListener('ended', () => {
        document.getElementById('talkBtnBox').classList.remove('d-none')
        document.getElementById(video).style.display = 'none';
        document.getElementById('reposoTrack').style.display = 'inherit';
        document.getElementById('reposoTrack').play();
      });

      document.getElementById(video).addEventListener('play', () => {
        document.getElementById('reposoTrack').style.display = 'none';
        // document.querySelectorAll('button').forEach(button => {
        //   if (button.id != 'btnReset')
        //     button.disabled = true
        // })
      });
    }

    document.getElementById(video).addEventListener('ended', () => {
      document.getElementById('talkBtnBox').classList.remove('d-none')
      // document.querySelectorAll('button').forEach(button => {
      //   if (button.id != 'btnReset')
      //     button.disabled = false
      // })
    })
  });
}

async function playVideo(videoId) {
  // Hide talk button
  document.getElementById('talkBtnBox').classList.add('d-none')

  document.getElementById(videoId).style.display = 'inherit';
  await document.getElementById(videoId).play();
}

function identifySection(arrSecti, commandIndex) {
  let lastIndex = 0,
    defValue = 0;

  arrSecti.forEach((elem, index) => {

    if (commandIndex >= lastIndex && commandIndex < elem) {
      lastIndex = elem;
      defValue = index;
      return;
    }

    lastIndex = elem;
  })

  console.log(defValue, 'defValue')

  return defValue
}

function greeting() {

  playVideo('saludoTrack');

  timeouts.push(
    setTimeout(() => {
      document.getElementById('btnGallery').classList.add('blueHover')

      timeouts.push(
        setTimeout(() => {
          document.getElementById('btnGallery').classList.remove('blueHover')

          timeouts.push(
            setTimeout(() => {
              document.getElementById('btnPlaces').classList.add('blueHover')

              timeouts.push(
                setTimeout(() => {
                  document.getElementById('btnPlaces').classList.remove('blueHover')

                  timeouts.push(
                    setTimeout(() => {
                      document.getElementById('btnHistory').classList.add('blueHover')

                      timeouts.push(
                        setTimeout(() => {
                          document.getElementById('btnHistory').classList.remove('blueHover')

                          timeouts.push(
                            setTimeout(() => {
                              document.getElementById('btnNew').classList.add('blueHover')

                              timeouts.push(
                                setTimeout(() => {
                                  document.getElementById('btnNew').classList.remove('blueHover')
                                }, 1400)
                              )
                            }, 900)
                          )
                        }, 1400)
                      )
                    }, 1100)
                  )
                }, 1400)
              )
            }, 1500)
          )
        }, 1800)
      )
    }, 14650)
  )

  document.getElementById("buttonsPartOne").classList.remove('d-none')
  document.getElementById("buttonsPartBox").classList.remove('d-none')
  document.getElementById("YesOrNoBox").classList.add('d-none')
}

function clearTimeOuts(arrTimeouts) {
  console.log(arrTimeouts);
  for (var i = 0; i < arrTimeouts.length; i++) {
    console.log(arrTimeouts[i]);
    clearTimeout(arrTimeouts[i]);
  }
}