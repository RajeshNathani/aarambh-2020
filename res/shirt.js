if(localStorage['price'] == 300){
    fetch("http://127.0.0.1:5000/api/men/shirts/500")
    .then(res=>res.json())
    .then((out)=>{
        for(i=0;i<3;i++){
          document.getElementById("s-im1").src = out[0].image
          document.getElementById("s-im2").src = out[1].image
          document.getElementById("s-im3").src = out[2].image
          document.getElementById("s-im4").src = out[3].image
          document.getElementById("s-im5").src = out[4].image

          document.getElementById("s-name1").innerHTML = out[0].name
          document.getElementById("s-name2").innerHTML = out[1].name
          document.getElementById("s-name3").innerHTML =out[2].name
          document.getElementById("s-name4").innerHTML = out[3].name
          document.getElementById("s-name5").innerHTML = out[4].name

          document.getElementById("s-seller1").innerHTML = out[0].seller
          document.getElementById("s-seller2").innerHTML = out[1].seller
          document.getElementById("s-seller3").innerHTML =out[2].seller
          document.getElementById("s-seller4").innerHTML = out[3].seller
          document.getElementById("s-seller5").innerHTML = out[4].seller

          document.getElementById("s-price1").innerHTML = out[0].price
          document.getElementById("s-price2").innerHTML = out[1].price
          document.getElementById("s-price3").innerHTML =out[2].price
          document.getElementById("s-price4").innerHTML = out[3].price
          document.getElementById("s-price5").innerHTML = out[4].price
        }
    })
}
else if(localStorage['price'] == 500){
    fetch("http://127.0.0.1:5000/api/men/shirts/max")
    .then(res=>res.json())
    .then((out)=>{
      for(i=0;i<3;i++){
          document.getElementById("im1").src = out[0].image
          document.getElementById("im2").src = out[1].image
          document.getElementById("im3").src = out[2].image
          document.getElementById("im4").src = out[3].image
          document.getElementById("im5").src = out[4].image

          document.getElementById("name1").innerHTML = out[0].name
          document.getElementById("name2").innerHTML = out[1].name
          document.getElementById("name3").innerHTML =out[2].name
          document.getElementById("name4").innerHTML = out[3].name
          document.getElementById("name5").innerHTML = out[4].name

          document.getElementById("seller1").innerHTML = out[0].seller
          document.getElementById("seller2").innerHTML = out[1].seller
          document.getElementById("seller3").innerHTML =out[2].seller
          document.getElementById("seller4").innerHTML = out[3].seller
          document.getElementById("seller5").innerHTML = out[4].seller

          document.getElementById("price1").innerHTML = out[0].price
          document.getElementById("price2").innerHTML = out[1].price
          document.getElementById("price3").innerHTML =out[2].price
          document.getElementById("price4").innerHTML = out[3].price
          document.getElementById("price5").innerHTML = out[4].price
        }
    })
}
