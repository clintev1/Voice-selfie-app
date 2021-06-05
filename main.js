var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition();

function start()
{
  document.getElementById("textbox").innerHTML = "";
  recognition.start();
}

recognition.onresult = function run (event) {

  console.log(event);

  var Content = event.results[0][0].transcript;

  document.getElementById("textbox").innerHTML = Content;
  console.log(content);
      if(Content == "take my selfie")
      {
        console.log("taking selfie ---")
        speak();
      }
      
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis)
    Webcam.attach(camera)

    setTimeout(function()
    {
        take_snapshot();
        save();
    }, 5000);
}

webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera")

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src=" ' + data_uri + ' ">';
    });
}

function setTimeOutButton() {

    setTimeout(
        function(){
          alert("set TimeOut Button");
        }, 3000);
}