window.onload = function(){
  var holdingKnife = false;
  var holdingTomato = false;
  var addedTomatoSauce = false;
  var holdingCheese = false;
  var addedCheese = false;
  var holdingChampignon = false;
  var addedChampignon = false;
  var holdingWorst = false;
  var addedWorst = false;
  var makingDone = false;
  var holdingPizza = false;
  var pizzaInOven = false;
  var holdingBlackPizza = false;
  var burned = false;
  var theNeedtospread = false;
  var holdingSpoon = false;
  var holdingBloem = false;
  var holdingZout = false;
  var holdingGist = false;
  var gistInBowl = false;
  var zoutInBowl = false;
  var bloemInBowl = false;
  var kraanAan = false;
  var holdingBowl = false;
  var watered = false;
  var deegGemaakt = false;
  var holdingDeegroller = false;
  var deegHalf = false;
  var theNeedtospreadDeeg = false;


  var knife = document.getElementById("knife");
  var camera = document.getElementById("camera");
  var cursor = document.getElementById('cursor');
  var tomato = document.getElementById('tomato');
  var knifeHolder = document.getElementById('knifeHolder');
  var knifeBundle = document.getElementById('knifeBundle');
  var pizza = document.getElementById('pizza');
  var cheese = document.getElementById('cheese');
  var mushroom = document.getElementById('mushroom');
  var worst = document.getElementById("worst");
  var toggleHeat = document.getElementById('toggleHeat');
  var placer = document.getElementById('placer');
  var toggleOven = document.getElementById('toggleOven');
  var geluid = document.getElementById("geluid");
  var trashcan = document.getElementById('trashcan');
  var blackPizza = document.getElementById('blackPizza')

  //geluiden goed & fout


  var timer;
  var timer2;
  var timeInc = 0;
  var heatInc = 0;
  var pizzaKind = 0 // margherita=0, funghi=1, salami=2, speciale=3
  var time = 2000;
  var ingredientenPizza = ""

  var heatValues = [250, 200];



  function checkReady() {//margherita
    if(pizzaKind == 0){
      if (addedCheese && addedTomatoSauce){
        $("#instructies").attr( "value", "Now that we are done with making th pizza, put it into the oven on your left.");
        document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
        makingDone = true;
        light(0);
      }
    }
    else if (pizzaKind == 1) {//funghi
      if (addedCheese && addedTomatoSauce && addedChampignon){
        $("#instructies").attr( "value", "Now that we are done with making th pizza, put it into the oven on your left.");
        document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
        makingDone = true;
        light(0);
      }
    }
    else if (pizzaKind == 2) {//salami
      if (addedCheese && addedTomatoSauce && addedWorst){
        $("#instructies").attr( "value", "Now that we are done with making th pizza, put it into the oven on your left.");
        document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
        makingDone = true;
        light(0);
      }
    }
    else if (pizzaKind == 3) {//speciale
      if (addedCheese && addedTomatoSauce && addedWorst && addedChampignon){
        makingDone = true;
        $("#instructies").attr( "value", "Now that we are done with making th pizza, put it into the oven on your left.");
        document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
        light(0);
      }
    }
  }

  function dropKnife(){
      $("#knife").remove();
      document.getElementById('knifeBundle').appendChild(knife);
      knife.setAttribute("position", "0.010 1.240 0.580");
      knife.setAttribute("rotation", "0 180 80");
      holdingKnife = false;
  };

  function walk(){
    document.getElementById('geluid').innerHTML = ('<a-sound src="url(sounds/ratatouille.mp3)" autoplay="true" loop="true" volume="2"> </a-sound>');
    // camera.setAttribute("position", "17 3 -1");
    // camera.setAttribute("rotation", "0 270 0")
    var animationCamera1 = $("<a-animation attribute='position' id='animationCamera1' dur='2000' fill='forwards' to='-12 4 0' repeat='0'></a-animation> ")
    var animationCamera2 = $("<a-animation attribute='position' id='animationCamera2' dur='5000' fill='forwards' to='13 4 -1' repeat='0'></a-animation> ");
    $("#camera").append(animationCamera1);
    setTimeout(function(){
      $("#animationCamera1").remove();
      $("#camera").append(animationCamera2);
    },2000);
    setTimeout(function(){
      $("#animationCamera2").remove();
    },7000);
  }

  document.getElementById('boek2').addEventListener("mouseenter", function(){
    startLoader();
    timer = setTimeout(function(){
      $('#boek2').remove();
      var openboek = $("<a-entity collada-model='#openbookModal' id='openbook' position= '-2.5 -0.3 -5' rotation='30 -90 0' scale='0.2 0.3 0.3'></a-entity>");
      $("#pizzaKitchen").append(openboek);
      var planeMargherita = $("<a-entity id='planeMargherita' position='1.45 0.4 -0.928' rotation='-85 0 0'> <a-plane  rotation='-4.9 -5.06 -2.160'  color='#D2d2d2' width='2.5' height='1'></a-plane></a-entity>");
      var planeFunghi = $("<a-entity  id='planeFunghi' position='1.45 0.4 0.9' rotation='-85 0 0'> <a-plane  rotation='-4.9 -5.06 -2.160' color='#D2d2d2' width='2.5' height='1'></a-plane></a-entity>"); //#D2d2d2
      var planeSalami = $("<a-entity  id='planeSalami' position='-1.35 0.4 0.9' rotation='-85 0 0'> <a-plane rotation='-4.9 5.06 2.160'  color='#D2d2d2' width='2.5' height='1'></a-plane></a-entity>");
      var planeSpeciale = $("<a-entity id='planeSpeciale' position='-1.35 0.4 -0.928' rotation='-85 0 0'> <a-plane  rotation='-4.9 5.06 2.160'  color='#D2d2d2' width='2.5' height='1'></a-plane></a-entity>");
      var textMargherita = $("<a-text id='textMargherita' value='Margherita' color='black'  position='0.4 0.5 -1.05' scale='1.8 1.8 1.8' rotation='-85 0 0'></a-text>");
      var textFunghi = $("<a-text id='textFunghi' value='Funghi' color='black' position='0.6 0.6 1' scale='1.8 1.8 1.8' rotation='-85 0 0'></a-text>")
      var textSalami = $("<a-text id='textSalami' value='Salami' color='black' position='-2. 0.6 1' scale='1.8 1.8 1.8' rotation='-85 0 0'></a-text>") //rotation -92.74 -90 90
      var textSpeciale = $("<a-text id='textSpeciale' value='Speciale' color='black' position='-2 0.5 -1.050' scale='1.8 1.8 1.8' rotation='-85 0 0'></a-text>")
      $('#openbook').append(planeMargherita, planeFunghi, planeSalami, planeSpeciale);
      $('#openbook').append(textMargherita, textFunghi, textSalami, textSpeciale);

      function changeIngredients(){
        $("#ingredientenText").attr("value", ingredientenPizza);
      }

      //margherita
      document.getElementById('planeMargherita').addEventListener("mouseenter", function(){
        startLoader();
        timer2 = setTimeout(function(){
          pizzaKind = 0;
          ingredientenPizza = "Ingredients: \n \n cheese \n  tomatosauce \n  0.5 zakje gist \n  250gr bloem \n   0.5 theeleper zout \n  150ml water";
          changeIngredients();
          walk();
        },time);
      });
      document.getElementById('planeMargherita').addEventListener("mouseleave", function(){
        clearTimeout(timer2);
        stopLoader();
      });

      //funghi
      document.getElementById('planeFunghi').addEventListener("mouseenter", function(){
        startLoader();
        timer2 = setTimeout(function(){
          pizzaKind = 1;
          ingredientenPizza = "Ingredienten: \n \n cheese \n  tomatosauce \n  mushroom \n  half a bag of yeast \n  250gr flower \n   half a teaspoon of salt \n  150ml water";
          changeIngredients();
          walk();
        },time);
      });
      document.getElementById('planeFunghi').addEventListener("mouseleave", function(){
        clearTimeout(timer2);
        stopLoader();
      });

      //salami
      document.getElementById('planeSalami').addEventListener("mouseenter", function(){
        startLoader();
        timer2 = setTimeout(function(){
          pizzaKind = 2;
          ingredientenPizza = " Ingredienten: \n \n cheese \n  tomatosauce \n  salami \n  half a bag of yeast \n  250gr flower \n   half a teaspoon of salt \n  150ml water";
          changeIngredients();
          walk();
        },time);
      });
      document.getElementById('planeSalami').addEventListener("mouseleave", function(){
        clearTimeout(timer2);
        stopLoader();
      });

      //speciale
      document.getElementById('planeSpeciale').addEventListener("mouseenter", function(){
        startLoader();
          timer2 = setTimeout(function(){
          pizzaKind = 3;
          ingredientenPizza = "Ingredienten: \n \n  cheese \n  tomatosauce \n  salami \n  mushroom \n  half a bag of yeast \n  250gr flower \n   half a teaspoon of salt \n  150ml water";
          changeIngredients();
          walk();
        },time);
      });
      document.getElementById('planeSpeciale').addEventListener("mouseleave", function(){
        clearTimeout(timer2);
        stopLoader();
      });
    },time);
  });
  document.getElementById('boek2').addEventListener("mouseleave", function(){
    clearTimeout(timer);
    stopLoader();
  });

  //pickup spoon
   spoon.addEventListener("mouseenter", function() {
     startLoader();
     timer = setTimeout(function(){
       holdingSpoon = true;
       document.getElementById('cursor').appendChild(spoon);
       spoon.setAttribute("position", "0.7 0.2 -0.5");
       spoon.setAttribute("rotation", "30 -60 0");
     }, time);
   });
   spoon.addEventListener("mouseleave", function(){
     clearTimeout(timer);
     stopLoader();
   });
   // drop spoon
   cup.addEventListener("mouseenter", function(){
     startLoader();
     timer = setTimeout(function(){
       holdingSpoon = false;
       document.getElementById('lepelBundle').appendChild(spoon);
       spoon.setAttribute("position", "0.336 1.44 -3.85");
       spoon.setAttribute("rotation", "0 180 -90");
     }, time);
   });
   cup.addEventListener("mouseleave", function(){
     stopLoader();
     clearTimeout(timer);
   });

     // Pizzadeeg maken
    //bloem pakken
    bloem.addEventListener("mouseenter", function() {
      startLoader();
      timer = setTimeout(function(){
        document.getElementById('cursor').appendChild(bloem);
        bloem.setAttribute("position", "2 -1.420 -1.35");
        bloem.setAttribute("rotation", "0 -40 0");
        holdingBloem = true;
      }, time);
    });
    bloem.addEventListener("mouseleave", function(){
      clearTimeout(timer);
      stopLoader();
    });
    //Gist pakken
    gist.addEventListener("mouseenter", function() {
      startLoader();
      timer = setTimeout(function(){
        document.getElementById('cursor').appendChild(gist);
        gist.setAttribute("position", ".5 0.33 -0.25");
        gist.setAttribute("rotation", "0 -40 0");
        holdingGist = true;
      }, time);
    });
    gist.addEventListener("mouseleave", function(){
      clearTimeout(timer);
      stopLoader();
    });
    //zout pakken
    zout.addEventListener("mouseenter", function() {
      startLoader();
      timer = setTimeout(function(){
        document.getElementById('cursor').appendChild(zout);
        zout.setAttribute("position", "0.5 0.25 -0.5");
        zout.setAttribute("rotation", "0 -90 0");
        holdingZout = true;
      }, time);
    });
    zout.addEventListener("mouseleave", function(){
      clearTimeout(timer);
      stopLoader();
    });

    //ingredienten in de kom doen
    bowl.addEventListener("mouseenter", function(){
      startLoader();
      if (gistInBowl && zoutInBowl && bloemInBowl && watered == false){
           timer = setTimeout(function(){
             document.getElementById('cursor').appendChild(bowl);
             bowl.setAttribute("position","-0.6 -0.75 -1.5");
             holdingBowl = true;
          }, time);
        }
      else if (holdingBloem == true){
         timer = setTimeout(function(){
           document.getElementById('bowl').appendChild(bloemBowl);
           bloemBowl.setAttribute("position","0 0.3 0");
           document.getElementById('pizzaKitchen').appendChild(bloem);
           bloem.setAttribute("position","15 15 15");
           bloemInBowl = true;
           holdingBloem = false;
        }, time);
      }
      else if (holdingGist == true){
         timer = setTimeout(function(){
           document.getElementById('bowl').appendChild(gistBowl);
           gistBowl.setAttribute("position","0 0.32 0");
           document.getElementById('pizzaKitchen').appendChild(gist);
           gist.setAttribute("position","15 15 15");
           gistInBowl = true;
           holdingGist = false;
        }, time);
        }
      else if (holdingZout && gistInBowl){
         timer = setTimeout(function(){
           document.getElementById('bowl').appendChild(zoutBowl);
           zoutBowl.setAttribute("position","0 0.32 0");
           document.getElementById('pizzaKitchen').appendChild(zout);
           zout.setAttribute("position","15 15 15");
           zoutInBowl = true;
           holdingZout = false;
           $("#instructies").attr( "value", "Now, add water. \n Pickup the bowl and turn on the faucet. \n Don't forget to turn of the faucet.");
           document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
        }, time);
      }
      else if (holdingSpoon && deegHalf){
       timer = setTimeout(function(){
         document.getElementById('bowl').appendChild(spoon);
         spoon.setAttribute("position", "0 0.6 0");
         spoon.setAttribute("rotation", "35 0 90");
         document.getElementById('roeren').appendChild(spoon);
         spoon.setAttribute("position", "0 0 0");
         roeren.setAttribute("visible", "true");
         roeren2.setAttribute("repeat", "6");
         deegGemaakt = true;
         removeBowl();
       }, time);
      }
    });
    bowl.addEventListener("mouseleave", function() {
      stopLoader();
      clearTimeout(timer);
    });



    // water animatie
  kraan.addEventListener("mouseenter", function(){
     startLoader();
     timer = setTimeout(function(){
       if (kraanAan == false){
           putBackBowl();
         document.getElementById('kraan').appendChild(water);
         water.setAttribute("position","0.3 -0.19 0.075");
         document.getElementById('geluid4').innerHTML = ('<a-sound src="url(sounds/water.mp3)" autoplay="true" volume="1" loop="true"> </a-sound>');
         kraanAan = true;
       }
       else if (kraanAan) {
         putBackBowl();
         document.getElementById("pizzaKitchen").appendChild(water);
         water.setAttribute("position", "15 15 15")
         document.getElementById('geluid4').innerHTML = ('<a-sound src= url(sounds/water.mp3)" autoplay="false" volume="2" loop="true"> </a-sound>');
         kraanAan = false;
       }
     }, time);
   })
   kraan.addEventListener("mouseleave", function(){
     stopLoader();
     clearTimeout(timer);
   });

   function removeBowl(){
     if(deegGemaakt){
       setTimeout(function(){
         document.getElementById('lepelBundle').appendChild(spoon);
         spoon.setAttribute("position", "0.336 1.44 -3.85");
         spoon.setAttribute("rotation", "0 180 -90");
         bowl.setAttribute("position", "15 15 15");
         $("#pizza").attr("position", "14.75 -0.20 -3");
         $("#instructies").attr( "value", "Get the rolling pin and roll out the dough.");
         document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
         theNeedtospreadDeeg = true;
         holdingSpoon = false;
       },3000);
       }
      }

   function putBackBowl(){
     if(holdingBowl){
        document.getElementById('pizzaKitchen').appendChild(bowl);
        bowl.setAttribute("position", "14.84 -0.89 1.95")
        document.getElementById('bowl').appendChild(waterdeeg);
        waterdeeg.setAttribute("position","0 0.34 0");
        holdingBowl = false;
        watered = true;
        deegHalf = true;
        setTimeout(function(){
          bowl.setAttribute("position", "14.7 -0.3 -3.4");
          $("#instructies").attr( "value", "Get the spoon and stir the bowl.");
          document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
        },3000);
      }
    }

  // pickup knife
  knife.addEventListener("mouseenter", function() {
    startLoader();
    timer = setTimeout(function(){
      document.getElementById('cursor').appendChild(knife);
      knife.setAttribute("position", "0.7 0.2 -0.5");
      knife.setAttribute("rotation", "30 -60 0");
      holdingKnife = true;
    }, time);
  });
  knife.addEventListener("mouseleave", function(){
    clearTimeout(timer);
    stopLoader();
  });

  // drop knife if Hover
  knifeHolder.addEventListener("mouseenter", function(){
    startLoader();
    timer = setTimeout(function(){
      $("#knife").remove();
      document.getElementById('knifeBundle').appendChild(knife);
      knife.setAttribute("position", "0.010 1.240 0.580");
      knife.setAttribute("rotation", "0 180 80");
      holdingKnife = false;
    }, time);
  });
  knifeHolder.addEventListener("mouseleave", function(){
    stopLoader();
    clearTimeout(timer);
  });

  // create tomato slice
  tomato.addEventListener("mouseenter", function() {
    startLoader();
    if(holdingKnife == false && deegGemaakt){
       timer = setTimeout(function(){
         $("#cursor").append($("#tomato"));
         $("#tomato").attr("position", "0.5 0 0");
         holdingTomato = true;
       }, time);
    }
   });
   tomato.addEventListener("mouseleave", function() {
     stopLoader();
     clearTimeout(timer);
   });

   document.getElementById('deegrollerHolder').addEventListener("mouseenter", function(){
     startLoader();
      if (theNeedtospreadDeeg){
        timer = setTimeout(function(){
          $("#cursor").append($("#deegrollerHolder"));
          $("#deegrollerHolder").attr("position", "-0.50 0.292 -4.628");
          holdingDeegroller = true;
        }, time);
      }
   });
   document.getElementById('deegroller').addEventListener("mouseenter", function(){
     stopLoader();
     clearTimeout(timer);
   });

   //light
   function light(kleur){
      if(kleur == 0 ){
        $("#glow").attr('glow','color:#007401'); //groen
        document.getElementById('geluid6').innerHTML = ('<a-sound src= url(sounds/true.mp3)" autoplay="true" volume="2"> </a-sound>');
      }
      else {
        $("#glow").attr('glow','color:#f90000') //rood
        document.getElementById('geluid5').innerHTML = ('<a-sound src= url(sounds/false.mp3)" autoplay="true" volume="2"> </a-sound>');
      }
      $("#glow").attr('glow','enabled:true');
      setTimeout(function(){
        $("#glow").attr('glow', 'enabled:false');
      },time);
    }

   //add tomato
   function addTomatosauce(){
     document.getElementById('geluid2').innerHTML = ('<a-sound src="url(sounds/blik.mp3)" autoplay="true" volume="3"> </a-sound>');
     $("#ingredient1").attr("visible", "true");
     $("#ingredient1").attr("src", "texture/sauce.jpg");
     $("#ingredient1").attr("radius", "0.2");
     $("#pizzaKitchen").append($("#tomato"));
     $("#tomato").attr("position", "15 15 15");
     $("#instructies").attr( "value", "Get the spoon and spread out the tomatosauce.");
     document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
     holdingTomato = false;
     addedTomatoSauce = true;
     theNeedtospread = true;
     // addedTomatoSauce = true;
   }
   // add cheese
   function addCheese(){
     $("#pizzaKitchen").append($("#Cheeseslice"));
     $("#Cheeseslice").attr("position", "15 15 15");
     $("#ingredient1").attr("visible", "true");
     $("#ingredient1").attr("src", "texture/uncookedCheeseAndSauce.jpg");
     holdingCheese = false;
     addedCheese = true;
     checkReady();
   }
   // add mushrooms
   function addMushroom(){
     $("#pizzaKitchen").append($("#mushroomSlice"));
     $("#mushroomSlice").attr("position", "15 15 15");
     var mushroomSliceMulti = $("<a-entity collada-model='#mushroomSliceMultiModal' id='mushroomSliceMulti' scale='0.35 0.35 0.35' position=' 0 0 -0.15 '></a-entity>");
     $("#pizza").append(mushroomSliceMulti);
     addedChampignon = true;
     holdingChampignon = false;
     checkReady();
   }
   // add Worst
   function addWorst(){
     $("#pizzaKitchen").append($("#worstSlice"));
     $("#worstSlice").attr("position", "15 15 15");
     var worstSliceMulti = $("<a-entity collada-model='#worstSliceMultiModal' id='worstSliceMulti' scale='0.2 0.2 0.2' position='-0.20 -0.05 0.10' </a-entity>");
     $("#pizza").append(worstSliceMulti);
     addedWorst = true;
     holdingWorst = false;
     checkReady();
   }
   // reset mushroom
   function resetTomato(){
     holdingTomato = false;
     $("#tomato").attr("position", "15 -0.3 -0.5");
   }
   function resetMushroom(){
     $("#pizzaKitchen").append($("#mushroomSlice"));
     $("#mushroomSlice").attr("position", "15 15 15");
     holdingChampignon = false;
     $("#mushroom").attr("position", "15 -0.20 0");
   }
   // reset Worst
   function resetWorst(){
     $("#pizzaKitchen").append($("#worstSlice"));
     $("#worstSlice").attr("position", "15 15 15");
     holdingWorst = false;
     $("#worst").attr("position", "15 -0.25 -0.2");
   }
   // reset cheese
   function resetCheese(){
     $("#pizzaKitchen").append($("#Cheeseslice"));
     $("#Cheeseslice").attr("position", "15 15 15");
     $("#cheeseCut").remove();
     holdingCheese = false;
     $("#cheese").attr("position", "15 0.15 -0.7");
   }
   function resetPizza(){
     $("#Pizza").attr("position", "14.75 -0.20 -3");
     $("#ingredient1").attr("visible", "false");
     $("#ingredient1").attr("src", "");
   }

   function startLoader(){
     document.querySelector('#cursor').emit('pulse');
   }
   function stopLoader(){
     document.querySelector('#cursor').emit('stopPulse');
     document.querySelector('#cursor').emit('reset');
   }

   function fullReset(){
     $("#pizzaKitchen").append($("#pizza"));
     $("#pizza").attr( "position", "14.75 -0.20 -3")
     pizzaInOven = true;
   }

  pizza.addEventListener("mouseenter", function() {
     startLoader();
     if (holdingDeegroller){
       timer = setTimeout(function(){
         document.querySelector("#pizzadeegklaar").emit("deegroller");
         theNeedtospread = false;
         setTimeout(function(){
           $("#pizzaKitchen").append($("#deegrollerHolder"));
           $("#deegrollerHolder").attr("position", "14.362 -0.529 -4.408");
         },1000);
         $("#instructies").attr( "value", "Now it is time for the tomatosauce. Pickup the can of tomatosoup.");
         document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
         holdingDeegroller = false;
         theNeedtospreadDeeg = false;
       }, time);
     }
     else if (theNeedtospread == true && holdingSpoon == true ){
        timer = setTimeout(function(){
          document.querySelector("#ingredient1").emit("spread");
          $("#instructies").attr( "value", "Now comes the cheese. Put back the sppon, then pick up the knife and cut the cheese with it.");
          document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
          theNeedtospread = false;
        }, time);
      }
     else if (makingDone && holdingPizza == false && pizzaInOven == false){
       timer = setTimeout(function(){
         $('#cursor').append($("#pizza"));
         pizza.setAttribute("rotation", "45 0 0");
         pizza.setAttribute("position", "0.65 0 -0.5");
         holdingPizza = true;
        }, time);
     }
     else if (pizzaKind == 0) {//margherita
       if(holdingTomato){
         timer = setTimeout(function(){
           addTomatosauce();
         }, time);;
       }
       else if (addedTomatoSauce && holdingCheese) {
         timer = setTimeout(function(){
           addCheese();
         }, time);
       }
       else{
         if (holdingChampignon){
           timer = setTimeout(function(){
             resetMushroom();
             light(1);
           }, time);
         }
         else if (holdingWorst){
           timer = setTimeout(function(){
             resetWorst();
             light(1);
           }, time);
         }
         else if (holdingCheese && addedTomatoSauce == false ){
           timer = setTimeout(function(){
             resetCheese();
             light(1);
           }, time);

         }
       }
     }
     else if (pizzaKind == 1) {//funghi
       if(holdingTomato){
         timer = setTimeout(function(){
           addTomatosauce();
         }, time);
       }
       else if (addedTomatoSauce && holdingCheese) {
         timer = setTimeout(function(){
           addCheese();
           $("#instructies").attr( "value", "Cut the mushrooms and put it on the pizza.");
           document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
         }, time);
       }
       else if (holdingChampignon && addedCheese && addedTomatoSauce){
         timer = setTimeout(function(){
           addMushroom();
         }, time);
       }
       else {
         if (holdingWorst){
           timer = setTimeout(function(){
             resetWorst();
             light(1);
           }, time);
         }
         else if (holdingCheese && addedTomatoSauce == false) {
           timer = setTimeout(function(){
             resetCheese();
             light(1);
           }, time);
         }
         else if (holdingChampignon && (addedTomatoSauce == false || addedCheese == false)){
           timer = setTimeout(function(){
             resetMushroom();
             light(1);
           }, time);
         }
       }
     }
     else if (pizzaKind == 2) {//salami
       if(holdingTomato){
          timer = setTimeout(function(){
            addTomatosauce();
          }, time);
       }
       else if (addedTomatoSauce && holdingCheese) {
         timer = setTimeout(function(){
           $("#instructies").attr( "value", "Cut the sausage and put it on the pizza.");
           document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
            addCheese();
         }, time);
       }
       else if (holdingWorst && addedCheese && addedTomatoSauce){
         timer = setTimeout(function(){
            addWorst();
         }, time);
       }
       else {
         if (holdingChampignon){
            timer = setTimeout(function(){
              resetMushroom();
              light(1);
            }, time);
         }
         else if (holdingCheese && addedTomatoSauce == false) {
            timer = setTimeout(function(){
             resetCheese();
             light(1);
            }, time);
         }
         else if (holdingWorst && (addedTomatoSauce == false || addedCheese == false)){
            timer = setTimeout(function(){
             resetWorst();
             light(1);
            }, time);
         }
       }
     }
     else if (pizzaKind == 3) {//speciale
       if(holdingTomato){
          timer = setTimeout(function(){
           addTomatosauce();
          }, time);
       }
       else if (addedTomatoSauce && holdingCheese) {
          timer = setTimeout(function(){
            $("#instructies").attr( "value", "Cut the sausage and put it on the pizza.");
            document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
           addCheese();
          }, time);

       }
       else if (holdingWorst && addedCheese && addedTomatoSauce) {
          timer = setTimeout(function(){
           addWorst();
           $("#instructies").attr( "value", "Cut the mushrooms and put it on the pizza.");
           document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
          }, time);
       }
       else if (holdingChampignon && addedCheese && addedWorst && addedTomatoSauce) {
          timer = setTimeout(function(){
           addMushroom();
          }, time);
       }
       else{
         if (holdingCheese && addedTomatoSauce == false) {
            timer = setTimeout(function(){
             resetCheese();
             light(1);
            }, time);
         }
         else if (holdingWorst && (addedTomatoSauce == false || addedCheese == false)){
            timer = setTimeout(function(){
             resetWorst();
             light(1);
            }, time);
         }
         else if (holdingChampignon && (addedCheese == false || addedWorst == false || addedTomatoSauce == false)) {
            timer = setTimeout(function(){
             resetMushroom();
             light(1);
            }, time);

         }
       }
     }
  });
    pizza.addEventListener("mouseleave", function() {
      stopLoader();
      clearTimeout(timer);
    });

    cheese.addEventListener("mouseenter", function(){
      startLoader();
      if (holdingKnife == true && makingDone == false  && deegGemaakt){
         timer = setTimeout(function(){
           document.getElementById('geluid3').innerHTML = ('<a-sound src= url(sounds/chopping.mp3)" autoplay="true" volume="2"> </a-sound>');
            $("#cheese").attr("position", "15 15 15");
            // moet cheesecut positie nog aanpassen
            $("#Cheeseslice").attr("position", "-0.2 0.2 0" );
            $("#cheeseCut").attr("position", "15 0.15 -0.7" );
            $('#cursor').append($("#Cheeseslice"));
            $("#pizzaKitchen").append($("#cheeseCut"));
            holdingCheese = true;
            dropKnife();
        }, time);
      }
    });
    cheese.addEventListener("mouseleave", function() {
      stopLoader();
      clearTimeout(timer);
    });

    mushroom.addEventListener("mouseenter", function(){
      startLoader();
      if (holdingKnife == true && makingDone == false  && deegGemaakt){
         timer = setTimeout(function(){
           document.getElementById('geluid3').innerHTML = ('<a-sound src= url(sounds/chopping.mp3)" autoplay="true" volume="2"> </a-sound>');
          $("#mushroom").attr("position", "15 15 15");
          $("#mushroomSlice").attr("position", "0.5 0 0");
          $("#cursor").append($("#mushroomSlice"));
          dropKnife()
          holdingKnife = false;
          holdingChampignon = true;
        }, time);
        // die bug van het opnieuw afspelen kwam doordat het element in js aangemaakt werd want nu het in html al bestaat is de bug weg

      }
    });
    mushroom.addEventListener("mouseleave", function() {
      stopLoader();
      clearTimeout(timer);
    });

    worst.addEventListener("mouseenter", function(){
      startLoader();
      if (holdingKnife == true && makingDone == false  && deegGemaakt){
         timer = setTimeout(function(){
           document.getElementById('geluid3').innerHTML = ('<a-sound src= url(sounds/chopping.mp3)" autoplay="true" volume="2"> </a-sound>');
          $("#worst").attr("position", "15 15 15");
          dropKnife();
          $("#worstSlice").attr("position", "0.5 0 0")
          $("#cursor").append($("#worstSlice"));
          holdingKnife = false;
          holdingWorst = true;
        }, time);
      }
    });
    worst.addEventListener("mouseleave", function() {
      stopLoader();
      clearTimeout(timer);
    });

    toggleHeat.addEventListener("mouseenter", function(){
      startLoader();
      timer = setTimeout(function(){
        if (heatInc >= 1){
          heatInc = 0;
        } else{
          heatInc++;
        }
        $("#heat").attr("value", "temperatuur: " + heatValues[heatInc] + " graden" );
      },time);
    });
    toggleHeat.addEventListener("mouseleave", function(){
      clearTimeout(timer);
      stopLoader();
    });


    placer.addEventListener("mouseenter", function(){
      startLoader();
      timer = setTimeout(function(){
        if(holdingPizza && !pizzaInOven){
          $("#pizzaKitchen").append(pizza);
          $("#pizza").attr("position", "11.5 0.5 -4");
           document.querySelector('#pizza').emit('start');
           $("#instructies").attr( "value", " The blue button is to change the temperature of the oven. The red button is to turn on the oven. \n Now choose if you want to cook the pizza on 250 or 200 degrees. Watchout, you can burn your pizza!");
           document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
          setTimeout(function(){
            holdingPizza = false;
          },time);
          pizzaInOven = true;

      		var xhttp = new XMLHttpRequest();
      		if(pizzaKind == 3){
      			xhttp.onreadystatechange = function(){
      				if(this.readyState == 4 && this.status == 200){
      					var response = JSON.parse(this.responseText);
                var tekst = $("<a-text id='text5' value='pizza Special: " + response.product.nutriments.energy + " kcal' color='white'></a-tekst");
      					$('#holder').append(tekst);
      				}
      		  }

      		     xhttp.open("GET", 'https://world.openfoodfacts.org/api/v0/product/4001724819103/ristorante-pizza-speciale-dr-oetker' , true);
      		     xhttp.send();
      		  }
          else if(pizzaKind == 1){
            xhttp.onreadystatechange = function(){
      				if(this.readyState == 4 && this.status == 200){
      					var response = JSON.parse(this.responseText);
                var tekst = $("<a-text id='text5' value='pizza Funghi: " + response.product.nutriments.energy + " kcal' color='white'></a-tekst");
      					$('#holder').append(tekst);
      				}
      		  }

               xhttp.open("GET", 'https://world.openfoodfacts.org/api/v0/product/4001724019299/pizza-tradizionale-funghi-bianca-dr-oetker' , true);

      		     xhttp.send();
          }
          else if(pizzaKind == 2){
            xhttp.onreadystatechange = function(){
              if(this.readyState == 4 && this.status == 200){
                var response = JSON.parse(this.responseText);
                var tekst = $("<a-text id='text5' value='pizza Salami: " + response.product.nutriments.energy + " kcal' color='white'></a-tekst");
                $('#holder').append(tekst);
              }
            }

               xhttp.open("GET", 'https://world.openfoodfacts.org/api/v0/product/3560070258604/pizza-pate-fine-speciale-salami-mozzarella-champignon-carrefour' , true);

               xhttp.send();
          }
          else if(pizzaKind == 0){
            xhttp.onreadystatechange = function(){
              if(this.readyState == 4 && this.status == 200){
                var response = JSON.parse(this.responseText);
                var tekst = $("<a-text id='text5' value='pizza Margherita: " + response.product.nutriments.energy + " kcal' color='white'></a-tekst");
                $('#holder').append(tekst);
              }
            }

               xhttp.open("GET", 'https://world.openfoodfacts.org/api/v0/product/4001724819103/ristorante-pizza-margherita-dr-oetker' , true);

               xhttp.send();
          }
        }
      },time);
    });
    placer.addEventListener("mouseleave", function(){
      clearTimeout(timer);
      stopLoader();
    });


    // oven interaction
    toggleOven.addEventListener("mouseenter", function(){
      startLoader();
      timer = setTimeout(function(){
        if(pizzaInOven){
          // burn the pizza
          if( heatValues[heatInc] == 250 && pizzaInOven ){
            $("#instructies").attr( "value", "Owh no you burned the pizza! Throw in it in the trash and start over.");
            document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
            document.getElementById('geluid5').innerHTML = ('<a-sound src= url(sounds/false.mp3)" autoplay="true" volume="2"> </a-sound>');
            $("#pizzaHolder").append($("#pizza"));
            $("#pizza").attr("position", "15 15 15");
            $("#placer").append($("#blackPizza"));
            $("#blackPizza").attr("position", "0 0 0.02");
          }
          else if (heatValues[heatInc] == 200 && pizzaInOven){
              document.getElementById('geluid7').innerHTML = ('<a-sound src="url(sounds/eindgeluid.mp3)" autoplay="true" volume="1" loop="true"> </a-sound>');
              $("#instructies").attr( "value", "Well done!!! You now know how to make pizza.");
              document.getElementById('geluid8').innerHTML = ('<a-sound src= url(sounds/ding.mp3)" autoplay="true" volume="2"> </a-sound>');
              $("#pizzaHolder").append($("#pizza"));
              if(pizzaKind == 1){
                $("#pizzaDone").append($("#mushroomSliceMulti"));
                $("#mushroomSliceMulti").attr("rotation", "-90 0 0");
                $("#mushroomSliceMulti").attr("position", "0.030 -0.090 0.030");
              }
              else if (pizzaKind == 2){
                $("#pizzaDone").append($("#worstSliceMulti"));
                $("#worstSliceMulti").attr("rotation", "-90 0 0");
                $("#worstSliceMulti").attr("position", "-0.150 0.010 0.100");
              }
              else if (pizzaKind == 3){
                $("#pizzaDone").append($("#mushroomSliceMulti"));
                $("#pizzaDone").append($("#worstSliceMulti"));
                $("#mushroomSliceMulti").attr("rotation", "-90 0 0");
                $("#worstSliceMulti").attr("rotation", "-90 0 0");
                $("#mushroomSliceMulti").attr("position", "0.030 -0.090 0.030");
                $("#worstSliceMulti").attr("position", "-0.150 0.010 0.100");
              }
              else{

              }
              $("#cursor").append($("#pizzaDone"));
              $("#pizzaDone").attr("position", "0.65 0 -0.5");

          }
        }
      },time);
    });
    toggleOven.addEventListener("mouseleave", function(){
      clearTimeout(timer);
      stopLoader();
    });


    // pick up burned pizza
    blackPizza.addEventListener("mouseenter", function(){
      startLoader();
      if(pizzaInOven){
        timer = setTimeout(function(){
          $("#cursor").append($("#blackPizza"));
          $("#blackPizza").attr("rotation", "45 0 0");
          $("#blackPizza").attr("position", "0.65 0 -0.5");
          holdingBlackPizza = true;
          pizzaInOven = false;
        },time);
      }
    });
    blackPizza.addEventListener("mouseleave", function(){
      stopLoader();
      clearTimeout(timer);
    });

    trashcan.addEventListener("mouseenter", function(){
      startLoader();
      if (holdingBlackPizza){
        timer = setTimeout(function(){
          $("#pizzaKitchen").append($("#blackPizza"));
          $("#blackPizza").attr("position", "12.01 0.5 -3.09");
          $("#blackPizza").attr("rotation", "-90 0 0");
          var throwAway1 = $("<a-animation id='throwAway1' attribute='position' to='13.7 -1 -5.87' dur='1000' repeat='0'></a-animation>");
          var throwAway2 = $("<a-animation id='throwAway2' attribute='position' to='13.7 -3 -5.87' dur='1000' repeat='0'></a-animation>");
          holdingBlackPizza = false;

          $("#blackPizza").append(throwAway1);
          setTimeout(function(){
            $("#throwAway1").remove();
            $("#blackPizza").append(throwAway2);
          },1000);
          setTimeout(function(){
            $("throwAway2").remove();
            fullReset();
            $("#blackPizza").attr("position", "15 15 15");
          },time);
        }, time);
      }
    });
    trashcan.addEventListener("mouseleave", function(){
      stopLoader();
      clearTimeout(timer);
    });

}; //window.onload
