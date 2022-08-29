import React from "react";

import { Stack, Column, Row, Img, Text } from "components";

const FrenchDominationThreePage = () => {
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
                  <Row className="items-center 3xl:mr-[116px] lg:mr-[75px] xl:mr-[86px] 2xl:mr-[96px] w-[85%]">
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
                  <Row className="items-center justify-end ml-[auto] lg:mt-[533px] xl:mt-[610px] 2xl:mt-[686px] 3xl:mt-[823px] w-[39%]">
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
            style={{ backgroundImage: "url('images/img_decoration2_9.png')" }}
          >
            <Img
              src="images/img_blur_28.png"
              className="lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] rounded-radius240 w-[100%]"
              alt="Blur"
            />
          </Column>
        </Stack>
        <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] inset-[0] justify-center m-[auto] w-[71%]">
          <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[93%]">
            <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[92%]">
              <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[92%]">
                <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[91%]">
                  <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[90%]">
                    <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[89%]">
                      <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[88%]">
                        <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[86%]">
                          <Img
                            src="images/img_image9.png"
                            className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[84%]"
                            alt="ImageNine"
                          />
                          <Img
                            src="images/img_image10.png"
                            className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[84%]"
                            alt="ImageTen"
                          />
                        </Stack>
                        <Img
                          src="images/img_image5_720X504.png"
                          className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[72%]"
                          alt="ImageFive"
                        />
                      </Stack>
                      <Img
                        src="images/img_image6_720X504.png"
                        className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[64%]"
                        alt="ImageSix"
                      />
                    </Stack>
                    <Img
                      src="images/img_image7_720X504.png"
                      className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[57%]"
                      alt="ImageSeven"
                    />
                  </Stack>
                  <Img
                    src="images/img_image8_720X504.png"
                    className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[51%]"
                    alt="ImageEight"
                  />
                </Stack>
                <Img
                  src="images/img_image4_1.png"
                  className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[47%]"
                  alt="ImageFour"
                />
              </Stack>
              <Img
                src="images/img_image3_1.png"
                className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[43%]"
                alt="ImageThree"
              />
            </Stack>
            <Img
              src="images/img_image2_1.png"
              className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[40%]"
              alt="ImageTwo"
            />
          </Stack>
          <Img
            src="images/img_image1_6.png"
            className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[37%]"
            alt="ImageOne"
          />
        </Stack>
      </Stack>
    </>
  );
};

export default FrenchDominationThreePage;
