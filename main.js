
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
     let stuff = document.querySelectorAll(".land path, .water path")
         console.log(stuff)
         document.querySelector("svg").addEventListener("click", ()=>{
            stuff.forEach((el,i)=>{
                console.log(i)
                setTimeout(()=>{
                   el.style.transform = `translate(${Math.random()*100-50}px, ${Math.random()*100-50}px)`;
                }, i*10)
                
            })
         })
     
 });