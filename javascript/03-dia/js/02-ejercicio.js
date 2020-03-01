
function recorrerDom(node){
    if (node.tagName){
        console.log(node.tagName);
        for (var n of node.childNodes){
            recorrerDom(n);
        }
    }
}

recorrerDom(document.body);
