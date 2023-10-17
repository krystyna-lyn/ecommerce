import Button from '../components/Button'
import { arrowRight } from '../assets/icons/index'
import { statistics } from '../constants/index'
import {bigShoe1} from '../assets/images/index'

const Hero = () => {
  return (
    <section
      id='home'
      className='flex w-full xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >

      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer collections
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='gold-color font-thin inline-block mt-3'>Special</span> Prices
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish simplicity with our curated collection of pristine white garments.
        </p>

        <Button label='Shop now' iconUrl={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
          </div>
          ))}
        </div>

        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
          <img
            src={bigShoe1}
            alt='shoe colletion'
            width={610}
            height={502}
            className='object-contain relative z-10'
          />

       </div>

      </div>

    </section>
  )
}

export default Hero