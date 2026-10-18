// Ginger Beef House menu data, transcribed from the printed menu (docs/source/menu-scan.pdf).
// Shared by every demo option. Image values are file names inside /img.
(function(){
const P = {
  49:"almond-gai-ding.jpg",
  43:"ginger-fried-beef.jpg", 24:"chicken-chow-mein.jpg", 50:"almond-gai-ding.jpg",
  53:"lemon-chicken.jpg", 64:"sweet-sour-pork.jpg", 12:"fried-rice.jpg",
  8:"wonton-soup.jpg", 69:"honey-garlic-ribs.jpg", 96:"mar-pou-tofu.jpg",
  83:"egg-foo-young.jpg", 91:"prawns-black-bean.jpg", 87:"deep-fried-prawns.jpg"
};
const SAUCE = ["Gravy","Sweet & sour sauce"];
const CATS = [
  ["Appetizers",[[1,"Spring Roll (2)",3.95],[2,"Pork Dumpling",18.95],[3,"Deep Fried Wonton",12.95],[4,"House Noodles in Black Pepper Sauce",16.95],[5,"Hot & Spicy Deep Fried Tofu",15.95],[6,"Hot & Spicy Deep Fried Squid",22.95],[7,"Dried Garlic Ribs",19.95]]],
  ["Soup",[[8,"Wonton Soup",15.95],[9,"Wor Wonton Soup",21.95],[10,"Seafood Hot & Sour Soup",22.95],[11,"Udon Noodle Soup",14.95]]],
  ["Fried Rice",[[12,"Chicken Fried Rice",14.95],[13,"B.B.Q. Pork Fried Rice",14.95],[14,"Beef Fried Rice",16.95],[15,"Shrimp Fried Rice",18.95],[16,"Vegetable Fried Rice",14.95],[17,"Mushroom Fried Rice",14.95],[18,"Beef & Tomato Fried Rice",18.95],[19,"Curried Chicken Fried Rice",17.95],[20,"Curried Beef Fried Rice",18.95],[21,"Curry Prawns Fried Rice",21.95],[22,"Special Fried Rice",18.95],[23,"Hawaiian Fried Rice",17.95]]],
  ["Chow Mein",[[24,"Chicken Chow Mein",14.95],[25,"B.B.Q. Pork Chow Mein",14.95],[26,"Beef Chow Mein",16.95],[27,"Shrimp Chow Mein",18.95],[28,"Beef & Tomato Chow Mein",18.95],[29,"Beef in Black Pepper Sauce Chow Mein",17.95],[30,"Vegetable Chow Mein",14.95],[31,"Mushroom Chow Mein",14.95],[32,"Special Chow Mein",18.95],[33,"Canton Chow Mein",21.95],[34,"Seafood Chow Mein",19.95],[35,"Curried Chicken Chow Mein",19.95],[36,"Curried Beef Chow Mein",19.95],[37,"Singapore Curry Fried Noodle",20.95]]],
  ["Rice Dishes",[[38,"Beef & Tomato with Steamed Rice",16.95],[39,"Beef & Bok Choy with Steamed Rice",16.95],[40,"Curried Chicken with Steamed Rice",17.95],[41,"Curried Beef with Steamed Rice",17.95],[42,"Curried Prawns with Steamed Rice",19.95]]],
  ["Beef",[[43,"Ginger Fried Beef",17.95],[44,"Beef with Broccoli",18.95],[45,"Beef with Tomato",19.95],[46,"Curried Beef",18.95],[47,"Beef with Satay Sauce",18.95],[48,"Szechuan Beef",18.95]]],
  ["Chicken",[[49,"Breaded Almond Chicken",17.95,{opts:SAUCE}],[50,"Almond Gai Ding (chicken)",17.95],[51,"Cashew Nut Gai Ding (chicken)",18.95],[52,"Kung Bo Chicken",17.95,{peanut:1}],[53,"Lemon Chicken",18.95],[54,"Sweet & Sour Chicken Balls",17.95],[56,"Chicken with Satay Sauce",17.95],[57,"Curried Chicken",18.95],[58,"Ginger Fried Chicken",18.95],[59,"Szechuan Chicken",18.95],[60,"Sesame Chicken",18.95],[61,"Chicken Black Bean Sauce",17.95],[62,"Deep Fried Chicken Wings",18.95],[63,"Honey Garlic Chicken Wings",18.95]]],
  ["Pork & Ribs",[[64,"Sweet & Sour Pork",16.95],[65,"Dried Garlic Pork",16.95],[66,"Honey Garlic Pork",17.95],[67,"Sweet & Sour Pork with Pineapple",17.95],[68,"Dried Garlic Ribs",18.95],[69,"Honey Garlic Ribs",19.95],[70,"Sliced B.B.Q. Pork",20.95],[71,"B.B.Q. Pork with Black Bean Sauce",19.95],[72,"Pork with Black Bean Sauce",18.95],[73,"Sweet & Sour Ribs",19.95],[74,"Pork Chops with Black Peppery Sauce",20.95]]],
  ["Chop Suey",[[75,"Vegetable Chop Suey",15.95],[76,"Chicken Chop Suey",17.95],[77,"B.B.Q. Pork Chop Suey",17.95],[78,"Beef Chop Suey",18.95],[79,"Prawns Chop Suey",19.95],[80,"Special Chop Suey",19.95]],"Vegetables"],
  ["Egg Foo Young",[[81,"Vegetable Foo Young",18.95,{opts:SAUCE}],[82,"Mushroom Foo Young",18.95,{opts:SAUCE}],[83,"Chicken Foo Young",19.95,{opts:SAUCE}],[84,"B.B.Q. Pork Foo Young",19.95,{opts:SAUCE}],[85,"Shrimp Foo Young",20.95,{opts:SAUCE}],[86,"Special Foo Young",20.95,{opts:SAUCE}]],"Gravy or sweet & sour sauce"],
  ["Seafood",[[87,"Deep Fried Prawns",17.95],[88,"Hot & Spicy Deep Fried Squid",22.95],[89,"Curried Prawns",22.95],[90,"Tomato Prawns",22.95],[91,"Prawns with Black Bean Sauce",22.95],[92,"Satay Prawns",22.95],[93,"Kung Bo Prawns",22.95,{peanut:1}],[94,"Szechuan Prawns",24.95],[95,"Peppery Prawns",24.95]]],
  ["Chef's Suggestions",[[96,"Mar Pou Tofu",17.95],[97,"Butter Garlic Prawns",24.95],[98,"Seafood with Tofu Hot Pot",24.95],[99,"Beef with Ginger & Onion Hot Pot",22.95],[100,"Chicken with Ginger & Onion Hot Pot",22.95],[101,"Mixed Meat with Tofu Hot Pot",23.95],[102,"Tai Pan Seafood Hot Plate",24.95],[103,"Tai Pan Beef Hot Plate",21.95],[104,"Tai Pan Chicken Hot Plate",21.95]]],
  ["Sides, Sauces & Drinks",[[105,"Steamed Rice",2.95],[106,"Sweet & Sour Sauce",2.50],[107,"Curry or Lemon Sauce",2.50,{opts:["Curry","Lemon"]}],[108,"Gravy or Honey Garlic Sauce",2.50,{opts:["Gravy","Honey garlic"]}],[109,"Can of Pop or Bottled Water",1.99,{opts:["Pop","Water"]}],[110,"Bottled Pop 710 ml",3.25]]]
];
const NEWS = [
  {id:"N1", name:"Szechuan Crispy Ginger Beef", desc:"Our ginger fried beef, tossed hot with dried chili and Szechuan pepper.", price:19.95, img:"new-szechuan-ginger-beef.jpg", alt:"Crispy beef stir-fried with chili and green onion in a wok", note:"hot!"},
  {id:"N2", name:"Sweet Chili Chicken on Crispy Noodle", desc:"Crispy chicken in sweet chili sauce over a nest of fried rice noodles.", price:19.95, img:"new-sweet-chili-chicken.jpg", alt:"Glazed chicken and broccoli on a bed of crispy rice noodles", note:"new"},
  {id:"N3", name:"Salt & Pepper Squid Skewers (4)", desc:"Four skewers of salt and pepper squid with a creamy dip.", price:16.95, img:"new-squid-skewers.jpg", alt:"Skewers of fried squid on a white plate with a dip", note:"try me"}
];
const CS = ["Chicken or beef chop suey", ["Chicken","Beef"]];
const DINNERS = [
  {id:"F2", name:"Dinner for 2", price:41.95, items:["Spring Rolls (2)","Chicken Chow Mein","Chicken or Beef Chop Suey","Sweet & Sour Boneless Pork"], opts:CS[1]},
  {id:"F3", name:"Dinner for 3", price:59.95, items:["Spring Rolls (3)","Chicken Chow Mein","Deep Fried Prawns","Chicken or Beef Chop Suey","Sweet & Sour Boneless Pork"], opts:CS[1]},
  {id:"F4", name:"Dinner for 4", price:75.95, items:["Spring Rolls (4)","Chicken Chow Mein","B.B.Q. Pork Fried Rice","Breaded Almond Chicken","Chicken or Beef Chop Suey","Sweet & Sour Boneless Pork"], opts:CS[1]},
  {id:"F5", name:"Dinner for 5", price:95.95, items:["Spring Rolls (5)","Wonton Soup","Chicken Chow Mein","Deep Fried Prawns","Breaded Almond Chicken","Chicken or Beef Chop Suey","Sweet & Sour Boneless Pork"], opts:CS[1]},
  {id:"F6", name:"Dinner for 6", price:119.95, items:["Spring Rolls (6)","Ginger Fried Beef","Deep Fried Prawns","Chicken Chow Mein","B.B.Q. Pork Fried Rice","Breaded Almond Chicken","Chicken or Beef Chop Suey","Sweet & Sour Boneless Pork"], opts:CS[1]},
  {id:"F8", name:"Dinner for 8–10", price:199.95, items:["Spring Rolls (10)","Deep Fried Prawns ×2","Ginger Fried Beef ×2","Beef Chop Suey ×2","Chicken Chow Mein ×2","B.B.Q. Pork Fried Rice ×2","Sweet & Sour Boneless Pork ×2"]},
  {id:"F10", name:"Dinner for 10–12", price:199.95, items:["Spring Rolls (12)","Ginger Fried Beef","Deep Fried Prawns","Beef Chop Suey ×2","Special Chow Mein ×2","B.B.Q. Pork Fried Rice ×2","Breaded Almond Chicken","Sweet & Sour Chicken Balls","Sweet & Sour Boneless Pork ×2"]}
];
const COMBO_PICKS = ["Spring Roll (2)","Almond Chicken","Sweet & Sour Pork","Deep Fried Prawns","Beef Chop Suey","Chicken Chop Suey","Vegetable Chop Suey","Deep Fried Chicken Wings","Sweet & Sour Chicken Ball"];
const BEST = [43,24,64,53,49];
const COMBO = {base:["Chow mein","Fried rice"], prices:{1:15.95, 2:19.95}};
window.GBH_DATA = {P, SAUCE, CATS, NEWS, DINNERS, COMBO_PICKS, COMBO, BEST};
})();
