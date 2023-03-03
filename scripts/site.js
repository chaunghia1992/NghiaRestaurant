class Food {
    constructor(id, img, name, price, description) {
        this.id = id
        this.img = img
        this.name = name
        this.price = price
        this.description = description;
    }
}
const restaurant_url = 'http://127.0.0.1:5500/index.html'
const foods = [
    new Food(1, "/images/51.jpg", "Ga quay lu", 280.000, "Ga ngon qua"),
    new Food(2, "/images/52.jpg", "Heo Rừng Xào Xả Ớt", 120.000, "Heo Rừng Chất Lượng "),
    new Food(3, "/images/53.jpg", "Mực hấp Gừng", 100.000, "Mực Tươi"),
    new Food(4, "/images/58.jpg", "Bò nướng lá lốt ", 90.000, "thơm ngon tuyệt vời"),
    new Food(5, "/images/55.jpg", "Cua Rang Me", 190.000, "Cua Cà Mau Chính Hiệu"),
];
function displaymenu() {
    let htmls = foods.map(function (food) {
        return `
            <div class="food">
                <img src="${food.img}" alt="" width="180" height="140">
                <p class="">${food.name}</p>
                <span>${food.price}</span></span>
                <span>${food.description}</span>
                <button class="btn" onclick="removeProduct(${food.id})">Trash</button>
            </div>`

    })
    document.querySelector("#tbFoods").innerHTML = htmls.join("");
}

function removeProduct(foodId) {
    alert(foodId)
}
displaymenu();


