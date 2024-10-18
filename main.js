const form = document.querySelector('#searchField');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userInput = form.elements.q.value;
    
    // await axios.get(`https://rickandmortyapi.com/api/character/${userInput}`).then(res => {
        
    //     console.log(res.data.image)
    // })
    // .catch(err => console.erroe(err))

    const res = await axios.get(`https://rickandmortyapi.com/api/character/${userInput}`)

    console.log(res.data)

    const img = document.createElement('IMG');

    img.src = res.data.image;

    document.body.append(img);

})

