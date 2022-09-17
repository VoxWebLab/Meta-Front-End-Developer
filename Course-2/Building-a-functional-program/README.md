# Building a Functional Program

<h2>Task 1: Build a function-based console log message generator</h2>
<p>In this exercise, your task is to code a function named consoleStyler, which accepts four parameters:</p>
<ul>
<li>color</li>
<li>background</li>
<li>fontSize</li>
<li>txt</li>
</ul>
<p>Inside the body of the consoleStyler() function declaration, you need to do the following:</p>
<ol>
<li>Create a new variable named message, and assign the following to it on the very first line inside the consoleStyler() function body.:
<code>
"%c" + txt;
</code>
</li>
<li>Create a style variable and assign the following to it on the next line:
<code>
`color: ${color};`
</code>
</li>
<li>Next, update the style variable (using the += operator) with the following code:
<code>
`background: ${background};`
</code>
</li>
<li>Then, update the style variable (again, using the += operator) with the following code:
<code>
`font-size: ${fontSize};`
</code>
</li>
<li>Finally, console log the message and style variables inside the consoleStyler function declaration.</li>
</ol>

<p>Hint: Be sure to use backticks (``) when updating your variable styles and not single ('') or double ("") quotes.</p>


<h2>Task 2: Build another console log message generator.</h2>
<p>Your task is to code another function, and name it celebrateStyler(). The function accepts a single parameter, reason, which should be of string data type.</p>

<p>Inside the function declaration's body, code the following:</p>
<ol>
<li>A new variable, named fontStyle, assigning it this code:
<code>
"color: tomato; font-size: 50px";
</code>
</li>
<li>On the next line, an if statement, verifying that reason == "birthday".</li>

<li>Inside the body of the if block, code the following:
<code>
console.log(`%cHappy birthday`, fontStyle);
</code>
</li>
<li>On the next line, add an else if, and inside the parentheses, check that
<code>
reason == "champions"
</code>
</li>
<li>Inside the else if block, add this code:
<code>
console.log(`%cCongrats on the title!`, fontStyle);
</code>
</li>
<li>Add an else block, with the following code inside of it:
<code>
console.log(message, style);
</code>
</li>
</ol>

<h2>Task 3: Run both the consoleStyler and the celebrateStyler functions</h2>
<ol>
<li>Invoke the consoleStyler() function, with the following arguments:
<ul>
<li>'#1d5c63'</li>
<li>'#ede6db'</li>
<li>'40px'</li>
<li>'Congrats!'</li>
</ul>
</li>

<li>Next, invoke the celebrateStyler() function, with the following argument:
<ul>
<li>'birthday'</li>
</ul>
</li>
</ol>

<h2>Task 4: Insert a congratulatory and custom message</h2>
<ol>
<li>Code another function, named styleAndCelebrate().<br>
The function declaration's body should consist of two function invocations:
<code>
consoleStyler(color, background, fontSize, txt);  
celebrateStyler(reason);
</code>
</li>
<li>Next, invoke the new function, using the following arguments:
<ul>
<li>'ef7c8e'</li>
<li>'fae8e0'</li>
<li>'30px'</li>
<li>'You made it!'</li>
<li>'champions'</li>
</ul>
</li>
</ol>

<h2>Final Step: Let's submit your code!</h2>

Solution: https://voxweblab.github.io/Meta-Front-End-Developer/Course-2/Building-a-functional-program/functionalprogramming.js