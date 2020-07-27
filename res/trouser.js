if(localStorage['price'] == 300){
    fetch("http://127.0.0.1:5000/api/men/trouser/500")
    .then(res=>res.json())
    .then((out)=>{
          document.getElementById("t-im1").src = out[0].image
          document.getElementById("t-im2").src = out[1].image
          document.getElementById("t-im3").src = out[2].image
          document.getElementById("t-im4").src = out[3].image
          document.getElementById("t-im5").src = out[4].image

          document.getElementById("t-name1").innerHTML = out[0].name
          document.getElementById("t-name2").innerHTML = out[1].name
          document.getElementById("t-name3").innerHTML =out[2].name
          document.getElementById("t-name4").innerHTML = out[3].name
          document.getElementById("t-name5").innerHTML = out[4].name

          document.getElementById("t-seller1").innerHTML = out[0].seller
          document.getElementById("t-seller2").innerHTML = out[1].seller
          document.getElementById("t-seller3").innerHTML =out[2].seller
          document.getElementById("t-seller4").innerHTML = out[3].seller
          document.getElementById("t-seller5").innerHTML = out[4].seller

          document.getElementById("t-price1").innerHTML = out[0].price
          document.getElementById("t-price2").innerHTML = out[1].price
          document.getElementById("t-price3").innerHTML =out[2].price
          document.getElementById("t-price4").innerHTML = out[3].price
          document.getElementById("t-price5").innerHTML = out[4].price
        }
    )}

else if(localStorage['price'] == "Max"){
    fetch("http://127.0.0.1:5000/api/men/trouser/max")
    .then(res=>res.json())
    .then((out)=>{
      for(i=0;i<3;i++){
          document.getElementById("t-im1").src = out[0].image
          document.getElementById("t-im2").src = out[1].image
          document.getElementById("t-im3").src = out[2].image
          document.getElementById("t-im4").src = out[3].image
          document.getElementById("t-im5").src = out[4].image

          document.getElementById("t-name1").innerHTML = out[0].name
          document.getElementById("t-name2").innerHTML = out[1].name
          document.getElementById("t-name3").innerHTML =out[2].name
          document.getElementById("t-name4").innerHTML = out[3].name
          document.getElementById("t-name5").innerHTML = out[4].name

          document.getElementById("t-seller1").innerHTML = out[0].seller
          document.getElementById("t-seller2").innerHTML = out[1].seller
          document.getElementById("t-seller3").innerHTML =out[2].seller
          document.getElementById("t-seller4").innerHTML = out[3].seller
          document.getElementById("t-seller5").innerHTML = out[4].seller

          document.getElementById("t-price1").innerHTML = out[0].price
          document.getElementById("t-price2").innerHTML = out[1].price
          document.getElementById("t-price3").innerHTML =out[2].price
          document.getElementById("t-price4").innerHTML = out[3].price
          document.getElementById("t-price5").innerHTML = out[4].price
        }
    })
}