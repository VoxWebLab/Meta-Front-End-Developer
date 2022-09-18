# Object Oriented Programming

<h2>Task 1: Code a Person class</h2>
<p>Code a Person class, with three parameters in the constructor: name, age, and energy.</p>

<p>Set the default parameters in the Person class as follows:</p>
<code>

name = "Tom"

age = 20

energy = 100
</code>

<p>Code two methods in the Person class. Name those methods sleep() and doSomethingFun().</p>

<p>The sleep() method should take the existing energy level and increase it by 10.</p>

<p>The doSomethingFun() method should take the existing energy level and decrease it by 10.</p>


<h2>Task 2: Code a Worker class</h2>
<p>Code a sub-class, inheriting from the Person class, and name it Worker.</p>

<p>The Worker class has two additional parameters in the constructor:</p>
<ul>
<li>xp (for "experience points")</li>
<li>hourlyWage.</li>
</ul>

<p>These properties are set to the following default values:</p>
<code>

xp = 0

hourlyWage = 10
</code>

<p>The Worker class has all the paramerters and methods of its super-class.</p>

<p>Additionally, it has the goToWork() method, which, whenever it's run, increases the value of the xp property by 10.</p>


<h2>Task 3: Code a intern object</h2>
<p>Inside the intern function instantiate the Worker class to code a new intern </p>object.

<p>The intern should have the following characteristics:</p>
<code>

name: Bob

age: 21

energy: 110

xp: 0

hourlyWage: 10
</code>

<p>Run the goToWork() method on the intern object. Then return the intern object.</p>


<h2>Task 4: Code a manager object</h2>
<p>Inside the manager function instantiate the Worker class to code a new manager object.</p>

<p>The manager object should have the following characteristics:</p>
<code>

name: Alice

age: 30

energy: 120

xp: 100

hourlyWage: 30
</code>

<p>Run the doSomethingFun() method on the manager object. Then return the manager object.</p>

Solution: https://voxweblab.github.io/Meta-Front-End-Developer/Course-2/Building-an-object-oriented-program/script.js