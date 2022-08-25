// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("puspha"));


// function vinit(str){
//     return str.split("").reverse().join("")
// }
// console.log(vinit("vinit"))


// check = (vinit) =>{
//     if(vinit%3===0 && vinit%5===0)
//     return "ok not ok"
//     if(vinit%3==0)
//     return "ok"
//    if(vinit%5==0)
//    return "not ok"
//    else return "hello"
// } 
// console.log (check([30]))


//vinit


// const getBlogs = async function (req, res) {
//     try {
//         let data = req.query
//         // find the all data filter and query
//         let blogs = await blogModel.find({ $and: [data] });
       
//         return res.status(200).send({ status: true, data: blogs })
//     }
//     catch (err) {
//         return res.status(500).send({ status: false, msg: err.message })
//     }
// }
// module.exports.getBlogs = getBlogs;