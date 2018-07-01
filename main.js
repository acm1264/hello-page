//this javascript file goes with the main.html file to ensure
//the inputted name is valid using Regexp and returning the 
//appropriate result

//name vaidation function
function validateName () {
    //retrieve inputted name from html nameInput input box       
    var name = document.getElementById("nameInput").value;

    //test that no characters other than letters, ', and space are present in the name,
    //where the text is only updated for a valid name
    if (!/[^a-z\'\ ]/gi.test(name)){
        $("#nameDisplay").text("Hello " + name + "!");
    }
}