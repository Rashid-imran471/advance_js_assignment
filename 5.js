// Polyfill for Array.prototype.includes
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(valueToFind, fromIndex) {
        // Default fromIndex to 0 if not provided
        var startIndex = fromIndex || 0;

        // Handle negative indices
        if (startIndex < 0) {
            startIndex = Math.max(this.length + startIndex, 0);
        }

        // Iterate through the array from the startIndex
        for (var i = startIndex; i < this.length; i++) {
            if (this[i] === valueToFind) {
                return true;
            }
        }
        return false;
    };
}

// Example usage
const array = [1, 2, 3, 4, 5];

console.log(array.customIncludes(3));    // Output: true
console.log(array.customIncludes(6));    // Output: false
console.log(array.customIncludes(2, 2)); // Output: false
console.log(array.customIncludes(2, -3)); // Output: true
