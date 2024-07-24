import React from 'react'
import Form from '../components/Form'

const register = () => {
  return (
    <Form route='api/user/register/' method='register' />
  )
}

export default register
