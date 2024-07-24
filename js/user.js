jQuery(function(){"use strict";var $=jQuery;$('.tgp-header .tgp-menu-open, .tgp-header .tgp-menu-close').click(function(){$('.tgp-header .tgp-menu-open, .tgp-header .tgp-menu-close').toggleClass('d-none');$('.tgp-header .tgp-menu').toggleClass('d-none')});$('.schema-faq .schema-faq-question').click(function(){$(this).siblings('.schema-faq-answer').toggle();$(this).toggleClass('tgp-opened')});var tgp_sticky_aside='';function tgp_sticky(){if(tgp_sticky_aside==''){tgp_sticky_aside=new Sticky('body:not(.single-post) aside .tgp-steps')}}
if($(window).width()>=992){tgp_sticky()}
$(window).resize(function(){if($(window).width()>=992){tgp_sticky()}else if(tgp_sticky_aside!=''){tgp_sticky_aside.destroy();tgp_sticky_aside=''}});var parameters=new URLSearchParams(window.location.search);if(parameters.has('tgp-open-chat')&&parameters.get('tgp-open-chat')=='true'){LiveChatWidget.call('maximize')}
$(document).on('wpcf7mailsent',function(){location='/free-case-review/?tgp-success=true'})})

