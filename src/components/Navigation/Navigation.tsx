import React, {ChangeEvent} from 'react';
import PatientSnapshot from 'components/PatientSnapshot';
import './Navigation.scss';
import DropDown from 'components/DropDown';

type Props = {
  name: string;
  birthDate: string;
  gender: string;
  address: Array<Address>;
};

interface Address {
  city?: string;
  state?: string;
}

const getPatientAddress = (address: Array<Address> = []): string => {
  const entry = address[0];
  return entry ? [entry.city, entry.state].filter(item => !!item).join(', ') : 'No Address';
};

const consoleLog = (event: ChangeEvent<HTMLSelectElement>) => {
  console.log(event.target.value);
}

const Navigation: React.FC<Props> = ({ name, birthDate, gender, address}) => {
  return (
    <nav className='navigation'>
      <div className='left-panel'>
        <i className="material-icons">keyboard_arrow_left</i>
        <PatientSnapshot name={name}
                         birthDate={birthDate}
                         gender={gender}
                         address={getPatientAddress(address)} />
      </div>
      <DropDown label='Selection: '
                id='patient-view'
                name='available views'
                options={[{text: 'Medications', value: 'meds'},
                          { text: 'Chart', value: 'chart'}]} onChange={consoleLog}/>
    </nav>
  );
};

export default Navigation;
