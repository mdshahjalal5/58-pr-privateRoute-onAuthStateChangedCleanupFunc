
const student = {
    name: 'fakiba', 
    job:'practice', 
    address:'gazi', 
}
const { address, ...rest} = student;

console.log(rest, 'rest')