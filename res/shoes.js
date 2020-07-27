if(localStorage['price'] == 300){
    fetch("http://127.0.0.1:5000/api/men/shoes/900")
    .then(res=>res.json())
    .then((out)=>{
        for(i=0;i<3;i++){
          document.getElementById("sh-im1").src = out[0].image
          document.getElementById("sh-im2").src = out[1].image
          document.getElementById("sh-im3").src = out[2].image
          document.getElementById("sh-im4").src = out[3].image
          document.getElementById("sh-im5").src = out[4].image

          document.getElementById("sh-name1").innerHTML = out[0].name
          document.getElementById("sh-name2").innerHTML = out[1].name
          document.getElementById("sh-name3").innerHTML =out[2].name
          document.getElementById("sh-name4").innerHTML = out[3].name
          document.getElementById("sh-name5").innerHTML = out[4].name

          document.getElementById("sh-seller1").innerHTML = out[0].seller
          document.getElementById("sh-seller2").innerHTML = out[1].seller
          document.getElementById("sh-seller3").innerHTML =out[2].seller
          document.getElementById("sh-seller4").innerHTML = out[3].seller
          document.getElementById("sh-seller5").innerHTML = out[4].seller

          document.getElementById("sh-price1").innerHTML = out[0].price
          document.getElementById("sh-price2").innerHTML = out[1].price
          document.getElementById("sh-price3").innerHTML =out[2].price
          document.getElementById("sh-price4").innerHTML = out[3].price
          document.getElementById("sh-price5").innerHTML = out[4].price
        }
    })
}
else if(localStorage['price'] == 500){
    fetch("http://127.0.0.1:5000/api/men/shirts/max")
    .then(res=>res.json())
    .then((out)=>{
      for(i=0;i<3;i++){
          document.getElementById("sh-im1").src = out[0].image
          document.getElementById("sh-im2").src = out[1].image
          document.getElementById("sh-im3").src = out[2].image
          document.getElementById("sh-im4").src = out[3].image
          document.getElementById("sh-im5").src = out[4].image

          document.getElementById("sh-name1").innerHTML = out[0].name
          document.getElementById("sh-name2").innerHTML = out[1].name
          document.getElementById("sh-name3").innerHTML =out[2].name
          document.getElementById("sh-name4").innerHTML = out[3].name
          document.getElementById("sh-name5").innerHTML = out[4].name

          document.getElementById("sh-seller1").innerHTML = out[0].seller
          document.getElementById("sh-seller2").innerHTML = out[1].seller
          document.getElementById("sh-seller3").innerHTML =out[2].seller
          document.getElementById("sh-seller4").innerHTML = out[3].seller
          document.getElementById("sh-seller5").innerHTML = out[4].seller

          document.getElementById("sh-price1").innerHTML = out[0].price
          document.getElementById("sh-price2").innerHTML = out[1].price
          document.getElementById("sh-price3").innerHTML =out[2].price
          document.getElementById("sh-price4").innerHTML = out[3].price
          document.getElementById("sh-price5").innerHTML = out[4].price
        }
    })
}
