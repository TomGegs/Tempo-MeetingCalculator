'use client';

import { ColumnDef } from '@tanstack/react-table';
import { DetailedFormValues } from '../../utils/INITIAL_DATA';
import { Button } from '../../shadcnUI/button';
import { XCircle } from 'lucide-react';

export const columns: ColumnDef<DetailedFormValues>[] = [
    {
        accessorKey: 'personID',
        header: () => (
            <>
                <span className="block text-center md:hidden">#</span>
                <span className="hidden text-center md:block">Person #</span>
            </>
        ),
        size: 100,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('personID'));

            return (
                <span className="mx-auto text-center align-middle font-medium">
                    {amount}
                </span>
            );
        },
    },

    {
        accessorKey: 'personIDSalary',
        header: () => (
            <span className="text-right text-xs md:text-sm">Salary</span>
        ),
        size: 50,

        cell: ({ row }) => {
            const amount = parseFloat(row.getValue('personIDSalary'));

            // Format the amount as a dollar amount
            const formatted = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            }).format(amount);
            return <span className="text-right font-medium">{formatted}</span>;
        },
    },
    {
        accessorKey: 'personIDTimeFrame',
        header: () => (
            <span className="text-right text-xs md:text-sm">Period</span>
        ),
        cell: ({ row }) => {
            const amount = row.getValue('personIDTimeFrame');

            return (
                <span className="text-right font-medium">
                    {amount as 'Yearly' | 'Monthly' | 'Weekly' | 'Daily'}
                </span>
            );
        },
    },
    {
        id: 'delete',
        enableHiding: false,
        size: 50,

        cell: () => {
            return (
                <Button variant="ghost" className="float-right w-fit !p-0">
                    <XCircle className="h-4 w-4 cursor-pointer text-destructive" />
                </Button>
            );
        },
    },
];
