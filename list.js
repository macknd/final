const socks=[
    {
        image:"https://images.fun.com/products/44845/1-1/pringles-cool-socks.jpg",
        name:"Pringles Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0207/8554/products/socksmith_pugs_in_blue_cool_socks_large.jpg?v=1505244528",
        name:"Pug Socks",
        price:"$3.50"
    },
    {
        image:"https://i.etsystatic.com/8689390/r/il/3ac8ed/1321572618/il_570xN.1321572618_hen1.jpg",
        name:"Bob Ross Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn1.bigcommerce.com/server2500/0iaufi/products/4796/images/44480/MNC524-BLK_Tacos_Black_1__66185.1496416628.450.800.jpg?c=2",
        name:"Taco Socks",
        price:"$3.50"
    },
    {
        image:"https://i5.walmartimages.com/asr/57aeefa0-c0a7-4ab5-9261-0bfe92db9906_1.b73e6ab51ee6290f9a7e227086316cb5.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
        name:"Bagel Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0838/3573/products/410342_a72a79e5-5014-42d2-8ddb-762b1230f233_large.jpg?v=1508251284",
        name:"Shark Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0234/5963/products/IMG_9772-Edit_large.jpg?v=1539983477",
        name:"Santa Socks",
        price:"$3.50"
    },
    {
        image:"https://zcdn.freetls.fastly.net/images/cache/product/452x1000/287753/zu55106987_main_tm1518444820.jpg",
        name:"Spongebob Socks",
        price:"$3.50"
    },
    {
        image:"https://i.pinimg.com/236x/4e/49/f9/4e49f9178ef48f0768ef81196132ad11.jpg",
        name:"Rubber Ducky Socks",
        price:"$3.50"
    },
    {
        image:"https://www.hotsox.com/data/default/images/catalog/460/Turnkey/1/xHO002702_130.jpg.pagespeed.ic.hT7MW3gQO1.jpg",
        name:"Nautical Socks",
        price:"$3.50"
    },
    {
        image:"https://zcdn.freetls.fastly.net/images/cache/product/452x1000/287753/zu55107033_main_tm1518444820.jpg",
        name:"Fruit Loops Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0234/4461/products/when_my_song_comes_on_womens_crew_socks_blue_q_dancing_funny_2048x.jpg?v=1530912012",
        name:"When My Song Comes On Socks",
        price:"$3.50"
    },
    {
        image:"https://blog.sockdrawer.com/wp-content/uploads/2017/11/socksmith_pancakes_yellow_fun_socks_large.jpg",
        name:"Pancakes Socks",
        price:"$3.50"
    },
    {
        image:"https://www.hotsox.com/data/default/images/catalog/900/Turnkey/1/HM100536-DENH.png",
        name:"Multi Dog Socks",
        price:"$3.50"
    },
    {
        image:"https://finefitsocks.com/wp-content/uploads/2018/04/NV037.jpg",
        name:"Pretzel Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0838/3573/products/410335_de2b0bf0-a66d-405c-96fd-1399cf28f5bc.jpg?v=1508251261",
        name:"Galaxy Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0838/3573/products/410271_53445d0e-19f5-4539-8157-567ac67975a8.jpg?v=1508251268",
        name:"Sunny Side Up Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/1884/3249/products/MNC875_GGR_P_1_345x.jpg?v=1507214447",
        name:"Gumby Socks",
        price:"$3.50"
    },
    {
        image:"https://www.tinyfishprinting.com/uploads/products/product-shots/garment-images/custom_socks.jpg",
        name:"Donut Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0234/4461/products/strawberry-socks-womens-crew-strawberries-sock-modsocks-modsock-pink_2048x.jpg?v=1525483146",
        name:"Strawberry Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0234/5963/products/IMG_9795-Edit_68d38487-1b31-4810-b66a-78c964ab949d_large.jpg?v=1539983112",
        name:"Nordic Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0838/3573/products/410275_0682ea0d-e087-4bb0-95ff-3f591f9c5440_large.jpg?v=1508251296",
        name:"Bacon Socks",
        price:"$3.50"
    },
    {
        image:"https://s7d9.scene7.com/is/image/JCPenney/DP0222201813065572M?resmode=sharp2&op_sharpen=1&wid=550&hei=550",
        name:"Astronaut Socks",
        price:"$3.50"
    },
    {
        image:"https://cdn11.bigcommerce.com/s-80dc88lad1/images/stencil/2048x2048/products/17/618/Fearless_Rainbow_Sock__81358.1509132933.jpg?c=2",
        name:"Rainbow Tube Socks",
        price:"$3.50"
    }
]

const getPage=(startIndex, endIndex)=>{
    for(let i=startIndex; i<=endIndex; i++){
        const pic = socks[i].image;
        const name = socks[i].name;
        const price = socks[i].price;
        let body = `<div class='col-12 col-md-4 sock-card' data-sock-index=${i}><img class="pics" src=${pic} alt=${name}><h5>${name}</h5><p>${price}</p></div>`;
        $("#plist").append(body);
    }
}

$(document).ready(()=> {
    getPage(0,8);
    $("#first").click(()=>{
        $("#plist").html("");
        getPage(0,8);
    })

    $("#second").click(()=>{
        $("#plist").html("");
        getPage(9,17);
    })

    $("#third").click(()=>{
        $("#plist").html("");
        getPage(18,24);
    })
});

$(document).on('click','.sock-card',(event)=>{
    let index = event.currentTarget.dataset.sockIndex;
    window.location=`http://localhost:8080/single.html?sockIndex=${index}`;
})

