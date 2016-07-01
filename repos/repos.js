import $ from "jquery";
import "bootstrap/dist/css/bootstrap.css";

export default function(selector){

    $(selector).html("Loading...")
    $.ajax({
        url: "https://api.github.com/users/justinbmeyer/repos",
        jsonp: "callback",
        dataType: "jsonp",
        success: function( response ) {
            var defs = response.data.map(function(repo){
                return `<dt><a href="${repo.url}">${repo.name}</a></dt><dd>${repo.description}</dd>`
            });
            $(selector).html("<dl class='dl-horizontal'>"+defs.join("")+"</dl>");
        }
    });
}
