import Header from '@/components/Header';
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const AuthRoot = () => {
    const router = useRouter();
    const [page, setPage] = useState('register');




    return <div>
        <Header />
    </div>
}

export default AuthRoot
