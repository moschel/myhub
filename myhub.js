import $ from "jquery";
import "./myhub.less";
import "bootstrap/dist/css/bootstrap.css";

$("body").append(`
    <div class='container'>
        <h1>Goodbye script tags!</h1>
        <a href="#repos">Repos</a> <a href="#puppies">Puppies</a>
        <div id='main'/>
    </div>`);

var updatePage = function(){
    var hash = window.location.hash.substr(1);
    if(!hash) {
        $("#main").html("Welcome home");
    } else {
        System.import("myhub/"+hash+"/"+hash).then(function(moduleFn){
            moduleFn["default"]("#main");
        });
    }
};

$(window).on("hashchange", updatePage);

updatePage();


// Requirement #1: render Welcome Home when the page loads without a hash

// Requirement #2: invoke repos and puppies modules when their hash is 
// clicked (with back button support)

// System.import(path).then(function(moduleFn){
//     moduleFn["default"];
// });