import './../sass/styles.scss';
// import _ from 'lodash';
// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

// import data from './db';

import { makeProductItem, createRequest, printConsole } from './lib';

$(function(){


//
$("#btn01").on('click', function() {
    // Создаём запрос
    var Request = createRequest();
    // Проверяем существование запроса
    if (!Request) {
        console.log("Невозможно создать XMLHttpRequest");
        printConsole('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: '+ request.status +'</div>', '.console01');
    }
    printConsole('<div class="alert alert-success" role="alert">Ура! Мы создали XMLHttpRequest. Что с ним делать?</div>', '.console01');
    console.log("Ура! Мы создали XMLHttpRequest. Что с ним делать?");
});

// //
// document.querySelector('.btn02').addEventListener('click', function() {
   
//     // Создаём запрос
//     var request = createRequest();
//     var url = 'http://headers.jsontest.com/';
    
//     //Проверяем существование запроса
    
//     if (!request)
//     {
//         console.log("Невозможно создать XMLHttpRequest");
//     } else {
        
//         console.log("Ура! Мы создали XMLHttpRequest. Что с ним делать?");
    
//         request.onreadystatechange = function() {
//             switch (request.readyState) {
//                 case 1: 
//                     printConsole('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>', '.console02'); 
//                     break;
//                 case 2: 
//                     printConsole('<div class="alert alert-primary" role="alert">2: Отправлен...</div>', '.console02'); 
//                     break;
//                 case 3: 
//                     printConsole('<div class="alert alert-warning" role="alert">3: Идет обмен...</div>', '.console02'); 
//                     break;
//                 case 4:
//                     if(request.status==200) {
//                         printConsole('<div class="alert alert-success" role="alert">4: Обмен завершен!</div>', '.console02');
//                         document.querySelector(".result02").innerHTML = "<b>"+request.responseText+"</b>";
//                     } else if(request.status==404) {
//                             printConsole('<div class="alert alert-danger" role="alert">Ошибка: запрашиваемый скрипт не найден!</div>', '.console02');
//                     } else {
//                         printConsole('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: '+ request.status +'</div>', '.console02');
//                     }
//                     break;
//             }
//         };     
//         request.open ('GET', url, true);
//         this.style.display = 'none';
//         request.send ('');
//     }
// });


// //

// $('.btn03').on('click', function(){

//     //Создаём запрос
//     $.ajax({
//       url: 'http://headers.jsontest.com/',
//       success: function(){
//         $('.console03').html('<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
//       }
//     });

// });

// //

// $('.btn04').on('click', function(){

//     //Создаём запрос
//     $.ajax({
//       url: 'http://headers.jsontest.com/',
//       success: function(data){
//         $('.console04').html('<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
//         $(".result04").html("<b>Прибыли данные: "+data['User-Agent']+"</b>");
//         console.log(data);
//       }
//     });

// });


// //

// $('.btn05').on('click', function(){

//     //Создаём запрос
//     $.ajax({
//       url: 'http://headers.jsontest.com/',
//       beforeSend: function() {
//         $('.console05').html('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
//       },
//       success: function(data){
//         var text = $('.console05').html();
//         $('.console05').html(text+'<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
//         $(".result05").html("<b>Прибыли данные: "+data['User-Agent']+"</b>");
//         console.log(data);
//       }
//     });

// });


// //

// $('.btn06').on('click', function(){

//     //Создаём запрос
//     $.ajax({
//       url: 'http://headers.jsontest.com/',
//       beforeSend: function() {
//         $('.console06').html('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
//       },
//       error: function(xhr){
//             $('.console06').html('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: '+ xhr.statusText +'</div>');
//             $(".result06").html("<b>Прибыли данные: "+xhr.responseText+"</b>");
//       },
//       success: function(data){
//         var text = $('.console06').html();
//         $('.console06').html(text+'<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
//         $(".result06").html("<b>Прибыли данные: "+data['User-Agent']+"</b>");
//         console.log(data);
//       }
//     });

// });

// //

// $('.btn07').on('click', function(){

//     //Создаём запрос
//     $.ajax({
//       url: 'http://headers.jsontest.com/',
//       beforeSend: function() {
//         $('.console07').html('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
//       },
//       error: function(xhr){
//             $('.console07').html('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: '+ xhr.statusText +'</div>');
//             $(".result07").html("<b>Прибыли данные: "+xhr.responseText+"</b>");
//       },
//       success: function(data){
//         var text = $('.console07').html();
//         $('.console07').html(text+'<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
//         $(".result07").html("<b>Прибыли данные: "+data['User-Agent']+"</b>");
//         console.log(data);
//       },
//       complete: function() {
//          var text = $('.console07').html(); 
//          $('.console07').html(text + '<div class="alert alert-primary" role="alert">5: AJAX завершен!</div>');
//       }
//     });

// });

// //
// $('.btn08').on('click', function(){

//     $.ajax({
//         url: 'http://headers.jsontest.com/',
//         dataType: "json",
//         method: 'GET',
//         beforeSend: function(xhrObj){
//             xhrObj.setRequestHeader("Content-Type","application/json");
//             xhrObj.setRequestHeader("Accept","application/json");
            
//             $('.console08').html('<div class="alert alert-secondary" role="alert">1: Подготовка к отправке...</div>');
//         },
//         error: function(xhr){
//             $('.console08').html('<div class="alert alert-danger" role="alert">Ошибка: сервер вернул статус: '+ xhr.statusText +'</div>');
//             $(".result08").html("<b>Ошибка: "+xhr.responseText+"</b>");
//         },
        
//         dataFilter: function (data, dataType)
//          {

//           var text = $('.console08').html();
//             $('.console08').html(text + '<div class="alert alert-warning" role="alert">3: Идет data Filter...</div>');

//           if (dataType == "json") {
//                     var filteredData = $.parseJSON(data);
//                     return JSON.stringify(filteredData);
//                 } else {
//                    return data;
//                 }
//         },
//         success: function(data){
//             var text = $('.console08').html();
//             $('.console08').html(text + '<div class="alert alert-success" role="alert">4: Обмен завершен!</div>');
//             $(".result08").html("<b>Прибыли данные: "+data['User-Agent']+"</b>");
//             console.log(data);
//         },
//         complete: function() {
//            var text = $('.console08').html(); 
//            $('.console08').html(text + '<div class="alert alert-primary" role="alert">5: AJAX завершен!</div>');
//         }
//      });
// });

// //

// $('.btn09').on('click', function(){

//     //Создаём запрос
//     var url = 'https://api.myjson.com/bins/zrs3y';

//     $.ajax({
//         url: url,
//         method: 'GET'
//     }).then(
//         function(json_data) {
//         console.log(json_data);
//         $(".result09").html("<h2>Прибыли данные:</h2>");

//         for(var i in json_data){
//             $(".result09").html($(".result09").html()+JSON.stringify(json_data[i]));
//         }
//     });

// });


// $('.btn10').on('click', function(){

// // fetch запрос будет выглядеть так:

// fetch('https://api.myjson.com/bins/zrs3y')  
//   .then(  
//     function(response) {  
//         // Первым делом мы проверяем статус ответа и проверяем, успешно ли выполняется запрос (ожидаем 200 статус). 

//         if (response.status !== 200) {  
//         console.log('Looks like there was a problem. Status Code: ' +  
//           response.status);  
//         return;  
//       }
//       // Если всё хорошо, то парсим ответ как JSON.
//       // Examine the text in the response  
//       response.json().then(function(data) {  
//         // Ответом fetch() является Stream-объект. Это означает, что в результате вызова метода json() мы получим Promise, т.к. чтение из подобного объекта является асинхронным.
//         console.log(data);  

//       })
//       .then(function() { 
//         console.log(response.headers.get('Content-Type'));  
//         console.log(response.headers.get('Date'));
//         console.log(response.status);  
//         console.log(response.statusText);  
//         console.log(response.type);  
//         console.log(response.url);  
    
//       });  
//     }  
//   )  
//   .catch(function(err) {  
//     console.log('Fetch Error :-S', err);  
//   });
// });


// $('.btn11').on('click', function(){

// // Один из нюансов в fetch, что мы не получаем сразу в response данные, а Stream-обьект. Это значит, что мы должны наш response парсить, для того, чтобы получить данные.

// fetch('http://localhost:3000/catalog')
//   .then(function (response) {
//     // Если мы хотим отловить обычные ошибки, их нужно обрабатывать в первом блоке .then. И так как мы работаем с промисами, то мы можем их резолвить и реджектить когда хотим

//     if (response.status !== 200) {
//         return Promise.reject(new Error(response.statusText));
//     }
//     return Promise.resolve(response)
//   })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log('data', data);
//     $(".result11").html("<h2>Прибыли данные:</h2>"+data);
//   })
//   // добавили catch, но с спецификации fetch сказано, что туда попадают только network ошибки. То есть связанные с сетью. Например, когда запрос отваливается по таймауту.
//   .catch(function (error) {
//     console.log('error', error);
//   });

// });

// $('.btn12').on('click', function(){

// var status = function (response) {
//     if (response.status !== 200) {
//         return Promise.reject(new Error(response.statusText));
//     }
//     return Promise.resolve(response);
// };

// var json = function (response) {
//     return response.json();
// };
      
// fetch('http://localhost:3000/catalog')
//     .then(status)
//     .then(json)
//     .then(function (data) {
//         console.log('data', data);
//         $(".result12").html("<h2>Прибыли данные:</h2>"+data);
//     })
//     .catch(function (error) {
//         console.log('error', error)
//     });
// });


///////////////////////////////////////////////////////

let initAjax = function() {
var data = [];
var url = 'http://localhost:3000/catalog';

    $.ajax('http://localhost:3000/catalog').then(
      function(json_data) {
          for(var i in json_data) {
              data.push(json_data[i]);
          }
          for (var i=0; i<data.length; i++){
              var $productTemplate = $($('#productItem').html());
              $(".grid-layout").append(makeProductItem($productTemplate, data[i]));
          }
      
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
              }
          }
  
          //
          var shoppingCart = [];
  
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
           * add-to-cart
           */
          $(".add-to-cart").each(function(index, element){
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
  
      });
    };
// initAjax();

/////////////////////////////////////////////////////////////////////
    let initFetch = function() {
    fetch('http://localhost:3000/catalog').then((response) => response.json())
        .then((data) => {
        // console.log(data);
        var shoppingCart = [];

        for (var i=0; i<Object.keys(data).length; i++){
          var $template = $($('#productItem').html());
          $(".grid-layout").append(makeProductItem($template, data[i]));
        }
      
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
              }
          }
         
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
           * add-to-cart
           */
          $(".add-to-cart").each(function(index, element){
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
  
      });
    };
    // initFetch();
});
