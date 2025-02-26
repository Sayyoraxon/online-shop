import React from 'react'
import email from "../../assets/image/tellEmail.png"
import useStore from '../../store/useStore';
import { useLoginSchema } from '../../lib/Validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const ForgetPasswordS1 = ({ setStep }) => {

    const { language } = useStore();

    const { schemaForgetPassword } = useLoginSchema()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaForgetPassword), // Zod resolverni ulash
    });

    const onSubmit = (data) => {
        console.log('Form ma’lumotlari:', data);
        setStep(2)
    };

    return (

        <div className='sm:w-[412px] w-full text-center text-[36px] leading-[44px] px-3'>
            <p className='font-semibold'>
                {language.PlaceholderEmail}
            </p>
            <img className='mx-auto mt-[30px]' src={email} alt="email" width={181} height={162} />
            <p className='mt-[30px] text-base leading-[19px]'>
                {language.ForgetPasswordSubtitle}
            </p>
            <input className='mt-[30px] p-[14px] w-full h-[45px] rounded-[10px] border border-[#a1a1a1] text-[14px] outline-none backdrop-blur-[20px]'
                {...register('email')} type='text' placeholder={language.PlaceholderEmail} />
            {errors.email && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.email.message}</p>}

            <button onClick={handleSubmit(onSubmit)}
                className='mt-[30px] rounded-[10px] w-full h-[45px] bg-[#007bff] text-white text-base leading-[19px] font-semibold hover:opacity-90'>
                {language.Continue}
            </button>
        </div>
    )
}

export default ForgetPasswordS1