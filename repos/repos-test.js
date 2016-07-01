import QUnit from "steal-qunit";
import repos from "./repos";
import clone from 'steal-clone';
import $ from 'jquery';

QUnit.module("myhub/repos/");

QUnit.test("basics", function(){
    QUnit.stop();
    var fixtureEl = document.getElementById("qunit-fixture");

    repos(fixtureEl);

    QUnit.equal(
        fixtureEl.innerHTML,
        "Loading...", "starts with loading");

    var interval = setInterval(function(){
        var dl = fixtureEl.getElementsByTagName("dl");
        if(dl.length === 1) {
            QUnit.ok(true, "inserted a dl");
            QUnit.start();
            clearInterval(interval);
        }
    },100);
});

QUnit.asyncTest("basics with dependency injection", function(){
    var jQuery = function(selector){
        return $(selector)
    };
    jQuery.ajax = function(options){
        setTimeout(function(){
            options.success({
                data: [{
                    url: "http://stealjs.com",
                    name: "StealJS",
                    description: "Futuristic Module Loader"
                }]
            });

            QUnit.equal(
                $("#qunit-fixture").html(),
                '<dl class="dl-horizontal">'+
                '<dt><a href="http://stealjs.com">StealJS</a></dt><dd>Futuristic Module Loader</dd>'+
                '</dl>',
                "updated with request");
            QUnit.start();
        },1);
    };

    clone({
        "jquery": {"default": jQuery}
    }).import("myhub/repos/repos").then(function(module){
        var repos = module["default"];

        var fixtureEl = document.getElementById("qunit-fixture");
        repos(fixtureEl);
    });
});
