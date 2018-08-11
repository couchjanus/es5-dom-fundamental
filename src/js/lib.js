export function makeProductItem($template, product){
    const keys = Object.keys(product);
    keys.forEach(function(key) {
        let selector = '.product-'+ key;
        switch(key){
            case 'id':
                $template.find(selector).attr('productId', product[key]);
                break;
            case 'picture':
                $template.find(selector).attr('src', product[key]);
                break;
            default:
                $template.find(selector).text(product[key]);
        }
    });
    return $template;
}

export function createRequest() {
    var httpRequest = false;
    if (window.XMLHttpRequest)
    {
        //Gecko-совместимые браузеры, Safari, Konqueror
        httpRequest = new XMLHttpRequest();
        httpRequest.overrideMimeType('text/xml');
    }
    else if (window.ActiveXObject)
    {
        //Internet explorer
        try
        {
            httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }    
        catch (CatchException)
        {
            httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
        }
    }

    if (!httpRequest)
    {
        console.log("Невозможно создать XMLHttpRequest");
    }
    return httpRequest;
} 

export function printConsole(text, selector) {
    document.querySelector(selector).innerHTML += text;
}

