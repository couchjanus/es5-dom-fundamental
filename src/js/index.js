import './../sass/styles.scss';
// import _ from 'lodash';
// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

const product = {
    id: 0,
    name: "Cool Cat",
    price: 177,
    picture: "/images/cat1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
};

// for (let key in product) {
//     console.log(key + ': ' + product.key);
// }

// var $productTemplate = $($('#productItem').html());
        
// $productTemplate.find('.product-menu').attr('productId', product["id"]);
// $productTemplate.find('.product-name').text(product.name);
// $productTemplate.find('img').attr('src', product.picture);
// $productTemplate.find('.product-price').text(product["price"]);
// $productTemplate.find('.product-description').text( product["description"]);
        
// $(".grid-layout").append($productTemplate);


// function makeProductItem($template, product){
//     $template.querySelector('.product-menu').setAttribute('productId', product["id"]);
//     $template.querySelector('.product-name').textContent = product.name;
//     $template.querySelector('img').setAttribute('src', product.picture);
//     $template.querySelector('.product-price').textContent = product["price"];
//     $template.querySelector('.product-description').textContent = product["description"];
//     return $template;
// }

// const $productTemplate = document.getElementById("productItem").content;    

// document.querySelector('.grid-layout').append(makeProductItem($productTemplate, product).cloneNode(true));


// Массивоподобный объект со случайным порядком ключей

// var an_obj = { 100: 'a', 2: 'b', 7: 'c' };

// console.log(Object.keys(an_obj)); // консоль: ['2', '7', '100']


// Свойство getFoo является неперечисляемым свойством
// var my_obj = Object.create({}, { 
// getFoo: { 
//     value: function() { return this.foo; } 
//     } 
// });
// my_obj.foo = 1;
// console.log(Object.keys(my_obj)); // консоль: ['foo']
        

const data = [
    {
        id: 0,
        name: "Cool Cat",
        price: 177,
        picture: "/images/cat1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 1,
        name: "Black Cat",
        price: 666,
        picture: "/images/cat2.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 2,
        name: "Red Cat",
        price: 555,
        picture: "/images/cat3.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 3,
        name: "Blue Cat",
        price: 444,
        picture: "/images/cat4.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 4,
        name: "Green Cat",
        price: 333,
        picture: "/images/cat5.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 5,
        name: "Grey Cat",
        price: 222,
        picture: "/images/cat6.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 6,
        name: "Orange Cat",
        price: 777,
        picture: "/images/cat7.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    {
        id: 7,
        name: "Pretty Cat",
        price: 888,
        picture: "/images/cat8.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dignissimos, maxime ea excepturi veritatis itaque."
    },
    ];
    
    // const $productTemplate = document.getElementById("productItem").content;    

    // for (var i=0; i<Object.keys(data).length; i++){
    //     document.querySelector('.grid-layout').append(makeProductItem($productTemplate, data[i]).cloneNode(true));
    // }


    function makeProductItemJq($template, product){
        $template.find('.product-menu').attr('productId', product["id"]);
        $template.find('.product-name').text(product.name);
        $template.find('img').attr('src', product.picture);
        $template.find('.product-price').text(product["price"]);
        $template.find('.product-description').text( product["description"]);
        return $template;
}

// for (var i=0; i<Object.keys(data).length; i++){
//     var $productTemplate = $($('#productItem').html());
//     $(".grid-layout").append(makeProductItemJq($productTemplate, data[i]));
// }


// function makeProductItem($template, product){
//     const keys = Object.keys(product);
//     // console.log(key + ': ' + product[key]);

//     keys.forEach(function(key) {
//         let selector = '.product-'+ key;
//         switch(key){
//             case 'id':
//                 $template.querySelector(selector).setAttribute('productId', product[key]);
//                 break;
//             case 'picture':
//                 $template.querySelector(selector).setAttribute('src', product[key]);
//                 break;
//             default:
//                 $template.querySelector(selector).textContent = product[key];
//         }
//     });
//     return $template;
// }

// const $productTemplate = document.getElementById("productItem").content;
        
// const keys = Object.keys(data[1]);
// console.log(keys);

// После того, как желаемый массив был получен, его можно перебрать, например, с помощью метода forEach:

// keys.forEach(function(key) {
//     console.log(key + ': ' + data[1][key]);
// });


