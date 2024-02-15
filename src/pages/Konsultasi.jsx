// Konsultasi.jsx

import { useEffect, useState } from 'react';
import { authentication } from '../services/auth';

import Navbar from '../components/Navbar';
import DoctorPopupMenu from '../components/DoctorPopupMenu';
import ChatBubble from '../components/ChatBubble';

import addButtonSvg from '../../public/assets/icons/addButton.svg';
import searchiconSvg from '../../public/assets/icons/search-icon.svg';

const Konsultasi = () => {
  const [isPopupMenuOpen, setIsPopupMenuOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [chosenDoctors, setChosenDoctors] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    authentication()
  }, [])

  const openPopupMenu = () => {
    setIsPopupMenuOpen(true);
  };

  const closePopupMenu = () => {
    setIsPopupMenuOpen(false);
  };

  const handleSelectDoctor = (doctor) => {
    console.log('Selected Doctor:', doctor);

    const isDoctorChosen = chosenDoctors.some((chosenDoctor) => chosenDoctor.id === doctor.id);

    if (!isDoctorChosen) {
      setSelectedDoctor(doctor);
      setChosenDoctors((prevChosenDoctors) => [...prevChosenDoctors, doctor]);
    }

    closePopupMenu();
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        sender: 'user',
        content: messageInput,
        timestamp: new Date(),
      };

      setMessages([...messages, newMessage]);
      setMessageInput('');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FFF0DE] flex flex-col items-center relative">
      <div className="w-[90%]">
        <Navbar />

        <div className="mt-5 flex flex-col items-start relative">
          <h1 className="text-[36px] font-bold mb-3">Layanan Konsultasi</h1>

          <h3 className="text-[20px] mb-3">
            Pada layanan konsultasi, anda dapat memulai obrolan dengan psikolog yang anda pilih
          </h3>

          <div className="flex items-center mb-3">
            <div className="flex items-center w-full max-w-xs bg-transparent border border-[#A9A9A9] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-gray-500">
              <img src={searchiconSvg} className="w-6 h-6 mx-2" />
              <input
                type="text"
                placeholder="Cari..."
                className="w-[367px] py-3 bg-transparent focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={openPopupMenu}
              className="ml-2 px-2 py-2 text-white bg-[#E38B29] border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 hover:bg-blue-600"
            >
              <img src={addButtonSvg} alt="Add Button" className="w-8 h-8" />
            </button>

            {isPopupMenuOpen && (
              <DoctorPopupMenu onSelectDoctor={handleSelectDoctor} onClose={closePopupMenu} />
            )}
          </div>

          <div className="flex w-full h-full justify-between">
            <div className="chat-list-container mr-24">
              {chosenDoctors.map((chosenDoctor) => (
                <div
                  key={chosenDoctor.id}
                  className={`flex items-center py-3 border-b-2 border-black w-[380px] ${selectedDoctor && chosenDoctor.id === selectedDoctor.id ? 'bg-[#E38B29]' : ''}`}
                  onClick={() => setSelectedDoctor(chosenDoctor)}
                >
                  <img src={chosenDoctor.image} className="w-30 h-13 mx-1 my-2" />
                  <span className="text-[17px] mx-2">{chosenDoctor.name}</span>
                </div>
              ))}
            </div>

            {selectedDoctor && (
              <>
                <div className='mt-[-60px] '>
                  <img src='assets/icons/line7.svg' />
                </div>

                <div className="max-h-[380px] w-full overflow-y-auto mb-4 chatbubble-container pl-5 mt-[-60px] ">
                  {messages.map((message, index) => (
                    <div key={index} className='w-full mb-4'>
                      <ChatBubble
                        doctorName={selectedDoctor.name}
                        message={message}
                        doctorImage={selectedDoctor.image}
                      />

                    </div>
                  ))}
                </div>

                <div className="flex items-center absolute bottom-0 right-5 w-[60%] chat-input-container ">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-grow py-3 px-4 bg-[#E38B29] focus:outline-none rounded-md"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={handleSendMessage}
                    className="ml-2 px-4 py-3 text-white bg-[#E38B29] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 hover:bg-blue-600"
                  >
                    Send
                  </button>
                </div>
              </>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Konsultasi;
