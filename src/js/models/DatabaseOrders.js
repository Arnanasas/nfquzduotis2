const alasql = require('alasql');

/*
*     DATABASE INFORMATION
*/
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const authors = [
'Byte Me',
'Dirty Bits',
'Accessed Denied',
'Cup O’ Java',
'Angry Nerds',
'Int Elligence;',
'Brogrammers',
'Short Circuits',
'Optimize Prime',
'Exterminators',
'The ERRORs',
'Code Warriors'
];

const db = new alasql.Database();

db.exec("CREATE TABLE orders (title string, date string, author string, description string, image_url string, recipe_id number)");

db.exec(`INSERT INTO orders VALUES ('WEBDESIGN request', '${new Date(2018, 8, 1)}', '${authors[getRandomInt(12)]}', 'Aš noriu paprasto ir modernaus WEB dizaino, būtų malonu jį gauti per savaitę.', 'img/codescreen.jpg', 110)`);
db.exec(`INSERT INTO orders VALUES ('WORDPRESS puslapis', '${new Date(2018, 7, 21)}', '${authors[getRandomInt(12)]}', 'Norėčiau savo blogą iš socialinio tinklo perkelti į nuosavą puslapį. Darbas nėra skubus.', 'img/codescreen.jpg', 111)`);
db.exec(`INSERT INTO orders VALUES ('Puslapio Dizainas', '${new Date(2018, 7, 20)}', '${authors[getRandomInt(12)]}', 'Rašau pasiteirauti, kokia kaina galima būtų "pigiausiai" užsisakyti dizainą?', 'img/codescreen.jpg', 112)`);
db.exec(`INSERT INTO orders VALUES ('Reikalingas puslapis blogams', '${new Date(2018, 7, 9)}', '${authors[getRandomInt(12)]}', 'nereikia nieko įmantraus, tiesiog puslapio, kuriame galėčiau rašyti blogus kiekvienai dienai bei jais dalintis kituose soc. Tinkluose . ', 'img/codescreen.jpg', 122)`);
db.exec(`INSERT INTO orders VALUES ('Reikia puslapio aukoms rinkti ', '${new Date(2018, 7, 9)}', '${authors[getRandomInt(12)]}', 'Labai reikia puslapio firmai aukoms rinkti pagalbos nesulaukiantiems asmenims. Turėtų būti anketų vieta su apklausa bei info vieta dėl ko renkami pinigai ', 'img/codescreen.jpg', 123)`);
db.exec(`INSERT INTO orders VALUES ('Reikia puslapio statymo paslaugoms', '${new Date(2018, 7, 9)}', '${authors[getRandomInt(12)]}', 'Turetų būti originalaus dizaino su skyreliais apie mus, darbai, foto galerija, kontaktai. ', 'img/codescreen.jpg', 124)`);
db.exec(`INSERT INTO orders VALUES ('Paprastas HTML puslapis', '${new Date(2018, 7, 15)}', '${authors[getRandomInt(12)]}', 'Rašau pasiteirauti, kokia kaina galima būtų "pigiausiai" užsisakyti dizainą?', 'img/codescreen.jpg', 113)`);
db.exec(`INSERT INTO orders VALUES ('Dizainas į HTML & CSS', '${new Date(2018, 7, 14)}', '${authors[getRandomInt(12)]}', 'Turiu puslapio dizainą, jį reikia paversti į HTML & CSS, per mėnesį.', 'img/codescreen.jpg', 114)`);
db.exec(`INSERT INTO orders VALUES ('Paprastas puslapis su TVS', '${new Date(2018, 7, 10)}', '${authors[getRandomInt(12)]}', 'Reikia paprasto puslapio su TVS, neskubiai.', 'img/codescreen.jpg', 115)`);
db.exec(`INSERT INTO orders VALUES ('HTML puslapiukas', '${new Date(2018, 7, 9)}', '${authors[getRandomInt(12)]}', 'Reikia paprasto Html puslapio - greitai.', 'img/codescreen.jpg', 116)`);
db.exec(`INSERT INTO orders VALUES ('Modernaus dizaino', '${new Date(2018, 7, 9)}', '${authors[getRandomInt(12)]}', 'Reikia modernaus dizaino', 'img/codescreen.jpg', 117)`);
db.exec(`INSERT INTO orders VALUES ('Reikia hostingo sistemos', '${new Date(2018, 7, 9)}', '${authors[getRandomInt(12)]}', 'Turiu verslo idėją, reikia pagalbos ją realizuojant.', 'img/codescreen.jpg', 118)`);
db.exec(`INSERT INTO orders VALUES ('Reikia sistemos surištos su firmos baze', '${new Date(2018, 7, 9)}', '${authors[getRandomInt(12)]}', 'Reikia sistemos surištos su firmos baze, deadline nera svarbus', 'img/codescreen.jpg', 119)`);
db.exec(`INSERT INTO orders VALUES ('Reikia puslapio pardavimams', '${new Date(2018,6, 9)}', '${authors[getRandomInt(12)]}', 'Noriu paprasto puslapio, kuriame galėčiau užsiimti prekyba. Dizainas nėra svarbu, tik kad patrauktų akį, logotipą jau turiu. ', 'img/codescreen.jpg', 121)`);
db.exec(`INSERT INTO orders VALUES ('Reikalingas forumas mokslų temoms', '${new Date(2018,6, 9)}', '${authors[getRandomInt(12)]}', 'Noriu dizaino panašaus į paprastų forumų, taip pat noriu skyreliį atskiroms pamokoms kaip pvz lietuviu kalba, matematika (iki 9kl). ', 'img/codescreen.jpg', 125)`);
db.exec(`INSERT INTO orders VALUES ('Reikia puslapio apie mane', '${new Date(2018,6, 2)}', '${authors[getRandomInt(12)]}', 'Dizainas visiškai neturi įtakos, tačiau norečiau vietos nuotraukoms, savo sugebėjimams, išsilavinimui, na kaip CV panašiai . ', 'img/codescreen.jpg', 126)`);
db.exec(`INSERT INTO orders VALUES ('Reikalinga programa', '${new Date(2018,6, 2)}', '${authors[getRandomInt(12)]}', 'reikalinga programa padedanti merginoms išsirinkti ką rytais vilktis. Kad būtų galima sukelti visų drabužių nuotraukas pagal kategorijas ir paspaudus mygtuką *random* būtų išrenkama apranga. ', 'img/codescreen.jpg', 127)`);
db.exec(`INSERT INTO orders VALUES ('Reikia reklaminio puslapio', '${new Date(2018,6, 2)}', '${authors[getRandomInt(12)]}', 'Norėčiau pareklamuoti savo auskarų vėrimo paslaugas būtent Kaune. Tai turėtų būti su kontaktais, darbų (foto) pavyzdžiais bei patirties informacija. Dizaine nenusimanau, todėl tikiuosi kažką pasiūlysite. ', 'img/codescreen.jpg', 128)`);
db.exec(`INSERT INTO orders VALUES ('Reikalingos paslaugos', '${new Date(2018,6, 2)}', '${authors[getRandomInt(12)]}', 'Sveiki, reikalingi štai šitie darbai. HTML5/CSS dizainų kodavimas', 'img/codescreen.jpg', 130)`);
db.exec(`INSERT INTO orders VALUES ('Reikia HTML ir CSS puslapio', '${new Date(2018,6, 2)}', '${authors[getRandomInt(12)]}', 'Reikia HTML5/CSS dizainų kodavimo, neskubiai', 'img/codescreen.jpg', 131)`);
db.exec(`INSERT INTO orders VALUES ('Reikia IPS dizaino kodavimo', '${new Date(2018,6, 3)}', '${authors[getRandomInt(12)]}', 'Norėčiau, jog mano IPS dizainas būtų sukoduotas, kuo greičiau.', 'img/codescreen.jpg', 132)`);
db.exec(`INSERT INTO orders VALUES ('Slenkančios reklamos kodas', '${new Date(2018,6, 3)}', '${authors[getRandomInt(12)]}', 'Reikia į mano puslapį įterpti slenkančias reklamas. Ar galite padėti?', 'img/codescreen.jpg', 133)`);
db.exec(`INSERT INTO orders VALUES ('Reikia UX dizainerio', '${new Date(2018, 5, 3)}', '${authors[getRandomInt(12)]}', 'Reikalingas UX ir UI dizainas skubiai.', 'img/codescreen.jpg', 134)`);
db.exec(`INSERT INTO orders VALUES ('Reikalingas puslapis įmonei', '${new Date(2018, 5, 3)}', '${authors[getRandomInt(12)]}', 'Paprastas-reprezentacinis puslapis įmonei.', 'img/codescreen.jpg', 135)`);
db.exec(`INSERT INTO orders VALUES ('NodeBB specialistas', '${new Date(2018, 5, 3)}', '${authors[getRandomInt(12)]}', 'Reikalingas NodeBB specialistas pagalbai.', 'img/codescreen.jpg', 136)`);
db.exec(`INSERT INTO orders VALUES ('Dizaineris - skubiai', '${new Date(2018, 5, 3)}', '${authors[getRandomInt(12)]}', 'Reikalingas dizaineris greitam darbeliui, paprastas reprezentacinis puslapis.', 'img/codescreen.jpg', 135)`);
db.exec(`INSERT INTO orders VALUES ('Norėčiau internetinio radijo', '${new Date(2018, 5, 3)}', '${authors[getRandomInt(12)]}', 'Reikalingas sukurtas internetinis radijas su integruota valdymo sistema', 'img/codescreen.jpg', 138)`);
db.exec(`INSERT INTO orders VALUES ('Svetainės admin', '${new Date(2018, 5, 3)}', '${authors[getRandomInt(12)]}', 'Reikia pastovaus svetainės administratoriaus', 'img/codescreen.jpg', 139)`);
db.exec(`INSERT INTO orders VALUES ('Internetinė parduotuvė', '${new Date(2018, 5, 8)}', '${authors[getRandomInt(12)]}', 'Reikalinga internetinė parduotuvė žūklės reikmenims, neskubu.', 'img/codescreen.jpg', 140)`);
db.exec(`INSERT INTO orders VALUES ('Vartotojo valdymo panele', '${new Date(2018, 5, 8)}', '${authors[getRandomInt(12)]}', 'Sveiki mano puslapiui reikia vartotojo valdymo paneles', 'img/codescreen.jpg', 142)`);
db.exec(`INSERT INTO orders VALUES ('Sutaisyti CSS', '${new Date(2018, 5, 8)}', '${authors[getRandomInt(12)]}', 'Sveiki reikia sutvarkyti esamo puslapio CSS', 'img/codescreen.jpg', 143)`);
db.exec(`INSERT INTO orders VALUES ('Patikrinti sauguma', '${new Date(2018, 4, 8)}', '${authors[getRandomInt(12)]}', 'Reikia patikrinti esamo puslapio sauguma, html ir css prieeigas.', 'img/codescreen.jpg', 144)`);
db.exec(`INSERT INTO orders VALUES ('Mokymosi sistema', '${new Date(2018, 4, 8)}', '${authors[getRandomInt(12)]}', 'Reikalinga mokymosi sistema, su dinamišku turiniu. Kuo greičiau.', 'img/codescreen.jpg', 145)`);
db.exec(`INSERT INTO orders VALUES ('Internet našinų shop', '${new Date(2018, 4, 8)}', '${authors[getRandomInt(12)]}', 'Reikalinga parduotuvė mašinoms. Skubu.', 'img/codescreen.jpg', 146)`);
db.exec(`INSERT INTO orders VALUES ('TEKSTAS', '${new Date(2018, 4, 8)}', '${authors[getRandomInt(12)]}', 'TEKSTAS', 'img/codescreen.jpg', 144)`);
db.exec(`INSERT INTO orders VALUES ('HTML5 / CSS dizaino kodavimas', '${new Date(2018, 4, 6)}', '${authors[getRandomInt(12)]}', 'Reikalingi štai šitie darbai. HTML5/CSS dizainų kodavimas', 'img/codescreen.jpg', 148)`);
db.exec(`INSERT INTO orders VALUES ('SEO specialisto', '${new Date(2018, 4, 6)}', '${authors[getRandomInt(12)]}', 'Reikia SEO specialisto, puslapio optimizavimui, skubiai.', 'img/codescreen.jpg', 146)`);
db.exec(`INSERT INTO orders VALUES ('Puslapio - greitai', '${new Date(2018, 4, 6)}', '${authors[getRandomInt(12)]}', 'Reikia internetinio puslapio - greitai', 'img/codescreen.jpg', 150)`);
db.exec(`INSERT INTO orders VALUES ('noriu puslapio siuviniams pademonstruoti', '${new Date(2018, 4, 6)}', '${authors[getRandomInt(12)]}', 'reikia puslapio (o gal geriau programos?) siuviniams pademonstruoti. Kad būtų nuotrauka bei jo rašas, mano duomenys ir kontaktai jei kas nors turetų pasiūlymų. ', 'img/codescreen.jpg', 129)`);
db.exec(`INSERT INTO orders VALUES ('Reikia programos laikui atgal skaičiuoti', '${new Date(2018, 4, 5)}', '${authors[getRandomInt(12)]}', ' šiuo metu rašau naują knygą, kurios žmonės labia laukia, todėl norėčiau puslapio su laiko skaičiavimu atgal ir užrašu *Iki naujos knygos išleidimo liko:* taip pat laikas turėtų būti iki 2015-02-14.', 'img/codescreen.jpg', 141)`);
db.exec(`INSERT INTO orders VALUES ('Nuotraukų puslapio', '${new Date(2018, 2, 5)}', '${authors[getRandomInt(12)]}', 'Reikia puslapio fotografijai atvaizduoti. Neskubu. Kaina svarbi.', 'img/codescreen.jpg', 151)`);
db.exec(`INSERT INTO orders VALUES ('HTML ir CSS puslapio skubiai', '${new Date(2018, 2, 5)}', '${authors[getRandomInt(12)]}', 'Įmonei reikia puslapio, kuo greičiau tuo geriau. Darbas paprastas.', 'img/codescreen.jpg', 152)`);

export const res = db.exec("SELECT * FROM orders");
