import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const [usedIndices, setUsedIndices] = useState([]);

  const [celebrityImages, setCelebrityImages] = useState([
     "https://upload.wikimedia.org/wikipedia/commons/5/5e/Audrey_Hepburn_1956.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2a/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/3/31/Emma_Stone_at_Maniac_UK_premiere_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/5/54/Jennifer_Lawrence_in_2016.jpg",
    "https://m.media-amazon.com/images/M/MV5BYWZkZDg4NmQtNDk4My00MzVlLThmYWQtOTFmNTFkOTk3YzQyXkEyXkFqcGdeQXVyNjYzNDE4ODA@._V1_.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/6/62/ELEANORParker.jpg",
    "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_FMjpg_UX1000_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTgxNDcwMzU2Nl5BMl5BanBnXkFtZTcwNDc4NzkzOQ@@._V1_FMjpg_UX1000_.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/actress-jennifer-aniston-star-as-rachel-green-of-nbcs-news-photo-908311-1565257489.jpg?crop=1.00xw:0.825xh;0,0.0271xh&resize=2048:*",
    "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/165531_v9_bb.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf0z7skDv3j53-3Y3oMnfpwLI9lqivTGkzyQ&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Avatar_The_Way_of_Water_Tokyo_Press_Conference_Zoe_Salda%C3%B1a_%2852563431865%29_%28cropped2%29.jpg/800px-Avatar_The_Way_of_Water_Tokyo_Press_Conference_Zoe_Salda%C3%B1a_%2852563431865%29_%28cropped2%29.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_.jpg",
    "https://allthatsinteresting.com/wordpress/wp-content/uploads/2020/11/diana-dors-red-blouse.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjdhOWY3OTMtNTI5Yi00NjA4LTk4YzktYmU2NTkzYzljODRhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHWv-IIfLokUeaYmFiXzKrSgY9QoHbb8bVREbDB_iT4AP9-SW7mFS0K5ZaTBch408RcA&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jane_russell.jpg/1200px-Jane_russell.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRc1-z5llH0q82FxKihzFPLOWrq8k-OZXuKHjXxNLfU8jF1khHueCQQVs6MfFlj-QSC4&usqp=CAU",
    "data:image/jpeg;base64,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",
    "https://m.media-amazon.com/images/M/MV5BZmM4M2RkMTctYjg0Yy00NjUwLTk0M2QtOTE0MTlkMGU1ZWY5XkEyXkFqcGdeQXVyMTE0MTkwNTIw._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMGYzZDYxOGYtMjVlOC00MmJjLWI0ZDItOWM0NjMyY2I4YjA1XkEyXkFqcGdeQXVyMzQ3Nzk5MTU@._V1_.jpg",
    "https://hollywoodlife.com/wp-content/uploads/2023/03/sharon-stone-ss-2.jpg?w=680",
    "https://i.pinimg.com/736x/7b/34/00/7b3400f98effdfc16ee0eeafd98ef0fd.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/MNk3t5Dn8ciTTeiuiuGpKwzM3I0/95x215:2752x2872/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/12/17/889/n/1922398/8c167c8b5df93898538365.01867179_/i/Elle-Fanning.jpg",
    "https://people.com/thmb/53usz-_kBZIjiBJ--9LmLiPKiq0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(871x0:873x2)/megan-fox1-207b858d7b82416488d17d8a894d0322.jpg",
    "https://i.pinimg.com/736x/cf/c4/ef/cfc4ef5a0988f06fe9b28e81ce1bd337.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sof%C3%ADa_Vergara_2019_by_Glenn_Francis.jpg/640px-Sof%C3%ADa_Vergara_2019_by_Glenn_Francis.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Joanna_Krupa_Benchwarmer_2008.jpg/1200px-Joanna_Krupa_Benchwarmer_2008.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/220px-Zendaya_-_2019_by_Glenn_Francis.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Cate_Blanchett_Berlinale_2023_%28cropped%29.jpg/640px-Cate_Blanchett_Berlinale_2023_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Rebel_Wilson_%286707611099%29_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Ali_Larter.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Lilly_James_%2835036323024%29.jpg/640px-Lilly_James_%2835036323024%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Kate_Winslet_at_the_2017_Toronto_International_Film_Festival_%28cropped%29.jpg/800px-Kate_Winslet_at_the_2017_Toronto_International_Film_Festival_%28cropped%29.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg/640px-2023-11-16_Gala_de_los_Latin_Grammy%2C_03_%28cropped%2902.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Priyanka-chopra-gesf-2018-7565.jpg/800px-Priyanka-chopra-gesf-2018-7565.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1a/Karen_Gillan_by_Gage_Skidmore.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gal_Gadot_at_the_2018_Comic-Con_International_13_%28cropped%29.jpg/220px-Gal_Gadot_at_the_2018_Comic-Con_International_13_%28cropped%29.jpg",
    "https://cdn.britannica.com/64/220264-050-D11DAD18/Olivia-Wilde-2019.jpg",
    "https://m.media-amazon.com/images/M/MV5BNDAxYTJkNWYtZTgyOS00YTQ1LWFjY2YtMDE3NGU0ZWYyYjE3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    "https://static.wikia.nocookie.net/p__/images/a/a1/LilyAldrin.jpg/revision/latest?cb=20130201001620&path-prefix=protagonist"    
  ]);
    
  function changeImage(){
    var img1 = document.getElementById("image1");
    var img2 = document.getElementById("image2");

    var img1index;
    var img2index;
    console.log(usedIndices.length, celebrityImages.length);
    
    if(usedIndices.length != celebrityImages.length || usedIndices.length > celebrityImages.length){
     
      do {
        img1index = Math.floor(Math.random() * celebrityImages.length);
      } while (usedIndices.includes(img1index));
      
      do {
        img2index = Math.floor(Math.random() * celebrityImages.length);
      } while (usedIndices.includes(img2index) || img1index === img2index);
      
      
      
      img1.src = celebrityImages[img1index];
      img2.src = celebrityImages[img2index];
      setUsedIndices([...usedIndices, img1index, img2index]);
    }
    else{
      img1.src = ""
      img2.src = "";
    }
      
  }

  return (
    <>
    <div class="navbar">
        <h1>FACEMASH</h1>
    </div>
    <div class="rating">
        <h2>Were we let in for our looks? No. Will we be judged on them? Yes.</h2>
        <h1>Who's hotter? Click to Choose</h1>
            <div class="img-box">
                <button class="rate-box" onClick={changeImage}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Audrey_Hepburn_1956.jpg" alt=""id="image1" />
                </button>
                
                <h2>OR</h2>
                
                <button class="rate-box" type="submit" onClick={changeImage}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Emma_Watson_2013.jpg" alt="" id='image2'/>
                </button>
            </div>
        </div>
    </>
  )
}

export default App
