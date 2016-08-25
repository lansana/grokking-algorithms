<?php

Class Queue
{
    public $count = 0;
    protected $data = array();

    public function __construct()
    {
        $this->count = 0;
        $this->data = array();
    }

    public function enqueue($key, Person $val)
    {
        if (!in_array($key, $this->data)) {
            $this->count++;
        }
        $this->data[$key] = $val;
    }

    public function dequeue()
    {
        return array_shift($this->data);
    }
}

class Person
{
    public $name = null;
    public $friends = array();
    public $profession = null;

    public function __construct($name, $profession, array $friends = array())
    {
        $this->name = $name;
        $this->profession = $profession;
        $this->friends = $friends;
    }
}

$joe = new Person('Joe', 'SEO Expert');
$chris = new Person('Chris', 'Front End Developer');
$garrett = new Person('Garrett', 'Bodybuilder');
$johanna = new Person('Johanna', 'Marketer');
$jim = new Person('Jim', 'Digital Director');
$lansana = new Person('Lansana', 'Software Engineer', array($garrett, $johanna, $jim));
$john = new Person('John', 'Client Strategy Director', array($joe, $chris));

$queue = new Queue();
$queue->enqueue('Lansana', $lansana);
$queue->enqueue('John', $john);

function search($queue, $profession)
{
    $searched = array();

    while ($queue->count > 0) {
        $person = $queue->dequeue();

        if (!in_array($person->name, $searched)) {
            if ($person->profession === $profession) {
                return true;
            } else {
                for ($i = 0, $len = count($person->friends); $i < $len; $i++) {
                    $queue->enqueue($person->friends[$i]->name, $person->friends[$i]);
                }
            }

            $searched[] = $person->name;
        }
    }

    return false;
}

echo search($queue, 'Digital Director'); // Returns true; match found using breadth-first search