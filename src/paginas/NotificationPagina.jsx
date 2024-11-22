import { Breadcrumb, Button, notification } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const NotificationPagina = () => {
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
          message: 'Notification Title',
          description:
            'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
          duration: 0,
        });
      };
  return (
    <>
    <Breadcrumb
    items={[
      {
        title: <Link to="/">Home</Link>,
      },
      {
        title: 'Notication',
      },
    ]} />
    <h1>Notication</h1>
    <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
    </>
  )
}

export default NotificationPagina