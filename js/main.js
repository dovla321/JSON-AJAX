var pageCounter = 1;
 // uzimamo id diva iz htmla (gdje ćemo stavljat naše nove paragrafe)
var btn = document.getElementById("btn");  //uzimamo id dugmeta iz htmla

btn.addEventListener("click",function(){
   

   /*var ourRequest = new XMLHttpRequest();

   ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');

   ourRequest.onload = function(){

   var ourData = JSON.parse(ourRequest.responseText); // JSON.parse je funkcija koja prepozna objekat



   renderHTML(ourData); 

   };



    ourRequest.send();*/


    let r = fetch('https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
        .then(response => response.json()).then(data => {
            console.log(data);


            
            

            let animalContainer = document.getElementById("animal-info");

            var htmlString = "";

            for (i=0; i < data.length; i++){

              htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

              for(ii = 0; ii < data[i].foods.likes.length; ii++){

                 if(ii == 0){ 
                    htmlString += data[i].foods.likes[ii];

                 }else {
                    
                    htmlString +=  " and  " +  data[i].foods.likes[ii];

                 }
              }


              htmlString += ' and dislikes ';

              for(ii = 0; ii < data[i].foods.dislikes.length; ii++){

                 if(ii == 0){ 
                    htmlString += data[i].foods.dislikes[ii];

                 }else {
                    
                    htmlString +=  " and  " +  data[i].foods.dislikes[ii];

                 }
              }

              htmlString += '.</p>';

           }

   animalContainer.insertAdjacentHTML('beforeend',htmlString);  // insertAdjacentHTML DODAJE HTML


            /*podaci.innerHTML = `<p><b>${data['email']}</b></p>
                                 <p>${data['username']}</p> 
                                 <p><i>${data['password']}</i></p>`;*/

        }).catch(error => {
            alert(error);
        });
    

    pageCounter++;
    if(pageCounter > 3){
    	btn.classList.add("hide-me");
    }
   
});


// zadatak ove funkcije je da stavi html na stranicu (paragrafe texta)

/*function renderHTML(data){
   
   var htmlString = "";

    for (i=0; i < data.length; i++){

      htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

      for(ii = 0; ii < data[i].foods.likes.length; ii++){

      	 if(ii == 0){ 
      	 	htmlString += data[i].foods.likes[ii];

      	 }else {
            
            htmlString +=  " and  " +  data[i].foods.likes[ii];

      	 }
      }


      htmlString += ' and dislikes ';

      for(ii = 0; ii < data[i].foods.dislikes.length; ii++){

      	 if(ii == 0){ 
      	 	htmlString += data[i].foods.dislikes[ii];

      	 }else {
            
            htmlString +=  " and  " +  data[i].foods.dislikes[ii];

      	 }
      }

      htmlString += '.</p>';

   }


   animalContainer.insertAdjacentHTML('beforeend',htmlString);  // insertAdjacentHTML DODAJE HTML
}*/

