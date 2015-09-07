var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('test2', server, {safe: true});

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'test2' database");
        
        db.collection('Category', {safe:true}, function(err, collection) {
            if (!err) {
               // console.log("The 'Category' collection doesn't exist. Creating it with sample data...");
               // populateCategory();
            }
        });
        db.collection('ProductList', {safe:true}, function(err, collection) {
            if (!err) {
               // console.log("The 'ProductList' collection doesn't exist. Creating it with sample data...");
                //populateProductList();
            }
        });
        db.collection('IngredientList', {safe:true}, function(err, collection) {
            if (!err) {
               // console.log("The 'ProductList' collection doesn't exist. Creating it with sample data...");
              //  populateIngredientList();
            }
        });
    }
});

exports.findProductListById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving productlist of: ' + id);
    db.collection('ProductList', function(err, collection) {
        collection.find({"parentName": {$eq: id}}).toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.findIngredientsListById = function(req, res) {
    
    var lid = req.params.lid; 
    console.log('Retrieving productlist of: ' + lid);
    db.collection('IngredientList', function(err, collection) {
        collection.find({"Category": {$in: [lid]}}).toArray(function(err, items) {
            res.send(items);
        });
    });
};


exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving wine: ' + id);
    db.collection('ProductList', function(err, collection) {
        
        collection.findOne({'name':id}, function(err, item) {
            res.send(item);
        });
    });
};

exports.findAll = function(req, res) {
    db.collection('Category', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addWine = function(req, res) {
    var wine = req.body;
    console.log('Adding wine: ' + JSON.stringify(wine));
    db.collection('ProductTable', function(err, collection) {
        collection.insert(wine, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                console.log('Success: ' + JSON.stringify(result[0]));
                res.send(result[0]);
            }
        });
    });
}

exports.updateWine = function(req, res) {
    var id = req.params.id;
    var wine = req.body;
    delete wine._id;
    console.log('Updating wine: ' + id);
    console.log(JSON.stringify(wine));
    db.collection('ProductTable', function(err, collection) {
        collection.update({'_id':new BSON.ObjectID(id)}, wine, {safe:true}, function(err, result) {
            if (err) {
                console.log('Error updating wine: ' + err);
                res.send({'error':'An error has occurred'});
            } else {
                console.log('' + result + ' document(s) updated');
                res.send(wine);
            }
        });
    });
}

exports.deleteWine = function(req, res) {
    var id = req.params.id;
    console.log('Deleting wine: ' + id);
    db.collection('ProductTable', function(err, collection) {
        collection.remove({'_id':new BSON.ObjectID(id)}, {safe:true}, function(err, result) {
            if (err) {
                res.send({'error':'An error has occurred - ' + err});
            } else {
                console.log('' + result + ' document(s) deleted');
                res.send(req.body);
            }
        });
    });
}

/*--------------------------------------------------------------------------------------------------------------------*/
// Populate database with sample data -- Only used once: the first time the application is started.
// You'd typically not find this code in a real-life app, since the database would already exist.

var populateCategory = function() {

    var categories = [
    {
        name: "Hairs",
        description: "Hair Products",
        parentId: null
    },
    {
        name: "Makeup",
        description: "Makeup Products",
        parentId: null
    },
    {
       name: "Skin",
        description: "Skin Care Products",
        parentId: null
    }]; 


    db.collection('Category', function(err, collection) {
        collection.insert(categories, {safe:true}, function(err, result) {});
    });
}

var populateProductList = function() {

    var prodList = [
    {
        name: "Shampoo",
        description: "Hair Products",
        parentId: "55d1e6e4368c9f402e8ab457",
        parentName: "Hairs"
    },
    {
        name: "Conditioner",
        description: "Hair Products",
        parentId: "55d1e6e4368c9f402e8ab457",
        parentName: "Hairs"
    },
    {
        name: "Hair Spray",
        description: "Hair Products",
        parentId: "55d1e6e4368c9f402e8ab457",
        parentName: "Hairs"
    },
    {
        name: "Lipstick",
        description: "Makeup Products",
        parentId: "55d1e6e4368c9f402e8ab458",
        parentName: "Makeup"
    },
    {
        name: "Foundation",
        description: "Makeup Products",
        parentId: "55d1e6e4368c9f402e8ab458",
        parentName: "Makeup"
    },
    {
        name: "Eye Shadow",
        description: "Makeup Products",
        parentId: "55d1e6e4368c9f402e8ab458",
        parentName: "Makeup"
    },
    {
        name: "Face Wash",
        description: "Skin Care Products",
        parentId: "55d1e6e4368c9f402e8ab459",
        parentName: "Skin"
    },
    {
        name: "Moisturizer",
        description: "Skin Care Products",
        parentId: "55d1e6e4368c9f402e8ab459",
        parentName: "Skin"
    },
    {
        name: "Body Wash",
        description: "Skin Care Products",
        parentId: "55d1e6e4368c9f402e8ab459",
        parentName: "Skin"
    },
    {
        name: "Soap",
        description: "Skin Care Products",
        parentId: "55d1e6e4368c9f402e8ab459",
        parentName: "Skin"
    }
    ]; 


    db.collection('ProductList', function(err, collection) {
        collection.insert(prodList, {safe:true}, function(err, result) {});
    });
}

var populateIngredientList = function() {

    var ingredientList = [
    {
        name: 'SLES',
        Category: ["55d1ec476b01c6f0296b1186", "55d1ec476b01c6f0296b118e", "55d1ec476b01c6f0296b118f"],
        Category_name : ["shampoo","bodywash","soap"],
        Effects: 'blah blah blah',
        SideEffects: 'blah blah',
        Properties: 'blah blah'
    },
    {
        name: 'Parabens',
        Category: ["55d1ec476b01c6f0296b118c", "55d1ec476b01c6f0296b118d", "55d1ec476b01c6f0296b118e","55d1ec476b01c6f0296b118a", "55d1ec476b01c6f0296b1186"],//facewash,moisturizer,bodywash,foundation,shampoo
        Effects: 'blah blah blah',
        SideEffects: 'blah blah',
        Properties: 'blah blah'
    },
    {
        name: 'Silicone',
        Category: ["55d1ec476b01c6f0296b1186","55d1ec476b01c6f0296b1187","55d1ec476b01c6f0296b1188","55d1ec476b01c6f0296b118d"],//shampoo,conditioner,  spray, moisturizer
        Effects: 'blah blah blah',
        SideEffects: 'blah blah',
        Properties: 'blah blah'
    },
    {
        name: 'Metal-Oxides',
        Category: ["55d1ec476b01c6f0296b1189", "55d1ec476b01c6f0296b118a", "55d1ec476b01c6f0296b118b"],//lipstick,foundation,eyeshadow
        Effects: 'blah blah blah',
        SideEffects: 'blah blah',
        Properties: 'blah blah'
    },
    {
        name: 'Stearates',
        Category: ["55d1ec476b01c6f0296b118d"],//moisturizer
        Effects: 'blah blah blah',
        SideEffects: 'blah blah',
        Properties: 'blah blah'
    },
    {
        name: 'Sodium Hydroxide',
        Category: ["55d1ec476b01c6f0296b118f"],//soap
        Effects: 'blah blah blah',
        SideEffects: 'blah blah',
        Properties: 'blah blah'
    }
    ]; 


    db.collection('IngredientList', function(err, collection) {
        collection.insert(ingredientList, {safe:true}, function(err, result) {});
    });
}