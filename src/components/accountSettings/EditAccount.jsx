import useStore from '../../store/useStore'
import { useLoginSchema } from '../../lib/Validation'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import AuthService from '../../service/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { signUserFailure, signUserStart } from '../../slice/auth';
import { IoClose } from 'react-icons/io5';

const EditAccount = ({ setEditAccount, setMainWindow }) => {

    const { isLoading, error } = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    const { language } = useStore()

    const { schemaProfile } = useLoginSchema()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schemaProfile),
    });

    const onSubmit = async (data) => {
        console.log('Form ma’lumotlari:', data);
    };

    return (
        <div className='relative w-[644px] h-[690px] py-10 px-[50px] rounded-[15px] shadow-md shadow-gray-400 bg-white flex flex-col items-center justify-around'>
            <button onClick={() => {
                setEditAccount(false)
                setMainWindow(true)
            }} className='absolute top-5 right-5'>
                <IoClose style={{ fontSize: "25px" }} />
            </button>
            <p className='font-medium text-[32px] leading-[38px]'>
                {language.YourProfile}
            </p>
            <p className='font-medium text-[18px] leading-[21px] w-full text-left'>
                {language.YourInformations}
            </p>
            {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error[0]}</p>}
            <div className='w-full flex justify-between gap-5'>
                <div className='w-full'>
                    <input {...register('firstName')} type='text' placeholder={language.FirstName}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                    {errors.firstName && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.firstName.message}</p>}
                    {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error.first_name}</p>}

                </div>

                <div className='w-full'>
                    <input {...register('lastName')} type='text' placeholder={language.LastName}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                    {errors.lastName && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.lastName.message}</p>}
                    {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error.last_name}</p>}

                </div>

            </div>
            <div className='w-full'>
                <input {...register('nickName')} type='text' placeholder={language.FullName}
                    className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                {errors.nickName && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.nickName.message}</p>}
                {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error.nic_number}</p>}
            </div>
            <div className='w-full'>
                <input {...register('mobileNumber')} type='text' placeholder="Telefon raqam"
                    className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                {errors.mobileNumber && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.mobileNumber.message}</p>}
                {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error.mobile_number}</p>}
            </div>
            <div className='w-full flex justify-between gap-5'>
                <div className='w-full'>
                    <input {...register('birthday')} type='date' placeholder={language.Birthday}
                        onChange={(e) => console.log(typeof e.target.value)}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                    {errors.birthday && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.birthday.message}</p>}
                    {error && <p className='h-5 text-[12px] text-red-500 text-left'>{error.birthday}</p>}
                </div>
                <div className='w-full'>
                    <select value={undefined} {...register('gender')}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none'>
                        <option value="male">
                            {language.Man}
                        </option>
                        <option value="female">
                            {language.Woman}
                        </option>
                    </select>
                    {errors.gender && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.gender.message}</p>}
                </div>
            </div>
            <p className='font-medium text-[18px] leading-[21px] w-full text-left'>
                {language.HomeAddress}
            </p>
            <div className='w-full'>
                <input  {...register('streed')} type='text' placeholder={language.StreetAddress}
                    className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                {errors.streed && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.streed.message}</p>}
            </div>
            <div className='w-full flex justify-between gap-5'>
                <div className='w-full'>
                    <input  {...register('city')} type='text' placeholder={language.City}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                    {errors.city && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.city.message}</p>}
                </div>
                <div className='w-full'>
                    <input  {...register('zipCode')} type='text' placeholder={language.ZipCode}
                        className='w-full h-[45px] rounded-[10px] bg-[#fff] backdrop-blur-[20px] border border-[#a1a1a1] px-3 outline-none' />
                    {errors.zipCode && <p className='h-5 text-[12px] text-red-500 text-left'>{errors.zipCode.message}</p>}
                </div>
            </div>
            <button onClick={handleSubmit(onSubmit)} disabled={isLoading}
                className='w-full h-[45px] rounded-[10px] bg-[#007bff] text-white font-semibold text-base leading-[19px]'>
                {language.Save}
            </button>
        </div>
    )
}

export default EditAccount