"# PT-W13-coding-assignment-vite" 


Coding Steps:
Task 1: Create a new Vite project
You’ll need to create a new Vite project that will be in a different folder from your original CRD app. That way you’ll have both versions separate from each other.

You’ll want to run Vite’s project creator in an interactive terminal, like Windows PowerShell, instead of a non-interactive terminal like Git Bash. You can tell you’re not in an interactive terminal if you can’t use the arrow keys to navigate between Vite’s framework options.

When Vite asks you to pick a framework, pick Vanilla (no framework).

And when Vite asks you to pick a variant, pick TypeScript.

Task 2: Copy the CRD app code into the new project
Copy the code from the CRD app into main.ts. You can delete the code that was in main.ts before. You will have type errors, we’ll fix those soon, but they won’t stop the app from running.

Copy the HTML in your previous assignment’s body into the new assignment’s body. You can get rid of the div with the id of app. Leave the one script tag.


Don’t add any more JS script tags or CSS link tags. Only the main.ts should be connected to the HTML with a script tag. Everything else will be connected by being imported into the main.ts file.


If you’re using Bootstrap CSS or other CSS you’ll need to install/copy it over to your new project and import it into your main.ts file.

Copy over your db.json file into the new project. That’ll make it easier to run the json-server, so you don’t have to go back to the old project folder to run it.


Your app should work the same as before when you’re done.

Run your app with Vite’s "npm run dev" command. Do NOT use Live Server to run your app. Live Server doesn’t work with TypeScript.

Task 3: Fix any Typescript type errors
While an app can run with type errors, we want to fix them to make sure our code is well written and protected against type bugs.


Type errors usually show up as red squiggly underlines in the code. They’ll also probably turn the name of the file red.

You can see a list of errors for the file you have open in the Problems tab. You can open the Problems tab by going to View → Problems.


You can also get a list of all the errors in your app by running "npm run build".
That command makes a “built” (nicely transpiled and hooked together) version of your app that you could put up and host somewhere. In that process, it carefully checks all your code for errors, so if you don’t get any errors when you run that command, you know that you don’t have any errors.


Here are some places you’ll probably need to type:


The variable(s) that hold the array(s) of data from the API - For this you’ll probably want to make a named type for your data, then type the variable to an array of that named type. Maybe something like this example:


type Thing = {
  whatsit: string

   something: number

}
const thingList: Thing[] = array of things of some sort


Most function parameters - here’s some examples of typing function parameters:


function myFunction(parameter: string) {

const anotherFunction = (someParameter: string, another: number) => {


Any HTML elements - For this you’ll probably want to use the “as” type assertion. Maybe something like these examples:


const container = document.getElementById(“container”) as HTMLDivElement

const value = (event.target as HTMLInputElement).value


You’ll probably run into at least one type error that you’re not sure how to solve. Google is your friend! See how other people have typed that situation. You can google things like “typescript how to type html button”.

Task 4: Separate the code into multiple files
Separate your CRD app JavaScript/TypeScript code into at least 3 files (a main.ts file and at least 2 other files). In professional apps, code is always split into many files.

You can divide it however you like. Often, in professional apps, each function gets its own file. Sometimes small helper functions are put in the file with the function it helps. If there are a bunch of small helper functions that are shared throughout the app, they might be put in a file together - maybe called utilities.ts or shared.ts.


Each of those files should be a TypeScript file that ends in .ts instead of .js.


You’ll need to use import and export to use functions and variables from one file in another file.


Remember, any file that isn’t imported into main.ts, or into a file that’s imported into main.ts, (or into a file that’s imported into a file that’s imported into main.ts, etc), won’t get included in the app.


Your app should work the same as before when you’re done.

Task 5: Testing
The CRD app should work the same as before, with the ability to create, read, and delete entities.


Here are the other requirements:

It should run with the Vite command "npm run dev"

It should be written in TypeScript

It should have no type errors

There should be at least 3 Typescript .ts files that use import and export to work together

To run:
Clone repo

Visit http://localhost:5179/ in your browser.

Make sure your json-server is still running in a separate terminal on port 3000.
    npx json-server --watch db.json --port 3000


Try adding a recipe via the form — if it shows up below and persists on refresh, app is working!