// for (var i=0; i<Object.keys(data).length; i++){
//     document.querySelector('.grid-layout').append(makeProductItem($productTemplate, data[i]).cloneNode(true));
// }



function makeProductItem($template, product){
    const keys = Object.keys(product);
    keys.forEach(function(key) {
        let selector = '.product-'+ key;
        switch(key){
            case 'id':
                $template.find(selector).attr('productId', product[key]);
                break;
            case 'picture':
                $template.find(selector).attr('src', product[key]);
                break;
            default:
                $template.find(selector).text(product[key]);
        }
    });
    return $template;
}


for (var i=0; i<Object.keys(data).length; i++){
    var $productTemplate = $($('#productItem').html());
    $(".grid-layout").append(makeProductItem($productTemplate, data[i]));
}


    $(function(){
  
        $("#cart-trigger").on('click', function () {
              $("#cart-sidebar").addClass('show-sidebar');
          });
         
          $("#cart-sidebar .remove").on('click', function () {
              $("#cart-sidebar").removeClass('show-sidebar');
          });
   
        $("#menu-toggle").on('click', function () {
              $('.flexmenu').toggleClass('active');
        });
     
        $("#catalog").on('click', function () {
          $('.mega-menu').toggleClass('mega-active');
        });
        $(".mega-menu .close").on('click', function () {
          $('.mega-menu').removeClass('mega-active');
        });
       
      });
 



    
    // $(".minus").click(function(e) {
    //     var val = parseInt($(e.target).next().attr('value'));
    //     $(this).next().attr('value', val-1);
    // });
    
    // $(".plus").click(function(e) {
    //         var val = parseInt($(e.target).prev().attr('value'));
    //         $(this).prev().attr('value', val+1);
    // });
        
   
    // let plus = document.getElementsByClassName('plus');
    //     for (let i=0;i<plus.length; i++) {
    //         plus[i].addEventListener('click', function(e) {
    //         let val = parseInt(e.target.previousElementSibling.getAttribute('value'));
    //         e.target.previousElementSibling.setAttribute('value', val+1);
    //     });
    // }

    // let minus = document.getElementsByClassName('minus');
    //     for (let i=0;i<minus.length; i++) {
    //         minus[i].addEventListener('click', function(e) {
    //         let val = parseInt(e.target.nextElementSibling.getAttribute('value'));
    //         e.target.nextElementSibling.setAttribute('value', val-1);
    //     });
    // }


    function createProduct(){
        var article = document.createElement("article");
        var div = document.createElement("div");
        var p = document.createElement("p");
        p.textContent = "Very Nice Cat";
        div.appendChild(p);
        article.setAttribute('class', "grid-item");
 
        article.appendChild(div);
        document.querySelector('.grid-layout').appendChild(article);
    }

    // var cartTest = document.getElementsByClassName('product-detail');
    //     for (let i=0; i<cartTest.length; i++ ){
    //         cartTest[i].addEventListener('click', function (e) {
            
    //         createProduct();
    //         });         
    //     }
    $(".product-detail").each(function(index, element){
            $(element).on('click', function () {
                
                var $template = $($('#productDetail').html());
                $template.find('.product-price').text($(this).parents(".product").find(".product-price").text());
                $template.find('.product-name').text($(this).parents(".product").find(".product-name").text());

                $template.find('img').eq(0).attr('src', 'images/cat3.jpg');
                

                $(".grid-layout").empty();

                $(".grid-layout").append($template);

                let slideIndex = 1;

                const prev = $(".prev");
                const next = $(".next");

                function showSlide(n) {
                    let i;
                    let x = $(".slide");
                    if (n > x.length) {
                        slideIndex = 1
                    }    
                    if (n < 1) {
                        slideIndex = x.length
                    }
                    for (i = 0; i < x.length; i++) {
                        x[i].style.display = "none";  
                    }

                    x[slideIndex-1].style.display = "block";  
                }

                showSlide(slideIndex);

                function nextPrev(n) {
                    showSlide(slideIndex += n);
                }

                next.click(function () {
                    nextPrev(1);
                });

                prev.click(function () {
                    nextPrev(-1);
                });

            });
        });


    
    // var addcart = document.getElementsByClassName('add-to-cart');

        // for (let i=0; i<addcart.length; i++ ){
            
        //     addcart[i].addEventListener('click', function (e) {
        //     var y = 180;
        //     e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
        //     e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');

        //     console.log(this.parentNode.querySelectorAll(":scope > .how-many .quantity-input .quantity")[0].getAttribute('value'));

        //     console.log(this.parentNode.parentNode.querySelectorAll(":scope > .product-name")[0].textContent);
            
        //     console.log(this.parentNode.querySelectorAll(":scope > .product-price")[0].textContent);
            
        //     });          
        // }


    // for (let i=0; i<addcart.length; i++ ){
                
    //     addcart[i].addEventListener('click', function (e) {
    //     var y = 180;
    //     e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //     e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');

    //     // Проверяем поддерживает ли браузер тег <template>
    //     // проверив наличие аттрибута content у элемента template
    //     if ('content' in document.createElement('template')) {
    //         let template = document.querySelector('#cartItem').content;
    //         let quantity = this.parentNode.querySelectorAll(":scope > .how-many .quantity-input .quantity");
    //         template.querySelector("span.item-quantities").textContent = quantity[0].getAttribute('value');
    //         template.querySelector("span.item-name").textContent = ' '+this.parentNode.parentNode.querySelectorAll(":scope > .product-name")[0].textContent; 
    //         template.querySelector('.item-prices').textContent = this.parentNode.querySelectorAll(":scope > .product-price")[0].textContent;
            
    //         document.querySelector('.cart-items').append(template);
        
    //     } else {
    //     // необходимо найти другой способ добавить element т.к.
    //     // тег <template> не поддерживатся браузером
    //     }
    //     });          
    // }
    

    // for (let i=0; i<addcart.length; i++ ){
                
    //     addcart[i].addEventListener('click', function (e) {
    //     var y = 180;
    //     e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
    //     e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');

    //     // Проверяем поддерживает ли браузер тег <template>
    //     // проверив наличие аттрибута content у элемента template
    //     if ('content' in document.createElement('template')) {
    //         let template = document.querySelector('#cartItem').content;
    //         let quantity = this.parentNode.querySelectorAll(":scope > .how-many .quantity-input .quantity");
    //         template.querySelector("span.item-quantities").textContent = quantity[0].getAttribute('value');
    //         template.querySelector("span.item-name").textContent = ' '+this.parentNode.parentNode.querySelectorAll(":scope > .product-name")[0].textContent; 
    //         template.querySelector('.item-prices').textContent = this.parentNode.querySelectorAll(":scope > .product-price")[0].textContent;
    //         document.querySelector('.cart-items').append(document.importNode(template, true));
        
    //     } else {
    //     // необходимо найти другой способ добавить element т.к.
    //     // тег <template> не поддерживатся браузером
    //     }
    // });          
    // }



        // $(".add-to-cart").each(function(index, element){
        //     $(element).on('click', function (e) {
        //         var y = 180;   
        //         $(e.target).parents('.product-wrapper')
        //         .css('transform', 'rotateY(' + y + 'deg)');
        //         $(e.target).parents('.product-wrapper').find('.product-back').addClass('back-is-visible');
        //     });
        // });

        // $(".add-to-cart").each(function(index, element){
        //     $(element).on('click', function (e) {
        //         var y = 180;    
        //         $(e.target).parents('.product-wrapper')
        //         .css('transform', 'rotateY(' + y + 'deg)');
        //         $(e.target).parents('.grid-item').find('.product-back').addClass('back-is-visible');

        //         var $template = $($('#cartItem').html());
                
        //         $template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());
        
        //         $template.find(".item-quantities").after(' '+$(this).parents(".product").children(".product-name").text()); 
        
        //         $template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());
        //         $(".cart-items").append($template);
        //     });
        // });

                


        var myArray = new Array("1", "2", "3");
        myArray = myArray.concat("a", "b", "c");
        console.log(myArray);
        // myArray = ["1", "2", "3", "a", "b", "c"]
  
        var newArray = new Array("Wind", "Rain", "Fire");
        var list = newArray.join(" - ");
        console.log(list);
        // list = "Wind - Rain - Fire"
  
        var pushArray = new Array("1", "2");
        pushArray.push("3"); 
        console.log(pushArray);
        // pushArray =["1", "2", "3"]
  
        var popArray = new Array("1", "2", "3");
        var last = popArray.pop();
        console.log(popArray);
        // popArray =["1", "2"], last = "3"
  
        var shitArray = new Array ("1", "2", "3");
        var first = shitArray.shift();
        console.log(shitArray);
        // shitArray = ["2", "3"], first = "1"
  
        var unshitArray = new Array ("1", "2", "3");
        unshitArray.unshift("4", "5");
        console.log(unshitArray);
        // unshitArray becomes ["4", "5", "1", "2", "3"]
  
        var sliceArray = new Array ("a", "b", "c", "d", "e");
        sliceArray = sliceArray.slice(1, 4); 
        // начиная с индекса 1 извлекаются элементы 
        // вплоть до индекса 3
        console.log(sliceArray);
        // sliceArray = [ "b", "c", "d"]
  
  
        var spliceArray = new Array ("1", "2", "3", "4", "5");
        spliceArray.splice(1, 3, "a", "b", "c", "d");
        // spliceArray = ["1", "a", "b", "c", "d", "5"]
        // Этот код, начиная с ячейки под индексом 1 (в которой находилось значение "2"),
        // удаляет 3 элемента, и вставляет на их место
        // элеметны, переданные в качестве последующих параметров.
        
        var reverseArray = new Array ("1", "2", "3");
        reverseArray.reverse();
        // элементы переставлены reverseArray = [ "3", "2", "1" ]
  
        var sortArray = new Array("Wind", "Rain", "Fire");
        sortArray.sort();
        // массив отсортирован sortArray = [ "Fire", "Rain", "Wind" ]
        
        var a = ['a', 'b', 'a', 'b', 'a'];
        console.log(a.indexOf('b')); // выводит 1
        // Попробуем еще раз, начиная с индекса последнего совпадения
        console.log(a.indexOf('b', 2)); // выводит 3
        console.log(a.indexOf('z')); // выводит -1, потому что 'z' не найдено
        
        var al = ['a', 'b', 'c', 'd', 'a', 'b'];
        console.log(al.lastIndexOf('b')); // выводит 5
        // Попробуем еще раз, начиная с индекса, предшествующего индексу последнего совпадения
        console.log(al.lastIndexOf('b', 4)); // выводит 1
        console.log(al.lastIndexOf('z')); // выводит -1


        let plus = document.getElementsByClassName('plus');
    
        plus = Array.prototype.slice.call(plus); // теперь plus - массив
      
        plus.forEach(function(elem) {
          elem.addEventListener('click', function() {
              let val = parseInt(this.previousElementSibling.getAttribute('value'));
              this.previousElementSibling.setAttribute('value', val+1);
              });
        });

        let minus = document.getElementsByClassName('minus');

        minus = Array.prototype.slice.call(minus); // теперь minus - массив

        minus.forEach(function(elem) {
          elem.addEventListener('click', function() {
              let val = parseInt(this.nextElementSibling.getAttribute('value'));
              this.nextElementSibling.setAttribute('value', val-1);
              });
        });


        // $(".buy-now").each(function(index, element){
        //     $(element).on('click', function (e) {
        //         $(e.target).parents('.product').find('.product-name')
        //         .css('display', 'none');
        //         $(e.target).parents('.product').find('.icon').css('display', 'none');
        //         $(e.target).parents('.product').find('.buy-now').css('display','none');
        //         $(e.target).parents('.product').find(' .product-detail').css('display', 'block');
        //         $(e.target).parents('.product-menu').css('top', '40%');
        //     });
        // });
    

    //     Array.prototype.forEach.call(document.querySelectorAll(".buy-now"), function(el) {
    //         el.addEventListener('click', function(){
    //           let $this = this.parentNode.parentNode;
    //           $this.querySelector('.product .product-name').style.display = 'none';
    //           $this.querySelector('.product .icon').style.display = 'none';
    //           $this.querySelector('.product .buy-now').style.display = 'none';
    //           $this.querySelector('.product .product-detail').style.display = 'block';
    //           $this.querySelector('.product-menu').style.top = '40%';
    //         });
    //   });


    const $template = $($('#cartItem').html());
        
    //   $(".add-to-cart").each(function(index, element){
    //       $(element).on('click', function (e) {
    //           var y = 180;    
    //           $(e.target).parents('.product-wrapper')
    //           .css('transform', 'rotateY(' + y + 'deg)');
    //           $(e.target).parents('.grid-item').find('.product-back').addClass('back-is-visible');

    //           let template = $template.clone();
              
    //           template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());
      
    //           template.find(".item-quantities").after(' '+$(this).parents(".product").children(".product-name").text()); 
      
    //           template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());
    //           $(".cart-items").append(template);
    //       });
    //   });



