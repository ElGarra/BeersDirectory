const handleActionEdit = (elementId) => {
    const el = document.getElementById(elementId)
    const inputName = document.getElementById("inputName")
    const inputBrand = document.getElementById("inputBrand")
    const inputType = document.getElementById("inputType")
    const inputCountry = document.getElementById("inputCountry")
    const inputDesc = document.getElementById("inputDesc")
    const inputGrade = document.getElementById("inputGrade")
    const inputAlc = document.getElementById("inputAlc")
    const inputImage = document.getElementById("inputImage")
  
    inputName.value = el.children[1].innerText
    inputBrand.value = el.children[2].innerText
    inputType.value = el.children[3].innerText
    inputCountry.value = el.children[4].innerText
    inputDesc.value = el.children[5].innerText
    inputGrade.value = el.children[6].innerText
    inputAlc.value = el.children[7].innerText
    inputImage.value = el.children[8].innerText
  
    document.getElementById("buttonInsert").disabled = true;
    document.getElementById("buttonEdit").disabled = false;
  
    let beerId = elementId.split('-')[2]
    document.getElementById("buttonEdit").onclick = () => { handleSubmitEdit(beerId) }
    //document.getElementById("buttonEdit").setAttribute('onclick',`handleSubmitEdit(${menuId})`)
  }
  
  const handleInsertBeer = async () => {
    const inputName = document.getElementById("inputName")
    const inputBrand = document.getElementById("inputBrand")
    const inputType = document.getElementById("inputType")
    const inputCountry = document.getElementById("inputCountry")
    const inputDesc = document.getElementById("inputDesc")
    const inputGrade = document.getElementById("inputGrade")
    const inputAlc = document.getElementById("inputAlc")
    const inputImage = document.getElementById("inputImage")
  
    const resp = await fetch('http://localhost:8000/beer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputName.value,
        brand: inputBrand.value,
        type: inputType.value,
        country: inputCountry.value,
        description: inputDesc.value,
        note: inputGrade.value,
        alc_degree: inputAlc.value,
        image: inputImage.value
      })
    })
  
    location.reload()
  }
  
  const handleSubmitEdit = async (beerId) => {
    const inputName = document.getElementById("inputName")
    const inputBrand = document.getElementById("inputBrand")
    const inputType = document.getElementById("inputType")
    const inputCountry = document.getElementById("inputCountry")
    const inputDesc = document.getElementById("inputDesc")
    const inputGrade = document.getElementById("inputGrade")
    const inputAlc = document.getElementById("inputAlc")
    const inputImage = document.getElementById("inputImage")
  
    const resp = await fetch(`http://localhost:8000/beer/${beerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: inputName.value,
        brand: inputBrand.value,
        type: inputType.value,
        country: inputCountry.value,
        description: inputDesc.value,
        note: inputGrade.value,
        alc_degree: inputAlc.value,
        image: inputImage.value
      })
    })
  
    location.reload()
  }
  
  const handleDelete = async (beerId) => {
    alert('Are you sure?')
    
    const resp = await fetch(`http://localhost:8000/beer/${beerId}`, {
      method: 'DELETE',
    })
    location.reload()
  }