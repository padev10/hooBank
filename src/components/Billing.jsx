import { apple, bill, google } from "../assets";

const Billing = () => (
  <section id="product" className="sectionReverse">
    {/* right side */}
    <div className="sectionImgReverse ">
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* adding left gradients */}
      <div className="absolute z-3 -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-0 -left-1/2 top-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    {/* left side */}
    <div className="sectionInfo">
      <h2 className="heading2">Easily control your billing & invoicing.</h2>
      <p className="paragraph max-w-[470px]">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>

      {/* images */}
      <div className="flex flex-row flex-wrap w-full sm:mt-10 mt-6">
        <img
          src={apple}
          alt="apple store"
          className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="play store"
          className="w-[128px] h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
