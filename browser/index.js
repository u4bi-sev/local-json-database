var adapter = new LocalStorage('db'),
    db = low(adapter);


/* init */
db.defaults({ item: [] })
    .write();


/* push */
db.get('item')
    .push({ 
        name  : 'Shotgun',
        price : 5000
    })
    .write();

console.log(JSON.stringify(db.get('item').value()));


/* set */
db.set('item[0]', {
        name  : 'FIX_Shotgun',
        price : 1234
    })
    .write()

db.set('item[1]', {
        name  : 'Rifle',
        price : 6000
    })
    .write()

console.log(JSON.stringify(db.get('item').value()));


/* remove */
db.get('item')
    .remove()
    .write();

console.log(JSON.stringify(db.get('item').value()));
    