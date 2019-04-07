function ajax (gewicht, lengte){
  let debug = true;
  let controlScript = "BMI.php";
  let xmlhttp = new XMLHttpRequest();
  let httpString = controlScript + "?gewicht=" + gewicht + "?lengte_cm=" + lengte;
  let httpResponse = "";
  if(debug) console.log(httpString);
  xmlhttp.open("GET", httpString, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if(debug) console.log("httpResponse: " + xmlhttp.responseText);
      httpResponse = xmlhttp.responseText;
      resultaat.innerHTML = httpResponse;
    }
  };
}
