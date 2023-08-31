const uber = {
    clientes: [
        {
            id: 1,
            nome: 'Murillo',
            corrida : {
                endereco: 'rua brasil',
                numero : 234
            }
        }
    ]
}

//create
function createClient(nome, endereco, numero) {
    uber.clientes.push({
        id: uber.clientes.length + 1,
        nome,
        corrida: {
            endereco,
            numero
        },
    });
}

createClient('Kauan', 'rua do santos', 247)

//read 
function readClient() {
    return uber.clientes
}

console.log(readClient())

//update
function updateClient(id, endereco, numero) {
    readClient().filter((cliente) => {
        if(cliente.id === id){
            cliente.corrida.endereco = endereco;
            cliente.corrida.numero = numero
        }
    })
}

updateClient(1, 'rua do neymar', 777)
// console.log(readClient())

//delete
function deleteCliente(id) {
    const novaLista = readClient().filter((cliente) =>{
        return cliente.id !== id
    })

    uber.clientes = novaLista
}
deleteCliente(2)
console.log(readClient())