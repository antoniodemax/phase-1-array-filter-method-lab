// Code your solution here


// findMatching
function findMatching(source, sought) {
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase() ===sought.toLowerCase()
    );

}

//fuzzyMatch
function fuzzyMatch(source, sought) {
    return source.filter(
        (possibleMatch) => possibleMatch.toLowerCase().indexOf(sought.toLowerCase()) ===0
    );
}

//matchName
function matchName(source, sought) {
    return source.filter((record) => record.name === sought)
}
