import assetsImages from '@/assets';
import { getAuthInstance } from '@/firebaseInstance/auth';
import { useZNavigate } from '@/hooks/tanstack/router';
import { IJournal } from '@/types/journal';
import { appRoutes } from '@/utils/constants/route';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [journals, setJournals] = useState<IJournal[]>([]);
  const zNavigate = useZNavigate();
  const firebaseAuth = getAuthInstance();

  useEffect(() => {
    const fetchJournals = async () => {
      setJournals([]);
    };

    fetchJournals();
  }, []);

  const handleLogout = async () => {
    await firebaseAuth.signOut();

    zNavigate(appRoutes.login);
  };

  const addNewJournalEntry = async () => {
    zNavigate(appRoutes.addJournalEntry);
  };

  return (
    <div className='p-4'>
      <div className='flex justify-content-between align-items-center mb-4'>
        <img
          src={assetsImages.ReflectifyLogo}
          alt='App Icon'
          style={{ height: '50px' }}
        />
        <>
          <Button
            label='Add New Journal Entry'
            icon='pi pi-sign-out'
            onClick={addNewJournalEntry}
          />
          <Button
            label='Logout'
            icon='pi pi-sign-out'
            onClick={handleLogout}
          />
        </>
      </div>
      <DataTable
        value={journals}
        paginator
        rows={10}
        className='p-datatable-gridlines'
      >
        <Column
          field='goodThings'
          header='Good Things'
          body={(rowData) => rowData.goodThings.join(', ')}
        />
        <Column
          field='challengingThings'
          header='Bad Things'
          body={(rowData) => rowData.challengingThings.join(', ')}
        />
        <Column
          field='toRememberThisDayFor'
          header='Memorable Moment'
        />
        <Column
          field='createdAt'
          header='Date'
        />
      </DataTable>
    </div>
  );
};

export default Home;
