"use client";
import { createContext, useEffect, useState } from 'react';
const io = require('socket.io-client');

interface AppContextProps {
    withdrawStatus: number;
    depositTx: string;
    setWithdrawStatus: any;
}

const initialState = {
    withdrawStatus: 0,
    depositTx: '',
    setWithdrawStatus: () => { }
}
export const AppContext = createContext<AppContextProps>(initialState);

interface AppContextProviderProps {
    children: React.ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({
    children,
}) => {
    const [withdrawStatus, setWithdrawStatus] = useState(0);
    const [depositTx, setDepositTx] = useState('');

    useEffect(() => {
        const backend_socket_url = process.env.NEXT_PUBLIC_SOCKET_URL as string;
        const socket = io(backend_socket_url);
        // Listen for events from the server
        socket.on('connect', () => {
            console.log('Connected to the server');

            // Emit an event to the server
            socket.emit('message', 'Hello from client!');
        });

        socket.on('update', (data: any) => {
            console.log('Received from server:', data);
            setWithdrawStatus(data.status);
            setDepositTx(data.routeInfo.depositTransaction);
        });

        // Cleanup function to close the WebSocket connection
        return () => {
            // Handle server disconnection
            socket.on('disconnect', () => {
                console.log('Disconnected from the server');
            });
        };
    }, []);

    return (
        <AppContext.Provider value={{ withdrawStatus, depositTx, setWithdrawStatus }}>
            {children}
        </AppContext.Provider>
    );
};