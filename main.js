prediction_1 = " ";
prediction_2 = " ";
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
     Webcam.snap(function (data_uri) 
     { document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
     } 
     )

     }

console.log('ml5 version' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FeGxc_zy7/model.json',modelLoaded);


function modelLoaded(){
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
 classifier.classify(img, gotResult);   
}

function gotResult(error, results) {


       console.log(results);
       document.getElementById("result_gesture_name").innerHTML = results[0].label; 
       document.getElementById("result_gesture_name2").innerHTML = results[1].label; 
       prediction_1 = results[0].label;
       prediction_2 = results[1].label;  
    
    
       if(results[0].label == "Good")
       {
        document.getElementById("update_gesture").innerHTML = "&#128078";
       }
       if(results[0].label == "Bad")
       {
        document.getElementById("update_gesture").innerHTML = "&#128077;";
       }
       if(results[0].label == "Perfect")
       {
        document.getElementById("update_gesture").innerHTML = "&#128076;";
       }

       if(results[1].label == "Good")
       {
        document.getElementById("update_gesture2").innerHTML = "&#128078;";
       }
       if(results[1].label == "Bad")
       {
        document.getElementById("update_gesture2").innerHTML = "&#128077;";
       }
       if(results[1].label == "Perfect")
       {
        document.getElementById("update_gesture2").innerHTML = "&#128076;";
       }   
}

