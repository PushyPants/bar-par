const mongoose = require("mongoose");
const db = require("../database/models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/barpar");

const employeeSeed = [
 /* 1 */
{
  "avail" : [],
  "shifts" : [],
  "firstName" : "Daniel",
  "lastName" : "Randazzo",
  "email" : "dprandazzo@gmail.com",
  "phone" : "8327174272",
  "password" : "password",
  "isAdmin" : "3",
  "__v" : 0
},

/* 2 */
{
  "avail" : [],
  "shifts" : [],
  "firstName" : "Raul",
  "lastName" : "Sanchez",
  "email" : "raulsg93@gmail.com",
  "phone" : "8326439708",
  "password" : "raul",
  "isAdmin" : "2",
  "__v" : 0
},

/* 3 */
{
  "avail" : [],
  "shifts" : [],
  "firstName" : "David",
  "lastName" : "Luu",
  "email" : "david.n.luu@gmail.com",
  "phone" : "7135040060",
  "password" : "david",
  "isAdmin" : "1",
  "__v" : 0
}
];




  const barparSeed = [
    /* 1 */
{
  "location_id" : "MB_SR_01",
  "name" : "Speed Rail 1",
  "parent_location" : "Main Bar",
  "positions" : [ 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0d",
          "inventories" : [ 
              {
                  "inv_date" : "10/08/2018",
                  "updated_by" : "PushyPants",
                  "quant" : 700
              }
          ]
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0e",
          "inventories" : [ 
              {
                  "inv_date" : "10/08/2018",
                  "updated_by" : "PushyPants",
                  "quant" : 500
              }, 
              {
                  "inv_date" : "10/08/2018",
                  "updated_by" : "PushyPants",
                  "quant" : 300
              }
          ]
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0f",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f10",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f11",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f12",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f13",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f14",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f15",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f16",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f17",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f18",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f19",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1a",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1b",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1c",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1d",
          "inventories" : []
      }
  ]
},
/* 2 */
{
  "location_id" : "MB_SR_02",
  "name" : "Speed Rail 2",
  "parent_location" : "Main Bar",
  "positions" : [ 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0d",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0e",
          "inventories" : [ 
              {
                  "inv_date" : "10/08/2018",
                  "updated_by" : "PushyPants",
                  "quant" : 600
              }
          ]
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0f",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f10",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f11",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f12",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f13",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f14",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f15",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f16",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f17",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f18",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f19",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1a",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1b",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1c",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1d",
          "inventories" : []
      }
  ]
},
/* 3 */
{
  "location_id" : "MB_SR_04",
  "name" : "Speed Rail 4",
  "parent_location" : "Main Bar",
  "positions" : [ 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0d",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0e",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0f",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f10",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f11",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f12",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f13",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f14",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f15",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f16",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f17",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f18",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f19",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1a",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1b",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1c",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1d",
          "inventories" : []
      }
  ]
},
/* 4 */
{
  "location_id" : "MB_SR_05",
  "name" : "Speed Rail 5",
  "parent_location" : "Main Bar",
  "positions" : [ 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0d",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0e",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0f",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f10",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f11",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f12",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f13",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f14",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f15",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f16",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f17",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f18",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f19",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1a",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1b",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1c",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1d",
          "inventories" : []
      }
  ]
},
/* 5 */
{
  "location_id" : "MB_SR_06",
  "name" : "Speed Rail 6",
  "parent_location" : "Main Bar",
  "positions" : [ 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0d",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0e",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0f",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f10",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f11",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f12",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f13",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f14",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f15",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f16",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f17",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f18",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f19",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1a",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1b",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1c",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1d",
          "inventories" : []
      }
  ]
},
/* 6 */
{
  
  "location_id" : "MB_SR_07",
  "name" : "Speed Rail 7",
  "parent_location" : "Main Bar",
  "positions" : [ 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0d",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0e",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0f",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f10",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f11",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f12",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f13",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f14",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f15",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f16",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f17",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f18",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f19",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1a",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1b",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1c",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1d",
          "inventories" : []
      }
  ]
},
/* 7 */
{
  "location_id" : "MB_SR_03",
  "name" : "Speed Rail 3",
  "parent_location" : "Main Bar",
  "positions" : [ 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0d",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0e",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f0f",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f10",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f11",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f12",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f13",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f14",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f15",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f16",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f17",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f18",
          
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f19",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1a",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1b",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1c",
          "inventories" : []
      }, 
      {
          "product_id" : "5bb6b9533df12a13d0b17f1d",
          "inventories" : []
      }
  ]
}

  ]

  const productSeed = [
    /* 1 */
{  '_id' : "5bb6b9533df12a13d0b17f0d",
  'brand' : "Deep Eddy",
  'product' : "Grapefruit",
  'volume' : 1000,
  'spirit_type' : "vodka",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 2 */
{ '_id' : "5bb6b9533df12a13d0b17f0e",
  'brand' : "Deep Eddy",
  'product' : "Lemon",
  'volume' : 1000,
  'spirit_type' : "vodka",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 3 */
{
  '_id' : "5bb6b9533df12a13d0b17f0f",
  'brand' : "Well",
  'product' : "Tequila",
  'volume' : 1000,
  'spirit_type' : "tequila",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 4 */
{
  '_id' : "5bb6b9533df12a13d0b17f10",
  'brand' : "Well",
  'product' : "Triple",
  'volume' : 1000,
  'spirit_type' : "cordial",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 5 */
{
  '_id' : "5bb6b9533df12a13d0b17f11",
  'brand' : "Well",
  'product' : "Rum",
  'volume' : 1000,
  'spirit_type' : "rum",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 6 */
{
  '_id' : "5bb6b9533df12a13d0b17f12",
  'brand' : "Well",
  'product' : "Gin",
  'volume' : 1000,
  'spirit_type' : "gin",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 7 */
{
  '_id' : "5bb6b9533df12a13d0b17f13",
  'brand' : "Well",
  'product' : "Vodka",
  'volume' : 1000,
  'spirit_type' : "Vodka",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 8 */
{
  '_id' : "5bb6b9533df12a13d0b17f14",
  'brand' : "Well",
  'product' : "Whiskey",
  'volume' : 1000,
  'spirit_type' : "whiskey",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 9 */
{
  '_id' : "5bb6b9533df12a13d0b17f15",
  'brand' : "Tito's",
  'product' : "vodka",
  'volume' : 1000,
  'spirit_type' : "vodka",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 10 */
{
  '_id' : "5bb6b9533df12a13d0b17f16",
  'brand' : "Well",
  'product' : "watermelon",
  'volume' : 1000,
  'spirit_type' : "cordial",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 11 */
{
  '_id' : "5bb6b9533df12a13d0b17f17",
  'brand' : "Malibu",
  'product' : "Rum",
  'volume' : 1000,
  'spirit_type' : "rum",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 12 */
{
  '_id' : "5bb6b9533df12a13d0b17f18",
  'brand' : "Well",
  'product' : "Peach",
  'volume' : 1000,
  'spirit_type' : "cordial",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 13 */
{
  '_id' : "5bb6b9533df12a13d0b17f19",
  'brand' : "Espolon",
  'product' : "Silver",
  'volume' : 750,
  'spirit_type' : "tequila",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 14 */
{
  '_id' : "5bb6b9533df12a13d0b17f1a",
  'brand' : "Sailor Jerry",
  'product' : "Spiced Rum",
  'volume' : 1000,
  'spirit_type' : "rum",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 15 */
{
  '_id' : "5bb6b9533df12a13d0b17f1b",
  'brand' : "Jameson",
  'product' : "Irish Whiskey",
  'volume' : 1000,
  'spirit_type' : "whiskey",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},

/* 16 */
{
  '_id' : "5bb6b9533df12a13d0b17f1c",
  'brand' : "Jack Daniel's",
  'product' : "Black Label",
  'volume' : 1000,
  'spirit_type' : "whiskey",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
},
/* 17 */
{
  '_id' : "5bb6b9533df12a13d0b17f1d",
  'brand' : "Crown Royal",
  'product' : "Canadian Whiskey",
  'volume' : 750,
  'spirit_type' : "whiskey",
  'spirit_sub_type' : null,
  'par' : 20,
  'Distributor' : null,
  'wholesaler' : null,
  'cost' : null,
  'sku' : null
}
  ]


db.Locations
  .remove({})
  .then(() => db.Locations.insertMany(barparSeed))
  .then(data => {
    console.log(data + " locations inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Products
  .remove({})
  .then(() => db.Products.insertMany(productSeed))
  .then(data => {
    console.log(data + "products inserted!");
  })
