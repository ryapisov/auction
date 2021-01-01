import React from 'react'
import { Form, Input, Button, Checkbox, Typography } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const { Title } = Typography

const Forgot = (props) => {
  const [isPhone, setIsPhone] = React.useState(false)


  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div className="ant-form-auth">
      <Title level={2}>Восстановить пароль</Title>
    
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >

    { isPhone ? 
      <Form.Item
        name={['user', 'email']}
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input
          size="large"
          placeholder="+7 Введите номер телефона" 
        />
      </Form.Item>
      :
      <Form.Item
      name={['user', 'email']}
      rules={[
        {
          type: 'email',
        },
      ]}
      > 
      <Input
        size="large"
        placeholder="Введите email" 
      />
       </Form.Item>

      }    
     
      <Form.Item>
        или восстановить с помощью&nbsp;&nbsp;
        <span 
          className="login-form-forgot" 
          onClick={()=>setIsPhone(!isPhone)}
        >{isPhone ? 'email' : 'телефона'}? 
        </span>
      </Form.Item>

      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit" 
          className="login-form-button ant-btn-purple"
        >Отправить
        </Button>
        &nbsp;&nbsp;или&nbsp;&nbsp;
        <span 
          className="login-form-new-user"
          onClick={()=>props.onClick('auth')}
        >вернуться назад
        </span>
      </Form.Item>
    </Form>
    </div>
  )
}

export default Forgot