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
    constructor(name, profession, friends) {
        this.name = name;
        this.profession = profession;
        this.friends = friends || [];
    }
}

let Ronaldinho = new Person('Ronaldinho', 'Professional Soccer Player'),
    Lauren = new Person('Lauren', 'Mango Seller'),
    Angelica = new Person('Angelica', 'Professional Volleyball Player'),
    Cody = new Person('Cody', 'Network Programmer'),
    Beyonce = new Person('Beyonce', 'Musician'),
    Lansana = new Person('Lansana', 'Software Engineer', [Ronaldinho, Lauren, Angelica]),
    Zack = new Person('Zack', 'Software Architect', [Cody]),
    John = new Person('John', 'Project Manager', [Ronaldinho, Angelica]),
    Francisco = new Person('Francisco', 'Game Developer', [Beyonce]);

let graph = {};
graph['Lansana'] = Lansana;
graph['Zack'] = Zack;
graph['John'] = John;
graph['Francisco'] = Francisco;

let queue = new Queue();
queue.enqueue("Lansana", graph['Lansana']);
queue.enqueue("Zack", graph['Zack']);
queue.enqueue("John", graph['John']);
queue.enqueue("Francisco", graph['Francisco']);

function search(queue, profession) {
    let searched = [];

    while (queue.count > 0) {
        let person = queue.dequeue();

        if (!searched[person.name]) {
            if (hasProfession(person, profession)) {
                return true;
            } else {
                for (let i = 0, len = person.friends.length; i < len; i++) {
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