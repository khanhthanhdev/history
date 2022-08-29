import React from "react";

import { Stack, Column, Row, Img, Text } from "components";

const ChineseDominationTwoPage = () => {
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
                backgroundImage:
                  "url('images/img_creambackgroun_1080X1920.png')",
              }}
            >
              <Row className="bg-gray_300_7e items-center lg:pr-[23px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] w-[100%]">
                <aside className="w-[54%]">
                  <Column className="">
                    <Column className="bg-white_A700_3d items-center lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[12%]">
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
                <Column className="w-[46%]">
                  <Row className="items-center w-[85%]">
                    <Text className="font-normal not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      HOME
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      PRECIS
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-red_700 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      HISTORY
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      RESOURCES
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      CONTACT
                    </Text>
                  </Row>
                  <Column className="lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] w-[90%]">
                    <Text className="font-normal font-svngratelosdisplay not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
                      THE 1ST OF CD
                    </Text>
                    <Text className="font-medium font-urbanist lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[90%]">
                      The Han Empire imposed a heavy yoke of domination and
                      exploitation on the Au Lac people. Especially dangerous is
                      the policy of Sinicizing the Vietnamese people, turning
                      Vietnamese land into Han land. But the Vietnamese
                      residents did not submit.
                      <br />
                      {`In the year 39, owing to the country's enemies, Hai Ba Trung rebelled and won 65 cities in Linh Nam. The two ladies ascended the throne, ending the first Northern colonial period.`}
                    </Text>
                    <Row className="font-svngratelosdisplay items-center justify-end ml-[auto] 3xl:mt-[114px] lg:mt-[74px] xl:mt-[84px] 2xl:mt-[95px] w-[43%]">
                      <div className="bg-red_700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                      <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 3xl:tracking-ls11 lg:tracking-ls7 xl:tracking-ls8 2xl:tracking-ls9 uppercase w-[auto]">
                        <span className="text-black_900 font-svngratelosdisplay">
                          V{" "}
                        </span>
                        <span className="text-red_700 font-svngratelosdisplay">
                          I
                        </span>
                        <span className="text-black_900 font-svngratelosdisplay">
                          {" "}
                          E{" "}
                        </span>
                        <span className="text-red_700 font-svngratelosdisplay">
                          T
                        </span>
                        <span className="text-black_900 font-svngratelosdisplay">
                          {" "}
                          N{" "}
                        </span>
                        <span className="text-red_700 font-svngratelosdisplay">
                          A
                        </span>
                        <span className="text-black_900 font-svngratelosdisplay">
                          {" "}
                          M
                        </span>
                      </Text>
                      <div className="bg-red_700 lg:h-[5px] xl:h-[6px] 2xl:h-[7px] 3xl:h-[8px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 lg:w-[4px] xl:w-[5px] 2xl:w-[6px] 3xl:w-[7px]"></div>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
          </Column>
          <Column
            className="absolute bg-cover bg-repeat items-center left-[19%] rounded-radius240 shadow-bs top-[0] w-[25%]"
            style={{ backgroundImage: "url('images/img_decoration2_7.png')" }}
          >
            <Img
              src="images/img_blur_25.png"
              className="lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] rounded-radius240 w-[100%]"
              alt="Blur"
            />
          </Column>
        </Stack>
        <Img
          src="images/img_image1_720X720.png"
          className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] inset-y-[0] left-[11%] my-[auto] lg:w-[420px] xl:w-[480px] 2xl:w-[540px] 3xl:w-[648px]"
          alt="ImageOne"
        />
      </Stack>
    </>
  );
};

export default ChineseDominationTwoPage;
