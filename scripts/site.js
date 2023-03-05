class Food {
    constructor(id, img, name, price, description) {
        this.id = id
        this.img = img
        this.name = name
        this.price = price
        
    }
}
const food_key = "data-food"
const restaurant_url = 'http://127.0.0.1:5500/index.html';

 var foods = [];
function init(){
    if(localStorage.getItem('data-food') == null){
        foods =[ new Food(1, "../images/51.jpg", "Ga quay lu", 280000),
            new Food(2, "./images/52.jpg", "Heo Rừng Xào Xả Ớt", 120000 ),
            new Food(3, "./images/53.jpg", "Mực hấp Gừng", 100000),
            new Food(4, "./images/58.jpg", "Bò nướng lá lốt ", 90000),
            new Food(5, "./images/55.jpg", "Cua Rang Me", 190000),
        ]

        localStorage.setItem('data-food',JSON.stringify( foods));
    }
    else{
        foods = JSON.parse( localStorage.getItem(food_key));
    }
}

function renderfoods() {
    let htmls = foods.map(function (food) {
        return `
            <div class="food">
                <img src="${food.img}" alt="" width="180" height="140">
                <p class="">${food.name}</p>
                <span>${food.price}</span></span>
                <button class="btn-show-info" onclick="showInfo(${food.id})">Edit</button>
                <button class="btn-delete" onclick="removeProduct(${food.id})">Detele</button>
            </div>`

    })
    document.querySelector("#tbFoods").innerHTML = htmls.join("");
}

function showInfo(foodId) {
    let food = {};
    
    foods.filter((item, index) => {
        if (item.id === foodId) {
            food = item;
            return;
        }
    })

    document.getElementById('id').value = food.id;
    document.getElementById('img').value = food.img;
    document.getElementById('name').value = food.name;
    document.getElementById('price').value = food.price;   
}

function editFood() {
    let foodId = +document.getElementById('id').value;
    let img = document.getElementById('img').value;
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;

    console.log(foodId);

    foods.filter((item, index) => {
        console.log(item);
        if (item.id === foodId) {
            item.img = img;
            item.name = name;
            item.price = price;
            // console.log(item);
            return;
        }
    })
    localStorage.setItem('data-food', JSON.stringify(foods));

    renderfoods();
}

function removeProduct(foodId) {
    // alert(foodId)
    foods.filter((item, index) => {
        // console.log(item);
        if (item.id === foodId) {
            foods.splice(index, 1);
            localStorage.setItem('data-food', JSON.stringify(foods));
        }
    })

    renderfoods();
}

renderfoods();

function addfood(){
    let id = +document.getElementById('id').value;
    let img = document.getElementById('img').value;
    let name = document.getElementById('name').value;
    let price = +document.getElementById('price').value;

    let food = new Food(id,img,name,price,description);
    foods.push(food);
    renderfoods();
    localStorage.setItem('data-food', JSON.stringify(foods));
    clear();
}
function main(){
    init();
    renderfoods();

}
main();


