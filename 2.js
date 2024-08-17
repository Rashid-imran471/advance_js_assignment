// Function to test if a string matches a regex pattern
function testRegex(pattern, str) {
    // Create a regular expression object from the pattern
    const regex = new RegExp(pattern);

    // Test the string against the regex pattern
    return regex.test(str);
}

// Test cases
console.log(testRegex('^hello', 'hello world')); // true: string starts with "hello"
console.log(testRegex('world$', 'hello world')); // true: string ends with "world"
console.log(testRegex('l.o', 'hello'));          // true: "l.o" matches "l" followed by any character followed by "o"
console.log(testRegex('\\d+', '123abc'));        // true: "\\d+" matches one or more digits
console.log(testRegex('\\w+', 'hello123'));      // true: "\\w+" matches one or more word characters (letters, digits, and underscores)
console.log(testRegex('^hello$', 'hello'));      // true: string exactly matches "hello"
console.log(testRegex('^hello$', 'hello world')); // false: string is "hello world", not just "hello"
console.log(testRegex('^[A-Z][a-z]+$', 'Hello')); // true: matches a string that starts with an uppercase letter followed by lowercase letters
console.log(testRegex('^\\d{4}-\\d{2}-\\d{2}$', '2024-08-17')); // true: matches the date format YYYY-MM-DD
console.log(testRegex('\\bcat\\b', 'concatenate')); // false: "\\bcat\\b" matches "cat" as a whole word, not part of another word
