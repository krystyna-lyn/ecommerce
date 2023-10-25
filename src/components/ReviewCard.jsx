

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div >
        <img src={imgURL} alt={customerName} width={240} height={240}
          className='rounded-full object-cover w-[120px] h-[120px]' />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
        {customerName}
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        {rating}
      </p>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        {feedback}
      </p>
    </div>
  )
}

export default ReviewCard