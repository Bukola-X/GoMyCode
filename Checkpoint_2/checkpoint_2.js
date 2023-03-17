function dotProduct (a,b) {
    var ps = 0;
    for (var i=0; i<a.length; i++) {
        ps = ps + a[i]*b[i]
    }
    console.log(ps)
    return ps;
};

v1 = [3,4,5]
v2 = [4,5,6]

dotProduct(v1,v2);

function isOrthogonal (q,w) {
    var finalAnswer;
    if(dotProduct(q,w) === 0) {
        finalAnswer = "The Vectors are Orthogonal"
    } else {
        finalAnswer = "Sadly, The Vectors are Not Orthogonal"
    };
console.log(finalAnswer)
}

isOrthogonal(v1,v2);