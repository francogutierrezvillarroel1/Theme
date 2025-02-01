define([
    'jquery'
], function ($) {
    'use strict';
    console.log("Called this Hook.");

    $(document).ready(function () {
        $(document).on('change', "[name='country_id']", function () {
            alert("Hi");
        });
    });

    return function (targetModule) {
        targetModule.crazyPropertyAddedHere = 'yes';
        return targetModule;
    };
});
