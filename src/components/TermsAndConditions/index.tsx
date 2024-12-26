import nupiIcon from '../../assets/nupi-icon.svg'; // Update this path based on your project structure

const TermsAndConditions = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-[#f6f9fb] min-h-screen">
      {/* NUPI Logo */}
      <div className="my-6">
        <img src={nupiIcon} alt="NUPI Logo" className="w-24 h-24" />
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>

      {/* Terms and Conditions Content */}
      <div className="border border-[#1B6B82] rounded-md bg-white p-6 max-w-md w-full">
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur. Tellus eu justo euismod condimentum dolor sed condimentum. Nibh pretium
          platea eu sodales duis egestas dis a blandit. Varius odio morbi accumsan eget consequat velit. Sit augue mauris in 
          fermentum. Est nunc nulla scelerisque consectetur volutpat faucibus semper nam. Adipiscing aliquet viverra pharetra
          adipiscing ac dictum consequat libero est. Nibh arcu pharetra ut vulputate sed posuere purus. Ultricies nunc vestibulum
          auctor quisque ultricies gravida orci in. Justo turpis in porttitor ac.
        </p>
        <br />
        <p className="text-gray-700">
          Sit pulvinar id tempor nec est vel interdum accumsan. Penatibus consequat ornare consectetur porttitor egestas dui 
          diam vulputate. Viverra lectus lacus venenatis leo viverra nisl quisque. Sed et ultricies massa mollis volutpat proin
          neque arcu. Aliquet vitae cras interdum purus volutpat quis purus et. Turpis aenean ultricies donec tellus. Adipiscing
          sed congue nibh scelerisque. Sapien gravida quam praesent nec. Vulputate lacus amet fermentum lacus maecenas in
          venenatis. Mi posuere viverra blandit turpis sodales. Rhoncus nibh sit aenean phasellus ultricies nisl varius. Pulvinar
          urna donec mauris fusce. Vitae sit eget habitant ultricies id et ut morbi venenatis. Suscipit ut quis magna laoreet commodo.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
