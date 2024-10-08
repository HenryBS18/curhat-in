import { useState } from 'react';

const DoctorPopupMenu = ({ onSelectDoctor, onClose }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    { id: 1, name: 'A.D. Adriyanti, S.Psi., M.Psi', image: '/assets/icons/doctor1.svg' },
    { id: 2, name: 'Ade Dian Komala, M.Psi', image: '/assets/icons/doctor2.svg' },
    { id: 3, name: 'Abdi Setiawan, S.Psi., M.Psi.', image: '/assets/icons/doctor3.svg' },
  ];

  const handleSelectDoctor = (doctor) => {
    if (selectedDoctor && selectedDoctor.id === doctor.id) {
      setSelectedDoctor(null);
    } else {
      setSelectedDoctor(null);
      onSelectDoctor(doctor);
    }
  };

  return (
    <div className=" bg-[#FFD8A9] border rounded-md p-4 shadow-md absolute top-[170px] left-[110px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Select a Doctor</h2>
        <button className="text-gray-600 hover:text-gray-800" onClick={onClose}>
          <img src="/assets/icons/close-icon.svg" alt="Close Icon" className="w-6 h-6" />
        </button>
      </div>
      {doctors.map((doctor) => (
        <div
          key={doctor.id}
          className={`flex items-center mb-2 cursor-pointer ${selectedDoctor && selectedDoctor.id === doctor.id ? 'bg-gray-200' : ''
            }`}
          onClick={() => handleSelectDoctor(doctor)}
        >
          <img
            src={doctor.image}
            className="w-8 h-8 mr-2 rounded-full"
            alt={`Doctor ${doctor.id}`}
          />
          <span>{doctor.name}</span>
        </div>
      ))}
    </div>
  );
};

export default DoctorPopupMenu;
