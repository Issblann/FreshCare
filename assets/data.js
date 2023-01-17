// Array de objetos (productos de la tienda)
// Realizar el array de objetos
const dataProducts = [
  {
    id: 1,
    name: "Heimish All Clean balm 120ml",
    price: 16.75,
    category: "desmaquillante",
    cardImg:
      "./assets/Products/desmaquillantes/Heimish-All-Clean-balm120ml.jpg",
  },

  {
    id: 2,
    name: "Super Hyalon Foam Cleanser",
    price: 12.75,
    category: "limpiador",
    cardImg: "./assets/Products/limpiadores/Super-Hyalon-Foam-Cleanser.jpg",
  },

  {
    id: 3,
    name: "Tonymoly The Chok Chok Green Tea Watery Cream 60ml",
    price: 23.65,
    category: "hidratante",
    cardImg:
      "./assets/Products/hidratantes/Tonymoly-TheChokChok-GreenTea-WateryCream-60ml.jpg",
  },
  {
    id: 4,
    name: "TOCOBO BIO WATERY SUN CREAM SPF50+ PA++++",
    price: 35.2,
    category: "protectorSolar",
    cardImg:
      "./assets/Products/protectoresSolares/TOCOBO-BIO-WATERY-SUN-CREAM-SPF50+-PA++++.jpg",
  },
  {
    id: 5,
    name: "TirTir TirTir My Glow Cream Cushion 21N Ivory",
    price: 40.1,
    category: "maquillaje",
    cardImg:
      "./assets/Products/maquillaje/TirTir-TirTir-My-Glow-Cream-Cushion-21N-Ivory.jpg",
  },
  {
    id: 6,
    name: "Mary&May Vitamine B.C.E Cleansing Balm 120g",
    price: 23.3,
    category: "desmaquillante",
    cardImg:
      "./assets/Products/desmaquillantes/Mary&May-Vitamine-B.C.E-Cleansing-Balm-120g.jpg",
  },
  {
    id: 7,
    name: "TOCOBO Coconut Clay Cleansing Foam 150ml",
    price: 15.6,
    category: "limpiador",
    cardImg:
      "./assets/Products/limpiadores/TOCOBO-Coconut-Clay-Cleansing-Foam-150ml.jpg",
  },
  {
    id: 8,
    name: "Tonymoly Houttuynia Cordata Cica Quick Calming Cream 70g",
    price: 25.6,
    category: "hidratante",
    cardImg:
      "./assets/Products/hidratantes/Tonymoly-Houttuynia-Cordata-Cica-Quick-Calming-Cream-70g.jpg",
  },
  {
    id: 9,
    name: "TOCOBO COTTON SOFT SUN STICK SPF50+ PA++++",
    price: 38.2,
    category: "protectorSolar",
    cardImg:
      "./assets/Products/protectoresSolares/TOCOBO-COTTON-SOFT-SUN-STICK-SPF50+-PA++++.jpg",
  },
  {
    id: 10,
    name: "SUREBASEGLAD GLOW FOUNDATION #04 N2 BRIGHT BONNIE",
    price: 43.2,
    category: "maquillaje",
    cardImg:
      "./assets/Products/maquillaje/SUREBASEGLAD-GLOW-FOUNDATION-04-N2-BRIGHT-BONNIE.jpg",
  },
  {
    id: 11,
    name: "Farm stay CICA FARM CALMING CLEANSING BALM 95ml",
    price: 18.2,
    category: "desmaquillante",
    cardImg:
      "./assets/Products/desmaquillantes/Farm-stay-CICA-FARM-CALMING-CLEANSING-BALM-95ml.jpg",
  },
  {
    id: 12,
    name: "TIAM (TUBE) Snail & Azulene Low pH Cleanser",
    price: 20.3,
    category: "limpiador",
    cardImg:
      "./assets/Products/limpiadores/TIAM-(TUBE)-Snail-&-Azulene-Low-pH-Cleanser.jpg",
  },
  {
    id: 13,
    name: "SOMEBYMI YUJA NIACIN BRIGHTENING MOISTURE GEL CREAM",
    price: 29.99,
    category: "hidratante",
    cardImg:
      "./assets/Products/limpiadores/SOMEBYMI-PROPOLIS-B5-GLOW-BARRIER-CALMING-OIL-TO-FOAM.jpg",
  },
  {
    id: 14,
    name: "TIAM Daily Sun Care Cream 50ml",
    price: 30.0,
    category: "protectorSolar",
    cardImg:
      "./assets/Products/protectoresSolares/TIAM-Daily-Sun-Care-Cream-50ml.jpg",
  },
  {
    id: 15,
    name: "moonshot Micro Correctfit Cushion 201 SPF50+ PA+++",
    price: 20.85,
    category: "maquillaje",
    cardImg:
      "./assets/Products/maquillaje/moonshot-Micro-Correctfit-Cushion-201-SPF50+-PA+++.jpg",
  },
  {
    id: 16,
    name: "Tonymoly CLEAN DEW ACEROLA FOAM CLEANSER 180ml",
    price: 23.4,
    category: "limpiador",
    cardImg:
      "./assets/Products/limpiadores/Tonymoly-CLEAN-DEW-ACEROLA-FOAM-CLEANSER-180ml.jpg",
  },
  {
    id: 17,
    name: "Pyunkang yul Moisture Soothing Sun Cream 75ml",
    price: 31.2,
    category: "hidratante",
    cardImg:
      "./assets/Products/hidratantes/Pyunkang-yul-Moisture-Soothing-Sun-Cream-75ml.jpg",
  },
  {
    id: 18,
    name: "SOMEBYMI TRUECICA MINERAL CALMING TONE-UP SUNCREAM 50ml",
    price: 32.4,
    category: "protectorSolar",
    cardImg:
      "./assets/Products/protectoresSolares/SOMEBYMI-TRUECICA-MINERAL-CALMING-TONE-UP-SUNCREAM-50ml.jpg",
  },
  {
    id: 19,
    name: "rom&nd ZERO MATTE LIPSTICK 16 DAZZLE RED",
    price: 15.7,
    category: "maquillaje",
    cardImg:
      "./assets/Products/maquillaje/rom&nd-ZERO-MATTE-LIPSTICK-16-DAZZLE-RED.jpg",
  },
  {
    id: 20,
    name: "Sioris Day by day Cleansing gel 150ml",
    price: 13.2,
    category: "limpiador",
    cardImg:
      "./assets/Products/limpiadores/sioris-Day-by-day-Cleansing-gel-150ml.jpg",
  },
  {
    id: 21,
    name: "Ogi Water Rich Moisture Cream 50ml",
    price: 29.99,
    category: "hidratante",
    cardImg:
      "./assets/Products/hidratantes/Ogi-Water-Rich-Moisture-Cream-50ml.jpg",
  },
  {
    id: 22,
    name: "rom&nd ZERO MATTE LIPSTICK 21 SMOKED BEIGE",
    price: 15.7,
    category: "maquillaje",
    cardImg:
      "./assets/Products/maquillaje/rom&nd-ZERO-MATTE-LIPSTICK-21-SMOKED-BEIGE.jpg",
  },
  {
    id: 23,
    name: "SecretKey Lemon Sparkling Cleansing Oil",
    price: 16.3,
    category: "limpiador",
    cardImg:
      "./assets/Products/limpiadores/SecretKey-Lemon-Sparkling-Cleansing-Oil.jpg",
  },
  {
    id: 24,
    name: "MIGUHARA Moisture Perfection Skin 400ml",
    price: 32.4,
    category: "hidratante",
    cardImg:
      "./assets/Products/hidratantes/MIGUHARA-Moisture-Perfection-Skin-400ml.jpg",
  },
];

// Crear un bucle con un for y separar cada subindice e insertarlo en nuevo array

const splitProducts = (size) => {
  let dividedProducts = [];

  for (let i = 0; i < dataProducts.length; i += size) {
    dividedProducts.push(dataProducts.slice(i, i + size));
  }
  return dividedProducts;
};

// Creamos una variable que controlará la cantidad de productos divididos, el limite de cada producto y cuando es el ultimo producto.
const productsController = {
  dividedProducts: splitProducts(6),
  nextProductsIndex: 1,
  productsLimit: splitProducts(6).length,
};
