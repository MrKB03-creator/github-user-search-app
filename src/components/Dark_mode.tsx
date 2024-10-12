import React, { useState } from "react";
import {
  iconCompany,
  iconLocation,
  iconSun,
  iconSearch,
  iconTwitter,
  iconWebsite,
  githubIconDarkmode,
} from "../assets/Images";

const Dark_mode = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<UserData | null>(null);
  const [userNotFound, setUserNotFound] = useState(false);

  interface UserData {
    avatar_url: string;
    bio: string | null;
    name: string;
    login: string;
    location: string | null;
    twitter_username: string | null;
    blog: string;
    company: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
  }

  // Function to fetch the user data
  const fetchUserData = () => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
          if (response.status === 404) {
            setUserNotFound(true);
            setUserData(null);
            return null;
          } else {
            return response.json();
          }
        })
        .then((data) => {
          if (data) {
            setUserData(data);
            setUserNotFound(false);
          }
        })
        .catch((error) => {
          console.error("Error: ", error);
          setUserNotFound(true);
        });
    }
  };

  // Function to handle the input
  const hanldleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  // Function to handle the search button
  const handleSearch = () => {
    fetchUserData();
  };

  // Function to format the date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-Darkmode_backgroundMain">
      <div className="lg:w-[730px] md:w-[563px] max-sm:w-[327px] h-auto flex flex-col">
        {/* Header */}
        <header className="flex flex-row justify-between w-full mb-9">
          <h1 className="font-bold text-[26px] leading-[38px] text-Darkmode_Text">
            devfinder
          </h1>
          <button className="flex flex-row gap-4 cursor-pointer">
            <p className="text-[13px] font-bold leading-6 text-Darkmode_Text hover:text-[#90A4D4]">
              LIGHT
            </p>
            <img
              src={iconSun}
              alt="moon icon"
              className="w-5 h-5 hover:text-[#90A4D4]"
            />
          </button>
        </header>

        <main>
          {/* Search Section */}
          <section className="w-full h-[69px] p-[10px] bg-Darkmode_backgroundContainer rounded-[15px] flex flex-row justify-between items-center shadow-lg shadow-Lightmode_Shadow mb-[24px]">
            <div className="flex fle-row ml-[22px] w-[60%] justify-around max-sm:ml-[10px]">
              <img
                src={iconSearch}
                alt="search icon"
                className="w-6 h-6 max-sm:w-5 max-sm:h-5"
              />
              <input
                type="text"
                value={username}
                onChange={hanldleInput}
                placeholder="Search GitHub username..."
                className="w-[85%] text-[18px] text-Darkmode_Text font-normal outline-none max-sm:text-[12px] bg-transparent"
              />
            </div>
            <p
              className={`w-[20%] text-[#F74646] text-[15px] font-bold max-sm:text-[12px] ${
                userNotFound ? "block" : "hidden"
              }`}
            >
              No results
            </p>
            <button
              onClick={handleSearch}
              className="h-[50px] w-[20%] bg-Blue rounded-[10px] text-white hover:bg-[#60ABFF] max-sm:text-[14px] max-sm:w-[25%]"
            >
              Search
            </button>
          </section>

          {/* User Profile */}

          <section className="w-full bg-Darkmode_backgroundContainer rounded-[15px] p-[32px] shadow-lg flex flex-col lg:relative lg:h-[444px]">
            <div className="flex md:flex-row">
              <img
                src={userData?.avatar_url ? userData?.avatar_url : githubIconDarkmode}
                alt="User Profile"
                className="w-[117px] h-[117px] rounded-full mr-[37px] max-sm:w-[70px] max-sm:h-[70px] max-sm:mr-[19px] "
              />
              <div className="flex flex-col w-full ">
                <div className="flex justify-between mb-[2px] lg:flex-row md:flex-col max-sm:flex-col ">
                  <div className="flex-block">
                    <h1
                      className={`text-[26px] font-bold leading-[38px] ${
                        userData?.name ? "text-Darkmode_Text" : "text-[#A5B4CD]"
                      } max-sm:text-[16px] max-sm:leading-4`}
                    >
                      {userData?.name ? userData?.name : "Not Available"}
                    </h1>
                    <h3
                      className={`text-base ${
                        userData?.name ? "text-Blue" : "text-[#A5B4CD]"
                      } max-sm:text-[13px]`}
                    >
                      @{userData?.login ? userData.login : "Not Available"}
                    </h3>
                  </div>
                  <p
                    className={`text-[15px] ${
                      userData?.created_at
                        ? "text-Darkmode_Text"
                        : "text-[#A5B4CD]"
                    } max-sm:text-[13px]`}
                  >
                    Joined{" "}
                    {userData?.created_at
                      ? formatDate(userData.created_at)
                      : "Not Available"}
                  </p>
                </div>
              </div>
            </div>

            {/* User Profile Bio */}
            <div className="lg:absolute left-[25%] top-[22%]">
              <h2
                className={`text-[15px] ${
                  userData?.bio ? "text-Darkmode_Text" : "text-[#A5B4CD]"
                } my-5`}
              >
                {userData?.bio ? userData.bio : "Not Available"}
              </h2>

              {/* User Profile Stats */}
              <div className="bg-Darkmode_backgroundMain rounded-[10px] flex flex-row justify-start gap-24 items-center px-[32px] h-[85px] max-sm:gap-0 max-sm:text-center max-sm:justify-between">
                <div>
                  <h4 className="text-[13px] text-Darkmode_Text leading-6 max-sm:text-[11px]">
                    Repos
                  </h4>
                  <p
                    className={`${
                      userData?.public_repos
                        ? "text-Darkmode_Text"
                        : "text-[#A5B4CD]"
                    } text-[22px] font-bold max-sm:text-[16px]`}
                  >
                    {userData?.public_repos ? userData.public_repos : "0"}
                  </p>
                </div>
                <div>
                  <h4 className="text-[13px] text-Darkmode_Text leading-6 max-sm:text-[11px]">
                    Followers
                  </h4>
                  <p
                    className={`${
                      userData?.followers
                        ? "text-Darkmode_Text"
                        : "text-[#A5B4CD]"
                    } text-[22px] font-bold max-sm:text-[16px]`}
                  >
                    {userData?.followers ? userData.followers : "0"}
                  </p>
                </div>
                <div>
                  <h4 className="text-[13px] text-Darkmode_Text leading-6 max-sm:text-[11px]">
                    Following
                  </h4>
                  <p
                    className={`${
                      userData?.following
                        ? "text-Darkmode_Text"
                        : "text-[#A5B4CD]"
                    } text-[22px] font-bold max-sm:text-[16px]`}
                  >
                    {userData?.following ? userData.following : "0"}
                  </p>
                </div>
              </div>

              {/* User Profile Info */}
              <div className="w-full mt-[37px]">
                <table className="flex flex-row justify-between max-sm:flex-col">
                  <tr>
                    <td
                      className={`flex flex-row items-center gap-5 mb-[15px] max-sm:mb-[17px] ${
                        userData?.location
                          ? "text-Darkmode_Text"
                          : "text-[#A5B4CD]"
                      }`}
                    >
                      <img src={iconLocation} alt="icon Location" />
                      <p>
                        {userData?.location
                          ? userData.location
                          : "Not Available"}
                      </p>
                    </td>
                    <td
                      className={`flex flex-row items-center gap-3.5 cursor-pointer max-sm:mb-[17px] ${
                        userData?.blog ? "text-Darkmode_Text" : "text-[#A5B4CD]"
                      }`}
                    >
                      <img src={iconWebsite} alt="icon Website" />
                      <p>
                        <a
                          href={userData?.blog}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {userData?.blog ? userData.blog : "Not Available"}
                        </a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={`flex flex-row items-center gap-5 mb-[15px]  max-sm:mb-[17px] ${
                        userData?.twitter_username
                          ? "text-Darkmode_Text"
                          : "text-[#A5B4CD] fill-[#A5B4CD]"
                      }`}
                    >
                      <img src={iconTwitter} alt="icon Twitter" />
                      <p>
                        {userData?.twitter_username
                          ? userData.twitter_username
                          : "Not Available"}
                      </p>
                    </td>
                    <td
                      className={`flex flex-row items-center gap-5 max-sm:mb-[17px] ${
                        userData?.company
                          ? "text-Darkmode_Text"
                          : "text-[#A5B4CD]"
                      }`}
                    >
                      <img src={iconCompany} alt="icon Company" />
                      <p>
                        {userData?.company ? userData.company : "Not Available"}
                      </p>
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

export default Dark_mode;
