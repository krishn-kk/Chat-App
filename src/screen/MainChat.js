import React from 'react';
import ChatList from './ChatList';
import UserDetails from './UserDetails';
import Chat from './Chat';

const MainChat = () => {
    return (
        <div
            style={{
                background: '#638bfb',
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <div
                style={{
                    background: '#638bfb',
                    height: '80vh',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                <ChatList />
                <Chat />
                <UserDetails />

            </div>
        </div>
    )
}

export default MainChat
