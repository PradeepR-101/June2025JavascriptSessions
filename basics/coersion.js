
// Coercion in JavaScript is the automatic (or manual) conversion of a value from one data type to another.

// Two types:
// 1. Implicit Coercion (automatic, done by JS engine)
"5" + 2        // "52"  → number 2 coerced to string
"5" - 2        // 3     → string "5" coerced to number
true + 1       // 2     → true coerced to 1
false + 1      // 1     → false coerced to 0
null + 1       // 1     → null coerced to 0
undefined + 1  // NaN   → undefined coerced to NaN

// 2. Explicit Coercion (manual, you do it intentionally)
Number("42")      // 42
String(100)       // "100"
Boolean(0)        // false
parseInt("3.9")   // 3
parseFloat("3.9") // 3.9
!!""              // false  (double-bang trick)

// The tricky + operator
// + is overloaded — it concatenates strings but adds numbers:
"3" + 2   // "32"  (string wins → concatenation)
"3" - 2   // 1     (- has no string meaning → numeric)

// Truthy vs Falsy coercion
// When JS needs a boolean (e.g. in an if condition), values are coerced:
// Falsy                Truthy
// 0, -0                Any non-zero number
// "" (empty string)    Any non-empty string
// null                 [], {}
// undefined            Any object/array
// NaN

// == vs ===
// == triggers coercion; === does not:
0 == false    // true  (false → 0)
0 === false   // false (different types, no coercion)
"" == false   // true
null == undefined  // true (special case)

// Best practice: use === to avoid unexpected coercion bugs. 
// Rely on explicit coercion when you need to convert types so your intent is clear.