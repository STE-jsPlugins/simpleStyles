/*

PROGRAMMED BY STE-DEVS

VERSION 1.0.0

*/
var exec=run=eval;eval=undefined;
Element.prototype.setContent = function(content,type) { const elm = this; if (type != 0 && type != 1) { if (!(elm.tagName.toUpperCase() == "TEXTAREA") && !(elm.tagName.toUpperCase() == "INPUT")) type = 0; else type = 1; } if (type === 1) { return elm.value = content; } return elm.textContent = content; }
Element.prototype.setBackground = function(color) { const elm = this; if (!elm.style.background || !elm.style.backgroundColor) { if (!elm.hasAttribute("style")) elm.setAttribute("style","background: "+color); else elm.style.background = color; }else { elm.style.background = color; elm.style.backgroundColor = color; }}
Element.prototype.setTextColor = function(color) { const elm = this; if(!elm.hasAttribute("style")) elm.setAttribute("style",""); elm.style.color = color; }
Element.prototype.getStyle = function(type) { const elm = this; const styles = getComputedStyle(elm); return styles.getPropertyValue(type); }
Element.prototype.setStyle = function(type, value) { type = type.toLowerCase(); value = value.toLowerCase(); const elm = this; if(!elm.hasAttribute("style")) elm.setAttribute("style",""); const cmd = "document.querySelector('#"+elm.id+"').style."+type+" = '"+value+"'"; run(cmd.toString()); }
