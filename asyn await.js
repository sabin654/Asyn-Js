async function abc(){
    let ans =await fetch(`https://randomuser.me/api/`)
    let a=  await ans.json();
    console.log(a);
}
abc();