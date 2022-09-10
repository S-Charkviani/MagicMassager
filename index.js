
    const Fake_data=[
        {id: "1", src:"images/1pic.png" ,review: "I love the Magic Massage! It's simple to use, doesn't mess up my curly hair."},
        {id: "2", src:"images/2pic.png", review: "I couldn't be happier by this product! I use it at night for relax and it does wonders for me. My kids and dogs also love it."},
        {id: "3",src:"images/3pic.png", review: "It arrived in perfect condition and the package was immaculate"},
        {id:"4",src:"images/4pic.png", review: "I couldn't love this massager more"}
        
    ]
    document.getElementById('test1').innerHTML = Fake_data.map(user => 
        `<div>
        <h1>Megan K<h1>
        <img src=${user.src} />
          <p>${user.review}<p>
        </div>`
    ).join('')