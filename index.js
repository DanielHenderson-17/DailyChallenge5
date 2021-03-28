// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.



const dic1 = ['dog', 'deer', 'deal'];
const query1 = 'de';

function getAutocompletes(dictionary, query){
	return dictionary.filter(value => {
		const m = value.match(query);
		return m != null && m.index == 0;
	})
}

const answer1 = getAutocompletes(dic1, query1);
const test1 = ['deer', 'deal'].reduce((equal, str, i) => {
	if(equal == false)
		return false;
	else if (str != answer1[i])
		return false;
	return true;
});
if(test1)
	console.log('Test success');
else
	console.log('Test failure');

console.log("Returned answer:", answer1);