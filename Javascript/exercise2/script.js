
function onSubmit() {
    var inputStr = document.getElementById("countText").value;
    let prepend = 'The count is ';
    var error = document.getElementById('errorText');
    var result = document.getElementById('result');
    if (inputStr) {
        res = prepend + '<b>'+ countCharacters(inputStr)+'</b>';
        result.innerHTML = res;
    } else {
        error.style.display='block';
        error.innerText = 'Please enter some data!';
    }

    function countCharacters(str){
        return str.trim().split(/\s+/).filter((n)=> n!='').length;
    }
}