var setName = document.getElementById('nameSignup');
var setEmail = document.getElementById('emailSignup');
var setPassword = document.getElementById('passwordSignup');
var getEmail = document.getElementById('emailInput');
var getPassword = document.getElementById('passwordInput');
var bttnSign = document.getElementById('bttnSign');
var bttnlogout = document.getElementById('logout');
var signupDataContainer =[];

if (localStorage.getItem('data') == null) 
{
    signupDataContainer = [];
} 
else
{
    signupDataContainer = JSON.parse(localStorage.getItem('data'));
}

function addData()
{ 
    var data = 
    {
        Name : setName.vlaue,
        Email :setEmail.value , 
        password : setPassword.value
    };
    if (signupDataContainer.length == 0)
    {
        signupDataContainer.push(data)
        localStorage.setItem('data', JSON.stringify(signupDataContainer))
        document.getElementById('required').innerHTML = 'Success';
        return true;
    }
    if (emailCheck() == false) 
    {
        document.getElementById('required').innerHTML = 'email already exists';
    }
    else 
    {
        signupDataContainer.push(data);
        localStorage.setItem('data', JSON.stringify(signupDataContainer));
        document.getElementById('required').innerHTML = 'Success';
    }
    emptyCheck();
    emailCheck();
}

function emptyCheck()
{
    if (setName.value == "" && setEmail.value == "" && setPassword.value == "") 
    {
        document.getElementById('required').innerHTML ="All inputs is required" ;
        return false;
    }
    else
    {
        return true;
    }
    
}

function emailCheck()
{
    for (var i = 0; i < signupDataContainer.length; i++)
    {
        if (signupDataContainer[i].Email.toLowerCase() == setEmail.value.toLowerCase())
        {
            return false;
        }
    }
}

function login() 
{
    if (loginEmpty() == false) 
    {
        document.getElementById('login').innerHTML = 'All inputs is required';
        return false;
    }
    var password = getPassword.value;
    var email = getEmail.value;
    for (var i = 0; i < signupDataContainer.length; i++) {
        if (signupDataContainer[i].Email.toLowerCase() == email.toLowerCase() && signupDataContainer[i].password.toLowerCase() == password.toLowerCase()) 
        {
            localStorage.setItem('users', JSON.stringify(signupDataContainer[i].name));
            bttnSign.setAttribute('href' ,`BookMark.html`);
        }
        else
        {
            document.getElementById('login').innerHTML = 'incorrect email or password';
        }
    }
    loginEmpty();
}

function loginEmpty() 
{
    if (getPassword.value == "" || getEmail.value == "") 
    {
        return false;
    } 
    else
    {
        return true;
    }
}

function logout() {
    localStorage.removeItem('users');
}