import './../sass/styles.scss';
// import _ from 'lodash';
// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

import data from './db';

import { makeProductItem } from './lib';

for (var i=0; i<Object.keys(data).length; i++){
    var $productTemplate = $($('#productItem').html());
    $(".grid-layout").append(makeProductItem($productTemplate, data[i]));
}


$(function(){
  
    $("#cart-trigger").on('click', function () {
        // show shopping cart 
        showCart(shoppingCart);
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
     

const $template = $($('#cartItem').html());

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


var message = '';
// Проверить, поддерживает ли браузер API sessionStorage и localStorage
$('#showLS').on('click', () => {
if (window.sessionStorage && window.localStorage) {
    message = "объекты sessionStorage и localstorage поддерживаются";
    console.log('объекты sessionStorage и localstorage поддерживаются');
    $('.console').html('<h1>'+message+'</h1>');
    } else {
    // объекты sessionStorage и localstorage не поддерживаются
    console.log('объекты sessionStorage и localstorage не поддерживаются');
}
});


// Пример try..catch без ошибок

$('#tryThis').on('click', () => {
    try {
        message = 'Начало блока try';
        console.log('Начало блока try');  //
        $('.console').html('<h2>'+message+'</h2>');
        // .. код без ошибок
        message = 'Кот гуляет сам по себе...';
        $('.console').append('<h2>'+message+'</h2>');
        console.log("Кот гуляет сам по себе...");
        message = 'Конец блока try';
        $('.console').append('<h2>'+message+'</h2>');
        console.log('Конец блока try');   //
    
    } catch(e) {
        console.log('Блок catch не получит управление, так как нет ошибок'); //
        console.log('Здесь кот мог бы ловить мышей, но их нет'); 
    }
    message = 'Кот продолжит гулять сам по себе...';
    $('.console').append('<h2>'+message+'</h2>');
    console.log("Кот продолжит гулять сам по себе...");
});


// Пример try..catch с ошибкой

$('#catchThis').on('click', () => {
    try {
        message = 'Начало блока try';
        console.log('Начало блока try');  //
        $('.console').html('<h2>'+message+'</h2>');
        // .. код с ошибкой

        blablabla; // ошибка, переменная не определена!

        message = 'Кот гуляет сам по себе...';
        $('.console').append('<h2>'+message+'</h2>');
        console.log("Кот гуляет сам по себе...");
        message = 'Конец блока try';
        $('.console').append('<h2>'+message+'</h2>');
        console.log('Конец блока try');   //
    
    } catch(e) {
        console.log('Блок catch получит управление. Ошибка' + e.name + ":" + e.message + "\n" + e.stack); //
        console.log('Здесь кот ловит мышей'); 
        message = 'Блок catch получит управление. Ошибка' + e.name + ":" + e.message + "<br>" + e.stack;
        $('.console').append('<h2>'+message+'</h2>');
    }
    message = 'Кот продолжит гулять сам по себе...';
    $('.console').append('<h2>'+message+'</h2>');
    console.log("Кот продолжит гулять сам по себе...");
});

// Секцию finally используют, чтобы завершить начатые операции при любом варианте развития событий.
// Например, мы хотим подсчитать время на выполнение функции sum(n), которая должна возвратить сумму чисел от 1 до n и работает рекурсивно:

function sum(n) {
    return n ? (n + sum(n - 1)) : 0;
}

$('#finallyThis').on('click', () => {

var n = 100;
var start = new Date();
  
try {
    var result = sum(n);
} catch (e) {
    result = 0;
} finally {
    var diff = new Date() - start;
}
  
console.log( result ? result : 'ошибка из-за слишком глубокой рекурсии');
console.log( "Выполнение заняло " + diff );

message = 'Выполнение заняло ' + diff;
$('.console').html('<h2>'+message+'</h2>');
});



// QUOTA_EXCEEDED_ERR


$('#quotaLS').on('click', () => {

try {
    localStorage.setItem("name", "Hello World!");//saves to the database, "key", "value"
    message = '“QUOTA_EXCEEDED_ERR” is the exception that will get thrown if you exceed your storage quota of 5 megabytes.';
    $('.console').html('<h2>'+message+'</h2>');
} catch (e) {
    if (e == QUOTA_EXCEEDED_ERR) {
        alert('Превышен лимит'); //data wasn't successfully saved due to quota exceed so throw an error
    }
}
});

// var exception;
// var repeat = function(str, x) { return new Array(x+1).join(str); };
// var too_big = repeat("x", 12*1024*1024/2); // each JS character is 2 bytes
// localStorage.clear();
// try {
//   localStorage.setItem("test", too_big);
// } catch (e) {
//   exception = e;
// }


// Метод setItem(key,value) предназначен для добавления в хранилище элемента с указанным ключом (key) и значением (value). 
// Если в хранилище уже есть элемент с указанным ключом (key), то в этом случае произойдет изменения его значения (value).

$('#setItem').on('click', () => {

    try {
        localStorage.setItem("name", "Hello Local Storage World!");//saves to the database, "key", "value"
        message = 'Если в хранилище уже есть элемент с указанным ключом (key), то в этом случае произойдет изменения его значения (value)';
        $('.console').html('<h2>'+message+'</h2>');
    } catch (e) {
        if (e == QUOTA_EXCEEDED_ERR) {
            alert('Превышен лимит'); //data wasn't successfully saved due to quota exceed so throw an error
        }
    }
});


// Метод Storage.getItem(Ключ)  

$('#getItem').on('click', () => {
    try {
        // localStorage.getItem("name");//
        message = 'В хранилище есть элемент с указанным ключом (name) ' + localStorage.getItem("name");
        $('.console').html('<h2>'+message+'</h2>');
    } catch (e) {
        message = 'В хранилище нет элемента с указанным ключом (name)';
        $('.console').html('<h2>'+message+'</h2>');
    }
});


//

function saveCartTest(shoppingCart) {

    if (window.localStorage)
    {
        console.log(JSON.stringify(shoppingCart));
        message = 'shoppingCart in localStorage: <br>'+JSON.stringify(shoppingCart);
        $('.console').html('<h2>'+message+'</h2>');
    }
}


$('#saveCart').on('click', () => {

    var shoppingCartTest = [];

    let itemTest = { 
        Id: 1, 
        Product: "name",  
        Price: 111, 
        Quantity: 2, 
        Picture: "picture" 
    }; 

    shoppingCartTest.push(itemTest);

    saveCartTest(shoppingCartTest);
});



// Вызываем функцию
// saveCart(shoppingCart);

function saveCartIntoLocalStorage(shoppingCart) {

    if (window.localStorage)
    {
        localStorage.shoppingCartTest = JSON.stringify(shoppingCart);
    }
}

$('#saveCartInto').on('click', () => {

    let shoppingCartTest = [];

    let itemTest = { 
        Id: 1, 
        Product: "name",  
        Price: 111, 
        Quantity: 2, 
        Picture: "picture" 
    }; 

    shoppingCartTest.push(itemTest);

    saveCartIntoLocalStorage(shoppingCartTest);

    // Получим наш сериализованный объект через API

    var shoppingCartObj = localStorage.getItem("shoppingCartTest");

    console.log(shoppingCartObj);

    shoppingCartObj = localStorage.shoppingCartTest;
        
    console.log(shoppingCartObj);

    if (localStorage.shoppingCartTest){
        shoppingCartObj = JSON.parse(localStorage.shoppingCartTest);
    }

    console.log(shoppingCartObj);
    
    message = localStorage.shoppingCartTest;
    $('.console').html('<h2>'+message+'</h2>');

});

// 

$('#getCartData').on('click', () => {
    if (localStorage.shoppingCartTest){
        var shoppingCartData; // данные
        try {
            shoppingCartData = JSON.parse(localStorage.shoppingCartTest);
            if (!shoppingCartData.name) {
                throw new SyntaxError("Данные некорректны");
            }

        blabla(); // произошла непредусмотренная ошибка

        } catch (e) {
            if (e.name == "SyntaxError") {
                console.log("Извините, в данных ошибка");
                message = 'Извините, в данных ошибка';
                $('.console').html('<h2>'+message+'</h2>');
              } else {
                throw e;
              }
            // console.log("Извините, в данных ошибка");
            // message = 'Извините, в данных ошибка';
            // $('.console').html('<h2>'+message+'</h2>');
        }
    }
});


// В следующем примере ошибки обрабатываются внешним try..catch:

function readData() {
        // try..catch внутри readData умеет обрабатывать только SyntaxError
        try {
            let shoppingCartData = JSON.parse(localStorage.shoppingCartTest);
            // 
            blabla(); // ошибка!
        } catch (e) {
            if (e.name != 'SyntaxError') {
                throw e; // пробрасываем
            }
        }
}

// try..catch внешний умеет обрабатывать все ошибки.
// Без внешнего проброшенная ошибка «вывалилась» бы в консоль с остановкой скрипта.

$('#errorCartData').on('click', () => {
    try {
        readData();
    } catch (e) {
        message = 'Поймал во внешнем catch: ' + e ;
        $('.console').html('<h2>'+message+'</h2>');
        console.log( "Поймал во внешнем catch: " + e ); // ловим
    }
});

// 

$('#showCart').on('click', () => {

    let shoppingCart = [];

    // После получения данных из LocalStorage - производим обратное преобразование
    // Получим наш сериализованный объект через API
    // Одновременно преобразуем к обычному объекту JavaScript

    if (localStorage.shoppingCartTest){
        shoppingCart = JSON.parse(localStorage.shoppingCartTest);
    }

    function showCart(shoppingCart){
        if (shoppingCart.length === 0) {
            console.log("Your Shopping Cart is Empty!");
            message = 'Your Shopping Cart is Empty!' ;
            $('.console').html('<h2>'+message+'</h2>');
        
            return;
        } else { 
            console.log("Your Shopping Cart Contains: ", shoppingCart.length, " Items");
            message = "Your Shopping Cart Contains: "+shoppingCart.length+" Items";
            $('.console').html('<h2>'+message+'</h2>');
            return;
        }
    }
    showCart(shoppingCart);

});

// 


function saveCart(shoppingCart) {

    if (window.localStorage)
    {
        localStorage.shoppingCart = JSON.stringify(shoppingCart);
       
    }
}

function showCart(shoppingCart){
    if (shoppingCart.length == 0) {
        console.log("Your Shopping Cart is Empty!");
        return;
    } else { 
        console.log("Your Shopping Cart Contains: ", shoppingCart.length, " Items");
        $(".cart-items").empty();
        for (let i in shoppingCart) {
            let $template = $($('#cartItem').html()),
                item = shoppingCart[i];
                
            $template.find("span.item-quantities").text(item.Quantity);
            $template.find(".item-name").text(item.Product); 
            $template.find('.item-price').text(item.Price);
            $template.find('.item-prices').text(item.Quantity * item.Price);
            $template.find('span.qty').attr('style', 'background-image:'+ 'url('+item.Picture+')');
            $(".cart-items").append($template);
        }
        // return;
    }
}

//

var shoppingCart = [];

// После получения данных из LocalStorage - производим обратное преобразование
// Получим наш сериализованный объект через API
// Одновременно преобразуем к обычному объекту JavaScript


function ReadError(message, cause) {
    this.message = message;
    this.cause = cause;
    this.name = 'ReadError';
    this.stack = cause.stack;
}
 
function getCartData() {
    if (localStorage.shoppingCart){
        try {
            shoppingCart = JSON.parse(localStorage.shoppingCart);
        } catch (e) {
            if (e.name == 'URIError') {
                throw new ReadError("Ошибка в URI", e);
            } else if (e.name == 'SyntaxError') {
                throw new ReadError("Синтаксическая ошибка в данных", e);
            } else {
                throw e; // пробрасываем
            }
        }
    }
}

try {
    getCartData();
} catch (e) {
  if (e.name === 'ReadError') {
    console.log(e.message);
    console.log(e.cause); // оригинальная ошибка-причина
  } else {
    throw e;
  }
}

/**
 * add-to-cart 01
 */
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
                .appendTo($('body'))
                    .animate({
                    'top': $('#cart-trigger').offset().top + 10,
                        'left': $('#cart-trigger').offset().left + 10,
                        'width': 75,
                        'height': 75
                }, 1000);
                imgClone.animate({
                    'width': 0,
                        'height': 0
                }, function () {
                    $(this).detach()
                });  

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

    $('body').on('click', '.cart .clear-cart', function () {
        localStorage.removeItem('shoppingCart');
        $(".cart-items").empty();
        shoppingCart = [];

    });

});


/**
 * add-to-cart 02
 */


$(".add-to-cart2").each(function(index, element){
    $(element).on('click', function (e) {

        let template = $template.clone();
        template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());
        template.find("span.item-name").text($(this).parents(".product").children(".product-name").text()); 
        template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());
        template.find(".item-remove").on('click', function() {$(this).parent().remove();});
        $(".cart-items").append(template);

        /**
         * Подготовка данных для записи

         */

        let id = $(this).parents('.product-menu').attr("productId");
        console.log(id);
        let price = $(this).parents(".product-menu").find(".product-price").text();
        console.log(price);
        let name = $(this).parents(".product").children(".product-name").text();
        console.log(name);
        let quantity = $(this).parents(".product-menu").find(".quantity").val();
        console.log(quantity);
        let picture = $(this).parents(".product").find("img").attr('src');
        console.log(picture);

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
                .appendTo($('body'))
                    .animate({
                    'top': $('#cart-trigger').offset().top + 10,
                        'left': $('#cart-trigger').offset().left + 10,
                        'width': 75,
                        'height': 75
                }, 1000);
                imgClone.animate({
                    'width': 0,
                        'height': 0
                }, function () {
                    $(this).detach()
                });  

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


/**
 * add-to-cart 03
 */


$(".add-to-cart3").each(function(index, element){
    $(element).on('click', function (e) {

        let template = $template.clone();
        template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());
        template.find("span.item-name").text($(this).parents(".product").children(".product-name").text()); 
        template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());
        template.find(".item-remove").on('click', function() {$(this).parent().remove();});
        $(".cart-items").append(template);

        /**
         * Подготовка данных для записи

         */

        let id = $(this).parents('.product-menu').attr("productId");
        let price = $(this).parents(".product-menu").find(".product-price").text();
        let name = $(this).parents(".product").children(".product-name").text();
        let quantity = $(this).parents(".product-menu").find(".quantity").val();
        let picture = $(this).parents(".product").find("img").attr('src');

        let item = { 
            Id: id, 
            Product: name,  
            Price: price, 
            Quantity: quantity, 
            Picture: picture 
        }; 

        shoppingCart.push(item);

        console.log(shoppingCart);
        // save shopping cart
        // saveCart(shoppingCart);

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
                .appendTo($('body'))
                    .animate({
                    'top': $('#cart-trigger').offset().top + 10,
                        'left': $('#cart-trigger').offset().left + 10,
                        'width': 75,
                        'height': 75
                }, 1000);
                imgClone.animate({
                    'width': 0,
                        'height': 0
                }, function () {
                    $(this).detach()
                });  

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


/**
 * 
 *  version 4
 */
  

$(".add-to-cart4").each(function(index, element){
    $(element).on('click', function (e) {

        let id = $(this).parents('.product-menu').attr("productId");
        let price = $(this).parents(".product-menu").find(".product-price").text();
        let name = $(this).parents(".product").children(".product-name").text();
        let quantity = $(this).parents(".product-menu").find(".quantity").val();
        let picture = $(this).parents(".product").find("img").attr('src');

        for (let i in shoppingCart) {
            if(shoppingCart[i].Id == id) {
               shoppingCart[i].Quantity = parseInt(shoppingCart[i].Quantity) + parseInt(quantity);
               saveCart(shoppingCart);
               return;
            }
        }

        let item = { 
            Id: id, 
            Product: name,  
            Price: price, 
            Quantity: quantity, 
            Picture: picture 
        }; 

        shoppingCart.push(item);

        // console.log(shoppingCart);

        saveCart(shoppingCart);

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
                .appendTo($('body'))
                    .animate({
                    'top': $('#cart-trigger').offset().top + 10,
                        'left': $('#cart-trigger').offset().left + 10,
                        'width': 75,
                        'height': 75
                }, 1000);
    
            imgClone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });  
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


/**
 * 
 * last version
 */
  

$(".add-to-cart-LAST").each(function(index, element){
    $(element).on('click', function (e) {
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
                  .appendTo($('body'))
                      .animate({
                      'top': $('#cart-trigger').offset().top + 10,
                          'left': $('#cart-trigger').offset().left + 10,
                          'width': 75,
                          'height': 75
                  }, 1000);
      
              imgClone.animate({
                  'width': 0,
                      'height': 0
              }, function () {
                  $(this).detach()
              });  
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

          let id = $(this).parents('.product-menu').attr("productId");
          
          let quantity = $(this).parents(".product-menu").find(".quantity").val();
          
          for (let i in shoppingCart) {
              if(shoppingCart[i].Id == id) {
                 shoppingCart[i].Quantity = parseInt(shoppingCart[i].Quantity) + parseInt(quantity);
                 saveCart(shoppingCart);
                 return;
              }
          }
          
          let price = $(this).parents(".product-menu").find(".product-price").text();
          let name = $(this).parents(".product").children(".product-name").text();
          let picture = $(this).parents(".product").find("img").attr('src');


          let item = { 
              Id: id, 
              Product: name,  
              Price: price, 
              Quantity: quantity, 
              Picture: picture 
          }; 

          shoppingCart.push(item);
          saveCart(shoppingCart);
      });

  });


$('body').on('click', '.cart .clear-cart', function () {
    localStorage.removeItem('shoppingCart');
    $(".cart-items").empty();
    shoppingCart = [];

});

$('body').on('click', '.cart-items .item-remove', function () {
    let index = $(this).parent().attr("id");
    // console.log('index= ', index);

    shoppingCart.splice(shoppingCart.indexOf(shoppingCart.find(x => x.Id === index)),1); 
    
    $(this).parents('li').remove();
    saveCart(shoppingCart);
    }
);
