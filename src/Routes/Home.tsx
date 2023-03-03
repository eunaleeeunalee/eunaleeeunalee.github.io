import { useLocation, useHistory, useRouteMatch, Link } from "react-router-dom";
import styled from "styled-components";
import { motion, LayoutGroup } from "framer-motion";
import { useState, useEffect } from "react";
import Item from "./About_text"

const Mobile = 699;

const Introo = styled(motion.div)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #f7f7f7;
  display:flex;
  line-height: 7vh;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  text-align: center;

  h1{
    padding-top: 0vw;
  }
`

const Wrapper = styled.div`
    width: 71vw;
    margin: 4vh 1vw 3vh 25vw;
    @media only screen and (max-width: ${Mobile}px){
      width: 100vw;
      position: relative;
      margin: 0;
    }
`
const Para = styled.div`
    padding-bottom: 2.4vh;
    padding-left: 2.5vw;
    max-width: 45vw;
    &:last-child{
        padding-bottom: 0;
    }
    p{
        padding-top: 1.8vh;
        padding-left: 0.5vw;
        max-width: 35vw;
    }
    a{
      text-decoration: underline;
    }

    @media only screen and (max-width: ${Mobile}px){
      max-width: 98vw;
      padding-bottom: 1vh;
      p{
        max-width: 98vw;
      }
    }
`

const Title = styled.div`
  font-size: 2.4vw;
  height: 5vh;
  @media only screen and (max-width: ${Mobile}px){
    font-size: 24px;
  }
`

const Img = styled.img`
    width: 70vw;
    border-radius: 2vw;
    margin: 1vh 0 2vh 2.5vw;
    @media only screen and (max-width: ${Mobile}px){
      width: 95vw;
      margin: 1.5vh 0 0vh 2.5vw;
    }
`

const Git = styled.img`
  height: 3vh;
  @media only screen and (max-width: ${Mobile}px){
    padding-top: 4px;
  }
`

const Wrapper2 =styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  width: 25vw;
  border-right: 0.15vw solid #424242;
  height: 96vh;
  margin-top: 2vh;

  @media only screen and (max-width: ${Mobile}px){
    width: 100vw;
    height: 66vh;
    position: relative;
    border-right: 0vw solid #424242;
    .nomobile{
      display: none;
    }
    h1{
      margin-bottom: 3vw;
    }
  }
`;

const First = styled.div`
  padding: 1.5vh 2vw 1.5vh 2vw ;
  p{
    padding: 1vh 0.5vw 1vh 0.5vw;
  }
  @media only screen and (max-width: ${Mobile}px){
    text-align: center;
    h1{
      margin-bottom: 4vw;
    }
  }
`

const Tete = styled(motion.img)`
  width: 5vw;
  margin-bottom: -0.5vh;
  margin-left: -0.5vw;
  @media only screen and (max-width: ${Mobile}px){
    width: 15vw;
    margin: 1vh 0;
  }
`

const Tete2 = styled(motion.img)`
  width: 15vw;
  margin-top: -5vh;
  margin-bottom: -5vh;
  margin-left: -1vw;
`

const Container = styled(motion.div)`
text-align:center;
font-size: 1.2vw;
`
const Project = styled(motion.div)`
  @media only screen and (max-width: ${Mobile}px){
    margin-bottom: 1vh;
  }
`