// var addcart = document.getElementsByClassName('add-to-cart');

//     const content = document.getElementById("cartItem").content;    
//     for (let i=0; i<addcart.length; i++ ){
        
//         addcart[i].addEventListener('click', function (e) {
//         var y = 180;
//         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
//         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
        
//         content.querySelector("span.item-quantities").textContent = this.parentNode.querySelectorAll(":scope > .how-many .quantity-input .quantity")[0].getAttribute('value');

//         content.querySelector("span.item-name").textContent = ' '+this.parentNode.parentNode.querySelectorAll(":scope > .product-name")[0].textContent; 

//         content.querySelector('.item-prices').textContent = this.parentNode.querySelectorAll(":scope > .product-price")[0].textContent;
// content.querySelector(".item-remove").addEventListener('click', function() {
//     this.parentNode.remove();
// });
//         document.querySelector('.cart-items').append(content.cloneNode(true));
      
//     });          
// }


$("#show1").on('click', function(){
    $('.show1').show();
});


$("#hide1").on('click', function(){
    $('.hide1').hide();
});



// $(".buy-now").each(function(index, element){
//     $(element).on('click', function (e) {
//         $(e.target).parents('.product').find('.product-name').hide();
//         $(e.target).parents('.product').find('.icon').hide();
//         $(e.target).parents('.product').find('.buy-now').hide();
//         $(e.target).parents('.product').find(' .product-detail').show();
//         $(e.target).parents('.product-menu').css('top', '40%');
//     });
// });

