function time(msg)
{
    setTimeout(()=>
    {
        console.log(msg);
    }
    ,2000);
 console.log("after calling the function");
    
}
time("iam manar");

//console.log("********************************************************************************");

function time2(msg,funCallBack)
{
    setTimeout(()=>
    {
        console.log(msg);
        funCallBack();
    }
    ,2000);
}
time2("iam manar",()=>
{
    console.log("after calling the function");
});

//console.log("********************************************************************************");
var p=new Promise((resolve,reject)=>
{  
    setTimeout(()=>
    {
        console.log("iam manar");
        if(true)
        {
            resolve("after calling the function");
        }
        else
            {
             reject("an error occured");
             }
    },2000);
});

p.then(
    (x)=>{
        console.log(x);
    },
    (e)=>
    {
        {
        console.log(e);
        }
    }
)
//console.log("********************************************************************************");
async function pro()
{
    var p=new Promise((resolve,reject)=>
   { 
    setTimeout(()=>
    {
        console.log("iam manar");
        if(true)
        {
            resolve("after calling the function");
        }
        else
            {
             reject("an error occured");
             }
    },2000);
    });

    let result =await p; 
	return result;

}

pro().then(
    (res)=>{console.log(res);},
    (rej)=>{console.log(rej);}
);