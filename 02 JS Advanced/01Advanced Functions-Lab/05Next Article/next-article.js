function getArticleGenerator(input){
	const div=document.getElementById('content');   
	let i=0;
	function nextArticle(){
		if(i==input.length){
			return;
		}
		let html=document.createElement('article');
		let p=document.createElement('p');
		p.textContent=	`{input[i++]}`;
		html.appendChild(p);

		div.innerHTML+=html;
	}
	return nextArticle;
}