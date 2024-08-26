import React from 'react'
import {motion} from 'framer-motion'
import { Tilt } from 'react-tilt'
import {styles} from '../style'
import { services } from '../constants'
import { fadeIn, textVariant} from '../utils/motion'
import {SectionWrapper} from '../hoc'

const ServiceCard = ({title , index , icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
    <motion.div variants={fadeIn('right' , 'spring' , 0.5 * index , 0.74)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
    <div options={{max:45 , scale:1 , speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>

      <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
      <h3 className='text-white text-[20px] font-bold'>{title}</h3>
    </div>
    </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview..</h2>
    </motion.div>
    
    <motion.p variants={fadeIn("", "" , 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. 
      Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.
      В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов,
      используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без
      заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в 
      новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и,
      в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах 
      которых используется Lorem Ipsum
      </motion.p>
    
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service , index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About ,'about')