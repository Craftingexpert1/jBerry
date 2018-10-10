//version 1.0 
var elems;
var jBerry = function(selector) { 
  elems = document.querySelectorAll(selector);
  return new blackberries(elems, selector); 
}
class blackberries { 
  constructor (elems) { 
    this._elements = elems; 
  } get(get) { 
    return this._elements[get]; 
  } hide () { 
    this._elements.forEach((element) => element.style.display = "none"); 
  } show () { 
    this._elements.forEach((element) => element.style.display = "block"); 
  } tgl () { 
    this._elements.forEach((element) => (element.style.display === "none") ? element.style.display = "block" : element.style.display = "none"); 
  } outhtml (inthis) { 
    this._elements.forEach((element) => element.outerHTML = inthis); 
  } html (inthis) { 
    this._elements.forEach((element) => element.innerHTML = inthis);
  } text (inthis) {
    this._elements.forEach((element) => element.innerText = inthis);
  } clsAdd (className) {
    this._elements.forEach((element) => element.classList.add(className));
  } clsRmv (className) {
    this._elements.forEach((element) => element.classList.remove(className));
  } clsTgl (className) {
    this._elements.forEach((element) => {
      const classList = element.classList; (classList.contains(className)) ? classList.remove(className) : classList.add(className); 
    }); 
  } attr (NAME, VALUE) {
    this._elements.forEach((element) => element.setAttribute(NAME, VALUE)); 
  } id (VALUE) { 
    this._elements.forEach((element) => element.setAttribute("id", VALUE));
  } clk (duck) { 
    this._elements.forEach((element) => element.addEventListener("click", duck)); 
  } fcs (duck) {
    this._elements.forEach((element) => element.addEventListener("focus", duck));
  } blur (duck) {
    this._elements.forEach((element) => element.addEventListener("blur", duck));
  } mseover (duck) {
    this._elements.forEach((element) => element.addEventListener("mouseover", duck)); 
  } msedown (duck) {
    this._elements.forEach((element) => element.addEventListener("mousedown", duck));
  } mseup (duck) { 
    this._elements.forEach((element) => element.addEventListener("mouseup", duck));
  } msedbl (duck) { 
    this._elements.forEach((element) => element.addEventListener("dblclick", duck));
  } mseenter (duck) {
    this._elements.forEach((element) => element.addEventListener("mouseenter", duck));
  } mseright (duck) {
    this._elements.forEach((element) => element.addEventListener("contextmenu", duck));
  } mseleave (duck) {
    this._elements.forEach((element) => element.addEventListener("mouseleave", duck)); 
  } msemove (duck) { 
    this._elements.forEach((element) => element.addEventListener("mousemove", duck));
  } mseout (duck) { 
    this._elements.forEach((element) => element.addEventListener("mouseout", duck)); 
  } keypress (duck) { 
    this._elements.forEach((element) => element.addEventListener("keypress", duck)); 
  } style (stuff) {
    this._elements.forEach((element) => element.setAttribute("style", stuff));
  } bg (stuff) {
    this._elements.forEach((element) => element.style.background = stuff);
  } color (stuff) {
    this._elements.forEach((element) => element.style.color = stuff);
  } border (stuff) { 
    this._elements.forEach((element) => element.style.border = stuff); 
  } transform (stuff) { 
    this._elements.forEach((element) => element.style.transform = stuff);
  } transl (stuff, axis) { 
    this._elements.forEach((element) => eval("element.style.transform" + "+=" + "'translate" + axis + "(" + stuff + ")'"));
  } rot (stuff, axis) { 
    this._elements.forEach((element) => eval("element.style.transform" + "+=" + "'rotate" + axis + "(" + stuff + ")'")); 
  } scl (stuff, axis) { 
    this._elements.forEach((element) => eval("element.style.transform" + "+=" + "'scale" + axis + "(" + stuff + ")'")); 
  } persp (stuff) { 
    this._elements.forEach((element) => eval("element.style.transform" + "+=" + "'perspective" + "(" + stuff + ")'"));
  } skew (stuff, axis) { 
    this._elements.forEach((element) => eval("element.style.transform" + "+=" + "'skew" + axis + "(" + stuff + ")'")); 
  } anim (stuff) { 
    this._elements.forEach((element) => eval("element.style.animation" + "=" + stuff));
  }
} 
jBerry.plugin = function() {
  $ = jBerry; 
} 
jBerry.plugout = function(thiscool) {
  $ = (thiscool === "use-jquery") ? jQuery : undefined;
} 
jBerry.newSelect = function(variable) {
  eval(variable + " = " + "jBerry");
}
