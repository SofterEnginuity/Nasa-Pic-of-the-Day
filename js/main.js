//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPic)



function getPic(){ 

const picOfDay = document.querySelector('#pod').value

      const url = `https://api.nasa.gov/planetary/apod?api_key=7pEHtUi7k8A6ju9wX3M9o5gtfN4AdirKD4tNdwwj&date=${picOfDay}`


  // fetch goes inside the function so it doesnt run right away!
    fetch(url)//reassign the link to something else for ease of access
    .then(res => res.json())//response comes from the fetch above to make it more readable
    .then(data =>{
      console.log (data)//data come from the response abve
      
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
     
// 

if(data.media_type === 'video'){
  // document.querySelector('img').src = data.hdurl //.src goes instead of innerText - its an image.
      document.querySelector('#vid').src = data.url
}else{
  document.querySelector('img').src = data.hdurl //.src goes instead of innerText - its an image.
}


    })
.catch(err => {
    console.log(`error ${err}`)
});
// console.log(picOfDay)
}

//https://apod.nasa.gov/apod/ap240630.html




// url=''

// .fetch(url)
// .then(res => res.json())


