parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EdYQ":[function(require,module,exports) {
module.exports="poster_unavailable.9d98da24.jpg";
},{}],"ryZl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.displaySearch=void 0;var e=t(require("../img/poster_unavailable.jpg"));function t(e){return e&&e.__esModule?e:{default:e}}var a=document.querySelector(".search__input"),r="https://image.tmdb.org/t/p/w500/",s="https://image.tmdb.org/t/p/original/",o=function(t){var s=document.querySelector(".top__rated"),o=document.querySelector(".output"),c=document.querySelector(".search__results--heading"),i=t.results,l=t.total_results;s.classList.add("hideAll"),c.innerText=0===l?"No results found.":"".concat(l," results found");var n="",d="";i.forEach(function(t){"movie"===t.media_type?n+='\n            <div class="template__wrapper">\n                <img src='.concat(null===t.poster_path?e.default:r+t.poster_path," data-movie-id=").concat(t.id,' class="search__movie--poster" alt="" />\n                <h4 class="search__movie--title">').concat(t.title,"</h4>\n            </div>"):"tv"===t.media_type&&(d+='\n            <div class="template__wrapper">\n                <img src='.concat(null===t.poster_path?e.default:r+t.poster_path," data-movie-id=").concat(t.id,' class="search__movie--poster" alt="" />\n                <h4 class="search__movie--title">').concat(t.name,"</h4>\n            </div>"))}),o.innerHTML=n+d,a.value=""};exports.displaySearch=o;
},{"../img/poster_unavailable.jpg":"EdYQ"}],"ocGo":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.welcome=void 0;var e="https://image.tmdb.org/t/p/original/",t=function(t){var o=document.querySelector(".welcome"),n=t.results[11],c=e+n.backdrop_path,a=n.title,r=n.overview,i="https://api.themoviedb.org/3/movie/"+n.id+"?api_key=e52593a87eedaa85c0101c33dea06770&language=en-US";o.style.backgroundImage="url(".concat(c,")"),console.log(t),fetch(i).then(function(e){return e.json()}).then(function(e){e.genres;var t='\n                <div class="welcome__content">\n                    <h1 class="welcome__title">'.concat(a,'</h1>\n                    <div class="welcome__description--container">\n                        <p class="welcome__description">').concat(r,'</p>\n                        <a href="#" target="_blank" class="welcome__button">View more <i class="fas fa-long-arrow-alt-right"></i></a>\n                    </div>\n                </div>');o.innerHTML=t}).catch(function(e){return e})};exports.welcome=t;
},{}],"B56O":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.findById=void 0;var a="https://image.tmdb.org/t/p/w500/",e=["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],t=function(e){fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=e52593a87eedaa85c0101c33dea06770&language=en-US").then(function(a){return a.json()}).then(function(e){var t=document.querySelector(".modal__card");console.log(e);var n=e.genres,o=e.release_date.split("-"),s="";n.forEach(function(a){s+='<li class="modal__item">'.concat(a.name,"</li>")});var c='\n                    <div class="modal__poster--container">\n                        <img src='.concat(a+e.poster_path,' alt="Poster" class="modal__poster">\n                    </div>\n                    <div class="modal__content">\n                        <div class="modal__title--wrapper">\n                            <p class="modal__rate"><span class="modal__rate--sizeup"><i class="fas fa-star"></i> ').concat(e.vote_average,'</span> / 10</p>\n                            <h1 class="modal__title">').concat(e.title,'</h1>\n                            <ul class="modal__list">').concat(s,'</ul>\n                            <p class="modal__releaseDate">Release date: ').concat(o[1],", ").concat(o[2],", ").concat(o[0],'</p>\n                            <p clas="modal__runtime">Duration: ').concat(e.runtime,'min</p>\n                        </div>\n                        <div class="modal__synopsis--wrapper">\n                            <h3 class="modal__overview--heading">Synopsis</h3>\n                            <p class="modal__overview">').concat(e.overview,'</p>\n                            <a href="').concat(e.homepage,'" target="_blank" class="modal__button">Homepage <i class="fas fa-long-arrow-alt-right"></i></a>\n                        </div>\n                    </div>');t.innerHTML=c}).catch(function(a){return a})};exports.findById=t;
},{}],"qqru":[function(require,module,exports) {

},{}],"fz7N":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.displayTopRatedMovies=void 0;var t="https://image.tmdb.org/t/p/w342/",e=function(e){var o=document.querySelector(".top__rated--movies"),a=document.querySelector(".top__rated--heading"),r=e.results;a.innerText="Top Rated Movies";var s="";r.forEach(function(e){s+='\n        <div class="top__rated--wrapper">\n            <img src='.concat(t+e.poster_path," data-movie-id=").concat(e.id,' class="top__rated--poster" alt="" />\n            <p class="top__rated--title">').concat(e.title,"</p>\n        </div>")}),o.innerHTML=s};exports.displayTopRatedMovies=e;
},{}],"d6sW":[function(require,module,exports) {
"use strict";var e=require("./movieSearch.js"),t=require("./welcome.js"),i=require("./findById.js"),o=require("./upcomingMovies.js"),n=require("./topRatedMovies.js"),r=document.querySelector(".search__input"),a=document.querySelector(".search"),c="e52593a87eedaa85c0101c33dea06770",u="https://api.themoviedb.org/3/search/multi?api_key="+c+"&include_adult=false",d="https://api.themoviedb.org/3/movie/upcoming?api_key="+c,s="https://api.themoviedb.org/3/movie/top_rated?api_key="+c,l=function(e,t){fetch(e).then(function(e){return e.json()}).then(function(e){return t(e)}).catch(function(e){return e})};r.addEventListener("keyup",function(e){""===r.value||13===e.keyCode&&m()}),a.addEventListener("click",function(){""===r.value||m()});var m=function(){var t=r.value;l(u+"&query="+t,e.displaySearch)},v=function(){l(d,t.welcome),l(d,o.displayUpcomingMovies),l(s,n.displayTopRatedMovies)},p=function(){var e=document.querySelector(".modal"),t=document.querySelector(".modal__card");document.querySelector(".close__modal").addEventListener("click",function(){t.innerHTML="",e.classList.remove("isShown")}),document.addEventListener("click",function(t){var o=t.target,n=o.dataset.movieId;"img"===o.tagName.toLowerCase()&&(e.classList.add("isShown"),(0,i.findById)(n))})};p(),v();
},{"./movieSearch.js":"ryZl","./welcome.js":"ocGo","./findById.js":"B56O","./upcomingMovies.js":"qqru","./topRatedMovies.js":"fz7N"}]},{},["d6sW"], null)
//# sourceMappingURL=main.0dc7ac40.js.map