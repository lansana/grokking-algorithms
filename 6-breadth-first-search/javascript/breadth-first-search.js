class Queue {
    constructor() {
        this.count = 0;
        this.data = {};
    }

    enqueue(key, val) {
        if (!this.data.hasOwnProperty(key)) {
            this.count++;
        }
        this.data[key] = val;
    }

    dequeue() {
        let key = Object.keys(this.data)[0],
            memo = this.data[key];
        delete this.data[key];
        this.count--;
        return memo;
    }
}

class Person {
    constructor(args) {
        this.name = args.name;
        this.friends = args.friends || [];
        this.profession = args.profession;
    }
}

let Ronaldinho = new Person({
        name: "Ronaldinho",
        profession: "Professional Soccer Player"
    }),
    Lauren = new Person({
        name: "Lauren",
        profession: "Mango Seller"
    }),
    Angelica = new Person({
        name: "Angelica",
        profession: "Professional Volleyball Player"
    }),
    Cody = new Person({
        name: "Cody",
        profession: "Network Programmer"
    }),
    Beyonce = new Person({
        name: "Beyonce",
        profession: "Musician"
    }),
    Lansana = new Person({
        name: "Lansana",
        friends: [Ronaldinho, Lauren, Angelica],
        profession: "Software Engineer"
    }),
    Zack = new Person({
        name: "Zack",
        friends: [Cody],
        profession: "Software Architect"
    }),
    John = new Person({
        name: "John",
        friends: [Ronaldinho, Angelica],
        profession: "Project Manager"
    }),
    Francisco = new Person({
        name: "Francisco",
        friends: [Beyonce],
        profession: "Game Developer"
    });

let queue = new Queue();

queue.enqueue("Lansana", Lansana);
queue.enqueue("Zack", Zack);
queue.enqueue("John", John);
queue.enqueue("Francisco", Francisco);

function search(queue, profession) {
    let searched = [];

    while (queue.count > 0) {
        let person = queue.dequeue();

        if (!searched[person.name]) {
            if (hasProfession(person, profession)) {
                return true;
            } else {
                for(let i = 0, len = person.friends.length; i < len; i++) {
                    queue.enqueue(person.friends[i].name, person.friends[i]);
                }
            }

            searched.push(person.name);
        }
    }

    return false;
}

function hasProfession(person, profession) {
    return person.profession.toLowerCase() === profession.toLowerCase();
}

console.log(search(queue, "Musician")); // true