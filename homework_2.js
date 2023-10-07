/** 2. Minimum String Length After Removing Substrings
 * @param {string} s
 * @return {number}
 */

var minLength = function(s) {
  const newString = []

  for(let char of s) {
    if(newString.length && char === 'B' && newString[newString.length - 1] === 'A') {
			newString.pop() 
		}
    else if(newString.length && char === 'D' && newString[newString.length - 1] === 'C') {
			newString.pop()
		}
    else {
			newString.push(char)
		}
  }

  return newString.length
};

console.log('2. Minimum String Length After Removing Substrings')
console.log(minLength('ABFCACDB')) // output: 2
console.log(minLength('ACBBD')) // output: 5

// ------------------------------------------------------------------------------------------
/** 13. Number of Students Unable to Eat Lunch
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */

var countStudents = function(students, sandwiches) {
	while(students.includes(sandwiches[0])) {
			if(!(students[0] === sandwiches[0])) {
					students.push(students.shift())
			} else {
					sandwiches.shift()
					students.shift()
			}
	}

	return students.length
}; 

console.log('13. Number of Students Unable to Eat Lunch')
console.log(countStudents([1,1,0,0], [0,1,0,1])) // output: 0
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1])) // output: 3

// ------------------------------------------------------------------------------------------
/** 18. Two sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	const seekingElements = {}

	for(let i in nums) {
			if(seekingElements[nums[i]]) return [seekingElements[nums[i]], i]

			seekingElements[target - nums[i]] = i
	}

	return []
};

console.log('18. Two sum')
console.log(twoSum([2,7,11,15], 9)) // output: [0,1]
console.log(twoSum([3,2,4], 6)) // output: [1,2]

// ------------------------------------------------------------------------------------------
/** 3. Make The String Great
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
	if(s.length == 1) return s
	
	const newString = []

	for(let char of s) {
			if(newString.length && 
					(char === newString[newString.length - 1].toLowerCase() ||
					 char === newString[newString.length - 1].toUpperCase())
			) {
					if(char !== newString[newString.length - 1]) {
							newString.pop()
					}
					else {
							newString.push(char)
					}
			} 
			else {
					newString.push(char)
			}
	} 

	return newString.join('')
};

console.log('3. Make The String Great')
console.log(makeGood('leEeetcode')) // output: 'leetcode'
console.log(makeGood('abBAcC')) // output: ''




