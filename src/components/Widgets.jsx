import Widget1 from "./Widget1";
import Widget2 from "./Widget2";

const Widgets = () => {
  return (
    <section>
      <div className="mx-auto flex md:h-80 max-w-7xl flex-col justify-between gap-4 p-4 md:flex-row md:p-0">
        <div className="h-full flex-1 bg-white">
          <Widget1 />
        </div>
        <div className="h-full flex-1 bg-white rounded-xl">
          <Widget2 />
        </div>
      </div>
    </section>
  );
};

export default Widgets;
