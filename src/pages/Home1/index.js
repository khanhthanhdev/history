import React from "react";

import { Stack, Row, Column, Img, Text } from "components";

const Home1Page = () => {
  return (
    <>
      <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] w-[100%]">
        <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
            <Row
              className="absolute bg-cover bg-repeat items-center justify-evenly w-[100%]"
              style={{ backgroundImage: "url('images/img_background.png')" }}
            >
              <Column
                className="bg-cover bg-repeat items-center w-[50%]"
                style={{
                  backgroundImage: "url('images/img_blackbackgroun.png')",
                }}
              >
                <Row className="bg-gray_900_ea lg:pr-[192px] xl:pr-[220px] 2xl:pr-[247px] 3xl:pr-[297px] w-[100%]">
                  <aside className="w-[34%]">
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
                  <Text className="font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:mt-[334px] xl:mt-[382px] 2xl:mt-[430px] 3xl:mt-[515px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_300 w-[66%]">
                    In the course of historical development, Vietnam is located
                    in one of the areas considered the cradle of mankind. <br />
                    Experiencing a vast history, the country of Vietnam we are
                    today is thanks to a strength of the whole nation, people of
                    a country who share the same flag colors in their hearts.
                  </Text>
                </Row>
              </Column>
              <Column
                className="bg-cover bg-repeat font-svngratelosdisplay items-center w-[50%]"
                style={{
                  backgroundImage:
                    "url('images/img_creambackgroun_1080X960.png')",
                }}
              >
                <Column className="bg-gray_300_7e justify-end lg:p-[23px] xl:p-[26px] 2xl:p-[30px] 3xl:p-[36px] w-[100%]">
                  <Row className="items-center lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mr-[auto] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[84%]">
                    <Text className="font-normal not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-red_700 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      HOME
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      PRECIS
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      HISTORY
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      RESOURCES
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      CONTACT
                    </Text>
                  </Row>
                  <Row className="items-center justify-end mb-[1px] lg:ml-[314px] xl:ml-[359px] 2xl:ml-[404px] 3xl:ml-[485px] lg:mt-[533px] xl:mt-[610px] 2xl:mt-[686px] 3xl:mt-[823px] w-[39%]">
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
            <Column
              className="absolute bg-cover bg-repeat items-center left-[19%] rounded-radius240 shadow-bs top-[0] w-[25%]"
              style={{
                backgroundImage: "url('images/img_decoration2_10.png')",
              }}
            >
              <Img
                src="images/img_blur_29.png"
                className="lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] rounded-radius240 w-[100%]"
                alt="Blur"
              />
            </Column>
          </Stack>
          <Stack className="absolute lg:h-[467px] xl:h-[534px] 2xl:h-[601px] 3xl:h-[721px] inset-[0] justify-center m-[auto] shadow-bs2 w-[29%]">
            <Img
              src="images/img_image_800X480.png"
              className="absolute lg:h-[467px] xl:h-[534px] 2xl:h-[601px] 3xl:h-[721px] inset-x-[7%] w-[86%]"
              alt="Image"
            />
            <div className="absolute bg-bluegray_100_3d lg:h-[467px] xl:h-[534px] 2xl:h-[601px] 3xl:h-[721px] w-[100%]"></div>
          </Stack>
        </Stack>
        <div className="absolute bg-red_700 bottom-[9%] xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] right-[31%] rounded-radius50 shadow-bs3 xl:w-[106px] 2xl:w-[120px] 3xl:w-[144px] lg:w-[93px]"></div>
        <Text className="absolute font-normal font-svngratelosdisplay leading-[normal] left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[34%]">
          Brief History
          <br />
          of Vietnam
        </Text>
        <Column
          className="absolute bg-cover bg-repeat bottom-[11%] items-center right-[0] rounded-radius160 shadow-bs w-[7%]"
          style={{
            backgroundImage: "url('images/img_decoration4_320X136.png')",
          }}
        >
          <Img
            src="images/img_blur_30.png"
            className="lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] rounded-radius160 w-[100%]"
            alt="Blur Two"
          />
        </Column>
      </Stack>
    </>
  );
};

export default Home1Page;
