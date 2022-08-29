import React from "react";

import { Stack, Column, Row, Img, Text } from "components";

const ContactPage = () => {
  function handleNavigate4() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate5() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Stack className="bg-white_A700 font-svngratelosdisplay lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] w-[100%]">
        <Stack className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Column
            className="absolute bg-cover bg-repeat items-center w-[100%]"
            style={{ backgroundImage: "url('images/img_background.png')" }}
          >
            <Column
              className="bg-cover bg-repeat items-center w-[100%]"
              style={{
                backgroundImage: "url('images/img_creambackgroun.png')",
              }}
            >
              <Row className="bg-gray_900_b1 items-center lg:pr-[23px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] w-[100%]">
                <aside className="w-[11%]">
                  <Column className="">
                    <Column className="bg-white_A700_3d items-center lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[56%]">
                      <Img
                        src="images/img_bronzedrumlog.png"
                        className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] rounded-radius50 lg:w-[37px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"
                        alt="BronzeDrumLog"
                      />
                      <Img
                        src="images/img_dots.svg"
                        className="lg:h-[180px] xl:h-[206px] 2xl:h-[232px] 3xl:h-[278px] lg:mb-[207px] xl:mb-[237px] 2xl:mb-[267px] 3xl:mb-[320px] lg:mt-[165px] xl:mt-[189px] 2xl:mt-[213px] 3xl:mt-[255px] w-[50%]"
                        alt="Dots"
                      />
                    </Column>
                  </Column>
                </aside>
                <Column className="w-[38%]">
                  <Text className="font-medium font-urbanist lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[78%]">
                    <span className="text-gray_300">
                      My Personal Information:
                      <br />
                    </span>
                    <span className="text-red_700 font-semibold">
                      Fullname:
                    </span>
                    <span className="text-red_700"> </span>
                    <span className="text-gray_300">
                      Bui Minh Thinh
                      <br />
                    </span>
                    <span className="text-red_700 font-semibold">
                      Nickname:
                    </span>
                    <span className="text-gray_300"> </span>
                    <span className="text-gray_300">
                      baemyungseong
                      <br />
                    </span>
                    <span className="text-red_700 font-semibold">Email:</span>
                    <span className="text-gray_300"> </span>
                    <span className="text-gray_300">
                      baemyungseong@gmail.com
                    </span>
                  </Text>
                  <Text className="capitalize font-hunterriver font-normal lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-gray_300 text-shadow-ts2 tracking-ls1 w-[auto]">
                    Bae Myung Seong
                  </Text>
                </Column>
                <Column className="w-[51%]">
                  <Row className="items-center lg:ml-[45px] xl:ml-[52px] 2xl:ml-[58px] 3xl:ml-[70px] 3xl:mr-[116px] lg:mr-[75px] xl:mr-[86px] 2xl:mr-[96px] w-[78%]">
                    <Text className="font-normal not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_300 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      HOME
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_300 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      PRECIS
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_300 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      HISTORY
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_300 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      RESOURCES
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-red_700 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      CONTACT
                    </Text>
                  </Row>
                  <Column className="font-urbanist lg:mt-[190px] xl:mt-[217px] 2xl:mt-[244px] 3xl:mt-[293px] w-[37%]">
                    <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[auto]">
                      My Social Networks:
                    </Text>
                    <Row className="font-sfprotext items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[58%]">
                      <Img
                        src="images/img_vector.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                        alt="Vector"
                      />
                      <a
                        href={"https://www.linkedin.com/in/baemyungseong/"}
                        target="_blank"
                        className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] shadow-bs1 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 underline w-[auto]"
                        rel="noreferrer"
                      >
                        LinkedIn
                      </a>
                    </Row>
                    <Row className="font-sfprotext items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[52%]">
                      <Img
                        src="images/img_twitter.svg"
                        className="common-pointer lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                        onClick={handleNavigate4}
                        alt="twitter"
                      />
                      <a
                        href={"https://twitter.com/baemyungseong"}
                        target="_blank"
                        className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] shadow-bs1 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Twitter
                      </a>
                    </Row>
                    <Row className="font-sfprotext items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[50%]">
                      <Img
                        src="images/img_twitter_48X48.svg"
                        className="common-pointer lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                        onClick={handleNavigate5}
                        alt="twitter One"
                      />
                      <a
                        href={"https://github.com/baemyungseong"}
                        target="_blank"
                        className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] shadow-bs1 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    </Row>
                    <Row className="font-sfprotext items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[59%]">
                      <Img
                        src="images/img_behanceicon.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                        alt="BehanceIcon"
                      />
                      <a
                        href={"https://www.behance.net/baemyungseong"}
                        target="_blank"
                        className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] shadow-bs1 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Behance
                      </a>
                    </Row>
                    <Row className="font-sfprotext lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Img
                        src="images/img_grid.svg"
                        className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                        alt="grid"
                      />
                      <a
                        href={"https://www.figma.com/@baemyungseong"}
                        target="_blank"
                        className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[4px] shadow-bs1 lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Figma Community
                      </a>
                    </Row>
                  </Column>
                  <Row className="font-svngratelosdisplay items-center justify-end ml-[auto] xl:mt-[102px] 2xl:mt-[114px] 3xl:mt-[137px] lg:mt-[89px] w-[36%]">
                    <div className="bg-red_700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                    <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 3xl:tracking-ls11 lg:tracking-ls7 xl:tracking-ls8 2xl:tracking-ls9 uppercase w-[auto]">
                      <span className="text-gray_300 font-svngratelosdisplay">
                        V{" "}
                      </span>
                      <span className="text-red_700 font-svngratelosdisplay">
                        I
                      </span>
                      <span className="text-gray_300 font-svngratelosdisplay">
                        {" "}
                        E{" "}
                      </span>
                      <span className="text-red_700 font-svngratelosdisplay">
                        T
                      </span>
                      <span className="text-gray_300 font-svngratelosdisplay">
                        {" "}
                        N{" "}
                      </span>
                      <span className="text-red_700 font-svngratelosdisplay">
                        A
                      </span>
                      <span className="text-gray_300 font-svngratelosdisplay">
                        {" "}
                        M
                      </span>
                    </Text>
                    <div className="bg-red_700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column
            className="absolute bg-cover bg-repeat items-center left-[19%] rounded-radius240 shadow-bs top-[0] w-[25%]"
            style={{
              backgroundImage: "url('images/img_decoration6_296X480.png')",
            }}
          >
            <Img
              src="images/img_blur_296X480.png"
              className="lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] rounded-radius240 w-[100%]"
              alt="Blur"
            />
          </Column>
        </Stack>
        <Text className="absolute font-normal left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
          CONTACT
        </Text>
        <Column
          className="absolute bg-cover bg-repeat bottom-[11%] items-center right-[0] rounded-radius160 shadow-bs w-[7%]"
          style={{ backgroundImage: "url('images/img_decoration5.png')" }}
        >
          <Img
            src="images/img_blur_320X136.png"
            className="lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] rounded-radius160 w-[100%]"
            alt="Blur One"
          />
        </Column>
      </Stack>
    </>
  );
};

export default ContactPage;
