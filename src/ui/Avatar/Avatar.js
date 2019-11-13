import React from 'react';
import styled from 'styled-components';

const Avatar = styled.div`{
    width:48px;
    border: 1px solid #ffffff;
    height: 48px;
    border-radius: 50%;
    background-size: cover;
    background-image: url("https://socialniesety.ru/files/images/components/articles_journal/originals/instagram/234/avatarka_dlya_instagram_primery_15.jpg")
}`;

const UserAvatar = ({
                    sizing,
                    ...rest
                }) => (
    <Avatar
        sizing={sizing}
        {...rest}
    >
    </Avatar>
);


export default UserAvatar;
