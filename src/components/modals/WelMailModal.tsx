'use client';

import React,{Fragment, useState, FormEvent} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { addUserEmailtoJob } from '@/lib/actions';


interface Props {
  jobId: string,
}

const WelComeMailModal = ({jobId}: Props) => {


  let [isOpen, setIsOpen] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [email, setEmail] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await addUserEmailtoJob(jobId, email);

    setIsSubmitting(false);
    setEmail('');
    closeModal();
  }

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  return (
    <>
      <button type='button' onClick={openModal} className='font-poppins h-[40px] w-[120px]  text-jblack text-[12px] font-medium rounded-lg hover:text-jblack border-2 border-jsgrey hover:bg-jsgrey'>🔔  Get Notified</button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className='fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-60 font-poppins'>
        <div className='min-h-screen px-0 text-center'>
            {/* <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
                <Dialog.Overlay className='fixed inset-0'/>
            </Transition.Child> */}

            <span className='inline-block h-screen align-middle' aria-hidden="true"/>


            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
                <div className='p-6  bg-white inline-block w-full max-w-md my-8 overflow-hidden text-left align-middle transition-all transform  shadow-xl rounded-2xl'>
                    <div className='flex flex-col'>
                        <div className='flex justify-between'>
                            <div className='p-3 border border-gray-200 rounded-[10px]'>
                                <p className='text-jgreen text-[12px] font-semibold'>Jobbo</p>
                            </div>
                            <Image
                            src="https://www.svgrepo.com/show/487206/close-sm.svg"
                            alt="close"
                            width={24}
                            height={24}
                            className='cursor-pointer'
                            onClick={closeModal}/>
                        </div>
                        <h4 className='text-jblack font-poppins text-lg leading-[24px] font-semibold mt-4'>Stay updated with jobs alerts right in your inbox</h4>
                        <p className='text-gray-600 mt-2 font-poppins font-light text-[12px]'>Never miss a bargain with our timely alerts!</p>
                      </div>

                    <form className='flex flex-col mt-5' onSubmit={handleSubmit}>
                        <label htmlFor="email" className='text-sm font-medium text-gray-700'>Email address</label>
                        <div className='px-5 py-3 mt-3 flex items-center gap-2 border border-gray-300 rounded-[27px]'>
                            <Image
                            src="/assets/icons/mail.svg"
                            alt="mail"
                            width={18}
                            height={18}/>

                            <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="gmail.com"
                            className='flex-1 pl-1 border-none text-gray-500 text-[12px] font-normal focus:outline-none border border-gray-300 rounded-[27px] shadow-xs' />
                        </div>

                        <button type="submit" className='px-5 py-3 text-jwhite text-base font-medium border border-secondary bg-jblack rounded-lg mt-8'>{isSubmitting ? 'Loading' : 'Submit'}</button>
                    </form>
                </div>
            </Transition.Child>
        </div>
    </Dialog>
    </Transition> 
    </>
  )
}

export default WelComeMailModal