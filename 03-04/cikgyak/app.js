const doboz = document.getElementById('doboz')

for (let i=0; i<5; i++) {
    const div = document.createElement('div')
    div.textContent = 'i: ' + i
    doboz.append(div)

}

