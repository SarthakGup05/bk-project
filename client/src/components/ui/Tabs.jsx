import React from 'react';
import { Tabs as RadixTabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs';
import { Card, CardContent } from './Card'; // Assuming you have a Card component
import { ChevronRight, Star } from 'lucide-react'; // Replace with actual icons if necessary

const Tabs = ({ tabs }) => {
  return (
    <RadixTabs defaultValue={tabs[0]?.value} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-4">
          <Card>
            <CardContent className="p-6">{tab.content}</CardContent>
          </Card>
        </TabsContent>
      ))}
    </RadixTabs>
  );
};

export default Tabs;
