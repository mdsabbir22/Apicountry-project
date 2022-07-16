const Search=document.getElementById("search");
const search_btn=document.getElementById("btn");
const show_data=document.getElementById("show-data");
search_btn.addEventListener("click",()=>{
    let search_country=Search.value;
    let Url=`https://restcountries.com/v3.1/name/${search_country}?fullText=true`;
    fetch(Url)
    .then((response)=> response.json())
    .then((data)=>{
        
        show_data.innerHTML="";
        show_data.innerHTML=`
        <img src="${data[0].flags.svg}">
        <h2>${data[0].name.common}</h2>
        <div class="data-wrapper">
        <div class="box">
        <span class="data-text">Capital:</span>
        <span>${data[0].capital[0]}</span>
        </div>
        <div class="box">
        <span class="data-text">Continents:</span>
        <span>${data[0].continents[0]}</span>
        </div>
        <div class="box">
        <span class="data-text">Area:</span>
        <span>${data[0].area}</span>
        </div>
        <div class="box">
        <span class="data-text">Population:</span>
        <span>${data[0].population}</span>
        </div>
        <div class="box">
        <span class="data-text">Curriencies:</span>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}
        -${Object.keys(data[0].currencies)[0]}
        </span>
        </div>
        <div class="box">
        <span class="data-text">Languages:</span>
        <span>${Object.values(data[0].languages).toString().split(",").join(",")}
        </span>
        </div>
        </div>
        `
        ; 
    })
    .catch(()=>{
        if(search_country.length==0){
            show_data.innerHTML=`<h3>The input field cannot be empty</h3>`  
        }
        else{
            show_data.innerHTML=`<h3>Please enter a valid country name</h3>`
        }
    })
    
})