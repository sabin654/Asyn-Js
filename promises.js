


var ans = new Promise((res, rej)=>{
    var n=Math.floor(Math.random()*10)

    if(n){
        return res();
    }
    
    else
    {
        return rej();
    }
    });
    ans.then(function(){
        console.log('resolve');
    
    })
    .catch(function(){
        console.log('reject');
    })


    var an=new Promise((res, rej)=>{
        return res("it works sabin");

    });
var a= an.then(function(data){
console.log(data);

return new Promise((res,rej)=>{
    return res("it work in home sabin");
})

})
a.then(function(data){
    console.log(data);
})

