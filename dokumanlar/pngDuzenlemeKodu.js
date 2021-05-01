function fixpngs(){
var l = document.getElementsByTagName('img');
	for(i=0;i<l.length;i++){
	p = 'images/0.gif';
	n = l[i].getAttribute('src');
	g = n.toLowerCase();
		if(g.substring(g.length-3)=="png"){
		l[i].setAttribute('src',p);
		l[i].style.cssText="filter: progid:DXImageTransform.Microsoft.AlphaImageLoader (src='"+n+"')";
		}
	}
}
window.onload = fixpngs;