// $(".cancel").each(function(index, element){
//     $(element).on('click', function (e) {
//         $(e.target).parents('.product').find('.product-name')
//         .css('display', 'block');
//         $(e.target).parents('.product').find('.icon').css('display', 'block');
//         $(e.target).parents('.product').find('.buy-now').css('display','block');
//         $(e.target).parents('.product').find(' .product-detail').css('display', 'none');
//         $(e.target).parents('.product-menu').css('top', '80%');
//     });
// });


// $(".cancel").each(function(index, element){
//     $(element).on('click', function (e) {
//         $(e.target).parents('.product').find('.product-name').show('slow');
//         $(e.target).parents('.product').find('.icon').show(1000, 'linear');
//         $(e.target).parents('.product').find('.buy-now').show('fast');
//         $(e.target).parents('.product').find(' .product-detail').hide(1000, 'swing');
//         $(e.target).parents('.product-menu').css('top', '80%');
//     });
// });



$("#fi1").on('click', function(){
    $('.show1').fadeIn();
});


$("#fi2").on('click', function(){
    $('.hide1').fadeOut();
});

$("#fto").on('click', function(){
    $('.hide1').fadeTo(400, 0.5);
});


$("#ftog").on('click', function(){
    $('.hide1').fadeToggle();
});


// $(".buy-now").each(function(index, element){
//     $(element).on('click', function (e) {
//         $(e.target).parents('.product').find('.product-name').fadeOut("slow");
//         $(e.target).parents('.product').find('.icon').fadeOut("slow");
//         $(e.target).parents('.product').find('.buy-now').fadeOut(1000);
//         $(e.target).parents('.product').find(' .product-detail').fadeIn("fast");
//         $(e.target).parents('.product-menu').css('top', '40%');
//     });
// });

