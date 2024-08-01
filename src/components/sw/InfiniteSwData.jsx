import PropTypes from 'prop-types';

import InfiniteScroll from 'react-infinite-scroller';

import { useSwData } from '@/api/queries.js';

import { Spinner } from '@/components/Spinner/Spinner';
import { Specie } from '@/components/sw/Specie';
import { Person } from '@/components/sw/Person';

export const InfiniteSwData = ({ type }) => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isLoading,
        isError,
        error,
    } = useSwData(type);

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <div className="text-red-500">Error: {error.message}</div>;
    }

    return (
        <div>
            <InfiniteScroll
                initialLoad={false}
                loadMore={() => {
                    if (!isFetching && hasNextPage) {
                        fetchNextPage();
                    }
                }}
                hasMore={hasNextPage}
                className="flex flex-col gap-y-3"
            >
                {data?.pages.map((page) => {
                    return page.results.map((data) =>
                        type === 'people' ? (
                            <Person key={data.name} {...data} type={type} />
                        ) : (
                            <Specie key={data.name} {...data} type={type} />
                        ),
                    );
                })}
            </InfiniteScroll>
            {isFetching && (
                <div className="mt-3">
                    <Spinner />
                </div>
            )}
        </div>
    );
};

InfiniteSwData.propTypes = {
    type: PropTypes.string,
};
