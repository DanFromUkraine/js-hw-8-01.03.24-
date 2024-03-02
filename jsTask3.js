// Напишіть функцію, яка приймає об'єкт з іменем та віком користувача і повертає рядок, що містить ім'я та повідомлення про те, скільки років їй або йому.

// Використайте деструктуризацію, щоб отримати доступ до імені та віку з переданого об'єкту.

function makeToString ({name = false, age = false}) {
    return `${name !== false ? "Ім'я -" + name : "Ім'я не вказано"}. ${age !== false ? "Вік -" + age : "Вік не вказаний"}`
}

console.log(makeToString({name: `Кіт Василій`, age: 4}));