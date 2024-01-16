import { useEffect, useState } from 'react';

type useFormDetailsProps = {
    formData: {
        timeFrame: 'Yearly' | 'Monthly' | 'Weekly' | 'Daily';
        numPeople: number;
        avgSalary: number;
    };
};

export const useFormDetails = ({ formData }: useFormDetailsProps) => {
    const [numberAttending, setNumberAttending] = useState<number>(0);
    const [averageSalary, setAverageSalary] = useState<number>(0);
    const [timePeriodOfSalary, setTimePeriodOfSalary] =
        useState<string>('Yearly');
    try {
        useEffect(() => {
            async function getFormDetails() {
                if (!formData) return;
                setNumberAttending(formData.numPeople);
                setAverageSalary(formData.avgSalary);
                setTimePeriodOfSalary(formData.timeFrame);
            }
            getFormDetails();
        }, [formData]);
        return { numberAttending, averageSalary, timePeriodOfSalary };
    } catch (error) {
        console.error(error);
    }
    return { numberAttending, averageSalary, timePeriodOfSalary };
};
