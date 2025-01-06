// Logical Operator
// AND -> All Condition Must Be True (&&)
// OR -> Atleast One Condition Shoulb be True
// Not -> True -> False & False -> True (!)

// AND -> All Condition Must Be True (&&)
const age = 20;
const gender = "male";

if ( age >= 18 && gender == 'male'){
    console.log('You are adult male')
}

// OR -> Atleast One Condition Shoulb be True
const age1 = 20;
const VoterCard_Available = 'Yes'

if ( age1 >= 18 || VoterCard_Available == 'Yes'){
    console.log('You are Eligible For Voting')
} else ( age <= 18 || VoterCard_Available == 'No');{
    console.log("You are NOt Elgible For Voting")
}


// Not -> True -> False & False -> True (!)
const number = 5;

if(number % 2 != 0){
    console.log('Odd')
} else {
    console.log ('Even')
}
