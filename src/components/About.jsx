import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            
        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Non sapiente placeat cumque culpa velit nisi saepe. 
            Ipsum, porro? Exercitationem commodi ullam, quaerat, nihil, 
            nesciunt iure illo ipsam cupiditate enim natus at quos delectus? 
            Dignissimos non eius nesciunt, tenetur sint assumenda necessitatibus totam, 
            adipisci, velit enim veritatis dicta ut facilis. Odio!
        </p>
        <br />

        <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Non sapiente placeat cumque culpa velit nisi saepe. 
            Ipsum, porro? Exercitationem commodi ullam, quaerat, nihil, 
            nesciunt iure illo ipsam cupiditate enim natus at quos delectus? 
            Dignissimos non eius nesciunt, tenetur sint assumenda necessitatibus totam, 
            adipisci, velit enim veritatis dicta ut facilis. Odio!
        </p>
        </div>
    </div>
  )
}

export default About