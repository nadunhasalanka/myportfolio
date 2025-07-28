const ProjectMockup = ({ type }) => {
  const ShikshaMockup = () => (
    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center relative">
      <div className="w-[90%] h-[85%] bg-white rounded-lg relative shadow-2xl">
        <div className="h-8 bg-gray-100 rounded-t-lg flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        <div className="h-[calc(100%-2rem)] bg-white rounded-b-lg p-5 text-center text-xs leading-tight">
          <h3 className="text-gray-800 text-base mb-2 font-semibold">Inclusive Learning for Everyone.</h3>
          <p className="text-gray-600 text-xs mb-4">Personalized education technology designed for Deaf and Blind learners, making quality education available to all.</p>
          
          <div className="flex justify-center gap-5 my-5">
            <div className="text-center flex-1 max-w-20">
              <div className="w-10 h-10 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center text-lg">🧏</div>
              <div className="text-xs text-gray-800 font-medium">Deaf Community</div>
            </div>
            <div className="text-center flex-1 max-w-20">
              <div className="w-10 h-10 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center text-lg">👁️</div>
              <div className="text-xs text-gray-800 font-medium">Blind Community</div>
            </div>
            <div className="text-center flex-1 max-w-20">
              <div className="w-10 h-10 bg-gray-100 rounded-full mx-auto mb-2 flex items-center justify-center text-lg">♿</div>
              <div className="text-xs text-gray-800 font-medium">Universal Access</div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <div className="h-1 w-10 bg-blue-500 rounded"></div>
            <div className="h-1 w-10 bg-blue-500 rounded"></div>
            <div className="h-1 w-10 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );

  const EnigmaMockup = () => (
    <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center relative">
      <div className="w-[90%] h-[85%] bg-white rounded-lg relative shadow-2xl">
        <div className="h-8 bg-gray-100 rounded-t-lg flex items-center px-3 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
        </div>
        <div className="h-[calc(100%-2rem)] bg-zinc-900 rounded-b-lg p-4 text-white text-xs relative">
          <div className="w-15 bg-zinc-800 h-full absolute left-0 top-0 rounded-bl-lg"></div>
          <div className="ml-18 text-xs">
            <div className="mb-2 font-semibold">Real-Time Collaboration</div>
            <div className="text-xs text-gray-400 mb-4">Design together with your team in real-time</div>
            
            <div className="flex gap-2 mb-4">
              <div className="w-5 h-5 bg-blue-500 rounded"></div>
              <div className="w-5 h-5 bg-green-500 rounded"></div>
              <div className="w-5 h-5 bg-red-500 rounded"></div>
            </div>

            <div className="flex flex-col gap-1">
              <div className="w-4/5 h-2 bg-zinc-700 rounded"></div>
              <div className="w-3/5 h-2 bg-zinc-700 rounded"></div>
              <div className="w-9/12 h-2 bg-zinc-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (type === 'shiksha') return <ShikshaMockup />;
  if (type === 'enigma') return <EnigmaMockup />;
  return <ShikshaMockup />;
};

export default ProjectMockup;
