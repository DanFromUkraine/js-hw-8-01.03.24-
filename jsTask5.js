const person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    city: "New York",
    personInfo: function ({name, age, email, city}) {
        return `
            Full name: ${name + ', ' + age};
            Contacts: ${email + ', ' + city}
        `
    }
  };
  const {personInfo} = person;
  console.log(personInfo(person))