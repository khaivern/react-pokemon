import { ThemeProvider } from '@mui/material'
import theme from '../components/Theme'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import AuthRoot from '@/pages/auth/[mode]'

function createEmotionCache() {
    return createCache({ key: 'css' })
}

export default function App() {
    const cache = createEmotionCache()
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <AuthRoot />
            </ThemeProvider>
        </CacheProvider>
    )
}
