import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
const TabCategories = () => {
    return (
        <div className='mt-8 mb-8'>
            <h1 className='text-2xl font-bold text-center'>Browser Job by Categories</h1>
            <p className='text-center mt-4'>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,<br /> when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='mt-8'>
                <Tabs>
                    <div className='flex items-center justify-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                    </div>

                    <TabPanel>
                        <JobCard></JobCard>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TabCategories;