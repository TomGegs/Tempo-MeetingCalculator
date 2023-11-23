import { Dispatch } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/@/components/ui/card';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/@/components/ui/tabs';
import { Lock, X } from 'lucide-react';
import { GeneralForm } from './generalForm/GeneralForm';
import { DetailedForm } from './detailedForm/DetailedForm';
import { TableWrapper } from './detailedForm/table/TableWrapper';
import { SetStateAction, useState } from 'react';
import { SheetClose } from './ui/sheet';
import logo from '../../assets/logo.png';
import { FeatureComing } from './FeatureComing';

type FormWrapperProps = {
    setLoading: Dispatch<SetStateAction<boolean>>;
    loading: boolean;
};

export const FormWrapper = ({ setLoading, loading }: FormWrapperProps) => {
    const [currentTab, setCurrentTab] = useState('general');

    const handleTabChange = (value: SetStateAction<string>) => {
        setCurrentTab(value);
    };

    return (
        <div
            className={`flex h-full w-full max-w-[800px]  items-center justify-center ${
                loading ? 'delay-500 duration-500 animate-out fade-out' : ''
            }`}
        >
            <Card className="relative border-0 bg-card">
                <SheetClose className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary md:hidden">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </SheetClose>
                <CardHeader>
                    <CardTitle>
                        {currentTab === 'general'
                            ? 'Estimation Timer'
                            : 'Detailed Timer'}
                    </CardTitle>
                    <CardDescription>
                        {currentTab === 'general'
                            ? 'Enter the estimated participants details'
                            : 'Enter details per participant'}
                    </CardDescription>
                </CardHeader>

                {/* Tab options */}
                <Tabs
                    defaultValue="general"
                    onValueChange={handleTabChange}
                    className="h-full w-full md:p-2"
                >
                    <div className="mb-6 px-4 md:px-2">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="general">
                                Estimation
                            </TabsTrigger>
                            <TabsTrigger
                                value="detailed"
                                className="flex gap-x-3"
                            >
                                Detailed <Lock className="h-4 w-4" />
                            </TabsTrigger>
                        </TabsList>
                    </div>

                    {/* General Tab content */}
                    <TabsContent value="general">
                        <CardContent className="grid">
                            {/* General Form */}
                            <GeneralForm
                                setLoading={setLoading}
                                loading={loading}
                            />
                        </CardContent>
                    </TabsContent>

                    {/* Detailed Tab content */}
                    <TabsContent value="detailed">
                        <CardContent className="space-y-2">
                            <DetailedForm />
                            <TableWrapper />
                            <FeatureComing />
                        </CardContent>
                    </TabsContent>
                </Tabs>
            </Card>
        </div>
    );
};
