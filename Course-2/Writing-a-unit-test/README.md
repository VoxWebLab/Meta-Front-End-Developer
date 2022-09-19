# Task: Iterate Over an Array
<p>In this exercise, you'll use the for....of loop to iterate over an array and to iterate over an object's own properties.</p>


<h2>Step 1.</h2>
<p>You are given an array of dairy products:</p>

<p><code>var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']</code></p>

<p>Create a function called logDairy. Within it, console log each of the items in the dairy array, using the for...of loop.</p>

<p>The expected output should be:</p>

<p><code>
cheese<br>
sour cream<br>
milk<br>
yogurt<br>
ice cream<br>
milkshake<br>
</code></p>

<h2>Step 2.</h2>
<p>You are given the following starter code:</p>
<p><code>
const animal = {<br>
canJump: true<br>
};<br>
const bird = Object.create(animal);<br>
bird.canFly = true;<br>
bird.hasFeathers = true;
</code></p>

<p>Create a function called birdCan, within it, loop over the bird object's properties and console log each one, using the for...of loop. Remember, you need to console log both the key and the value of each of the bird object's properties.</p>


<h2>Step 3.</h2>
<p>Using the same starter code as in task 2, create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop.</p>


Solution: https://voxweblab.github.io/Meta-Front-End-Developer/Course-2/Writing-a-unit-test/script.js