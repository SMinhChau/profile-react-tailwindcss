import HomeContent from '@/component/home-content';

import { useForm } from 'react-hook-form';
import './styled.css';

import useNotification from '@/hook/useNotification';
import { IoArrowBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

const FormContact = 'form-acc';

const AddAccountWeb = () => {
  const { success, error } = useNotification() || { success: () => {}, error: () => {} };

  const {
    register,
    handleSubmit,

    reset,
  } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const navigation = useNavigate();

  const onSubmit = async (data: FormData) => {
    handleCreate(data);
  };

  const handleCreate = async (data: FormData) => {
    const params = {
      ...data,
      redirectPath: `https://lansongxanh.1vote.vn/xac-nhan-tai-khoan?registerStatus=1&email=${data.email}`,
    };

    await callApi(params.email, params.password);
  };

  // Hàm để gọi API
  async function callApi(emailUser: string, password: string) {
    const email = emailUser;
    const redirectPath = `https://lansongxanh.1vote.vn/xac-nhan-tai-khoan?registerStatus=1&email=${encodeURIComponent(
      email
    )}`;

    const body = {
      email: email,
      password: password,
      redirectPath: redirectPath,
    };

    fetch('https://eventista-platform-api.1vote.vn/v1/client/auth/register', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'accept-language': 'vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,fr-FR;q=0.6,fr;q=0.5',
        'content-type': 'application/json',
        lang: 'vi',
        origin: 'https://lansongxanh.1vote.vn',
        referer: 'https://lansongxanh.1vote.vn/',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      },
      body: JSON.stringify(body),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response.json();
      })
      .then(data => {
        success(`${data?.message}`, 1000);
      })
      .catch(() => error(`Lỗi tạo! Vui lòng thử lại!`, 1000));
  }

  const resetFn = () => {
    reset({
      email: '', // Giá trị mặc định mới hoặc để trống nếu không cần
      password: '',
    });
  };
  return (
    <div className="relative">
      <img
        className="absolute opacity-[0.1] object-contain w-full h-full"
        src="https://lansongxanh.1vote.vn/_next/image?url=https%3A%2F%2Fmedia-platform.1vote.vn%2Fthumbnails%2Fuploads%2FoYbuW%2F1733681700645.jpg&w=1920&q=75"
      />
      <HomeContent id="info">
        <div className="w-full h-full flex justify-center items-center flex-col">
          <div className="w-[90%]">
            <span className="content-back" onClick={() => navigation('/')}>
              <IoArrowBackSharp />
              <span>Quay lại</span>
            </span>
          </div>
          <form
            className="w-full lg:w-[45%] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative"
            onSubmit={handleSubmit(onSubmit)}
            id={FormContact}
          >
            <a
              target="_blank"
              href="https://lansongxanh.1vote.vn/de-cu/namcasirapperduocyeuthich/son-tung-m-tp-046"
            >
              <h4 className="tag">
                Đề cử Giải thưởng Làn Sóng Xanh 2024: <span>Sơn Tùng M-TP</span>
              </h4>
            </a>
            <h3 className="title">Tạo tài khoản thông qua website online </h3>
            <div className="content-block pt-1">
              <div className="content-card">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Nhập Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-y-[20px]
            py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline bg-color_white"
                  id="email"
                  type="text"
                  placeholder="Email (bỏ @gmail.com)"
                  {...register('email', { required: true })}
                />
              </div>
              <div className="content-card">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Nhập Mật khẩu
                </label>
                <input
                  className="shadow appearance-none border rounded w-full p-y-[20px]
            py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline bg-color_white"
                  id="password"
                  type="text"
                  placeholder="Mật khẩu"
                  {...register('password', { required: true })}
                />
              </div>
            </div>
            <div className="wrapper-button ">
              <button
                onClick={() => resetFn()}
                className="bg-[#78716c] text-[#dcfce7] hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Reset dữ liệu
              </button>
              <button form={FormContact} className="rounded button-submit" type="submit">
                Tạo
              </button>
            </div>
          </form>
        </div>

        {/* {isLoading && <LoadingScreen />} */}
      </HomeContent>

      <p className="italic relative bottom-6"> Copyright @ 2024 by Chau Nguyen </p>
    </div>
  );
};

export default AddAccountWeb;
