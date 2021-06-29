import img0 from './imgs/frontend.jpeg';
import img1 from './imgs/corspolicy.png';
import img2 from './imgs/blog.png'
import img3 from './imgs/reacthooks.jpg'


import Post from './Post.js';
import Footer from './Footer';

const Posts = () => {
    const postsData = [{title: 'Ambitny plan',
    content: `Stwierdzilem miesiac temu, ze chce w te wakacje zaczac pracowac we frontendzie. W przeciagu nastepnych kilku dni chce zrobic pare projektow do portfolio, zeby wogole
                ktos przeczytal moje zgloszenie na staz, oraz cv. No i beda to pierwsze moje wakacje w ktorych bede sie codziennie uczyl pare-parenascie godzin dziennie :)  `,
    learningTime: '8 hours',
    date: '26:06:2021 20:11 CEST',
    img: img0,
    },
    {
        
        title: 'Problem z CORS POLICY',
        content: `Dzisiaj uczylem sie Reacta, react routera, flexboxa oraz Reacta z uzyciem API i podczas robienia apki pogodowej wszystko szlo dobrze,
                    dopoki nie wpadlem na pomysl uzycia dwoch API, w tym jednym z tych API bylo Google Places API. Niestety jeszcze wtedy nie wiedzialem
                    o istnieniu czegos takiego jak CORS POLICY. Probowalem z tym walczyc przez pare godzin czytajac rozne poradniki, jak np uzycie proxy
                    ktore mi niestety nie dzialalo (zapewne z powodu mojej niewiedzy) i przeczytalem tez rozwiazania z uzyciem backendu jednak jeszcze nie
                    znam nodejs ani niczego podobnego wiec nie chcialem sobie az tak mocno komplikowac i stwierdzilem ze uzyje jednego api ktore mi nic nie blokowalo. `,
        learningTime: '10 hours',
        date: '27:06:2021 23:21 CEST',
        img: img1,

    },
    {title: 'Tworzenie Bloga',
        content: `Dzisiaj postanowilem, ze stworze swojego Bloga o programowaniu w React'ie w ktorym bede codziennie opisywal to czego sie uczylem, ile sie uczylem, itd. Na razie 
                    blog bedzie bez backendu co jest troche uciazliwe bo bede musial dodawac posty nie za pomoca panelu admina czy czyms w tym stylu, ale bezposrednio
                    bede musial ingerowac w kod. Przy okazji powtarzalem sobie React Router, podstawy Reacta i probawalem jakos uruchomic mozg zeby to jakos wygladalo.
                    Wydaje mi sie, ze nie wyglada to najgorzej, strona bedzie ciagle rozwijana i jak skoncze pisac portfolio to zabieram sie za nauke backendu - Nodejs.`,
        learningTime: '11 hours',
        date: '28:06:2021 22:21 CEST',
        img: img2,
        
},
{title: 'Dalsza nauka i rozwoj bloga',
        content: `Rozwijalem dzisiaj bloga, i zaczalem uczyc sie mocniej gita, dowiedzialem sie jak hostowac strone z react routerem na ghpages
                    zaczalem sie uczyc hookow w Reactie, a dokladnie usestate, useeffect. Sluchalem jeszcze o usehistory i useparams, ale zbytnio nie sluchalem wiec za duzo
                    z tego nie wyciagnalem. W najblizszych dniach bede tworzyl wlasne CV i staral sie o staz przez okres wakacji we frontendzie. Wish me good luck `,
        learningTime: '8 hours',
        date: '29:06:2021 23:51 CEST',
        img: img3,
},

]
    const postData = [...postsData].reverse()
    const posts = postData.map(post => (
        <Post  {...post}/>

    ))
    return ( 
        <>
        <div className="posts">
        {posts}
        
        </div>
        
        </>
     );
}
 
export default Posts;