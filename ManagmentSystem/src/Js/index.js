const pizzas=[];
class Pizza{
    constructor(pName,ingredients,smallPrice,mediumPrice,largePrice,imgSrc){
       this.pizzaName=pName;
       this.pizzaIngredients=ingredients;
       this.smallPrice=Number(smallPrice);
       this.mediumPrice=Number(mediumPrice);
       this.largePrice=Number(largePrice);
       this.sourceImg=imgSrc;
    }
}
//Pizzas
const margherita=new Pizza("Margherita","Pizza sauce, gouda cheese, mozzarella cheese, tomatoes",7.90,11.90,14.90,"./assets/images/pizzas-section/margherita.jpg");
const vegetarian=new Pizza("Vegetarian","Pizza sauce, gouda cheese, spinach, red onion, bell pepper, tomatoes, mushrooms",8.90,12.90,15.90,"./assets/images/pizzas-section/vegetarian.jpg");
const funghiConPollo=new Pizza("Funghi Con Pollo","Pizza sauce, gouda cheese, mushrooms, chicken fillet",9.90,14.90,18.90,"./assets/images/pizzas-section/funghi-pollo.jpg");
const speciale=new Pizza("Speciale","Pizza sauce, gouda cheese, chicken fillet, red onion",9.90,14.90,18.90,"./assets/images/pizzas-section/speciale.jpg");
const mista=new Pizza("Mista","Pizza sauce, gouda cheese, mushrooms, ham (halal), salami (halal)",9.90,14.90,18.90,"./assets/images/pizzas-section/mista.jpg");
const salami=new Pizza("Salami","Pizza sauce, gouda cheese, salami (halal)",9.90,14.90,18.90,"./assets/images/pizzas-section/salami.jpg");
const classico=new Pizza("Classico","Pizza sauce, gouda cheese, salami (halal), mushrooms, pepperoni pepper",9.90,14.90,18.90,"./assets/images/pizzas-section/classico.jpg");
const hawaii=new Pizza("Hawaii","Pizza sauce, gouda cheese, pineapple, ham (halal)",9.90,14.90,18.90,"./assets/images/pizzas-section/hawaii.jpg");
const texas=new Pizza("Texas","Pizza sauce, gouda cheese, chicken fillet, bell pepper, corn, red onion",9.90,14.90,18.90,"./assets/images/pizzas-section/texas.jpg");
const chickenStrips=new Pizza("Chicken Strips","Barbecue sauce, gouda cheese, chicken nuggets, corn, bell pepper",10.90,15.90,20.90,"./assets/images/pizzas-section/chicken-strips.jpg");
const mexicana=new Pizza("Mexicana","Pizza sauce, gouda сheese, chicken fillet, red onion, spinach, jalapeno pepper, pepperoni",10.90,15.90,20.90,"./assets/images/pizzas-section/mexicana.jpg");
const tonnoeCipolla=new Pizza("Tonno e Cipolla","Pizza sauce, gouda cheese, tuna, red onion",10.90,15.90,20.90,"./assets/images/pizzas-section/tonno-cipolla.jpg");
const fiveChesees=new Pizza("Five Chesees","Creamy sauce, gouda cheese, mozzarella cheese, bufallo mozzarella cheese, riccota cheese, parmesan cheese",11.90,16.90,21.90,"./assets/images/pizzas-section/five-chesees.jpg");
const volcano=new Pizza("Volcano","Pizza sauce, gouda cheese, spinach, red onion, bell pepper, tomatoes, mushrooms, chicken fillet, olives",11.90,16.90,21.90,"./assets/images/pizzas-section/volcano.jpg");
const sujuk=new Pizza("Sujuk","Pizza sauce, gouda сheese, bell pepper, mushrooms, sucuk",11.90,16.90,21.90,"./assets/images/pizzas-section/sujuk.jpg");
const amerikana=new Pizza("Amerikana","Barbecue sauce, gouda сheese, sausage, french friez, pickles",11.90,16.90,21.90,"./assets/images/pizzas-section/amerikana.jpg");
const fourSeasons=new Pizza("Four Seasons","Meduim - 30 sm, pizza sauce, gouda cheese, white cheese, ham (halal), sucuk, mushrooms, tomatoes, oregano",16.90,16.90,16.90,"./assets/images/pizzas-section/four-season.jpg");
const deluxe=new Pizza("Deluxe","Pizza sauce, gouda cheese, red onion, pepperoni pepper, beef",11.90,17.90,23.90,"./assets/images/pizzas-section/deluxe.jpg");
const meatLovers=new Pizza("Meat Lovers","Pizza sauce, gouda cheese, chicken fillet, beef, salami (halal), ham (halal), sucuk",12.90,18.90,24.90,"./assets/images/pizzas-section/meat-lovers.jpg");
const megaMix=new Pizza("Mega Mix","Pizza sauce, gouda сheese, tomatoes, bell pepper, mushrooms, black olives, salami (halal), ham (halal), beef, chicken fillet",12.90,18.90,24.90,"./assets/images/pizzas-section/mega-mix.jpg");

//Adding pizzas to page
const rowPizza=document.querySelector(".pizza-row");
pizzas.push(margherita,vegetarian,funghiConPollo,speciale,mista,salami,classico,hawaii,texas,chickenStrips,mexicana,tonnoeCipolla,fiveChesees,volcano,sujuk,amerikana,fourSeasons,deluxe,meatLovers,megaMix);
localStorage.setItem("pizzas",JSON.stringify(pizzas));
const showPizzasOnScreen=setInterval(function(){
    const localPizzas=JSON.parse(localStorage.getItem("pizzas"));
    console.log("hello");
    for (let i = 0; i < localPizzas.length; i++) {
        let pizza=localPizzas[i];
        showPizza(pizza);
    }
},1000)

function showPizza(pizza){
    rowPizza.innerHTML+=`
        <div class="col-3 pizza">
            <div class="card pizza-card" style="width: 14rem;">
                <img src=${pizza.sourceImg} class="card-img-top" alt=${pizza.pizzaName}>
                <div class="icon-zoom">
                    <i class="fa-solid fa-magnifying-glass zoom"></i>
                </div>
                <div class="card-body pizza-body">
                    <h5 class="card-title">${pizza.pizzaName}</h5>
                    <p class="card-text product-info">${pizza.pizzaIngredients}</p>
                    <h6 class="price">${pizza.smallPrice}</h6>
                    <i class="fa-solid fa-manat-sign"></i>
                    <button type="button" class="choose-btn">Choose</button>
                </div>
            </div>   
        </div>
    `  
}

