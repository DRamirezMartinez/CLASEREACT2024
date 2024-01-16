const CompTask = new Promise((resolve, reject) => {
    
        //Tarea Sincrona
        resolve(true);
    
});
CompTask.then(result => {
    console.log(result)
})
export default CompTask