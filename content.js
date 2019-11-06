var elements = document.getElementsByTagName('*');

for(var i = 0; i < elements.length; i++){
    var element = elements[i];

    for(var j = 0; j < element.childNodes.length; j++){
        var node = element.childNodes[j];

        if(node.nodeType === 3){
            if(node.nodeValue.includes('dog')){
				var index = node.nodeValue.indexOf('dog');
				var before = node.nodeValue.substr(0, index);
				var after = node.nodeValue.substr(index+3, node.nodeValue.length);
				
				var newParent = element.cloneNode(false);
				node.nodeValue = before;
				newParent.nodeValue = after;
                var parent = document.createElement('img');
                parent.setAttribute('src',"https://cdn4.iconfinder.com/data/icons/dogs-1/256/basset_hound-128.png");
                element.append(parent);
				element.append(newParent);
					
            }
        }
    }
}