function Home(){
  const location = useLocation();
  console.log(location.pathname);
  
  const [tete, setTete] = useState('https://euna-lee.com/img/tete.png');
  const onMouseOver = () => {
      setTete('https://euna-lee.com/img/gif.gif');
  }

  const onMouseOut = () => {
      setTete('https://euna-lee.com/img/tete.png');
  }

  const [move, setMove] = useState(true);
  
  useEffect(()=> {
    const timer = setTimeout(() => {setMove(false)}, 3500)
  })
    return(
    <>
    {move === true && location.pathname === "/" ? <Intro/>:
    <motion.div>
    <Wrapper2>
      <First>
        <Tete 
            layoutId="tete"
            key="tete"
            src={tete} 
            />
        <motion.h1 layoutId="name">EunaLee</motion.h1>
        <motion.p className="nomobile" layoutId="job" style={{paddingTop:0}}>web developer & graphic designer</motion.p>
        </First>
        <hr/>
        <First className="nomobile">
          <p>Hello! Since 2018, I have been developing websites for artists and art projects, with a focus on creating simple and playful web environments.</p>
        </First>
        <hr className="nomobile"/>
        <LayoutGroup>
          <Container>
            <motion.div
              onMouseOver={onMouseOver} 
              onMouseOut={onMouseOut} 
              layout 
              transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}>
              {items.map(item => (
                <Item key={item.id} item={item} />
              ))}
            </motion.div>
          </Container>
        </LayoutGroup>
        <First className="nomobile">
          © 2023 Euna Lee. All Rights Reserved.
        </First>
    </Wrapper2>
    <Wrapper>
      {location.pathname === "/"? 
        <Contac/>
      :null}
      {location.pathname === "/njac"? 
        <Njac/>
      :null}
      {location.pathname === "/nf"? 
        <Nf/>
      :null}
      {location.pathname === "/mandu"? 
        <Mandu/>
      :null}
      {location.pathname === "/kip"? 
        <Kip/>
      :null}
      {location.pathname === "/sc"? 
        <Sc/>
      :null}
      {location.pathname === "/ke"? 
        <Ke/>
      :null}
      {location.pathname === "/mp"? 
        <Mp/>
      :null}
      {location.pathname === "/contact"? 
        <Contac/>
      :null}
    </Wrapper>
    </motion.div>}
    </>
    )
}


const Intro = () => {
  return(
    <Introo
      initial={{opacity:1}}
      animate={{opacity:0}}
      transition={{ opacity: {delay:2.5, duration: 1} }}>
      <Tete2 
            layoutId="tete"
            key="tete"
            src="https://euna-lee.com/img/tete.png"
            initial={{opacity:0}}
            animate={{ opacity: 1, y: [0,6,0,6,0,6,0] }}
            transition={{ 
              y:{type: "spring", stiffness: 100, duration: 3 },
              opacity: {delay:0.1, duration: 1}
              }}/>
      <br/>
      <motion.h1 
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ delay:0.5, duration: 1 }}>
        EunaLee</motion.h1>
      <motion.p 
        initial={{opacity:0}}
        animate={{opacity: 1}}
        transition={{ delay:0.9, duration: 1 }}
        >Web developer & Graphic designer</motion.p>
    </Introo>
  )
}

const Njac = () => {
  return(
    <Project>
    <Para>
        <Title>Not Just A Collective (2023) <a href="https://eunaleeeunalee.github.io/njac/" target="_blank"><Git src="https://euna-lee.com/skill/home.png"/></a> <a href="https://github.com/eunaleeeunalee/njac" target="_blank"><Git src="https://euna-lee.com/skill/github.png"/></a></Title> 
        <p>
        I designed and developed a website for an artist group, Not Just A Collective.<br/>
        The website is structured into three pages, an information page that provides a detailed overview of NJAC, an event page featuring previous and upcoming events organized by the group, and an open call archive page showcasing a curated selection of NJAC's artist books.
        </p>
    </Para>
    <Img src="https://euna-lee.com/skill/nf.png"/>
    <Img src="https://euna-lee.com/skill/nf2.png"/>
    <Img src="https://euna-lee.com/skill/nf3.png"/>
    </Project>
  )
}



const Nf = () => {
  return(
    <Project>
    <Para>
        <Title>Netflix Clone (2023) <a href="https://eunaleeeunalee.github.io/reactflix/" target="_blank"><Git src="https://euna-lee.com/skill/home.png"/></a> <a href="https://github.com/eunaleeeunalee/reactflix" target="_blank"><Git src="https://euna-lee.com/skill/github.png"/></a></Title> 
        <p>
        As a way to practice my skills in React JS and TypeScript, I created a website that uses the Movie DB API to provide up-to-date information on movies and TV shows. The website features a slide form on the first page with thumbnail images, and detailed information on each title is displayed in a modal window for a user-friendly browsing experience.
        </p>
    </Para>
    <Img src="https://euna-lee.com/skill/nf.png"/>
    <Img src="https://euna-lee.com/skill/nf2.png"/>
    <Img src="https://euna-lee.com/skill/nf3.png"/>
    </Project>
  )
}

const Mandu = () => {
  return(
    <Project>
      <Para>
        <Title>Mandu (2022) <a href="https://mandu.eunaleeeunalee.repl.co/" target="_blank"><Git src="https://euna-lee.com/skill/home.png"/></a></Title> 
        <p>
        This website offers personalized Korean dumpling (mandu) recipes based on user preferences gathered from a taste survey. Depending on the user's choices, Python imports a different database from a JSON file.
        </p>  
      </Para>
      <Img src="https://euna-lee.com/skill/md.png"/>
      <Img src="https://euna-lee.com/skill/md2.png"/>
      <Img src="https://euna-lee.com/skill/md3.png"/>
    </Project>
  )
}

