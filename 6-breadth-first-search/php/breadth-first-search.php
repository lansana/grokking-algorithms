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

    public function __construct(array $args)
    {
        $this->name = $args['name'];
        $this->friends = $args['friends'];
        $this->profession = $args['profession'];
    }
}

$joe = new Person(array(
    'name' => 'Joe',
    'friends' => null,
    'profession' => 'SEO Expert'
));
$chris = new Person(array(
    'name' => 'Chris',
    'friends' => null,
    'profession' => 'Front End Developer'
));
$garrett = new Person(array(
    'name' => 'Garrett',
    'friends' => null,
    'profession' => 'Bodybuilder'
));
$johanna = new Person(array(
    'name' => 'Johanna',
    'friends' => null,
    'profession' => 'Marketer'
));
$jim = new Person(array(
    'name' => 'Jim',
    'friends' => null,
    'profession' => 'Digital Director'
));
$lansana = new Person(array(
    'name' => 'Lansana',
    'friends' => array($garrett, $johanna, $jim),
    'profession' => 'Software Engineering'
));
$john = new Person(array(
    'name' => 'John',
    'friends' => array($joe, $chris),
    'profession' => 'Client Strategy Director'
));

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

echo search($queue, 'Digital Director'); // 1