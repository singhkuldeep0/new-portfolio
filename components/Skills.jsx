import React from 'react'
import Heading from './Heading'
import { GlobeAltIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { Fade, Zoom } from 'react-awesome-reveal'
import { motion } from 'framer-motion'

const Skills = () => {

    const color = useSelector(state => state.color)
    const background = useSelector(state => state.background)

    const rootbox = {
        hidden :{
            opacity:0
        },
        visible :{
            opacity:1,
            transition:{ duration: 0.5, delay:0.4 , type: "tween" }
        }
    }


    return (
        <motion.div
        variants={rootbox}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }}
         id="Skills" className="min-h-[90vh] py-10">
                <Heading Heading="Skills" text={"Tech Stack and Skills"}/>
        </motion.div>
    )
}

export default Skills
