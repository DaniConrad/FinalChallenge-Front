import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'
import { postLogin } from '../services/routes';

export const useForm = (initialForm) => {

  const { setUser, setToken } = useContext(UserContext) 

    const [error, setError] = useState(false)
    const [values, setValues] = useState(initialForm)
    const navigate = useNavigate()



    const handleInputChange = (e) =>{
        setValues({
          ...values, [e.target.name]: e.target.value
        })
      }

    const handleValidate = (e) =>{
        e.preventDefault()

        postLogin(values)
          .then(function (response) {
            if(response.data.body) {
              setToken(response.data.token)
              setUser(response.data.body)
              navigate('/products')
            }else{
              console.log(response.data);
            }
          })
          .catch(function (error) {
            if (error.response.data.user == false) return setError(true)
          });

      }
  return {
        handleInputChange,
        handleValidate,
        values,
        setValues,
        error
    }
  
}
