function getName() {
  console.log("My name is Emmanuel....");
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      console.log("Hello this is inside after fulfil");
    });
  console.log("I am done with api");
}

async function getName2() {
  try {
    console.log("My name is Emmanuel....");
    const resp = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await resp.json();
    console.log("Hello this is inside after fulfil");
    console.log("I am done with api");
  } catch(e){

  } finally{
    
  }
}
getName();
console.log("Before getName2");

getName2();
