import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Mobile = 699;

const ItemWrap = styled(motion.div)`
    cursor: pointer;
    display:flex;
    align-items:center;
    justify-content:space-between;
    overflow: hidden;
    // padding: 0 ;
    

    span{
        opacity:0;   
        transition: all 0.5s ease-out;
        margin-right: 0;
    }

    &:hover{
        text-decoration: underline;
        span{
            opacity:1;
        }
    }
`

const SubWrap = styled(motion.div)`
    height:auto;
    width:100%;
    display:flex;
    flex-direction: column;
    font-weight: 400;
    padding: 0 2.5vw 3vh 2.5vw;
    text-align: left;
`

const H3left = styled(motion.h3)`
    float: left;
`

const Sibu = styled(motion.p)`
    display: inline-block;
`

const Menu = styled(motion.div)`
    @media only screen and (max-width: ${Mobile}px){
        font-size: 16px;
        line-height: 24px;
    }
`


interface ItemProps{
    item: titleProps
}

interface titleProps{
    id: string,
    title: string,
    subtitle: string,
}

const Item = ({ item }: ItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const location = useLocation();

    return (
        <>
            <ItemWrap 
                onClick={toggleOpen} 
                layout 
                transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                whileHover={{x:5}} 
                key={item.title}>
                <H3left>
                {item.id === "1"? 
                <><Link to="/contact">{item.title}<span> ▹</span></Link></>
                :<>{item.title}<span> ▹</span></>}
                </H3left>
            </ItemWrap>

            {location.pathname === "/contact"?
            <AnimatePresence initial={false} >
                {isOpen && item.id==="2"? 
                    <SubWrap>
                    <motion.div layout
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        <Hello/>
                    </motion.div>
                </SubWrap>:null}
            </AnimatePresence>:
            <AnimatePresence initial={false} >
                {!isOpen && item.id==="2"? 
                    <SubWrap>
                    <motion.div layout
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    >
                        <Hello/>
                    </motion.div>
                </SubWrap>:null}
            </AnimatePresence>}
            {/* {item.id==="3" ?null:<hr/>} */}
            <hr/>
        </>
    )
}


const Hello = () => {
    const location = useLocation();
    return(
        <>
            <Menu>
                {location.pathname === "/njac"? 
                    <Link style={{fontWeight:"bold"}}to="/njac">
                        <motion.span layoutId="dot">· </motion.span> 
                        Not Just a Collective</Link>
                    :<Sibu
                        transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                        whileHover={{x:5}}>
                    <Link to="/njac">Not Just a Collective</Link> </Sibu>}
                <br/>

                {location.pathname === "/nf"? 
                    <Link style={{fontWeight:"bold"}}to="/nf">
                        <motion.span layoutId="dot">· </motion.span> 
                        Netflix Clone</Link>
                    :<Sibu
                    transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    whileHover={{x:5}}>
                        <Link to="/nf">Netflix Clone</Link></Sibu>}
                <br/>

                {location.pathname === "/mandu"? 
                    <Link style={{fontWeight:"bold"}}to="/mandu">
                        <motion.span layoutId="dot">· </motion.span> 
                        Mandu</Link>
                    :<Sibu
                    transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    whileHover={{x:5}}>
                    <Link to="/mandu">Mandu</Link></Sibu>}
                <br/>

                {location.pathname === "/kip"? 
                    <Link style={{fontWeight:"bold"}}to="/kip">
                        <motion.span layoutId="dot">· </motion.span> 
                        Kip Your Job Search</Link>
                    :<Sibu
                    transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    whileHover={{x:5}}><Link to="/kip">Kip Your Job Search</Link></Sibu>}
                <br/>
                    
                {location.pathname === "/sc"? 
                    <Link style={{fontWeight:"bold"}}to="/sc">
                        <motion.span layoutId="dot">· </motion.span> 
                        Strolling Cat</Link>
                    :<Sibu
                    transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    whileHover={{x:5}}><Link to="/sc">Strolling Cat</Link></Sibu>}
                <br/>

                {location.pathname === "/ke"? 
                    <Link style={{fontWeight:"bold"}}to="/ke">
                        <motion.span layoutId="dot">· </motion.span> 
                        K-Eldest Girl</Link>
                    :<Sibu
                    transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    whileHover={{x:5}}><Link to="/ke">K-Eldest Girl</Link></Sibu>}
                <br/>

                {location.pathname === "/mp"? 
                    <Link style={{fontWeight:"bold"}}to="/mp">
                        <motion.span layoutId="dot">· </motion.span> 
                        Mayoyo Publishing</Link>
                    :<Sibu
                    transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
                    whileHover={{x:5}}><Link to="/mp">Mayoyo Publishing</Link></Sibu>}
            </Menu>
        </>
    )
}


export default Item; 