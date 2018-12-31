// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name default.js
// ==/ClosureCompiler==

// ADD YOUR CODE HERE
function $tag(t) { return document.getElementsByTagName(t); }

function addEventListenerClick(elm) {
	elm.addEventListener('click',
	function(eve) {
		if (eve.target.dataset.bl === 'true') {
			eve.target.style.cssText = '';
			eve.target.dataset.bl = 'false';
		} else {
			eve.target.style.cssText = 'border: 2px solid tomato';
			eve.target.dataset.bl = 'true';
		}
	});
}
function count(tag) {
  var elms = $tag(tag);
  var num = elms.length;
  if (num) {
  	for (var i = 0; i < num; i++) {
  		addEventListenerClick(elms[i]);
  	}
  }
}

const rets = window.prompt('Enter name of tag.', 'a');
if(rets) count(rets);

