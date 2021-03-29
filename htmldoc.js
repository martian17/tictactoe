class HTMLDOC{
    constructor(){
        this.titleText = "";
        this.headPart = new HTMLDOM("","");
        this.bodyPart = new HTMLDOM("","");
        this.headContent = [];
        this.bodyContent = [];
    }
    set title(title){
        this.titleText = title;
    }
    addToHead(elem){
        if(elem.parent){
            elem.parent.remove(elem);
            elem.parent = this.headPart;
        }
        this.headPart.addChild(elem);
    }
    addToBody(elem){
        if(elem.parent){
            elem.parent.remove(elem);
            elem.parent = this.bodyPart;
        }
        this.bodyPart.addChild(elem);
    }
    get text(){
        return `<!DOCTYPE html>
<html lang="en-US">
<head><title>`+this.titleText+`</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
`+this.headPart.text+`
</head>
<body>
`+this.bodyPart.text+`
</body>`;
    }
};

class HTMLDOM{
    constructor(f,e,c){
        this.f = f;
        this.e = e;
        this.parent = null;
        if(c){
            for(var i = 0; i < c.length; i++){

            }
        }
        this.children = c || [];
    }
    addChild(elem){
        //tree has no loop, therefore check
        var p = this.parent;
        while(p){
            if(p === elem){
                throw new Error("Error: The new child element contains the parent.");
                return false;
            }
            p = p.parent;
        }
        if(elem.parent){
            elem.parent.remove(elem);
            elem.parent = this;
        }
        this.children.push(elem);
    }
    remove(elem){
        for(var i = 0; i < this.children.length; i++){
            if(elem === this.children[i]){
                if(elem.parent){
                    elem.parent = null;
                }
                this.children.splice(i,1);
            }
        }
    }
    get text(){
        var childText = "";
        for(var i = 0; i < this.children.length; i++){
            if(!this.children[i]){
                throw new Error("Error: illegal child type"+this.children[i]);
                return false;
            }
            childText+=this.children[i].text || this.children[i];
        }
        return this.f+childText+(this.e || "");
    }
};



module.exports = {
  DOC: HTMLDOC,
  DOM: HTMLDOM
};
