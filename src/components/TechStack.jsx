import javaImage from '../assets/java.png';
import pythonImage from '../assets/python.png';
import cImage from '../assets/c.png';
import cppImage from '../assets/cpp.png';
import javascriptImage from '../assets/javascript.png';
import cssImage from '../assets/css.png';
import tailwindImage from '../assets/tailwind.png';
import htmlImage from '../assets/html.png';
import djangoImage from '../assets/django.png';
import reactImage from '../assets/react.png';
import "./TechStack.css"

const LangTech = () => {
  const technologies = [
    {
      id: 1,
      src: javaImage,
      title: 'Java',
      style: 'shadow-blue-500',
    },
    {
      id: 2,
      src: pythonImage,
      title: 'Python',
      style: 'shadow-yellow-500',
    },
    {
      id: 3,
      src: cImage,
      title: 'C',
      style: 'shadow-blue-500',
    },
    {
      id: 4,
      src: cppImage,
      title: 'C++',
      style: 'shadow-blue-500',
    },
    {
      id: 5,
      src: javascriptImage,
      title: 'Javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 6,
      src: htmlImage,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 7,
      src: cssImage,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 8,
      src: tailwindImage,
      title: 'Tailwind',
      style: 'shadow-sky-500',
    },
    {
      id: 9,
      src: djangoImage,
      title: 'Django',
      style: 'shadow-green-500',
    },
    {
      id: 10,
      src: reactImage,
      title: 'React',
      style: 'shadow-blue-500',
    },
  ];

  return (
    <techstack>
      <div className="title">
        <h1 className="text-2xl sm:text-4xl font-bold border-b-4 border-gray-500">Tech Stack</h1>
      </div>

      <div className="content">
      <div name='techstack' className='flex flex-col items-center text-white'>
      <div className='max-w-screen-lg p-4 pa-8 w-full'>
        <div className='mb-8'>
          <p className='py-6 text-center'>These are the languages & technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {technologies.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} flex flex-col justify-between`}>
              <div className="flex justify-center items-center">
                <img src={src} alt={title} className='w-20' />
              </div>
              <div className="text-center">
                <p className='mt-auto mb-4'>{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
    </techstack>
  );
}

export default LangTech;