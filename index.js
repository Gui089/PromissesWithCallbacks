function getUser() {
    return new Promise(function resolvePromisse(resolve, reject) {

    setTimeout(function () {
        return resolve({
            id:1,
            nome:'Guilherme',
            born: new Date()
        })
    }, 1000);
  })
}

function getPhoneNumber(idUser) {
    return new Promise(function resolvePromisse(resolve, reject) {
        setTimeout(function() {
            return resolve({
                phone: '124124',
                ddd: 11
            })
        },1000);
    })
}

function getOdd(idUser, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Guilherme de castro',
            numero: 341
        })
    }, 2000)
}

const userPromisse = getUser();

userPromisse
    .then(function (user) {
        return getPhoneNumber(user.id)
        .the(function resolverPhone(result) {
            return {
                user: {
                    name: user.name,
                    id: user.id
                },
                phone: result
            }
        })
    })
    .then(function(result) {
        console.log('Resultado', result);
    })
    .catch(function(error) {
        console.log('Deu ruim', error);
    })

/* getUser(function resultUser(error, user) {
    if(error) {
        console.error('Deu ruim usuario', error);
        return;
    }
    getPhoneNumber(user.id, function resulPhone (error1, phone) {
        if(error) {
            console.error('Deu ruim usuario', error1);
            return;
        }
        getOdd(user.id, function resultOdd(erro2, odd) {
            if(error) {
                console.error('Deu ruim usuario', error2);
                return;
            }
        })
    })
    console.log(`
    Nome: ${user.name}, 
    Endereco: ${user.odd}
    `)
}) */
/* const phoneNome = getPhoneNumber(user.id) */

