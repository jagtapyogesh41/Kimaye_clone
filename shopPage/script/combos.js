var combosObj=[
    {
        img_url: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_1_360x.png?v=1642492575",
        name: "Kimaye Three Grape Combo",
        cost: "₹152",

    },
    {
        img_url: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/GPS-BB_360x.png?v=1642492910",
        name: "Kimaye Blueberry-Green Grapes Combo",
        cost: "₹492"
    },
    {
        img_url: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_360x.png?v=1641883595",
        name: "Kimaye Green & Black Grapes Combo (250 g & 250 g)",
        cost: "₹98",

    },
    {
        img_url: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Wholesome-combo_360x.jpg?v=1618497683",
        name: "Kimaye Wholesome Combo",
        cost: "₹914",

    },
    {
        img_url: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/KiwiBlueberry_360x.png?v=1617983685",
        name: "Kimaye Kiwi-Blueberries Combo",
        cost: "₹525",

    },
    {
        img_url: "https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MicrosoftTeams-image_1_360x.jpg?v=1649415923",
        name: "Kimaye Summer Combo",
        cost: "₹477",

    },
];

document.getElementById("bhogitwo");

combosObj.map(function (elem, i) {
    var box=document.createElement('div');

    const button = document.createElement('button');
    button.innerText = 'Add to Cart';
    button.setAttribute('id','cart')

    var img = document.createElement('img');
    img.setAttribute('id','img')
    img.src=elem.img_url;
    img.addEventListener('mouseover',()=>{
        button.style.display='block';
    })

    img.addEventListener('mouseout',()=>{
        button.style.display='none';
    })

    var name=document.createElement('p');
    name.innerText=elem.name

    var cost=document.createElement('p');
    cost.innerText=elem.cost

    box.append(img, button, name, cost)

    bhogitwo.append(box)
})