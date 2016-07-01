/*myhub@1.0.0#repos/repos*/
define([
    'jquery',
    'css!bootstrap/dist/css/bootstrap.css'
], function ($__0, $__2) {
    'use strict';
    if (!$__0 || !$__0.__esModule)
        $__0 = { default: $__0 };
    if (!$__2 || !$__2.__esModule)
        $__2 = { default: $__2 };
    var $ = $__0.default;
    $__2;
    var $__default = function (selector) {
        $(selector).html('Loading...');
        $.ajax({
            url: 'https://api.github.com/users/justinbmeyer/repos',
            jsonp: 'callback',
            dataType: 'jsonp',
            success: function (response) {
                var defs = response.data.map(function (repo) {
                    return '<dt><a href="' + repo.url + '">' + repo.name + '</a></dt><dd>' + repo.description + '</dd>';
                });
                $(selector).html('<dl class=\'dl-horizontal\'>' + defs.join('') + '</dl>');
            }
        });
    };
    return {
        get default() {
            return $__default;
        },
        __esModule: true
    };
});