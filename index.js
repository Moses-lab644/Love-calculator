function calculateLove() {
  const name1 = document.getElementById("name1").value.trim();
  const name2 = document.getElementById("name2").value.trim();
  const result = document.getElementById("result");

  if (name1==="" || name2 === ""){
    result.innerText = "please enter both names!";
    return;
  }

  const loveScore = Math.floor(Math.random() * 101); // 0 to 100
  result.innerText = "${name1} ❤️ ${name2} = ${loveScore}%  love Match!";

  if (loveScore > 80 ) {
    result.innerText += "perfect match";
  }

  else if (loveScore > 50) {
    result.innerText += "There's potential";
  }

  else {
    result.innerText += "Just friends maybe?";
  }
}