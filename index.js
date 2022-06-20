//Set a basis for all images
function newImage(url, left, bottom){
    let pics = document.createElement('img')
    pics.src = url
    pics.style.position = 'fixed'
    pics.style.left = left + 'px'
    pics.style.bottom = bottom + 'px'
    document.body.append(pics)
    return pics
}

//Pick up new items
function newItem(url, left, bottom){
    let pics = newImage(url, left, bottom)
    pics.addEventListener('dblclick', () => {
        pics.remove()})
}

//All images and items invoked
newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png', 600, 100)