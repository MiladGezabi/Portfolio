import '../components-style/Skills.css'
import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { skills } from '../sub-components/skill.js';

function Skills() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()

    useEffect(()=> {
        if(isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

  

    return (
        <section className='skills'>
            <h2 className='skill-heading'> Skills </h2>
            <motion.div ref={ref} className='skills-container'
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, delay: 0.25}}
            >
                { skills.map(skill => (
                    <div key={skill.skill} className='skill-box'> 
                    <img src={skill.logo} alt={skill.skill} />
                    <span> {skill.skill} </span>
                    </div>
                )) }
            </motion.div>

        </section>
    )
}

export default Skills

{/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}