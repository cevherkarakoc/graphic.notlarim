module.exports = {
  GraphicSidebar: {
    'Başlangıç' : ['intro'],
    'Doğrusal Cebir' : [
      "algebra/vector",
      "algebra/transformation"
    ],
    'Ray Marching' : [{
      type: 'category',
      label: 'İşaretli Mesafe Fonksiyonları (SDF)',
      items : [
        "raymarching/sdf/sphere",
        "raymarching/sdf/operations",
      ]
    }]
  },
};
