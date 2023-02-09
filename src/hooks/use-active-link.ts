import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useActiveLink = (initialLink: string) => {
    const { isReady, query } = useRouter();
    const [currentLink, setCurrentLink] = useState(initialLink);

    useEffect(() => {
        if (!isReady) {
            return;
        }
        const { mode } = query;
        if (!mode || typeof mode != 'string') {
            console.error('[ERR] Reroute to another path');
            return;
        }
        setCurrentLink(mode);
    }, [isReady, query]);

    return { currentLink }
};

export default useActiveLink;
