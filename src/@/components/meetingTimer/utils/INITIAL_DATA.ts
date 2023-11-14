import * as z from 'zod';

export type GeneralFormValues = z.infer<typeof generalFormSchema>;

// Default values of form (move and access via API).
export const defaultValues: Partial<GeneralFormValues> = {
    timeFrame: 'Yearly',
    numPeople: 1,
    avgSalary: '',
};

//Data handling

export const generalFormSchema = z.object({
    timeFrame: z.enum(['Yearly', 'Monthly', 'Weekly', 'Daily'], {
        required_error: 'Please select  one.',
    }),

    numPeople: z
        .number({ required_error: 'Must have at least 1 participant' })
        .min(1, {
            message: 'Must be at least 1 participant.',
        })
        .max(100, {
            message: 'Capacity cannot exceed 100.',
        }),

    avgSalary: z.union([
        z
            .number({
                invalid_type_error: 'Must be a whole number',
                required_error: 'Salary is required',
            })
            .int()
            .min(1, {
                message: 'Salary must be at least $1.',
            })
            .max(1500000, {
                message: 'Salary cannot exceed $1,500,000.',
            }),
        z.string().min(1, {
            message: 'Salary must be at least $1.',
        }),
    ]),
});

export type DetailedFormValues = z.infer<typeof detailedFormSchema>;

export const detailedDefaultValues: Partial<DetailedFormValues> = {
    personID: 1,
    personIDSalary: 0,
    personIDTimeFrame: 'Yearly',
};

export const detailedFormSchema = z.object({
    personID: z
        .number({ required_error: 'Meeting must have at least 1 attendee' })
        .int()
        .min(1)
        .max(100),

    personIDTimeFrame: z.enum(['Yearly', 'Monthly', 'Weekly', 'Daily'], {
        required_error: 'Please select a Period.',
    }),

    personIDSalary: z
        .number({
            invalid_type_error: 'Must be a whole number',
            required_error: 'Salary is required',
        })
        .int()
        .min(1, {
            message: 'Salary must be at least $1.',
        })
        .max(1500000, {
            message: 'Salary cannot exceed $1,500,000.',
        }),
});
