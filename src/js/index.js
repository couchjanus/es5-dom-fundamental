import './../sass/styles.scss';
// import _ from 'lodash';
// import $ from 'jquery';
// window.jQuery = $;
// window.$ = $;

var el = document.body;
// Класс Node определяет следующие важные свойства:
console.log(el);



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
 
      $(".buy-now").each(function(index, element){
        $(element).on('click', function (e) {
            $(e.target).parents('.product').find('.product-name')
            .css('display', 'none');
            $(e.target).parents('.product').find('.icon').css('display', 'none');
            $(e.target).parents('.product').find('.buy-now').css('display','none');
            $(e.target).parents('.product').find(' .product-detail').css('display', 'block');
            $(e.target).parents('.product-menu').css('top', '40%');
        });
    });

      $(".cancel").each(function(index, element){
        $(element).on('click', function (e) {
            $(e.target).parents('.product').find('.product-name')
            .css('display', 'block');
            $(e.target).parents('.product').find('.icon').css('display', 'block');
            $(e.target).parents('.product').find('.buy-now').css('display','block');
            $(e.target).parents('.product').find(' .product-detail').css('display', 'none');
            $(e.target).parents('.product-menu').css('top', '80%');
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
        
   
    let plus = document.getElementsByClassName('plus');
        for (let i=0;i<plus.length; i++) {
            plus[i].addEventListener('click', function(e) {
            let val = parseInt(e.target.previousElementSibling.getAttribute('value'));
            e.target.previousElementSibling.setAttribute('value', val+1);
        });
    }

    let minus = document.getElementsByClassName('minus');
        for (let i=0;i<minus.length; i++) {
            minus[i].addEventListener('click', function(e) {
            let val = parseInt(e.target.nextElementSibling.getAttribute('value'));
            e.target.nextElementSibling.setAttribute('value', val-1);
        });
    }


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

 
//     const content = document.getElementById("cartItem").content;    
//     for (let i=0; i<addcart.length; i++ ){
        
//         addcart[i].addEventListener('click', function (e) {
//         var y = 180;
//         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(' + y + 'deg)';
//         e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
        
//         content.querySelector("span.item-quantities").textContent = this.parentNode.querySelectorAll(":scope > .how-many .quantity-input .quantity")[0].getAttribute('value');

//         content.querySelector("span.item-name").textContent = ' '+this.parentNode.parentNode.querySelectorAll(":scope > .product-name")[0].textContent; 

//         content.querySelector('.item-prices').textContent = this.parentNode.querySelectorAll(":scope > .product-price")[0].textContent;

//         document.querySelector('.cart-items').append(content.cloneNode(true));
      
//     });          
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

                
        const $template = $($('#cartItem').html());
        
        $(".add-to-cart").each(function(index, element){
            $(element).on('click', function (e) {
                var y = 180;    
                $(e.target).parents('.product-wrapper')
                .css('transform', 'rotateY(' + y + 'deg)');
                $(e.target).parents('.grid-item').find('.product-back').addClass('back-is-visible');

                let template = $template.clone();
                
                template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());
        
                template.find(".item-quantities").after(' '+$(this).parents(".product").children(".product-name").text()); 
        
                template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());
                $(".cart-items").append(template);
            });
        });

        // const $template = $($('#cartItem').html());
        
        // $(".add-to-cart").each(function(index, element){
        //     $(element).on('click', function (e) {
        //         var y = 180;    
        //         $(e.target).parents('.product-wrapper')
        //         .css('transform', 'rotateY(' + y + 'deg)');
        //         $(e.target).parents('.grid-item').find('.product-back').addClass('back-is-visible');

        //         let template = $template.clone();
                
        //         template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());
        
        //         template.find(".item-quantities").after(' '+$(this).parents(".product").children(".product-name").text()); 
        
        //         template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());
        //         $(".cart-items").append(template);
        //     });
        // });
                
        // const $template = $($('#cartItem').html());
        
        // $(".add-to-cart").each(function(index, element){
        //     $(element).on('click', function (e) {
        //         var y = 180;    
        //         $(e.target).parents('.product-wrapper')
        //         .css('transform', 'rotateY(' + y + 'deg)');
        //         $(e.target).parents('.grid-item').find('.product-back').addClass('back-is-visible');

        //         let template = $template.clone();
                
        //         template.find(".item-quantities").text($(this).parents(".product").find(".quantity").val());
        
        //         template.find(".item-quantities").after(' '+$(this).parents(".product").children(".product-name").text()); 
        
        //         template.find('.item-prices').text($(this).parents(".product").find(".product-price").text());
        //         $(".cart-items").append(template);
        //     });
        // });