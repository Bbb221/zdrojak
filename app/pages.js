// testovaci data
//Nejprve jsme si vytvořili testovací data v proměnné pages (v příštím díle již budeme získávat data z databáze).

var pages = {
    'obchodni-podminky': {
        'title': 'Obchodní podmínky',
        'content': 'Lorem ipsum set dolorem'
    },
    'doprava-a-platba': {
        'title': 'Obchodní podmínky',
        'content': 'Lorem ipsum set dolorem'
    },
    'kontakt': {
        'title': 'Kontakt',
        'content': 'Lorem ipsum set dolorem'
    }    
};

/**
 * GET /pages
 * Metoda index() zavolá res.json(), která převede objekt do formátu JSON a odešle ho zpět prohlížeči
 */
exports.index = function(req, res){
    res.json(pages);
};

/**
 * GET /pages/:page
 * Metoda show() kontroluje, zda zadanou URL zná. Pokud ano, odešle do  prohlížeče data konkrétní stránky opět ve formátu JSON. Pokud nikoliv, zavolá se metoda res.send(), která vrátí prohlížeči odpověď HTTP 404 Not Found 
 */
exports.show = function(req, res){
    page = pages[req.params.page]; // Parametr req.params.page se vytvoří automaticky (page je jednotné číslo pages, vytvoří se přes modul lingo)
    if (page) {
        res.json(page);
    } else {
        res.send(404);
    }
};

/**
 * POST /pages
 */
exports.create = function(req, res){
    //...
};

/**
 * PUT /pages/:page
 */
exports.update = function(req, res){
    //...
};

/**
 * DELETE /pages/:page
 */
exports.destroy = function(req, res){
    //...
};

/*
	Skript spusťte příkazem node server.js. Fungovat nyní budou dvě URL http://localhost:5000/pages vrací všechny stránky, http://localhost:5000/pages/obchodni-podminky např. vrátí stránku Obchodní podmínky ve formátu JSON. Všechny metody jsou součástí objektu exports, který specifikuje, co z daného modulu bude dostupné zvenčí.
*/