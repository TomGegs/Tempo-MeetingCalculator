import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/@/components/shadcnUI/button';
import { CardFooter } from '@/@/components/shadcnUI/card';
import { Input } from '@/@/components/shadcnUI/input';
import {
    RadioGroup,
    RadioGroupItem,
} from '@/@/components/shadcnUI/radio-group';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/@/components/shadcnUI/form';

import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import {
    GeneralFormValues,
    defaultValues,
    generalFormSchema,
} from '../utils/INITIAL_DATA';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '../shadcnUI/tooltip';
import { useNavigate } from 'react-router-dom';

type GeneralFormProps = {
    setLoading: Dispatch<SetStateAction<boolean>>;
    loading: boolean;
};

export const GeneralForm = ({ setLoading, loading }: GeneralFormProps) => {
    const [numPeopleValue, setNumPeopleValue] = useState<number>(1);

    const form = useForm<GeneralFormValues>({
        resolver: zodResolver(generalFormSchema),
        defaultValues,
    });

    const { setValue } = form;
    const navigate = useNavigate();

    async function handleNumPeopleIncrease() {
        return new Promise<void>((resolve) => {
            setNumPeopleValue((prevNumPeopleValue) => {
                const newNumPeopleValue = prevNumPeopleValue + 1;
                if (newNumPeopleValue <= 100) {
                    setValue('numPeople', newNumPeopleValue);
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
                    return newNumPeopleValue;
                }
                return prevNumPeopleValue;
            });
            resolve();
        });
    }

    function handleNumPeopleInput(e: React.ChangeEvent<HTMLInputElement>) {
        const newValue = parseInt(e.target.value);
        setNumPeopleValue(newValue);
        setValue('numPeople', numPeopleValue);
    }

    function handleSalaryInput(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value;
        const value = inputValue === '' ? '' : parseInt(inputValue);
        setValue('avgSalary', value);
    }

    async function onSubmit(data: GeneralFormValues) {
        try {
            const isValidSalary = await form.trigger('avgSalary');
            const isValidPeople = await form.trigger('numPeople');
            if (isValidSalary && isValidPeople) {
                setLoading(true);
                setTimeout(() => {
                    navigate('/timer', { state: { formData: data } });
                    setLoading(false);
                }, 1000);
            }
        } catch (error) {
            error;
        }
    }

    const timePeriodStyle =
        'flex w-full cursor-pointer flex-col text-xs md:text-base items-center justify-between rounded-md  bg-muted px-5 py-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-popover [&:has([data-state=checked])]:border-primary';

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={`space-y-8 ${
                    loading ? 'duration-1000 animate-out fade-out-0' : ''
                }`}
            >
                {/* Number of people attending */}
                <FormField
                    control={form.control}
                    name="numPeople"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel htmlFor="numPeople">
                                <div className="flex flex-row items-center gap-x-2">
                                    Number of People
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 cursor-pointer" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    How many people in
                                                    attendance of the meeting
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
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
                                        id="numPeople"
                                        type="number"
                                        className="w-full text-center"
                                        {...field}
                                        placeholder={numPeopleValue.toString()}
                                        onChange={(e) =>
                                            handleNumPeopleInput(e)
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
                            <FormLabel htmlFor="timeFrame">
                                <div className="flex flex-row items-center gap-x-2">
                                    Salary Period
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 cursor-pointer" />
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
                                </div>
                            </FormLabel>
                            <FormControl>
                                {/* Period of calculation */}

                                <RadioGroup
                                    id="timeFrame"
                                    {...field}
                                    onValueChange={(value) =>
                                        field.onChange(value)
                                    }
                                    className="grid h-fit w-full grid-cols-4 gap-x-1 rounded-lg bg-muted p-1 text-muted-foreground"
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
                            <FormLabel htmlFor="avgSalary">
                                <div className="flex flex-row items-center gap-x-2">
                                    Average Salary of Attendees
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Info className="h-4 w-4 cursor-pointer" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>
                                                    The estimated average salary
                                                    of all meeting attendees
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </div>
                            </FormLabel>

                            <FormControl>
                                <Input
                                    id="avgSalary"
                                    type="number"
                                    className="w-full text-center"
                                    placeholder={`$ ${form.watch(
                                        'timeFrame'
                                    )} `}
                                    {...field}
                                    onChange={handleSalaryInput}
                                    min={1}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <CardFooter>
                    <Button
                        variant="ghost"
                        className="z-20 h-full w-full items-center justify-center bg-[#252525] text-white"
                    >
                        {loading ? 'Loading...' : 'Start Meeting'}
                    </Button>
                </CardFooter>
            </form>
        </Form>
    );
};
