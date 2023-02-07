function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

let submit = document.getElementById('submit');

document.getElementById('form').addEventListener('submit', function(){
  let login = document.getElementById('login').value;
  let password = document.getElementById('password').value;
  if (login == "") {
    //bon chemin
    document.cookie = "login" + "=" + "value" + ";" + 10000 + ";path=/";
  } else {
    //mauvais chemin
    document.cookie = "login" + "=" + login + ";" + 10000 + ";path=/.";
  }
  let cookie = getCookie("login");
  if (password == "1234" && cookie == "admin")
    alert("le flag est AbRic0t");
  else {
    alert("wrong login or password !");
  }
})