import { useEffect, useState } from 'react';
import { columns } from './TableColumns';
import { TableDataTable } from './TableDataTable';
import { DetailedFormValues } from '../../utils/INITIAL_DATA';

async function getData(): Promise<DetailedFormValues[]> {
    return [
        {
            personID: 4,
            personIDTimeFrame: 'Yearly',
            personIDSalary: 85000,
        },
        {
            personID: 3,
            personIDTimeFrame: 'Monthly',
            personIDSalary: 10000,
        },
        {
            personID: 2,
            personIDTimeFrame: 'Weekly',
            personIDSalary: 1920,
        },
        {
            personID: 1,
            personIDTimeFrame: 'Daily',
            personIDSalary: 450,
        },
    ];
}

export function TableWrapper() {
    const [data, setData] = useState<DetailedFormValues[]>([]);

    useEffect(() => {
        async function fetchData() {
            const result = await getData();
            setData(result);
        }
        fetchData();
    }, []);

    return (
        <div className="w-full">
            <TableDataTable columns={columns} data={data} />
        </div>
    );
}
