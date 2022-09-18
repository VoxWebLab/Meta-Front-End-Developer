# Object Oriented Programming

<h2>Task 1: Code a Person class</h2>
<p>Code a Person class, with three parameters in the constructor: name, age, and energy.</p>

<p>Set the default parameters in the Person class as follows:</p>
<p><code>
name = "Tom"<br>
age = 20<br>
energy = 100<br>
</code></p>

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
<p><code>
xp = 0<br>
hourlyWage = 10
</code></p>

<p>The Worker class has all the paramerters and methods of its super-class.</p>

<p>Additionally, it has the goToWork() method, which, whenever it's run, increases the value of the xp property by 10.</p>


<h2>Task 3: Code a intern object</h2>
<p>Inside the intern function instantiate the Worker class to code a new intern </p>object.

<p>The intern should have the following characteristics:</p>
<p><code>
name: Bob<br>
age: 21<br>
energy: 110<br>
xp: 0<br>
hourlyWage: 10
</code></p>

<p>Run the goToWork() method on the intern object. Then return the intern object.</p>


<h2>Task 4: Code a manager object</h2>
<p>Inside the manager function instantiate the Worker class to code a new manager object.</p>

<p>The manager object should have the following characteristics:</p>
<p><code>
name: Alice<br>
age: 30<br>
energy: 120<br>
xp: 100<br>
hourlyWage: 30<br>
</code></p>

<p>Run the doSomethingFun() method on the manager object. Then return the manager object.</p>

Solution: https://voxweblab.github.io/Meta-Front-End-Developer/Course-2/Building-an-object-oriented-program/script.js