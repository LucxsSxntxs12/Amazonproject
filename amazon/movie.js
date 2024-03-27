var main = document.querySelectorAll('.main .center')[0]

fetch('https://api.themoviedb.org/3/movie/popular?api_key=c817bb928a47f758ec6f235e6203fece')
.then(response=>response.json())
.then(data=>{
    console.log(data)
    data.results.map((i,j)=>{
       
        if(j > 20   )
            return;
            if(j == 0){
                main.innerHTML+=`
                <div class="banner-principal" title="`+i.original_title+`" style="background-image: url('https://image.tmdb.org/t/p/original`+i.backdrop_path+`')"></div>
                
                
            `}else{
                if(j == 1){
                    main.innerHTML+=`
                    <h2>Assista o melhor filme</h2>
                    <div title="`+i.original_title+`" class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`" ></div>
                    `
                }else{
                    main.innerHTML+=`
                    <div title="`+i.original_title+`" class="card-movie"><img src="https://image.tmdb.org/t/p/w500`+i.poster_path+`"></div>
                    `
                }
            }
        


    })
})
