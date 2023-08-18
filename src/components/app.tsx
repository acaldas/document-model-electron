import { useAtomValue } from 'jotai';
import React, { Suspense } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import atoms from 'src/store';
import WalletProvider from '../utils/wallet';

export const App: React.FC = () => {
    const router = createHashRouter([
        {
            path: '/',
            lazy: () => import('./root'),
            loader: () => <></>, // TODO loading
            children: [
                {
                    path: '',
                    lazy: () => import('src/pages/demo'),
                },
                // {
                //     path: '',
                //     lazy: () => import('src/pages/tabs'),
                // },
                {
                    path: 'settings',
                    lazy: () => import('src/pages/settings'),
                },
            ],
        },
        {
            lazy: () => import('./root'),
            loader: () => <></>, // TODO loading
        },
    ]);

    return (
        <WalletProvider>
            <RouterProvider router={router} />
        </WalletProvider>
    );
};

const Preloader = () => {
    for (const atom of Object.values(atoms)) {
        useAtomValue(atom);
    }
    return null;
};

export default (
    <React.StrictMode>
        {/* TODO loading */}
        <Suspense fallback={<></>}>
            <Preloader />
            <App />
        </Suspense>
    </React.StrictMode>
);
