!function(e){function o(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,o),c.l=!0,c.exports}var t={};o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},o.p="",o(o.s=0)}([function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});t(1)},function(e,o,t){"use strict";var n=t(2),c=(t.n(n),t(3)),a=(t.n(c),wp.i18n.__),r=wp.blocks.registerBlockType,s=wp.components,l=s.CheckboxControl,u=s.ToggleControl;r("rescue-me/dog-block",{title:a("Rescue Me - Dog Block"),icon:"heart",category:"common",keywords:[a("Rescue Me \u2014 Dog Block"),a("Dog Block"),a("Rescue Dog Block")],attributes:{metaDogs:{type:"boolean",source:"meta",meta:"rescue_me_meta_good_with_dogs"},metaCats:{type:"boolean",source:"meta",meta:"rescue_me_meta_good_with_cats"},checkboxCats:{type:"boolean",default:!1},checkBox:{type:"boolean",default:!1},done:{type:"boolean",default:!1},boxDone:{type:"string",source:"meta",meta:"bcotodo_gb_metabox"}},edit:function(e){var o=e.attributes,t=o.metaDogs,n=(o.metaCats,o.checkboxCats),c=(o.checkDogs,o.checkBox),r=o.done,s=(o.boxDone,e.className),i=e.setAttributes;return wp.element.createElement("div",{className:s},wp.element.createElement(l,{heading:a("Option A - single checkbox","rescue-me"),label:a("Good with Dogs","rescue-me"),checked:t,onChange:function(e){i({metaDogs:e})}}),wp.element.createElement(l,{heading:a("Option B - copy Brezo's two fields but with Checkbox","rescue-me"),label:a("Good with Cats","rescue-me"),checked:n,onChange:function(e){i({checkboxCats:e}),i({metaCats:e.toString()})}}),wp.element.createElement(u,{heading:a("Checkbox D - toggle - ala Brezo","rescue-me"),label:a("Good with Kids (Brezo version)","bcotodo"),checked:r,onChange:function(e){i({done:e}),i({boxDone:e.toString()})}}),wp.element.createElement(l,{heading:a("Checkbox C - plain checkbox no meta","rescue-me"),label:a("plain checkbox","rescue-me"),checked:c,onChange:function(e){i({checkBox:e})}}))},save:function(e){return null}})},function(e,o){},function(e,o){}]);