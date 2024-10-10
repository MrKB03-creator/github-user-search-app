import {
  iconCompany,
  iconLocation,
  iconMoon,
  iconSearch,
  iconTwitter,
  iconWebsite,
} from "../assets/Images";

const Light_mode = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-Lightmode_backgroundMain">
      <div className="lg:w-[730px] md:w-[563px] max-sm:w-[327px] h-auto flex flex-col">
        {/* Header */}
        <header className="flex flex-row justify-between w-full mb-9">
          <h1 className="font-bold text-[26px]leading-[38px] text-Lightmode_Text_Header">
            devfinder
          </h1>
            <button className="flex flex-row gap-4 cursor-pointer">
              <p className="text-[13px] font-bold leading-6 text-Lightmode_Text_subHeader hover:text-[#90A4D4]">
              DARK
              </p>
              <img src={iconMoon} alt="moon icon" className="w-5 h-5 hover:text-[#90A4D4]" />
            </button>
        </header>

        <main>
          {/* Search Section */}
          <section className="w-full h-[69px] p-[10px] bg-Lightmode_backgroundContainer rounded-[15px] flex flex-row justify-between items-center shadow-lg shadow-Lightmode_Shadow mb-[24px]">
            <div className="flex fle-row ml-[22px] w-[60%] justify-around max-sm:ml-[10px]">
              <img
                src={iconSearch}
                alt="search icon"
                className="w-6 h-6 max-sm:w-5 max-sm:h-5"
              />
              <input
                type="text"
                placeholder="Search GitHub username..."
                className="w-[85%] text-[18px] text-Lightmode_Text_Paragraph font-normal outline-none max-sm:text-[12px]"
              />
            </div>
            <p className="w-[20%] text-[#F74646] text-[15px] font-bold hidden max-sm:text-[12px]">
              No results
            </p>
            <button className="h-[50px] w-[20%] bg-Blue rounded-[10px] text-white hover:bg-[#60ABFF] max-sm:text-[14px] max-sm:w-[25%]">
              Search
            </button>
          </section>

          {/* User Profile */}
          <section className="w-full bg-Lightmode_backgroundContainer rounded-[15px] p-[32px] shadow-lg shadow-Lightmode_Shadow flex flex-col lg:relative lg:h-[444px]">
            <div className="flex md:flex-row">
              <img
                src="https://avatars.githubusercontent.com/u/583231?v=4"
                alt="User Profile"
                className="w-[117px] h-[117px] rounded-full mr-[37px] max-sm:w-[70px] max-sm:h-[70px] max-sm:mr-[19px]"
              />
              <div className="flex flex-col w-full ">
                <div className="flex justify-between mb-[2px] lg:flex-row md:flex-col max-sm:flex-col ">
                  <div className="flex-block">
                    <h1 className="text-[26px] font-bold leading-[38px] text-Lightmode_Text_Header max-sm:text-[16px] max-sm:leading-4">
                      The Octocat
                    </h1>
                    <h3 className="text-base text-Blue max-sm:text-[13px]">
                      @octocat
                    </h3>
                  </div>
                  <p className="text-[15px] text-Lightmode_Text_Paragraph max-sm:text-[13px]">
                    Joined 25 Jan 2011
                  </p>
                </div>
              </div>
            </div>

            {/* User Profile Bio */}
            <div className="lg:absolute left-[25%] top-[22%]">
              <h2 className="text-[15px] text-Lightmode_Text_Paragraph my-5">
                This profile has no bio
              </h2>

              {/* User Profile Stats */}
              <div className="bg-Lightmode_backgroundMain rounded-[10px] flex flex-row justify-start gap-24 items-center px-[32px] h-[85px] max-sm:gap-0 max-sm:text-center max-sm:justify-between">
                <div>
                  <h4 className="text-[13px] text-Lightmode_Text_Paragraph leading-6 max-sm:text-[11px]">
                    Repos
                  </h4>
                  <p className="text-Lightmode_Text_Header text-[22px] font-bold max-sm:text-[16px]">
                    0
                  </p>
                </div>
                <div>
                  <h4 className="text-[13px] text-Lightmode_Text_Paragraph leading-6 max-sm:text-[11px]">
                    Followers
                  </h4>
                  <p className="text-Lightmode_Text_Header text-[22px] font-bold max-sm:text-[16px]">
                    2,294
                  </p>
                </div>
                <div>
                  <h4 className="text-[13px] text-Lightmode_Text_Paragraph leading-6 max-sm:text-[11px]">
                    Following
                  </h4>
                  <p className="text-Lightmode_Text_Header text-[22px] font-bold max-sm:text-[16px]">
                    9
                  </p>
                </div>
              </div>

              {/* User Profile Info */}
              <div className="w-full mt-[37px]">
                <table className="flex flex-row justify-between max-sm:flex-col">
                  <tr>
                    <td className="flex flex-row items-center gap-5 mb-[15px] max-sm:mb-[17px] text-Lightmode_Text_Paragraph">
                      <img src={iconLocation} alt="icon Location" />
                      <p>San Francisco</p>
                    </td>
                    <td className="flex flex-row items-center gap-5 max-sm:mb-[17px] text-Lightmode_Text_Paragraph">
                      <img src={iconTwitter} alt="icon Twitter" />
                      <p>Not Available</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex flex-row items-center gap-5 mb-[15px] cursor-pointer max-sm:mb-[17px] text-Lightmode_Text_Paragraph">
                      <img src={iconWebsite} alt="icon Website" />
                      <p>https://github.blog</p>
                    </td>
                    <td className="flex flex-row items-center gap-5 max-sm:mb-[17px] text-Lightmode_Text_Paragraph">
                      <img src={iconCompany} alt="icon Company" />
                      <p>@github</p>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Light_mode;
