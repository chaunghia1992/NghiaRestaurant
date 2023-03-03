class Contact{
    constructor(id,img, name,price,description){
        this.id = id
        this.img = img
        this.name = name
        this.price = price
        this.description = description;
      
}
}
const restaurant_url ='http://127.0.0.1:5500/index.html'
const contact=[
    new Contact(1,"/images/51.jpg", "Ga quay lu",280.000, "Ga ngon qua"),
    new Contact(2,"/images/52.jpg", "Heo Rừng Xào Xả Ớt",120.000,"Heo Rừng Chất Lượng "),
    new Contact(3,"/images/53.jpg", "Mực hấp Gừng",100.000, "Mực Tươi"),
    new Contact(4,"/images/58.jpg", "Bò nướng lá lốt ",90.000, "thơm ngon tuyệt vời"),
    new Contact(5,"/images/55.jpg", "Cua Rang Me",190.000, "Cua Cà Mau Chính Hiệu"),
];
function displaymenu(){
    let htmls = contact.map(function(contact){
        return `
        <div class="food">
                <img src="${contact.img}" alt="" width="180" height="140">
                <p class="">${contact.name}</p>
                <span>${contact.price}</span></span>
                <span>${contact.description}</span>
            </div>`

    })
    document.querySelector("#tbFoods").innerHTML = htmls.join("");
        
    
}
displaymenu();


