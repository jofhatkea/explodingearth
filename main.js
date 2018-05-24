
 function loadSVG(path, element, func){
     fetch(path)
        .then(function(response){
            return response.text();
        })
        .then(function(data){
            console.log(document.querySelector(element))
            document.querySelector(element).innerHTML = data;
            //
            func();
        })
 }

 loadSVG("assets/sarah.svg", "div", function(){
     console.log("sarah loaded");
     document.querySelector("#booms").style.display="none";
     
 });