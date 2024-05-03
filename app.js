const product = [
    {
        id: 0,
        Image: 'images/wcar.png',
        title: 'White Car',
        price: 11120,
    },
    {
        id: 1,
        Image: 'images/rcar.png',
        title: 'Red Car',
        price: 9990,
    },
    {
        id: 2,
        Image: 'images/bcar.png',
        title: 'Blace Car',
        price: 10220,
    },
    {
        id: 3,
        Image: 'images/w1car.png',
        title: 'Car',
        price: 8900,
    },
    {
        id: 4,
        Image: 'images/farari.png',
        title: 'Farari',
        price: 18900,
    },
    {
        id: 5,
        Image: 'images/ycar.png',
        title: 'Yellow',
        price: 15500,
    },
    {
        id: 6,
        Image: 'images/scar.png',
        title: 'Selver',
        price: 19900,
    },
    {
        id: 7,
        Image: 'images/anguralcar.png',
        title: 'Angural',
        price: 21900,
    },
    {
        id: 8,
        Image: 'images/bbcar.png',
        title: 'W Black',
        price: 21190,
    },
    {
        id: 9,
        Image: 'images/miniocar.png',
        title: 'Mini Orange',
        price: 1990,
    },
    {
        id: 10,
        Image: 'images/minibcar.png',
        title: 'Mini Orange',
        price: 1890,
    },
    {
        id: 11,
        Image: 'images/minigcar.png',
        title: 'Mini green',
        price: 1820,
    }
];

const categories = [...new Set(product.map((item)=>
{return item}))]
let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {Image, title, price} = item;
    return(
        `<div class='carts'>
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${Image}'></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+"<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div></div>`
    )
}).join('')
var cart = [];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}
function displaycart(a){
    let j = 0, total=0;
    document.getElementById('count').innerHTML = cart.length;
    if (cart.length==0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById('total').innerHTML = "Total: $"+0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((item)=>
        {
            var {Image, title, price} = item;
            total += price;
            document.getElementById('total').innerHTML = "Total: $"+total+".00";
            return(
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src='${Image}'></img>
                    </div>
                <p class='pt'>${title}</p>
                <h2 class='price'>$ ${price}.00</h2>`+"<i class='fa-solid fa-trash' onclick='delElement("+(j++)+")'></i></div>"
            );
        }).join('');
    }
}