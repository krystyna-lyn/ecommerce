
const Button = ({ label, iconUrl }) => {
  return (
    <button
      className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg
      leading-none border-yellow-400 rounded-full"
    >
      {label}
      <img
        src={iconUrl}
        alt='arrow right icon'
        className='ml-2 rounded-full bg-white w-5 h-5'
      />
    </button>
  )
}

export default Button