import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


export default function Login() {
    const [formData, setFormData] = useState({username: '', password:''})
    const [errorMsg, setErrorMsg] = useState({showErrorMsg: false, errorMsg: ""})
    const [showpassword , setShowPassword] = useState(false)
    const navigate = useNavigate();

    const handleShowPassword = () => {
      setShowPassword(!showpassword)
    }

    const handleChange = e => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submitForm = e => {
        e.preventDefault()

        const {username, password} = formData

        if(username === "Dhilip" && password === "12345"){
            navigate("/dashboard")
        } else {
            setErrorMsg({showErrorMsg: true, errorMsg: "userName and password Invaild"})
        }

    }
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login Form
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={submitForm} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  autoComplete="username"
                  onChange={handleChange}
                  className="block w-full p-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <p className="font-semibold text-indigo-600 hover:text-indigo-500">
                    <input type='checkbox' id='showpassword' className='pr-2' onChange={handleShowPassword}/>
                    <label htmlFor='showpassword' className="pl-2 text-sm font-medium leading-6 text-gray-900">Show Password</label>
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type={showpassword ? "text": "password"}
                  required
                  autoComplete="current-password"
                  onChange={handleChange}
                  className="block w-full rounded-md p-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
              {errorMsg.showErrorMsg && <p className='text-sm font-medium leading-6 text-red-900'>{errorMsg.errorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
      </>
    )
  }
  