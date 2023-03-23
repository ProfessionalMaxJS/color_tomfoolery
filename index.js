const hW = document.createElement("h1")
hW.textContent = "Hello, World!"
document.querySelector("body").appendChild(hW)

const body = document.querySelector("body")

const colorChange = () =>{
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    // debugger
    
    fetch(`https://www.thecolorapi.com/id?rgb=(${r},${g},${b})`)
    .then(r=>r.json())
    .catch(err => {
        console.log(err)
        alert("there has been an error; check the console for more details")})
    .then(data => {
        console.log(data)
        hW.textContent = data.name.value
        body.style.backgroundColor = data.hex.value
        }
    )

}

const tomFoolThisEry = document.getElementById("tomFoolThisEry")
tomFoolThisEry.addEventListener("click", colorChange)