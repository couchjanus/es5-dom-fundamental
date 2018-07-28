import './../sass/styles.scss';
// import _ from 'lodash';
// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

// Get the <button> element with the class 'continue' and change its HTML to 'Next Step...'
$("button.continue").html( "Next Step..." );

// Event Handling
$("button.continue").on( "click", function(event) {
    console.log(jQuery('h2'));
    $(event.target).html( "Next Next Step..." );
});



// выбрать все элементы р в документе:
console.log($("р"));

// выбрать все элементы, имеющие класс btn:
console.log($(".btn"));
// также можно записать следующим образом:
console.log($("*.btn"));

// выбрать а элементы, имеющие класс btn
$("a.btn"); 

// JQuery Получить DOM-элемент body
console.log($("body"));

// Получить DOM-элемент с идентификатором cart-sidebar

console.log($('#cart-sidebar'));

// Обработчики событий

// $(document).ready(
//     function(){
//         console.log('some code...');
//     }
// );

// $(document).ready(
//     function(){
//       console.log($('h1').text());
//     }
// );
 

// Функция .text(newText) заменяет все содержимое у выбранных элементов, на текст newText.

// $(document).ready(
//    function(){
//      console.log($('h1').text('Bla, Bla, Bla...'));
//    }
//  );

// function ready() {

//     $("p").text(
//       "Структура документа загружена и полностью сформирована!");
// }
    
// $(document).ready(ready);
 
    // function ready() {

    //     $("p").text(
    //       "Структура документа загружена и полностью сформирована!");
    //     }
        
    // $().ready(ready); 

    // $(function() {
    //     //DOM-дерево готово
    //     $("p").text(
    //    "Структура документа загружена и полностью сформирована!");
    //  });

    $(document).ready(function(){
       $("p").text(
       "Структура документа загружена и полностью сформирована!");
       
       $('p').css('border', '3px solid blue');
       
       var newCSS = {
        'color':'green',
        'font-size':'16px'
        };
        
       $('p').css(newCSS);
       
       // Например, увеличить отступ сверху, слева и справа для элементов p на 10px:
       
       $('p').css({"padding-left": "+=10","padding-right":"+=10", "padding-top": "+=10"});
       });

       $('span').css('color', function(index, value) {
        if (value!='rgb(0, 255, 0)') {
            return 'red';
            }
       });

       $(document).ready(function(){
        $('p').addClass('red_border');
       });

       $(function() {
        // массив, содержащий набор DOM-элементов Р
        var arrayP = $("p");
        for (var i=0; i<arrayP.length; i++){
            arrayP[i].innerHTML = i + 'DOM-дерево готово';
        }
        $('p').addClass('red_border');
      });
     
    //   $(document).ready(function(){
    //     $('p').removeClass('red_border');
    //   });
      
    $(document).ready(function(){
        if($('p').hasClass('red_border')){
            console.log('Element has class', 'red_border'); 
        }
    });


    $("button.continue").on( "click", function() {
        $('p').toggleClass('red_border');
    });
    


    $(function () {

        $('#cart-trigger').click(function(){
        console.log("jQuery: It's Cart Trigger");
        });

        // $('#cart-trigger').on('click', function(){
        //     console.log("jQuery Event on: It's Cart Trigger");
        //   });
 

    });

    $(function(){
  
        $("#cart-trigger").on('click', function () {
              $("#cart-sidebar").addClass('show-sidebar');
          });
         
          $("#cart-sidebar .remove").on('click', function () {
              $("#cart-sidebar").removeClass('show-sidebar');
          });
   
     });

     $(function(){
        $("#menu-toggle").on('click', function () {
              $('.flexmenu').toggleClass('active');
        });
    });


    $(function(){
     
        $("#catalog").on('click', function () {
          $('.mega-menu').toggleClass('mega-active');
        });
        $(".mega-menu .close").on('click', function () {
          $('.mega-menu').removeClass('mega-active');
        });
       
      });
 


      $('.buy-now').on('click', function () {

        $('.product .product-name').css('display', 'none');
        $('.product .icon').css('display', 'none');
        $('.product .buy-now').css('display','none');
        $('.product .product-detail').css('display', 'block');
        $('.product-menu').css('top', '40%');
      });


    //   $(".buy-now").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name')
    //         .css('display', 'none');
    //         $(e.target).parents('.product').find('.icon').css('display', 'none');
    //         $(e.target).parents('.product').find('.buy-now').css('display','none');
    //         $(e.target).parents('.product').find(' .product-detail').css('display', 'block');
    //         $(e.target).parents('.product-menu').css('top', '40%');
    //     });
    // });


      $('.cancel').on('click', function () {
        $('.product .product-name').css('display', 'block');
        $('.product .icon').css('display', 'block');
        $('.product .buy-now').css('display','block');
        $('.product .product-detail').css('display', 'none');
        $('.product-menu').css('top', '80%');
      });

    //   $(".cancel").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         $(e.target).parents('.product').find('.product-name')
    //         .css('display', 'block');
    //         $(e.target).parents('.product').find('.icon').css('display', 'block');
    //         $(e.target).parents('.product').find('.buy-now').css('display','block');
    //         $(e.target).parents('.product').find(' .product-detail').css('display', 'none');
    //         $(e.target).parents('.product-menu').css('top', '80%');
    //     });
    // });

 
      
      $('.add-to-cart').on('click', function () {
        var y = 180;
        $('.product-wrapper').css('transform', 'rotateY(' + y + 'deg)');
        $('.product-back').addClass('back-is-visible');
    });


    // $(".add-to-cart").each(function(index, element){
    //     $(element).on('click', function (e) {
    //         var y = 180;   
    //         $(e.target).parents('.product-wrapper')
    //         .css('transform', 'rotateY(' + y + 'deg)');
    //         $(e.target).parents('.product-wrapper').find('.product-back').addClass('back-is-visible');
    //     });
    // });


   


 

