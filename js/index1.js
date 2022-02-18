var siteName = document.getElementById('siteName') ;
var siteUrl = document.getElementById('siteUrl') ;
var sitesContainer=[];

if(localStorage.getItem('sites') == null)
{
    sitesContainer=[];
}
else
{
    sitesContainer = JSON.parse(localStorage.getItem('sites'));
    displaySites();
}
function addSites()
{
   if(validSiteUrl()== true)
   {
     var sites= {
         name : siteName.value,
         url : siteUrl.value
     }; 
     sitesContainer.push(sites);
     localStorage.setItem("sites" , JSON.stringify(sitesContainer));
     displaySites();
     clrForm();
   }
   else
   {
       siteUrl.classList.add('is-invalid')
   }
}
function displaySites()
{
    var box =``;

    for( var i=0 ; i<sitesContainer.length ; i++)
    {
        box += `  <div class="col-md-12 ground py-4 d-flex" >
        <h4 class="fw-bold text-muted me-5 pe-5 ms-3">${sitesContainer[i].name}</h4> 
        <a href="${sitesContainer[i].url}" target="_blank" class=" btn btn-primary ms-4 me-3" id="visit"> visit</a>
        <button class=" btn btn-danger" onclick=" deleteSitesName(${i}) " id="delete"> Delete</button> 
        </div>` ;
    }
    document.getElementById('roow').innerHTML = box ;
}
function clrForm()
{
    siteName.value ="" ;
    siteUrl.value = "" ;
}
function deleteSitesName(sitesIndex)
{
    sitesContainer.splice(sitesIndex , 1);
    localStorage.setItem("sites" , JSON.stringify(sitesContainer));
    displaySites()
}
function validSiteUrl()
{
    var regex = /^(ftp|http|https):\/\/[^ "]+$/;
    if(regex.test(siteUrl.value)==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}