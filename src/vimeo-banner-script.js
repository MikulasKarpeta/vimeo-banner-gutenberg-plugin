jQuery(document).ready(function ($) {
  "use strict";

  // const vimeoDiv = document.getElementById("vimeo-banner");
  const vimeoDivs = document.getElementsByClassName("vimeo-banner");
  const vimeoDivArray = [...vimeoDivs]

  if (vimeoDivs != null) {
    vimeoDivArray.forEach(vimeoDiv => {
      const vimeoElement = vimeoDiv.parentNode.parentNode
      function changeHeight() {
        const height = vimeoElement.dataset.height;
        const heightMobile = vimeoElement.dataset.heightmobile;
        const heightTablet = vimeoElement.dataset.heighttablet;
        const heightDesktop = vimeoElement.dataset.heightdesktop;
        const videoRatio = vimeoElement.dataset.ratio;
        const ratio =
          $(".minimalio-vimeo-banner__frame").innerWidth() /
          $(".minimalio-vimeo-banner__frame").innerHeight();

        if (height == "custom") {
          if (window.innerWidth > 992) {
            vimeoElement.children[0].style.height = heightDesktop + "vh";
          } else if (window.innerWidth < 992 && window.innerWidth > 767) {
            vimeoElement.children[0].style.height = heightTablet + "vh";
          } else {
            vimeoElement.children[0].style.height = heightMobile + "vh";
          }
        }

        if (videoRatio === "16-9") {
          if (ratio > 1.77) {
            vimeoElement.children[0].dataset.orientation = "horizontal";
          } else {
            vimeoElement.children[0].dataset.orientation = "vertical";
          }
        } else if (videoRatio === "4-3") {
          if (ratio > 1.33) {
            vimeoElement.children[0].dataset.orientation = "horizontal";
          } else {
            vimeoElement.children[0].dataset.orientation = "vertical";
          }
        } else {
          if (ratio > 2.39) {
            vimeoElement.children[0].dataset.orientation = "horizontal";
          } else {
            vimeoElement.children[0].dataset.orientation = "vertical";
          }
        }
      }

      window.onresize = function () {
        changeHeight();
      };
      changeHeight();
      setTimeout(changeHeight(), 100);

      function player() {
        const vimeoId = vimeoDiv.dataset.vimeo;

        const options = {
          id: vimeoId,
          loop: true,
          autoplay: true,
          controls: false,
          muted: true,
          title: false,
          portrait: false,
          transparent: true,
        };

        const player = new Vimeo.Player(vimeoDiv, options);

        // controls

        const controlsWrapper = vimeoElement.getElementsByClassName(
          "vimeo-background-controls"
        );

        const controlPlay = document.createElement("button");
        controlPlay.className = "play-toggle";
        controlPlay.style.background = controlsWrapper[0].dataset.color;
        const controlMute = document.createElement("button");
        controlMute.className = "mute-toggle";
        controlMute.style.background = controlsWrapper[0].dataset.color;

        controlsWrapper[0].appendChild(controlPlay);
        controlsWrapper[0].appendChild(controlMute);

        controlPlay.addEventListener("click", function () {
          player.pause();
        });

        player
          .getVolume()
          .then(function (volume) {
            let currentVolume = "0";
            controlMute.addEventListener("click", function () {
              if (currentVolume === "0") {
                player.setVolume(1);
                currentVolume = "1";
                controlMute.classList.toggle("muted");
              } else if (currentVolume === "1") {
                player.setVolume(0);
                currentVolume = "0";
                controlMute.classList.toggle("muted");
              }
            });
          })
          .catch(function (error) {
            // an error occurred
          });

        let currentState = "1";
        controlPlay.addEventListener("click", function () {
          if (currentState === "1") {
            player.pause();
            currentState = "0";
            controlPlay.classList.toggle("paused");
          } else if (currentState === "0") {
            player.play();
            currentState = "1";
            controlPlay.classList.toggle("paused");
          }
        });
      }
      player();
    })
    }

});
