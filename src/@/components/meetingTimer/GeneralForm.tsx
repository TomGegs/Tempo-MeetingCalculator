import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/@/components/ui/button';
import { CardFooter } from '@/@/components/ui/card';
import { Input } from '@/@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/@/components/ui/radio-group';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/@/components/ui/form';

import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import {
    GeneralFormValues,
    defaultValues,
    generalFormSchema,
} from './utils/INITIAL_DATA';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../ui/tooltip';

export const GeneralForm = () => {
    const [numPeopleValue, setNumPeopleValue] = useState<number>(1);

    const form = useForm<GeneralFormValues>({
        resolver: zodResolver(generalFormSchema),
        defaultValues,
    });

    const { setValue } = form;

    async function handleNumPeopleIncrease() {
        return new Promise<void>((resolve) => {
            setNumPeopleValue((prevNumPeopleValue) => {
                const newNumPeopleValue = prevNumPeopleValue + 1;
                if (newNumPeopleValue <= 100) {
                    setValue('numPeople', newNumPeopleValue);
                    console.log(newNumPeopleValue);
                    console.log(form.getValues('numPeople'));
                    return newNumPeopleValue;
                }
                return prevNumPeopleValue;
            });
            resolve();
        });
    }

    async function handleNumPeopleDecrease() {
        return new Promise<void>((resolve) => {
            setNumPeopleValue((prevNumPeopleValue) => {
                const newNumPeopleValue = prevNumPeopleValue - 1;
                if (newNumPeopleValue >= 1) {
                    setValue('numPeople', newNumPeopleValue);
                    console.log(newNumPeopleValue);
                    console.log(form.getValues('numPeople'));
                    return newNumPeopleValue;
                }
                return prevNumPeopleValue;
            });
            resolve();
        });
    }

    function handleSalaryInput(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value;
        const value = inputValue === '' ? '' : parseInt(inputValue);
        setValue('avgSalary', value);
    }

    async function onSubmit(data: GeneralFormValues) {
        const isValid = await form.trigger('avgSalary');
        if (!isValid) {
            return;
        }
        console.log('data', data);
    }

    const timePeriodStyle =
        'flex w-full cursor-pointer flex-col text-xs md:text-base items-center justify-between rounded-md  bg-primary px-5 py-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-popover [&:has([data-state=checked])]:border-primary';

    return (
        <Form {...form}>
            <div>{numPeopleValue}</div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Number of people attending */}
                <FormField
                    control={form.control}
                    name="numPeople"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="number of people attending">
                                <span className="flex flex-row items-center gap-x-2">
                                    Number of People
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info className="h-4 w-4" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    How many people in
                                                    attendance of the meeting
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </span>
                            </FormLabel>
                            <div className="flex w-full  items-center space-x-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    className="w-1/3 md:w-1/4"
                                    onClick={handleNumPeopleDecrease}
                                    disabled={numPeopleValue <= 1}
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>
                                <FormControl>
                                    <Input
                                        type="number"
                                        className="w-full text-center"
                                        {...field}
                                        placeholder={numPeopleValue.toString()}
                                        onChange={(e) =>
                                            field.onChange(
                                                parseInt(e.target.value)
                                            )
                                        }
                                        min={1}
                                        value={numPeopleValue}
                                    />
                                </FormControl>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    className="w-1/3 md:w-1/4"
                                    onClick={handleNumPeopleIncrease}
                                    disabled={numPeopleValue >= 100}
                                >
                                    <ChevronRight className="h-4 w-8" />
                                </Button>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="timeFrame"
                    defaultValue="Yearly"
                    render={({ field }) => (
                        <FormItem className="space-y-2 ">
                            <FormLabel>
                                <span className="flex flex-row items-center gap-x-2">
                                    Salary Period
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info className="h-4 w-4" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    The Period of the
                                                    calculation of $ vs time
                                                    spent in meetings.
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </span>
                            </FormLabel>
                            <FormControl>
                                {/* Period of calculation */}

                                <RadioGroup
                                    {...field}
                                    onValueChange={(value) =>
                                        field.onChange(value)
                                    }
                                    className="grid h-fit w-full grid-cols-4 gap-x-1 rounded-lg bg-primary p-1 text-muted-foreground"
                                >
                                    <FormItem className="flex w-full items-center space-x-0 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem
                                                id="Yearly"
                                                value="Yearly"
                                                className="peer sr-only"
                                            />
                                        </FormControl>
                                        <FormLabel
                                            htmlFor="Yearly"
                                            className={timePeriodStyle}
                                        >
                                            Yearly
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className=" flex w-full items-center space-x-0 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem
                                                id="Monthly"
                                                value="Monthly"
                                                className="peer sr-only"
                                            />
                                        </FormControl>
                                        <FormLabel
                                            htmlFor="Monthly"
                                            className={timePeriodStyle}
                                        >
                                            Monthly
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex w-full items-center space-y-0">
                                        <FormControl>
                                            <RadioGroupItem
                                                id="Weekly"
                                                value="Weekly"
                                                className="peer sr-only"
                                            />
                                        </FormControl>
                                        <FormLabel
                                            htmlFor="Weekly"
                                            className={timePeriodStyle}
                                        >
                                            Weekly
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex w-full items-center space-y-0">
                                        <FormControl>
                                            <RadioGroupItem
                                                id="Daily"
                                                value="Daily"
                                                className="peer sr-only"
                                            />
                                        </FormControl>
                                        <FormLabel
                                            htmlFor="Daily"
                                            className={timePeriodStyle}
                                        >
                                            Daily
                                        </FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Average Salary of group */}
                <FormField
                    control={form.control}
                    name="avgSalary"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="average salary of attendees">
                                <span className="flex flex-row items-center gap-x-2">
                                    Average Salary of Attendees
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <Info className="h-4 w-4" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    The estimated average salary
                                                    of all meeting attendees
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
                                    placeholder={`$ ${form.watch(
                                        'timeFrame'
                                    )} `}
                                    {...field}
                                    onChange={handleSalaryInput}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <CardFooter>
                    <Button className="w-full">Start Meeting</Button>
                </CardFooter>
            </form>
        </Form>
    );
};
