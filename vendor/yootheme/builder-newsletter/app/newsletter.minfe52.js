/*! YOOtheme Pro v3.0.0-beta.3 | https://yootheme.com */
(function(e){"use strict";e.on("body","submit",".js-form-newsletter",function(a){a.preventDefault();var s=a.target,o=e.$(".message",s);e.addClass(o,"uk-hidden"),fetch(s.action,{method:"post",body:new FormData(s)}).then(function(n){n.json().then(function(t){if(n.ok){var u=t.message,f=t.redirect;u?(r(u),s.reset()):f?window.location.href=f:r("Invalid response.",!0)}else r(t,!0)},function(){return r(n.statusText,!0)})});function r(n,t){e.removeClass(o,"uk-hidden uk-text-danger"),e.addClass(o,"uk-text-"+(t?"danger":"success")),o.innerText=n}})})(UIkit.util);
