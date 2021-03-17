import { useEffect, useState } from 'react';

const useMedia = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) setMatches(media.matches);

        const listener = () => setMatches(media.matches);
        media.addListener(listener);

        return () => media.removeListener(listener);
    }, [query, matches]);

    return matches;
};

export default useMedia;