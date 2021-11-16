 
 //Using promise fetch the API and store it in json data
 fetch("https://fakestoreapi.com/products").then((data)=>{
    return data.json();
}).then((completedata)=>{
    // console.log(completedata[2].title);

    //Map the datas and display all the datas from API
    let data1="";
    completedata.map((values)=> {
        data1+=`<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src=${values.image} 
        class="images" alt="img">
        <p class="description">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
        </div>`
    });

    //To display all the datas using getElement and render in to UI

    document.getElementById("cards").innerHTML=data1;

    //If there is any error it will catch and avoiding throwing error.
}).catch((err)=>{
    console.log(err);
})