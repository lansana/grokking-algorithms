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

    public function __construct($name, $friends, $profession)
    {
        $this->name = $name;
        $this->friends = $friends;
        $this->profession = $profession;
    }
}

$joe = new Person('Joe', null, 'SEO Expert');
$chris = new Person('Chris', null, 'Front End Developer');
$garrett = new Person('Garrett', null, 'Bodybuilder');
$johanna = new Person('Johanna', null, 'Marketer');
$jim = new Person('Jim', null, 'Digital Director');
$lansana = new Person('Lansana', array($garrett, $johanna, $jim), 'Software Engineer');
$john = new Person('John', array($joe, $chris), 'Client Strategy Director');

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