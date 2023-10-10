
function checkDay() {
    var day = parseInt(document.getElementById("day").value);
    let flag = false;
    let res = '';
    let prepend = 'The Day is ';
    var error = document.getElementById('errorText');
    var result = document.getElementById('result');
    if (day) {
        switch (day) {
            case 1:
                flag = true;
                res = prepend + '<b>Mon</b>';
                break;
            case 2:
                flag = true;
                res = prepend + '<b>Tues</b>';
                break;
            case 3:
                flag = true;
                res = prepend + '<b>Wed</b>';
                break;
            case 4:
                flag = true;
                res = prepend + '<b>Thus</b>';
                break;
            case 5:
                flag = true;
                res = prepend + '<b>Fri</b>';
                break;
            case 6:
                flag = true;
                res = prepend + '<b>Sat</b>';
                break;
            case 7:
                flag = true;
                res = prepend + '<b>Sun</b>';
                break;
            default:
                flag = false;
                res = '<b>Ooops!</b> Please inter day between <b>1</b> to <b>7</b>';
                break;
        }

        result.innerHTML = res;
        if (flag) {
            result.classList.add('text-success');
        } else {
            result.classList.add('text-danger');
        }
    } else {
        error.style.display='block';
        error.innerText = 'Please enter the day!';
    }
}