<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.6.0/math.min.js"></script>

<script>
  const vport = document.getElementsByClassName("vport")[0];

  function setDefaultViewPortValue() {
    vport.innerHTML = "0";
  }
  function addToViewPort(value) {
    if (
      vport.innerHTML == "0" &&
      value != "+" &&
      value != "-" &&
      value != "*" &&
      value != "/" &&
      value != "." &&
      value != "%"
    ) {
      vport.innerHTML = value;
    } else if (
      vport.innerHTML == "Error" ||
      vport.innerHTML == "Infinity" ||
      vport.innerHTML == "-Infinity" ||
      vport.innerHTML == "NaN"
    ) {
      setDefaultViewPortValue();
    } else {
      if (
        (value == "/" ||
          value == "*" ||
          value == "+" ||
          value == "-" ||
          value == ".") &&
        (vport.innerHTML.slice(-1) == "/" ||
          vport.innerHTML.slice(-1) == "*" ||
          vport.innerHTML.slice(-1) == "+" ||
          vport.innerHTML.slice(-1) == "-" ||
          vport.innerHTML.slice(-1) == ".")
      ) {
        vport.innerHTML = vport.innerHTML.slice(0, -1) + value;
      } else {
        vport.innerHTML += value;
      }
    }
  }
  function backspaceViewPort() {
    if (
      vport.innerHTML == "Error" ||
      vport.innerHTML == "Infinity" ||
      vport.innerHTML == "-Infinity" ||
      vport.innerHTML == "NaN"
    ) {
      setDefaultViewPortValue();
    } else {
      vport.innerHTML = vport.innerHTML.slice(0, -1);
    }

    if (vport.innerHTML == "") {
      setDefaultViewPortValue();
    }
  }
  function displayCalculation() {
    try {
      vport.innerHTML = math.evaluate(vport.innerHTML);
    } catch (error) {
      vport.innerHTML = "Error";
    }
  }
</script>
