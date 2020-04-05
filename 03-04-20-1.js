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

library[0]['readers'][1]['count'] += 100;

library[0]['authorDetails']['email'] = "email1@email.com";
library[1]['authorDetails']['email'] = "email2@email.com";

library[1]["readers"][0] = {
    name: "Person 1",
    count: 200
};

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

console.log(typeof library[0]["authorDetails"]["age"]);