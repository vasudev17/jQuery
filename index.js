// $(document).ready(function() {
//     $("h1").css("color","red");
// });
// // We need to check if jQuery has completely loaded if we added the script in the head of the
// //HTML file. 

// document.querySelector("h1").style.color="red";
// $("h1").css("color","red");

// document.querySelectorAll("button");
// $("button");
// $("h1").addClass("big-title margin-50");
// $("h1").text("BYE!!");
// $("button").text("Dont click me");
// $("button").html("<em>Hey</em>");
// $("a").attr("href","https://www.yahoo.com");

// $("h1").click(function() {
//     $("h1").css("color","red");
// });

// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color = "purple";
//     });
// }
// $("button").click(function() {
//     $("h1").css("color","purple");
// });
// $("input").keypress(function(event) {
//     console.log(event.key);
// })

// $(document).keypress(function(event) {
//     //console.log(event.key);
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover", function(){
//     $("h1").css("color","purple");
// });
// $("h1").before("<button>Before</button>"); 
// //<button>Before</button><h1>Hello.</h1>
// $("h1").after("<button>After</button>");
// //<h1>Hello.</h1><button>Before</button>
// $("h1").prepend("<button>Prepend</button>");
// //<h1><button>Prepend</button>Hello.</h1>
// $("h1").append("<button>Append</button>");
// //<h1>Hello.<button>Append</button></h1>

// $("button").remove();
// $("button").on("click", function(){
//     $("h1").hide();
// });
// $("button").on("click", function(){
//     $("h1").show();
// });

// $("button").on("click", function(){
//     $("h1").toggle();
// });

// $("button").on("click", function(){
//     $("h1").fadeToggle();     //fadeOut -> fadeIn
// });
// $("button").on("click", function(){
//     $("h1").slideToggle();      //slideUp -> slideDown
// });

// $("button").on("click", function(){
//     $("h1").css("color","purple");
//     $("h1").animate({opacity: 0.5});
// });
// $("button").on("click", function(){
//     $("h1").css("color","purple");
//     $("h1").slideUp().slideDown().animate({opacity: 0.5});
// });
