// const getData = async (url) =>{
//     try{
//         let res = await fetch(url);
//         let data = await res.json()
//         return data;
//     }
//     catch(error){
//         console.log("error:",error)
//     }
// };

// const append = (data, parent)=>{
//     parent.innerHTML = null;

//     data.forEach(({title,images,price})=>{

//         let div= document.createElement("div")

//         let t=document.createElement("h4")
//         t.innerText = title;
//         let img= document.createElement('img')
//         img.src=images;
//         let p=document.createElement("p")
//         p.innerText = price;

//         div.append(t,img,p)

//         parent.append(div)
//     })
// }

// export{getData, append}











// let parent= document.getElementById("showData")
// const getData = async(url) =>{
//     try{  let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
  
//       let data = await res.json()
//       console.log("data:",data)
//     //   return data;
  
//   }
//   catch(error){
//   console.log("rror:",error)
//   }
//   };
  
//   //data
//   //
//   const append = (data, parent)=>{
//       parent.innerHTML = null;
  
//       data.forEach(( {strMeal, strMealThumb} )=> {
  
         
  
//           let div = document.createElement("div")
  
//           let t= document.createElement('p')
//               t.innerText = strMeal;
//           let img = document.createElement('img')
//               img.src = strMealThumb;
//         //   let p = document.createElement('p')
//         //   p.innerText= price;
  
//           div.append(img,t, p)
  
//           parent.append(div)
  
//       })
//   }
  
  
//   export {getData, append};
  
  
  
  
  // ---------------------------------------------------------------------------////////////////
  //main//



  const searchBtn = document.getElementById("search-btn")
  const mealList = document.getElementById('meal')
  const mealDetailsContent = document.querySelector('.meal-details-content')
  const recipeCloseBtn= document.getElementById('recipe-close-btn')

  searchBtn.addEventListener('click',getMealList)
  mealList.addEventListener('click',getMealRecipe)



function getMealList(){
  let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(responce => responce.json())
  .then(data => {
    // console.log("data:",data)
   

    let html =""
    if(data.meals){
      data.meals.forEach(meal=>{
        html +=`
        <div class="meal-item" id="${meal.idMeal}">
                     <div class="meal-img" >
                         <img src="${meal.strMealThumb}"
                          alt="food">
                        </div>
                        <div class="meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href="" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
        `;
        
      });
      mealList.classList.remove('notFound')
    } else{
      html=`"Sorry, we didn't find any meal for You! so, Nimbu Khaow"
        <img src="https://www.themealdb.com/images/ingredients/Lime.png" ali="img" id="errorImg"/>
      `;
      mealList.classList.add('notFound')
    }
mealList.innerHTML = html;
  });

}


//get meal recipe
function getMealRecipe(el){
  el.preventDefault();
  if(el.target.classList.contains('recipe-btn')){
    //let mealItem = el.target.parentElement.parentElement;
    // console.log(mealItem)
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
    
    .then(data => {
      console.log("data",data);
    });
      
  }
}

// function mealRecipeModal(meal){
//   console.log(meal)
//   meal= meal[0];
// }
