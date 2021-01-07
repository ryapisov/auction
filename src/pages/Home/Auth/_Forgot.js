import React from 'react'
import styled from 'styled-components'
import { Form, Input, Button, Typography } from 'antd'

const { Title } = Typography

const Link = styled.span`
  color: rgb(18, 179, 24);
  &:hover{
    color: rgba(18, 179, 24, 0.5);
    cursor: pointer;
  }
`

const Btn = styled(Button)`
  background-color: rgb(113, 97, 174);
  border: 1px solid rgb(145, 142, 217);
  color: rgb(255, 255, 255);
  &:hover{
    background-color: rgb(145, 142, 217);
    border: 1px solid rgb(113, 97, 174);
    color: rgb(255, 255, 255);
  }
`

const Forgot = (props) => {
  const [isPhone, setIsPhone] = React.useState(false)

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <>
      <Title level={2}>
        Восстановить пароль
      </Title>
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
          <Link onClick={()=>setIsPhone(!isPhone)}>
            {isPhone ? 'email' : 'телефона'} ? 
          </Link>
        </Form.Item>

        <Form.Item>
          <Btn htmlType="submit">
            Отправить
          </Btn>
          &nbsp;&nbsp;или&nbsp;&nbsp;
          <Link onClick={()=>props.onClick('auth')}>
            вернуться назад
          </Link>
        </Form.Item>
      </Form>
    </>
  )
}

export default Forgot