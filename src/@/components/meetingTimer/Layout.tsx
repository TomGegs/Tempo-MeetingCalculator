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
import { Lock } from 'lucide-react';
import { GeneralForm } from './GeneralForm';
import { DetailedForm } from './DetailedForm';
import { Attendees } from './Attendees';
import { SetStateAction, useState } from 'react';

export const Layout = () => {
    const [currentTab, setCurrentTab] = useState('general');

    const handleTabChange = (value: SetStateAction<string>) => {
        setCurrentTab(value);
    };

    return (
        <div className="h-fit w-full max-w-[800px] self-center ">
            <Card className="border-0 bg-card">
                <CardHeader className="">
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
                        <TabsList className="grid w-full grid-cols-2  bg-primary">
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
                            <GeneralForm />
                        </CardContent>
                    </TabsContent>

                    {/* Detailed Tab content */}
                    <TabsContent value="detailed">
                        <CardContent className="space-y-2">
                            <DetailedForm />
                            <Attendees />
                        </CardContent>
                    </TabsContent>
                </Tabs>
            </Card>
        </div>
    );
};
