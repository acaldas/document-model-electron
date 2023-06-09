import react from '@vitejs/plugin-react';
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label';
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config
export default defineConfig({
    plugins: [
        react({
            include: '**/*.tsx',
            babel: { minified: false },
            plugins: [jotaiDebugLabel, jotaiReactRefresh],
        }),
        svgr(),
    ],
    build: { minify: false },
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            '@/assets': path.resolve(__dirname, './assets'),
        },
    },
});
