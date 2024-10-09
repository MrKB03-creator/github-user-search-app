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
      <div className="w-[730px] h-auto flex flex-col">
        {/* Header */}
        <header className="flex flex-row justify-between w-full mb-9">
          <h1 className="font-bold text-[26px]leading-[38px] text-Lightmode_Text_Header">
            devfinder
          </h1>
          <div className="flex flex-row gap-4 cursor-pointer">
            <p className="text-[13px] font-bold leading-6 text-Lightmode_Text_subHeader">
              DARK
            </p>
            <img src={iconMoon} alt="moon icon" className="w-5 h-5" />
          </div>
        </header>

        <main>
          {/* Search Section */}
          <section className="w-full h-[69px] p-[10px] bg-Lightmode_backgroundContainer rounded-[15px] flex flex-row justify-between items-center shadow-lg shadow-Lightmode_Shadow mb-[24px]">
            <div className="flex fle-row ml-[22px] w-[60%] justify-around">
              <img src={iconSearch} alt="search icon" className="w-6 h-6" />
              <input
                type="text"
                placeholder="Search GitHub username..."
                className="w-[85%] text-[18px] text-Lightmode_Text_Paragraph font-normal outline-none"
              />
            </div>
            <p className="w-[20%] text-[#F74646] text-[15px] font-bold hidden">
              No results
            </p>
            <button className="h-[50px] w-[20%] bg-Blue rounded-[10px] text-white hover:bg-[#60ABFF]">
              Search
            </button>
          </section>

          {/* User Profile */}
          <section className="w-full bg-Lightmode_backgroundContainer rounded-[15px] p-[48px] shadow-lg shadow-Lightmode_Shadow flex flex-row">
            <img
              src="https://avatars.githubusercontent.com/u/583231?v=4"
              alt="User Profile"
              className="w-[117px] h-[117px] rounded-full mr-[37px]"
            />
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between mb-[2px]">
                <h1 className="text-[26px] font-bold leading-[38px] text-Lightmode_Text_Header">The Octocat</h1>
                <p className="text-[15px] text-Lightmode_Text_Paragraph">Joined 25 Jan 2011</p>
              </div>
              <h3 className="text-base text-Blue">@octocat</h3>
              <h2 className="text-[15px] text-Lightmode_Text_Paragraph my-5">This profile has no bio</h2>

              {/* User Profile Stats */}
              <div className="bg-Lightmode_backgroundMain rounded-[10px] flex flex-row justify-start gap-24 items-center px-[32px] h-[85px]">
                <div >
                  <h4 className="text-[13px] text-Lightmode_Text_Paragraph leading-6">Repos</h4>
                  <p className="text-Lightmode_Text_Header text-[22px] font-bold">0</p>
                </div>
                <div>
                <h4 className="text-[13px] text-Lightmode_Text_Paragraph leading-6">Followers</h4>
                  <p className="text-Lightmode_Text_Header text-[22px] font-bold">2,294</p>
                </div>
                <div>
                <h4 className="text-[13px] text-Lightmode_Text_Paragraph leading-6">Following</h4>
                  <p className="text-Lightmode_Text_Header text-[22px] font-bold">9</p>
                </div>
              </div>

              {/* User Profile Info */}
              <div>
                <table>
                  <tr className="flex flex-row justify-evenly">
                    <td className="flex flex-row items-center gap-5">
                      <img src={iconLocation} alt="icon Location" />
                      <p>San Francisco</p>
                    </td>
                    <td className="flex flex-row items-center gap-5">
                      <img src={iconTwitter} alt="icon Twitter" />
                      <p>Not Available</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="flex flex-row items-center gap-5">
                      <img src={iconWebsite} alt="icon Website" />
                      <p>https://github.blog</p>
                    </td>
                    <td className="flex flex-row items-center gap-5">
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
