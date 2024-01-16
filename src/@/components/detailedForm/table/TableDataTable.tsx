'use client';

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
} from '@tanstack/react-table';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../../shadcnUI/table';
import { Pagination } from './Pagination';
import { Collapsible, CollapsibleTrigger } from '../../shadcnUI/collapsible';
import { Button } from '../../shadcnUI/button';
import { CollapsibleContent } from '@radix-ui/react-collapsible';
import { ChevronsUpDown } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Typography } from '../../shadcnUI/typography';

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
}

export function TableDataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [isOpen, setIsOpen] = useState(true);
    const finalColumnDef = useMemo(() => columns, [columns]);

    const table = useReactTable({
        data,
        columns: finalColumnDef,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        defaultColumn: {
            minSize: 0,
            size: Number.MAX_SAFE_INTEGER,
            maxSize: Number.MAX_SAFE_INTEGER,
        },
        initialState: {
            pagination: {
                pageSize: 3,
            },
        },
    });

    return (
        <div className="w-full rounded-md border">
            <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-full space-y-2"
            >
                <div className="flex w-full flex-row items-center justify-between px-4 py-2 md:px-4 md:pb-4 md:pt-4">
                    <Typography variant="h4" as="h2">
                        Meeting Participants
                    </Typography>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="w-9 p-0">
                            <ChevronsUpDown className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <Table>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={
                                            row.getIsSelected() && 'selected'
                                        }
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell
                                                key={cell.id}
                                                style={{
                                                    width:
                                                        cell.column.getSize() ===
                                                        Number.MAX_SAFE_INTEGER
                                                            ? 'auto'
                                                            : cell.column.getSize(),
                                                }}
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={columns.length}
                                        className="h-24 text-center"
                                    >
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead
                                                key={header.id}
                                                style={{
                                                    width:
                                                        header.getSize() ===
                                                        Number.MAX_SAFE_INTEGER
                                                            ? 'auto'
                                                            : header.getSize(),
                                                }}
                                            >
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                          header.column
                                                              .columnDef.header,
                                                          header.getContext()
                                                      )}
                                            </TableHead>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                    </Table>
                    <Pagination table={table} />
                </CollapsibleContent>
            </Collapsible>
        </div>
    );
}
