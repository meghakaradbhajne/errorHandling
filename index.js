console.log('person1:show ticket')
console.log('person2:show ticket')

const preMovie = async() =>{
    const promisewifebringhngTicket = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000)
    });

    let ticket
    try{
        ticket =await promisewifebringhngTicket;
    }catch(e){
     ticket ='sad face';
    }
    return ticket;
}

preMovie().then((m)=> console.log(`person3: show ${m}`))

console.log('person4show ticket')
console.log('person5:show ticket')