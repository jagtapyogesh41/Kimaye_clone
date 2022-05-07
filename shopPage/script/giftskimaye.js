var giftscombosObj =[ 
    {
        img_url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7790_540x.jpg?v=1631346990",
        name:"Kimaye Jamun (250 gm)",
        cost:"₹1800",

    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7807_540x.jpg?v=1631347621",
        name:"Fruit Box by Kimaye (Adore)",
        cost:"₹2400"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7821_540x.jpg?v=1631350656",
        name:"Kimaye Watermelon (1 pc)",
        cost:"₹1400",

    },
    
];

document.getElementById("bhogione");

  giftscombosObj.map(function(elem){
    var box = document.createElement('div');

    const button = document.createElement('button');
    button.innerText = 'Add to Cart';
    button.setAttribute('id','cart')

    var img = document.createElement('img');
    img.src=elem.img_url;
    img.addEventListener('mouseover',()=>{
        button.style.display='block';
    })

    img.addEventListener('mouseout',()=>{
        button.style.display='none';
    })

    var name = document.createElement('p');
    name.innerText=elem.name

    var cost = document.createElement('p');
    cost.innerText=elem.cost

    box.append(img,button,name,cost)

    bhogithree.append(box)
})