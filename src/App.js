const Row = ({name, time}) => {
  return (
    <div className="h-20 flex bg-gray-400 border-2 border-white">
      <div className="w-9/12 p-5">
        {name}
      </div>
      <div className="w-3/12 bg-white p-5">
        1:12
      </div>
    </div>
  )
}

function App() {

  const type = ['run', 'beg', 'swim'];

  return (
    <>
      <div className="bg-bg h-screen w-full bg-cover max-w-[400px]  m-auto border-2 border-green-300">
        <div className="flex h-full items-end">
          <div className="w-full">
            <div className="w-16 h-16 rounded-full bg-red-400 m-3"></div>
            <div className="h-56 flex w-full gap-1">
              <div className="flex flex-col justify-between w-2/3 h-full border-2 border-white">
                <p className="p-3 bg-white">UNITED STATES</p>
                <p className="p-3 text-3xl text-white border-b-2 border-white">
                  Shamil <br /> Aidin
                </p>
                <p className="p-3 h-full flex items-center">
                  CROSSFIT FORT RUSSIA
                </p>
              </div>
              <div className="w-1/3 bg-white text-center">
                <p className="p-3">MEN</p>
                <div className="w-2/3 m-auto border border-gray-400"></div>
                <p className="p-3">
                  2023 SEMIFINALS <br /> 5TH
                </p>
                <div className="w-2/3 m-auto border border-gray-400"></div>
                <div className="w-14 h-14 bg-red-300 mt-3 m-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full bg-cover max-w-[400px] m-auto border-2 border-green-300">
        <div className="flex">
          <div className="w-2/12 bg-blue-400">
            <p >SHAMIL AIDIN</p>
          </div>
          <div className="grow">
            <p className="text-3xl p-5 bg-gray-400 border border-white">BENCHMARKS </p>
            {type.map((item, index) => (
              <Row name={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
