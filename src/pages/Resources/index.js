import React from "react";

import { Stack, Column, Row, Img, Text } from "components";

const ResourcesPage = () => {
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
                <Column className="w-[89%]">
                  <Row className="items-center justify-end ml-[auto] w-[45%]">
                    <Text className="font-normal not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      HOME
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      PRECIS
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      HISTORY
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-red_700 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      RESOURCES
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_900 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      CONTACT
                    </Text>
                  </Row>
                  <Row className="font-urbanist xl:mr-[106px] 2xl:mr-[120px] 3xl:mr-[144px] lg:mr-[93px] 2xl:mt-[111px] 3xl:mt-[133px] lg:mt-[86px] xl:mt-[98px] w-[90%]">
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[103px] xl:mt-[118px] 2xl:mt-[133px] 3xl:mt-[160px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[57%]">
                      <span className="text-gray_900 font-urbanist">
                        To serve the Website Design, we have used some resources
                        for reference content:
                        <br />
                      </span>
                      <span className="text-red_700 font-urbanist font-semibold">
                        Asean Defence - Military Meeting:
                      </span>
                      <span className="text-red_700 font-urbanist"> </span>
                      <span className="text-gray_900 font-urbanist underline">
                        https://bom.so/R6ZfLi
                        <br />
                      </span>
                      <span className="text-red_700 font-urbanist font-semibold">
                        Nguoikesu:
                      </span>
                      <span className="text-gray_900 font-urbanist"> </span>
                      <span className="text-gray_900 font-urbanist underline">
                        https://bom.so/AxyhnJ
                        <br />
                      </span>
                      <span className="text-red_700 font-urbanist font-semibold">
                        Tukhicongdentamlinh:
                      </span>
                      <span className="text-gray_900 font-urbanist"> </span>
                      <span className="text-gray_900 font-urbanist underline">
                        https://bom.so/4iHHOv
                        <br />
                      </span>
                      <span className="text-red_700 font-urbanist font-semibold">
                        Wikipedia:
                      </span>
                      <span className="text-gray_900 font-urbanist"> </span>
                      <span className="text-gray_900 font-urbanist underline">
                        https://bom.so/eo9inL
                      </span>
                    </Text>
                    <Stack className="lg:h-[397px] xl:h-[454px] 2xl:h-[511px] 3xl:h-[613px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] w-[40%]">
                      <Column
                        className="absolute bg-cover bg-repeat bottom-[0] items-center left-[0] shadow-bs4 w-[73%]"
                        style={{
                          backgroundImage:
                            "url('images/img_image1_560X436.png')",
                        }}
                      >
                        <div className="bg-bluegray_100_3d border-4 border-gray_900_51 border-solid lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] w-[100%]"></div>
                      </Column>
                      <Column
                        className="absolute bg-cover bg-repeat items-center right-[0] shadow-bs4 top-[0] w-[73%]"
                        style={{
                          backgroundImage:
                            "url('images/img_image2_560X436.png')",
                        }}
                      >
                        <div className="bg-bluegray_100_3d border-4 border-gray_900_51 border-solid lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] w-[100%]"></div>
                      </Column>
                    </Stack>
                  </Row>
                  <Row className="font-svngratelosdisplay items-center justify-end ml-[auto] lg:mt-[50px] xl:mt-[58px] 2xl:mt-[65px] 3xl:mt-[78px] w-[20%]">
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
              </Row>
            </Column>
          </Column>
          <Column
            className="absolute bg-cover bg-repeat items-center left-[19%] rounded-radius240 shadow-bs top-[0] w-[25%]"
            style={{ backgroundImage: "url('images/img_decoration2_12.png')" }}
          >
            <Img
              src="images/img_blur_37.png"
              className="lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] rounded-radius240 w-[100%]"
              alt="Blur Two"
            />
          </Column>
        </Stack>
        <Text className="absolute font-normal left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
          resources
        </Text>
        <Column
          className="absolute bg-cover bg-repeat bottom-[11%] items-center right-[0] rounded-radius160 shadow-bs w-[7%]"
          style={{ backgroundImage: "url('images/img_decoration4_2.png')" }}
        >
          <Img
            src="images/img_blur_38.png"
            className="lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] rounded-radius160 w-[100%]"
            alt="Blur Three"
          />
        </Column>
      </Stack>
    </>
  );
};

export default ResourcesPage;
