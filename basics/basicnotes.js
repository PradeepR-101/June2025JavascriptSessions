
// "Traditionally, programming languages like C or Java are compiled down to machine code before execution, 
// which makes them faster.

//  Scripting languages like Python or JavaScript are interpreted line by line at runtime,
//  which makes them slower but quicker to write and test.

//But in today's world, the distinction has mostly collapsed. 
// JavaScript started as a browser scripting language but now powers full backend servers with Node.js. 
// Python was considered a scripting language but now runs machine learning models and entire web applications.

//======================================================================

// "Static typing means variable types are checked at compile time, 
//ex: Typescript or Java have static typing — 
// you declare variable types, and the compiler checks them before running the code.

// dynamic typing means they're checked at runtime."
// JavaScript or Python is dynamically typed — 
// you can assign any type to a variable, and it can change over time.

//======================================================================

//primitive types: string, number, boolean, null, undefined, symbol, bigint
//non-primitive types: object, array, function

// Step 1 — Clean definition:

//"Primitives store the actual value directly in memory and are immutable. 
// Non-primitives like objects and arrays store a reference — a pointer to where the data lives in the heap."

// Step 2 — The key difference:

//"The most important practical difference is how they behave when copied. 
// Primitives are copied by value, so you get a completely independent copy. 
// Non-primitives are copied by reference, so both variables point to the same object — changing one affects the other."

//=====================================================================