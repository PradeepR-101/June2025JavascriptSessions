
// Searching & Checking
const str = "Hello, World!";

// includes()
str.includes("World");        // true
str.includes("world");        // false (case-sensitive)

// startsWith()
str.startsWith("Hello");      // true
str.startsWith("World");      // false

// endsWith()
str.endsWith("!");            // true
str.endsWith("World!");       // true

// indexOf()
str.indexOf("l");             // 2 (first occurrence)
str.indexOf("xyz");           // -1 (not found)

// lastIndexOf()
str.lastIndexOf("l");         // 10 (last occurrence)

// search()
str.search(/world/i);         // 7 (case-insensitive regex)

//=========================================================

// Extracting
const str = "Hello, World!";

// slice(start, end) — end is exclusive
str.slice(7, 12);             // "World"
str.slice(-6);                // "orld!" (negative = from end)
str.slice(0, 5);              // "Hello"

// substring(start, end) — no negatives
str.substring(7, 12);         // "World"

// at(index) — supports negatives
str.at(0);                    // "H"
str.at(-1);                   // "!" (last character)

// charAt(index)
str.charAt(7);                // "W"

// split(separator)
"a,b,c".split(",");           // ["a", "b", "c"]
"hello".split("");            // ["h", "e", "l", "l", "o"]
"hello".split("", 3);         // ["h", "e", "l"] (limit)

// match() — returns first match by default
"test 123".match(/\d+/);      // ["123"]
"test 123 abc 456".match(/\d+/g); // ["123", "456"] (global flag)

// matchAll() — returns all matches (requires /g flag)
const matches = [..."test 123 abc 456".matchAll(/\d+/g)];
matches.map(m => m[0]);       // ["123", "456"]

//==========================================================

// Transforming
const str = "  Hello, World!  ";

// toUpperCase()
"hello".toUpperCase();        // "HELLO"

// toLowerCase()
"HELLO".toLowerCase();        // "hello"

// trim()
str.trim();                   // "Hello, World!"

// trimStart() / trimEnd()
str.trimStart();              // "Hello, World!  "
str.trimEnd();                // "  Hello, World!"

// replace() — replaces first match
"aabbcc".replace("b", "X");   // "aaXbcc"
"hello".replace(/l/, "r");    // "herlo"

// replaceAll() — replaces all matches
"aabbcc".replaceAll("b", "X"); // "aaXXcc"
"hello".replaceAll(/l/g, "r"); // "herro" (regex needs /g)

// replace() with a function
"hello world".replace(/\b\w/g, c => c.toUpperCase()); // "Hello World"

//===============================================================

// Building & Padding
// concat()
"Hello".concat(", ", "World", "!"); // "Hello, World!"

// repeat(n)
"ab".repeat(3);               // "ababab"
"-".repeat(5);                // "-----"

// padStart(targetLength, padString)
"5".padStart(3, "0");         // "005"
"42".padStart(6, "*");        // "****42"

// padEnd(targetLength, padString)
"5".padEnd(3, "0");           // "500"
"hi".padEnd(6, ".");          // "hi...."

//=============================================

// Info & Character Codes
const str = "Hello";

// length (property)
str.length;                   // 5

// charCodeAt(index) — UTF-16 code
str.charCodeAt(0);            // 72 (code for 'H')

// codePointAt(index) — Unicode code point (better for emoji)
"😀".codePointAt(0);          // 128512

// String.fromCharCode() — create string from char codes
String.fromCharCode(72, 101, 108, 108, 111); // "Hello"

// String.fromCodePoint() — create string from code points
String.fromCodePoint(128512); // "😀"

//==========================================================

// Real-World Examples
// 1. Capitalize first letter of each word
const title = "the quick brown fox";
title.replace(/\b\w/g, c => c.toUpperCase());
// "The Quick Brown Fox"

// 2. Truncate long text with ellipsis
const truncate = (str, max) =>
  str.length > max ? str.slice(0, max) + "..." : str;
truncate("Hello, World!", 7);  // "Hello, ..."

// 3. Count occurrences of a word
const text = "cat bat cat rat cat";
text.split("cat").length - 1;  // 3

// 4. Check if a string is a palindrome
const isPalindrome = str => str === str.split("").reverse().join("");
isPalindrome("racecar");       // true
isPalindrome("hello");         // false

// 5. Extract numbers from a string
"Order #1234 costs $56.78".match(/[\d.]+/g); // ["1234", "56.78"]

// 6. Format a phone number
"1234567890".replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
// "(123) 456-7890"

// 7. Slugify a title
const slugify = str =>
  str.toLowerCase().trim().replaceAll(" ", "-").replace(/[^a-z0-9-]/g, "");
slugify("Hello World! 🚀");    // "hello-world-"

//=============================================================

// Quick Reference Cheatsheet
// Most commonly used in day-to-day coding:
str.includes(x)         // does it contain x?
str.startsWith(x)       // does it begin with x?
str.split(sep)          // break into array
str.trim()              // remove whitespace
str.replace(a, b)       // find & replace
str.slice(i, j)         // extract portion
str.toLowerCase()       // normalize case
str.padStart(n, "0")    // zero-pad numbers
str.at(-1)              // last character

//===============================================================

// Quick Reference for Playwright
// Method                  Use Case 
// includes()              Check if page text contains a value
// trim()                  Clean whitespace from innerText()
// toLowerCase()           Case-insensitive text comparison
// replace()               Strip symbols ($, ,) before parsing
// split()                 Parse table rows or multi-part texts
// slice()                 Extract parts of URLs or IDs
// startsWith()            Validate URL prefix after navigation
// endsWith()              Validate URL route or file extension
// match()                 Extract dynamic values (OTP, counts)
// padStart()              Generate padded test IDs
// Template literals       Dynamic selectors, URLs, test data

//=================================================================