const Kip = () => {
  return(
    <Project>
      <Para>
        <Title>Kip Your Job Search (2022) <a href="https://mandu.eunaleeeunalee.repl.co/" target="_blank"><Git src="https://euna-lee.com/skill/home.png"/></a></Title> 
        <p>
        I developed this website to help coders in finding remote jobs based on their preferred programming language. The website scrapes job announcements from "We Work Remotely" and "Remote OK. Users can click directly on the post to learn more or download the search results in CSV format for further analysis.
        </p>  
      </Para>
      <Img src="https://euna-lee.com/skill/kip.png"/>
      <Img src="https://euna-lee.com/skill/kip2.png"/>
    </Project>
  )
}

const Sc = () => {
  return(
    <Project>
      <Para>
        <Title>Strolling Cat (2021) <a href="https://hub.xpub.nl/sandbot/PrototypingTimes/sketches/Euna/%F0%9F%8E%AE%20Strolling_cat.html" target="_blank"><Git src="https://euna-lee.com/skill/home.png"/></a></Title> 
        <p>
        This is a Tic80-based mini-game that allows players to experience uncomfortable catcalling language that I and my female friends have encountered.
        </p>  
      </Para>
      <Img src="https://euna-lee.com/skill/st.png"/>
      <Img src="https://euna-lee.com/skill/st2.png"/>
      <Img src="https://euna-lee.com/skill/st3.png"/>
      <Img src="https://euna-lee.com/skill/st4.png"/>
    </Project>
  )
}

const Ke = () => {
  return(
    <Project>
      <Para>
        <Title>K-Eldest Girl (2021) <a href="https://quarry0110.github.io/keldestgirl/" target="_blank"><Git src="https://euna-lee.com/skill/home.png"/></a> <a href="https://github.com/eunaleeeunalee/keldestgirl" target="_blank"><Git src="https://euna-lee.com/skill/github.png"/></a></Title> 
        <p>
        This website features anecdotes about the experiences of Korean eldest daughters within their families. These stories are presented in various forms, such as voice recordings, essays, and games. Users can navigate different experiences through hyperlinked common words.
        </p>  
      </Para>
      <Img src="https://euna-lee.com/skill/ke.png"/>
      <Img src="https://euna-lee.com/skill/ke2.png"/>
      <Img src="https://euna-lee.com/skill/ke3.png"/>
    </Project>
  )
}

const Mp = () => {
  return(
    <Project>
    <Para>
        <Title>Mayoyo Publishing (2020) <a href="https://mayoyopublishing.github.io/" target="_blank"><Git src="https://euna-lee.com/skill/home.png"/></a> <a href="https://github.com/eunaleeeunalee/mayoyo" target="_blank"><Git src="https://euna-lee.com/skill/github.png"/></a></Title> 
        <p>
        This website is an archive of Mayoyo Publishing, an independent Korean art book publisher group.
        </p>
    </Para>
    <Img src="https://euna-lee.com/skill/mp.png"/>
    <Img src="https://euna-lee.com/skill/mp2.png"/>
    <Img src="https://euna-lee.com/skill/mp3.png"/>
    </Project>
  )
}

const Contac = () => {
  return(
    <Project>
    <Para>
        <Title>Contact</Title> 
        <p>
          If you want to know more about me, please check my <a href="https://euna-lee.com/skill/cv.pdf" target="_blank">CV</a>.
        </p>
        <p>
          Email:  <a href="mailto:eunaleeeunalee@gmail.com">eunaleeeunalee@gmail.com</a>
        </p>
        <p>
          Github: <a href="https://github.com/eunaleeeunalee">https://github.com/eunaleeeunalee</a>
        </p>
        <p>
          Instagram: <a href="https://www.instagram.com/eeuunnaaa/">https://www.instagram.com/eeuunnaaa/</a>
        </p>
    </Para>
    </Project>
  )
}




const items = [
  {
      id: "1",
      title: "Info",
      subtitle: "React, Typescript",
  },
  {
    id: "2",
    title: "Work",
    subtitle: "React, Typescript",
  }
]

export default Home;
