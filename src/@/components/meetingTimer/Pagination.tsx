import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Table } from '@tanstack/react-table';

import { Button } from '../ui/button';

interface DataTablePaginationProps<TData> {
    table: Table<TData>;
}

export function Pagination<TData>({ table }: DataTablePaginationProps<TData>) {
    return (
        <div className="mb-3 flex items-center justify-end px-2 md:my-4">
            <div className="flex items-center">
                <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <span className="sr-only">Go to previous page</span>
                    <ChevronLeftIcon className="h-4 w-4" />
                </Button>
                <div className="flex w-[100px] select-none items-center justify-center text-sm font-medium">
                    {table.getState().pagination.pageIndex + 1} /{' '}
                    {table.getPageCount()}
                </div>
                <Button
                    variant="outline"
                    className="h-8 w-8 p-0"
                    onClick={() => table.nextPage}
                    disabled={!table.getCanNextPage()}
                >
                    <span className="sr-only">Go to next page</span>
                    <ChevronRightIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
}
