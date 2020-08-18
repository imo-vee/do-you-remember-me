//Entry instructional popup modal
window.onload = function () {
    document.getElementById('entryClose').onclick = function () {
        document.getElementById('entryModal').style.display = "none"
    }
}

window.addEventListener('click',function(event) {
    
    var entryModal = document.getElementById('entryModal');
    var modalArray = Array.from(modal)
    
    if (event.target === entryModal) {
      entryModal.style.display = "none";
    }
    else if (modalArray.indexOf(event.target) > -1) {
      var index = modalArray.indexOf(event.target)
      modal[index].style.display = "none";
    }
  })

//light/dark theme switch
var themeSwitch = document.querySelector("button");

document.querySelector("button").addEventListener("click", toggleText);
   function toggleText() {
      if (themeSwitch.textContent === "Turn the lights off") {
         themeSwitch.textContent = "Turn the lights on";
      } else {
         themeSwitch.textContent = "Turn the lights off";
      }
   }

themeSwitch.addEventListener('click', function(){
    document.querySelector("body").classList.toggle("light")
})

//video playlist
var video = document.querySelector('video')
video.volume = 0.4
var videoList = ["videos/vid1.mp4", "videos/vid2.mp4", "videos/vid3.mp4", "videos/vid4.mp4", "videos/vid5.mp4", "videos/vid6.mp4", "videos/vid7.mp4", "videos/vid8.mp4", "videos/vid9.mp4", "videos/vid10.mp4", "videos/vid11.mp4", "videos/vid12.mp4", "videos/vid13.mp4"]

var count = 0
video.addEventListener('click', function() {
    document.getElementById("poemBox").style.display = "block"
    if (count > videoList.length - 1) {
        count = 0
    }
    video.src = videoList[count]
    video.play()
    count++
})


//poetry generator
var poemLineOne = ["I’ve lost the number again.", "It was the day the world slowed down,", "This is how it ends:", "We could lift our voices above the eaves,", "I keep having the same dream.", "It's still there,", "Like the whisper of our secret brook,", "Before this, we watched the television in our pyjamas.", "“What does it mean to you?”", "Left, right, left, left, right, left.", "We sent a letter to a famous singer.", "An ideal rather than a reality,", "A beat out of time, we move together.", "Three fingers, then two, then one,", "I took you to a secret place."]

var poemLineTwo = ["As if it were something recoverable,", "and in doing so tore itself from itself.", "A tentative dance of fumbled steps,", "swallowing our hearts, fists gnawing beneath our ribs.", "Our tunnels fill to bursting with tar,", "we whisper over the thrum of held hearts.", "the chitter of windows and hum of concrete", "Now, each scene was a walk, or a trail, or a fall,", "I remember you asking, while I thumbed the painting.", "A faltering rain dance,","Eyes closed, one arm by our sides, the other linking us together,", "She never wrote back, but we knew she’d read it", "made from bark and string and wax.", "Trace a map that becomes a single course.", "We folded into each other,"]

var poemLineThree = ["in the small effort of stepping through the front door.", "In one deep breath, we settled down to watch.", "as the current catches us off-guard.", "Instead, we rest our feet in the water and wait.", "ageing trains unable to spit their stale air.", "It’s still there.", "found its empty audience in the bare streets.", "into a place we’d feel naked and unprepared.", "I couldn’t think of anything, but the slowness with which hornbills flock.", "we found our way gently through the city.", "The next time we saw her on television, wearing that iris broach.", "We placed it in a paper box and watched it disappear downstream.", "Our hands outstretched like sunflowers.", "Like a melody caught on the wind and remembered.", "and we became small, like seeds."]

video.addEventListener("click", function() {
    var firstLine = findRandomElement(poemLineOne)
    generator1.textContent = firstLine
})

video.addEventListener("click", function() {
    var secondLine = findRandomElement(poemLineTwo)
    generator2.textContent = secondLine
})


video.addEventListener("click", function() {
    var thirdLine = findRandomElement(poemLineThree)
    generator3.textContent = thirdLine
})

function findRandomElement(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

//modal nav boxes
var modal = document.getElementsByClassName('modal')
var btn = document.getElementsByClassName("modalBtn")
var closeModal = document.getElementsByClassName("close")


btn[0].addEventListener('click',function() {
    modal[0].style.display = "block"
})

btn[1].addEventListener('click',function() {
    modal[1].style.display = "block"
})

btn[2].addEventListener('click',function() {
    modal[2].style.display = "block"
})


closeModal[0].addEventListener('click',function() {
    modal[0].style.display = "none"
})

closeModal[1].addEventListener('click',function() {
    modal[1].style.display = "none"
})

closeModal[2].addEventListener('click',function () {
    modal[2].style.display = "none"
})