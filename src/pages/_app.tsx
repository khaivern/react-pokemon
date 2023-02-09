import Header from '@/components/Header'
import { ThemeProvider } from '@mui/material'
import theme from '../components/Theme'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

function createEmotionCache() {
    return createCache({ key: 'css' })
}

export default function App() {
    const cache = createEmotionCache()
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <Header />
            </ThemeProvider>
        </CacheProvider>
    )
}
