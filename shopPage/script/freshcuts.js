var freshcutsObj =[ 
    {
        img_url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/47dfb7d1-d8d3-4c96-bda9-7dc85dfdec51_360x.png?v=1613364164",
        name:"Pomegranate Seeds (Arils Cup)125g",
        cost:"₹55 - ₹140",

    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/24d0f9c9-fe83-40a3-84ab-300e73e4ff8d_360x.png?v=1611811511",
        name:"Coconut Chunks Cup (100g)",
        cost:"₹51 - ₹130"
    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/0fce7fd6-f30e-45df-8c52-234acbd62023_360x.png?v=1611811509",
        name:"Grated Coconut Punnet",
        cost:"₹51",

    },
    {
        img_url:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/62cef687-de59-4f5a-acf3-4df1238c3e29-min_360x.png?v=1614324446",
        name:"Kimaye Arils-Coco Cup (125g)",
        cost:"₹55 - ₹140",

    },
];

document.getElementById("bhogione");

  freshcutsObj.map(function(elem){
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
    });

    var name = document.createElement('p');
    name.innerText=elem.name

    var cost = document.createElement('p');
    cost.innerText=elem.cost

    box.append(img,button,name,cost)

    bhogione.append(box)
})