import { useInfiniteQuery } from '@tanstack/react-query';

import { fetchData } from '@/api/dataFetch';

const url = 'https://swapi.dev/api/';

export const useSwData = (type) => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isLoading,
        isError,
        error,
    } = useInfiniteQuery({
        queryKey: [type],
        queryFn: ({ pageParam = url + type }) => fetchData(pageParam),
        getNextPageParam: (lastPage) => lastPage.next || undefined,
    });

    return {
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isLoading,
        isError,
        error,
    };
};
