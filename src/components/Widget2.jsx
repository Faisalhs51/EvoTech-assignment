import { GoDotFill } from "react-icons/go";

const Widget2 = () => {
  return (
    <section>
      <div className="flex flex-col gap-6 p-8">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">Sales Progress</h3>
          <div className="flex gap-0">
            <GoDotFill className="h-3 text-[#B5B5C3] opacity-70" />
            <GoDotFill className="h-3 text-[#B5B5C3]" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded-xl bg-[#EEE5FF]"></div>
            <div className="flex flex-col">
              <p className="text-sm font-medium">Briviba Saas</p>
              <p className="text-xs font-medium text-[#B5B5C3]">
                PHP, SQLite, Artisan Climm
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded-xl bg-[#FFF4DE]"></div>
            <div className="flex flex-col">
              <p className="text-sm font-medium">Briviba Saas</p>
              <p className="text-xs font-medium text-[#B5B5C3]">
                PHP, SQLite, Artisan Climm
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded-xl bg-[#C9F7F5]"></div>
            <div className="flex flex-col">
              <p className="text-sm font-medium">Briviba Saas</p>
              <p className="text-xs font-medium text-[#B5B5C3]">
                PHP, SQLite, Artisan Climm
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded-xl bg-[#FFE2E5]"></div>
            <div className="flex flex-col">
              <p className="text-sm font-medium">Briviba Saas</p>
              <p className="text-xs font-medium text-[#B5B5C3]">
                PHP, SQLite, Artisan Climm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Widget2;