// $(".cancel").each(function(index, element){
//     $(element).on('click', function (e) {
//         $(e.target).parents('.product').find('.product-name').fadeTo("slow", 1);
//         $(e.target).parents('.product').find('.icon').fadeIn(3000);
//         $(e.target).parents('.product').find('.buy-now').fadeToggle(3000);
//         $(e.target).parents('.product').find(' .product-detail').fadeToggle(300);
//         $(e.target).parents('.product-menu').css('top', '80%');
//     });
// });



// $(".buy-now").each(function(index, element){
//     $(element).on('click', function (e) {
//         $(e.target).parents('.product').find('.product-name').slideUp();
//         $(e.target).parents('.product').find('.icon').fadeOut("1000");
//         $(e.target).parents('.product').find('.buy-now').slideUp();
//         $(e.target).parents('.product').find(' .product-detail').slideDown("fast");
//         $(e.target).parents('.product-menu').css('top', '40%');
//     });
// });

// $(".cancel").each(function(index, element){
//     $(element).on('click', function (e) {
//         $(e.target).parents('.product').find('.product-name').slideToggle();
//         $(e.target).parents('.product').find('.icon').fadeIn(3000);
//         $(e.target).parents('.product').find('.buy-now').slideToggle();
//         $(e.target).parents('.product').find(' .product-detail').slideToggle();
//         $(e.target).parents('.product-menu').css('top', '80%');
//     });
// });

