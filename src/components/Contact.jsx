import React from 'react'

const Contact = () => {
  return (
    <div className="flex flex-col justify-center relative z-10 items-center">
        <div className="relative flex justify-between flex-col items-center w-full max-w-7xl pb-20 gap-3 ">
        <div className="text-4xl text-center font-semibold mt-5 md:mt-3 md:text-3xl text-slate-100">Contact</div>
        <div className="text-lg text-center max-w-xl text-[#838894]">Feel free to reach out to me for any questions or opportunities!</div>
        <form  className="w-[95%] max-w-xl flex flex-col p-8 rounded-2xl mt-7 gap-3 shadow-md shadow-purple-700">
            <h1 className="text-2xl mb-2 font-semibold text-slate-100">Email Me 🚀</h1>
            <input className="flex-1 bg-transparent border border-slate-400 outline-none text-lg text-slate-100 rounded-xl py-3 px-4 focus:border-purple-600" type="text" placeholder='Your Name' />
            <input className="flex-1 bg-transparent border border-slate-400 outline-none text-lg text-slate-100 rounded-xl py-3 px-4 focus:border-purple-600" type="email" placeholder='Your Email' />
            <input className="flex-1 bg-transparent border border-slate-400 outline-none text-lg text-slate-100 rounded-xl py-3 px-4 focus:border-purple-600" type="text" placeholder='Subject' />
            <textarea name="subject" placeholder='Message...' className='flex-1 bg-transparent border border-slate-400 outline-none text-lg text-slate-100 rounded-xl py-3 px-4 focus:border-purple-600' id="" rows="4"></textarea>
            <input className="w-full text-center py-2 rounded-2xl border-none cursor-pointer text-2xl text-slate-100 font-semibold bg-gradient-to-br from-[#8400ff] to-[#e600ff] " type="submit" value="Send" />
        </form>
        </div>
    </div>
  )
}

export default Contact