import React from 'react';
import { notification } from 'antd';

const Notification = ( placement, type = 'info', message = '' ) => {
    switch (type) {
        case 'error':
            notification.error({
                message: `${type}`.toUpperCase(),
                description:
                    `${message}`,
                placement,
            });
            break;
        case 'success':
            notification.success({
                message: `${type}`.toUpperCase(),
                description:
                    `${message}`,
                placement,
            });
            break;
        default:
            notification.info({
                message: `${type}`.toUpperCase(),
                description:
                    `${message}`,
                placement,
            });
    }
};

export default Notification;