$("#su").on('click', function(){
    $('.hide1').slideUp();
});


$("#sd").on('click', function(){
    $('.show1').slideDown();
});

$("#st").on('click', function(){
    $('.show1').slideToggle();
});


$(".buy-now").each(function(index, element){
    $(element).on('click', function (e) {
        $(e.target).parents('.product').find('.product-name').slideUp();
        $(e.target).parents('.product').find('.icon').fadeOut("1000");
        $(e.target).parents('.product').find('.buy-now').slideUp();
        $(e.target).parents('.product').find(' .product-detail').slideDown("fast");
        $(e.target).parents('.product-menu').css('top', '40%');
    });
});

$(".cancel").each(function(index, element){
    $(element).on('click', function (e) {
        $(e.target).parents('.product').find('.product-name').slideToggle();
        $(e.target).parents('.product').find('.icon').fadeIn(3000);
        $(e.target).parents('.product').find('.buy-now').slideToggle();
        $(e.target).parents('.product').find(' .product-detail').slideToggle();
        $(e.target).parents('.product-menu').css('top', '80%');
    });
});


// $(".add-to-cart").each(function(index, element){
//     $(element).on('click', function (e) {
//         var y = 180;    
//         $(e.target).parents('.product-wrapper')
//         .css('transform', 'rotateY(' + y + 'deg)');
//         $(e.target).parents('.grid-item').find('.product-back').addClass('back-is-visible');

//         let template = $template.clone();
        
//         template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());

//         template.find("span.item-name").text($(this).parents(".product").children(".product-name").text()); 

//         template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());

//         template.find(".item-remove").on('click', function() {
//             $(this).parent().remove();
//         });
//         $(".cart-items").append(template);
//     });
// });



$(".add-to-cart").each(function(index, element){
    $(element).on('click', function (e) {
        let template = $template.clone();
        template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());
        template.find("span.item-name").text($(this).parents(".product").children(".product-name").text()); 
        template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());
        template.find(".item-remove").on('click', function() {$(this).parent().remove();});
        $(".cart-items").append(template);

        // Поиск элемента с заданным номером

        var imgToDrag = $(e.target).parents('.product').find("img").eq(0);

        if (imgToDrag) {
           var imgClone = imgToDrag.clone()
                .offset({
                    top: imgToDrag.offset().top,
                    left: imgToDrag.offset().left
                })
                .css({
                    'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
                })
                .appendTo($('body'));
                // .appendTo($('body'))
                //     .animate({
                //     'top': $('#cart-trigger').offset().top + 10,
                //         'left': $('#cart-trigger').offset().left + 10,
                //         'width': 75,
                //         'height': 75
                // }, 1000);
                // imgClone.animate({
                //     'width': 0,
                //         'height': 0
                // }, function () {
                //     $(this).detach()
                // });  

            // console.log('imgClone: ', imgClone);
        }

        
        var y = 180;    
        $(e.target).parents('.product-wrapper')
        .css('transform', 'rotateY(' + y + 'deg)');
        $(e.target).parents('.grid-item').find('.product-back').addClass('back-is-visible');
        $(e.target).parents('.product-wrapper').delay(3000).queue(function() {
            $(this).css({
                'transform': 'rotateY(0deg)'
            }).dequeue();
            $(e.target).parents('.product').find('p').slideDown();
            $(e.target).parents('.product').find('.product-menu').css('top', '80%');
            $(e.target).parents('.product').find('.product-detail').toggle();
            $(e.target).parents('.product').find('.buy-now').toggle();
            $(e.target).parents('.product').find('.icon').toggle();
        });
    });

});