var express  = require('express')
  , resource = require('express-resource')
  , app = express();

app.resource('pages', require('./app/pages'));
app.listen(process.env.PORT || 5000);
//REST architektuře, která umožňuje výrazně jednodušší testování a pozdější snadné napojení např. pro aplikace pro chytré telefony přes RESTful API

/*
Nejprve načítáme framework Express a modul Express Resource, který výrazně usnadňuje vytvoření RESTful API. Dále vytvoříme novou instanci frameworku Express.

Metoda app.resource() vytváří API pro daný zdroj, v našem případě pro stránky. Druhý parametr metody načítá soubor /app/pages.js, kde budou metody pro obsluhu požadavků, jak uvidíte za okamžik. Všimněte si, že není potřeba zadávat koncovku načítaného souboru.

Nakonec zavoláme metodu app.listen(). Říká, že server má poslouchat na portu 5000, pokud není nastavena proměnná prostředí PORT (ta je důležitá pro Heroku).
*/