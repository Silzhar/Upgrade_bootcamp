
var europa = db.paises.find({region: "Europe"});

europa.forEach(function(pais){
    pais.fullregion = "fullRegion";
    pais.fullregion =  europa.region + europa.subregion;

    delete pais.region;
    delete pais.subregion;

    db.paises.save(europa);

});

// Borra Europa de la base de datos.
db.paises.remove({region :"Europe"}, {subregion: 0});

//  /------------------------------------------------------------/

var asia = db.paises.find({region: "Asia"});

asia.forEach(function(asia){
    asia.fullregion = "fullRegion" + asia.region + asia.subregion;
    db.paises.save(asia);

});

// Eliminar sub-campos. Si se pasa un forEach ha de hacerse un nuevo find .
var asiaRegiones = db.paises.find({region: "Asia"});

asiaRegiones.forEach(function(asiaUpdate){
    delete asiaUpdate.region;
    delete asiaUpdate.subregion;
    print("Modificando :"+ asiaUpdate.name.common);
    db.paises.save(asiaUpdate)
});

db.paises.find({fullregion: /asia/i});

var paises = db.paises.find({"name.native.spa":{$exisit:false}});

paises.forEach(function(pais){
    pais.name.native.spa = pais.translations.spa;

    print("Modificando :" + pais.name.common);
    db.paises.save(pais);
});


db.paises.findOne();