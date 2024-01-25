const { faker } = require("@faker-js/faker");//Parantez içerisine (@faker-js/faker) bu data yı koyduktan sonra süslü paranteze faker yaz
let fakeName = faker.person.firstName()
let lasetName = faker.person.lastName()
let fakeMail = faker.internet.fakeMail()
let password = faker.internet.password()



constant