// var fristNameData = document.getElementById("fn");
// var lastNameData = document.getElementById("ln");
// function sayHello(){
//     var fristNameValue = fristNameData.value;
//     var lastNameValue = lastNameData.value;
//      console.log( "Hello " ,fristNameValue,lastNameValue );
//      getClear();
// }
// function getClear(){
//          fristNameData.value ="";
    
//     lastNameData.value ="";

// }

var siteNameInput = document.getElementById('sn');
var siteUrlInput = document.getElementById('wrl');
var allSites= [];
if(localStorage.getItem("allSites") != null){
    allSites = JSON.parse(localStorage.getItem("allSites"));
    displayAllSites();
}

var x = document.getElementById('changeStuts');
 var y = document.getElementById('visit');
//-----------------------------------------------------------
function getCondition(){
 
    if (x.innerHTML=="Submit") {
        addNewSite();
        
    } else {
        updateValue();
    }
}
function addNewSite(){
    if ( validateSiteName()  &&  validateSiteUlr() ) {
      
        var site = {
            name:siteNameInput.value,
            url:siteUrlInput.value,
        }
            
        
        allSites.push(site);
        localStorage.setItem("allSites", JSON.stringify(allSites));
    
        // console.log( allSites );
        clearValues();
        displayAllSites();
        


    } else {
        displayBox();
    }
    // var productName = productNameInput.value;
    // var productPrice = productPraceInput.value;
    // var productCategory =productCategoryInput.value;
    // var productDescription = productDescriptionInput.value;
  
}
//------------------------------------------
function clearValues(){
    siteNameInput.value="";
    siteUrlInput.value="";
}
 
 //----------------------------------------------
function displayAllSites(){
    var repeatdDada="";
 for( var i = 0 ; i < allSites.length ; i++ ){
       repeatdDada+=  `<tr>
       <td>${ i + 1 }</td>
       <td>${allSites[i].name}</td>
       <td><button  onclick="visitSite(${i})" class="btn btn-success visit" id="visit"><i class="fa-solid fa-eye me-2"></i><a href="${ allSites[i].url}" target="_blank">Visit</a></button></td>
       <td><button onclick="deleteElement(${i})" class="btn btn-danger "><i class="fa-solid fa-trash me-2"></i>Delete</button></td>
       <td><button onclick="updateElement(${i})" class="btn btn-warning"><i class="fa-solid fa-recycle me-2"></i>Update</button></td>
   </tr>`
 }

    document.getElementById('tbody').innerHTML= repeatdDada;
 }

//---------------------------------------------
function deleteElement(idx){

    // console.log("Deleted");
    allSites.splice(idx,1);
    localStorage.setItem("allSites", JSON.stringify(allSites));
    displayAllSites();
}
//-------------------------------------------
siteIndex=0;
function updateElement(idx){
    siteIndex=idx;
     siteNameInput.value=allSites[idx].name;
     siteUrlInput.value=allSites[idx].url;
    window.scrollTo( 0 , 0 );
    x.innerHTML="Update"
}
function updateValue(){
   
          if (  validateSiteName()  &&  validateSiteUlr()) {


            //----------
    allSites[siteIndex].name=siteNameInput.value;
    allSites[siteIndex].url=siteUrlInput.value;
    x.innerHTML="Submit";
    localStorage.setItem("allSites", JSON.stringify(allSites));
    displayAllSites();
    clearValues();
            
          } else {
            displayBox();
          }
    

}

//-----------------------------
// var y = document.getElementById('visit');

function visitSite(idx){
    siteIndex=idx;
    siteUrlInput.value=allSites[siteIndex].url;
    // document.getElementById('visit').innerHTML=``
    // console.log(  allSites[siteIndex].url );
   clearValues();
}
//----------------------------------------------------
function searchElement( term ){
    var repeatdDada="";
    for( i = 0 ; i < allSites.length ; i++ ){
            // console.log( allSites[i].name );
            if( allSites[i].name.toLowerCase().includes( term.toLowerCase() ) == true ){
                console.log( allSites[i ] );
             repeatdDada+=  `<tr>
       <td>${ i + 1 }</td>
       <td>${allSites[i].name}</td>
       <td><button  onclick="visitSite(${i})" class="btn btn-success visit" id="visit"><i class="fa-solid fa-eye me-2"></i><a href="${ allSites[i].url}" target="_blank">Visit</a></button></td>
       <td><button onclick="deleteElement(${i})" class="btn btn-danger "><i class="fa-solid fa-trash me-2"></i>Delete</button></td>
       <td><button onclick="updateElement(${i})" class="btn btn-warning"><i class="fa-solid fa-recycle me-2"></i>Update</button></td>
   </tr>`

            }
            document.getElementById('tbody').innerHTML= repeatdDada;

    }

    
}

//----------------------------------------------------
function validateSiteName(){
    var nameRegex = /^([a-z]|[A-Z]){3,9}$/;
    nameRegex.test(siteNameInput.value);
    return nameRegex.test(siteNameInput.value);
    
   
    
}
function validateSiteUlr(){
    var urlRegex = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;
    urlRegex.test(siteUrlInput.value);
   return urlRegex.test(siteUrlInput.value);
   
   
}
//-------------------------fun of box display if not valid exprestion----
var box = document.getElementById('box');
function displayBox(){
    box.style.display='block';
      demo
}
function hideBox(){
    box.style.display='none';
}


