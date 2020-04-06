var library = [{
        title: "javascript",
        price: 500,
        readers: [{
                name: "Person 1",
                count: 300
            },
            {
                name: "Person 2",
                count: 400
            }
        ],
        authorDetails: {
            name: "Raj",
            age: 40
        }
    },
    {
        title: "Nodejs",
        price: 600,
        readers: [],
        authorDetails: {
            name: "Raj",
            age: 40
        }
    }
]

//1a. Update the count of Person 2 inside readers Array in Javascript;
library[0]['readers'][1]['count'] += 100;

//1b. Insert a new key called email and assign a value email1@gmail.com and email2@gmail.com respectively in both authorDetails object;
library[0]['authorDetails']['email'] = "email1@email.com";
library[1]['authorDetails']['email'] = "email2@email.com";


//1c.  Insert a new reader in the readers array for Nodejs.
library[1]["readers"][0] = {
    name: "Person 1",
    count: 200
};

//1d. Create a New Object in the library for a new Book called SQL.
library[2] = {
    title: "SQL",
    price: 300,
    readers: [{
        name: "Person 1",
        count: 100
    }],
    authorDetails: {
        name: "Apple",
        age: 60
    }
}

//1e. Find the datatype of author age in Nodejs Object.
console.log(typeof library[0]["authorDetails"]["age"]);