const alasql = require('alasql');

/*
*     DATABASE INFORMATION
*/

var db = new alasql.Database();

db.exec("CREATE TABLE product (title string, author string, description string, image_url string, recipe_id number)");

db.exec("INSERT INTO product VALUES ('I can design your webpage', 'John Doe', 'Sveiki sg lankytojai. Nerašant litanijų norėčiau tiesiog pasiskelbti, kad turiu savo galerija bei atlieku darbus už pinigus. Jei ką sudomins, temoje paliksiu kontaktus. Kuriu Twitch.tv overlay, logotipus, WEB dizainus ir daug kitų grafikos darbų.', 'https://picsum.photos/1920/1080/?gravity=center', 110)");





db.exec("INSERT INTO product VALUES ('HTML5, CSS3, jQUERY, PHP, PDO, WORDPRESS services', 'Brogrammers', 'Sveiki, atėjo vasara ir atsirado daugiau laiko, todėl vėl nusprendžiau pradėti teikti puslapių kūrimo paslaugas šiame forume. Galimos paslaugos: HTML5/CSS3 Dizainų kodavimas; Javascript/jQueryStatic/Responsive dizainų kodavimas; Dizainų kodavimai įvairioms TVS sistemoms ( Wordpress, myBB, IPS, etc); PHP, PDO sistemų kūrimas; E-Shop puslapių kūrimas ( Woocommerce paruošimas, bei šablonų kodavimas/programavimas/sutvarkymas ); Kiti puslapių darbai', 'https://picsum.photos/1920/1080?image=1082', 111)");
db.exec("INSERT INTO product VALUES ('Best WEB services!', 'Code Warriors', 'Sveiki, kaip jau žinote esu Martynas ir teikiu programavimo paslaugas. Šiuo dalyku užsiimu gana ilgai, jau kokius 3 metus. Pagrinde dirbu su PHP ir Laravel frameworku. Aš gebu: Sukurti Turinio valdymo sistemą(TVS); Sukoduoti responsive dizainus(IPB/IPS; HTML/CSS; PHP-Fusion).', 'https://picsum.photos/1920/1080?image=1048', 112)");
db.exec("INSERT INTO product VALUES ('HTML, CSS, WORDPRESS, JS, services4you!', 'Accessed Denied', 'Sveiki, Esu Ernestas, kuris laikas dirbau su internetinėmis svetainėmis kaip praktikantas, bet negavau realių darbo pavyzdžių. Dabar yra reikalingi pavyzdžiai, dėlto galiu nebrangiai sukurti svetainę, pritaikyta mobiliajai ir standartiniai versijai. Galiu sukurti svetaines naudojant šias valdymo sistemas: WORDPRESS, IPB, IPS. Pateikiu turinį internete naudojat šias kalbas: HTML, CSS, Nesudėtingus su JAVASCRIPT.', 'https://picsum.photos/1920/1080?image=1021', 113)");
db.exec("INSERT INTO product VALUES ('WORDPRESS & other CMS, im your solution!', 'Byte Me', 'Sveiki, mečiau visus žaidimus ir grįžtu prie savo nišos. Rimtai koduoti pradėjau prieš ~2 / 3 metus, o programuoti prieš 4~ metus. Pagal mano patirtį galima vertinti ir mane, susidaryti įspūdį ką moku, o ko ne. Dirbu ties: PHP (TVS Rašymas; Sistemų konfigūravimas; Visos pageidaujamos funkcijos; PAYSERA integravimas / pritaikymas (mikro / makro); HTML / CSS)… Dizainų kodavimas / taisymas. Bootstrap dėliojimas.', 'https://picsum.photos/1920/1080?image=1002', 114)");
db.exec("INSERT INTO product VALUES ('Cheapest WORDPRESS & HTML WEBPAGES!!!', 'Exterminator', 'Sveiki, kuriu pigiai WP svetaines. Kuriu mokymosi tikslais tad tikrai PIGIAI. Gal kažkam patinka, nori. Kurta pasiremiant pamokomis, kadangi tai pavyzdiniai darbai. Jei pasirinksi mane gausi pačią geriausią kainą ir visai neprastą puslapį! Aš Jūsų geriausias sprendimas!', 'https://picsum.photos/1920/1080?image=1022', 115)");
db.exec("INSERT INTO product VALUES ('Best Design services in the world!', 'Optimize Prime', 'Sveiki, grįžtu prie dizaino su naujais norais ir vizijomis. 5 metus dirbau, kaip programuotojas, todėl tikrai suprantu ką ir kaip reikia padaryti, kad palengvinti jiems darbą. Laisvai galiu kalbėtis su kiekvienu programuotoju, visais HTML ir CSS terminais. Turiu 5 metų patirtį dirbant su Adobe Photoshop, tačiau žvelgiant į šiuolaikines tendencijas ir taisykles patirtis kol kas tik metai. Galiu padaryti: (WEB dizainus; Vizitines korteles; Reklaminius skydelius(bannerius); Telefoninių aplikacijų dizainų; Socialinių tinklų apipavidalinimu(Facebook, Youtube, etc); Dėl darbų, kurių nėra šitame sąraše - kreiptis privačiai).', 'https://picsum.photos/1920/1080?image=983', 116)");
db.exec("INSERT INTO product VALUES ('I do Design, CSS, HTML services really quick!', 'Int Elligence', 'Sveiki, Su photoshopu dirbu ne per ilgiausiai,bet viską moku,atlieku kokybiškai visus darbus. Taigi ką aš moku: ( Piešiu logotipus, Darau bannerius (youtubėj ir t.t), Piešiu dizainus.)', 'https://picsum.photos/1920/1080?image=964', 117)");



export const res = db.exec("SELECT * FROM product");
