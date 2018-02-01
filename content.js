/* Comment-out button, by Wieland van Dijk [w.vandijk@nrc.nl], v1.0, Feb 2018
Injects a comment button in the editor toolbar at honk.nrc.nl */


var ed_toolbar = document.getElementById('ed_toolbar');
var comment_button = document.createElement('input');
comment_button.setAttribute('type', 'button');
comment_button.setAttribute('id', 'qt_content_comment');
comment_button.setAttribute('class', 'ed_button button button-small');
comment_button.setAttribute('value', 'Comment');
comment_button.addEventListener('click', commentOut);
ed_toolbar.appendChild(comment_button);

/* Comments out selected string */
function commentOut() {
	let textarea = document.getElementById('content');
	let len = textarea.value.length;
	let start = textarea.selectionStart;
	let end = textarea.selectionEnd;
	let sel = textarea.value.substring(start, end);
	let comment = `<--// ${sel} //-->`;
	textarea.value =  textarea.value.substring(0,start) + comment + textarea.value.substring(end,len);
}
