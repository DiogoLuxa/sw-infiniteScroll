import { useState } from 'react';

import { InfiniteSwData } from '@/components/sw/InfiniteSwData';
import { Button } from '@/components/ui/button';

const App = () => {
    const [type, setType] = useState('people');
    return (
        <div className="p-3">
            <div className="mb-3">
                <h1 className="text-3xl mb-3 font-bold">Star Wars</h1>
                <div className="flex gap-x-3">
                    <Button
                        size="sm"
                        onClick={() => setType('people')}
                        disabled={type === 'people' ? true : false}
                    >
                        People
                    </Button>
                    <Button
                        size="sm"
                        onClick={() => setType('species')}
                        disabled={type === 'species' ? true : false}
                    >
                        Species
                    </Button>
                </div>
            </div>
            <InfiniteSwData type={type} />
        </div>
    );
};

export default App;
