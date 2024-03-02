


// Напишіть функцію printProductInfo, яка приймає об'єкт product в якості параметра та друкує в консоль інформацію про цей продукт в наступному форматі:


const product = {
    id: 1,
    name: "Ноутбук Lenovo IdeaPad 3",
    price: 15000,
    description: "15.6 дюймовий, AMD Ryzen 5, 8 ГБ ОЗУ, 512 ГБ SSD",
    images: ["image1.jpg", "image2.jpg", "image3.jpg"],
    category: "Ноутбуки",
    available: true,
    printProductInfo: function ({name, category, available, price}) {
        return `
                Назва - ${name}, 
                Категорія - ${category},
                Наявність -${available !== false ? `Так`: 'Немає'},
                ціна -${price}`
    }
  };
  const {printProductInfo} = product;
 console.log(printProductInfo(product)); 

  