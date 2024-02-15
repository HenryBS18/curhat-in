const ChatBubble = ({ doctorName, message, doctorImage }) => {
  return (
    <div className="flex items-start gap-2.5 w-full">
      <img
        className="w-8 h-8 rounded-full"
        src={doctorImage}
        alt={`${doctorName}'s image`}
      />
      <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-white bg-white rounded-e-xl rounded-es-xl dark:bg-white mx-[]">
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 dark:text-black">
            {message.sender === 'user' ? 'You' : doctorName}
          </span>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            {message.timestamp.toLocaleTimeString()}
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-black">
          {message.content}
        </p>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Delivered
        </span>
      </div>
    </div>
  );
};

export default ChatBubble;
