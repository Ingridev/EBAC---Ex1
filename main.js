const btn = document.getElementById('btn')

btn.onclick = function() {
 const n1 = Number(document.getElementById('n1').value)
 const n2 = Number(document.getElementById('n2').value)
 const n3 = Number(document.getElementById('n3').value)
 const res = document.getElementById('resultado')

 const media = (n1+n2+n3)/3
 res.innerHTML = `O resultado é ${media}`
 
 if(n1 == '' || n2 == '' || n3 == '') {
  window.alert("Por favor, preencha todos os campos!")
 }
}

btn.onmouseenter = function() {
 btn.style.backgroundColor = "green"
}

btn.onmouseleave = function() {
 btn.style.backgroundColor = "white"
}