const user = {
    name: 'Ehsan Ansari',
    age: 88,
    address:{
        city:'nyc',
        state:'utter pradess'
    },
    hobbies:['teaching','coding','tt']
};

let address = user.address;

address.pincode=553433;
address.country=='india'

console.log(user.address===address)
console.log('im inside user')

// export {user}
// console.log(exports)
// exports.user = user;

module.exports.user= user;

console.log('h')

// const _user = user;
// export { _user as user };