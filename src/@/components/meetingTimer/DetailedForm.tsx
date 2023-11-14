import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/@/components/ui/button';
import { Input } from '@/@/components/ui/input';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/@/components/ui/form';

import { Info, Plus } from 'lucide-react';
import {
    DetailedFormValues,
    detailedFormSchema,
    detailedDefaultValues,
} from './utils/INITIAL_DATA';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../ui/tooltip';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

export const DetailedForm = () => {
    const form = useForm<DetailedFormValues>({
        resolver: zodResolver(detailedFormSchema),
        defaultValues: detailedDefaultValues,
    });

    return (
        <Form {...form}>
            <form className="grid h-full w-full grid-cols-8 justify-center gap-x-2 space-y-8 md:grid-cols-6 md:gap-x-2 ">
                <FormField
                    control={form.control}
                    name="personID"
                    render={({ field }) => (
                        <FormItem className="col-span-1 !mt-2 hidden  h-full md:block ">
                            <FormLabel>
                                <span className="mx-auto flex w-full flex-row place-content-center items-center gap-x-1 md:place-content-start md:gap-x-2">
                                    Person #
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info className="h-4 w-4" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    The meeting participant
                                                    number
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </span>
                            </FormLabel>
                            {/* Box for person ID */}
                            <div className=" flex h-10 w-full select-none flex-row justify-center rounded-md border border-input bg-background py-2 text-center text-sm text-muted-foreground ring-offset-background">
                                5
                            </div>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Salary of person */}
                <FormField
                    control={form.control}
                    name="personIDSalary"
                    render={({ field }) => (
                        <FormItem className="col-span-3 !mt-2 h-full w-full md:col-span-2">
                            <FormLabel htmlFor="average salary of attendees">
                                <span className="mx-auto flex w-full flex-row place-content-center items-center gap-x-1 md:place-content-start md:gap-x-2">
                                    Salary
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info className="h-4 w-4" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    The meeting participant
                                                    salary
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </span>
                            </FormLabel>

                            <FormControl>
                                <Input
                                    type="number"
                                    className="w-full text-center"
                                    placeholder="$ Amount"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="personIDTimeFrame"
                    render={({ field }) => (
                        <FormItem className="col-span-3 !mt-2 h-full w-full md:col-span-2">
                            <FormLabel htmlFor="average salary of attendees">
                                <span className="mx-auto flex w-full flex-row place-content-center items-center gap-x-1 md:place-content-start md:gap-x-2">
                                    Period
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info className=" h-4 w-4" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    Period of input salary (e.g.
                                                    $60,000 Yearly)
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </span>
                            </FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Yearly" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="year">Yearly</SelectItem>
                                    <SelectItem value="month">
                                        Monthly
                                    </SelectItem>
                                    <SelectItem value="week">Weekly</SelectItem>
                                    <SelectItem value="day">Daily</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button
                    disabled
                    className="col-span-2 mx-auto w-full place-items-center items-center place-self-center bg-primary  md:col-span-1 md:w-full"
                >
                    <Plus className="h-5 w-5 " />
                </Button>
            </form>
        </Form>
    );
};
