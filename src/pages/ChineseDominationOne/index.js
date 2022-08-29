import React from "react";

import { Stack, Column, Row, Img, Text } from "components";

const ChineseDominationOnePage = () => {
  return (
    <>
      <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] mx-[auto] w-[100%]">
        <Stack className="absolute bottom-[0] font-urbanist lg:h-[1173px] xl:h-[1342px] 2xl:h-[1509px] 3xl:h-[1811px] w-[100%]">
          <Column
            className="absolute bg-cover bg-repeat items-center top-[0] w-[100%]"
            style={{ backgroundImage: "url('images/img_background.png')" }}
          >
            <Column
              className="bg-cover bg-repeat items-center w-[100%]"
              style={{
                backgroundImage:
                  "url('images/img_creambackgroun_1080X1920.png')",
              }}
            >
              <Row className="bg-gray_300_7e lg:pr-[625px] xl:pr-[715px] 2xl:pr-[804px] 3xl:pr-[965px] w-[100%]">
                <aside className="w-[25%]">
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
                <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[243px] xl:mt-[278px] 2xl:mt-[312px] 3xl:mt-[375px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[75%]">
                  For more than a thousand years of Northern domination and
                  resistance against Northern domination, our people have never
                  resigned but always struggled against oppression and
                  domination. The will to self-reliance and self-reliance to win
                  national independence has never cooled down, reflected in the
                  uprisings and proclaimed kings and emperors (Truong Vuong, Ly
                  Nam De, Trieu Viet Vuong, Mai Hac De,...).
                </Text>
              </Row>
            </Column>
          </Column>
          <Column
            className="absolute bg-cover bg-repeat items-center left-[19%] rounded-radius240 shadow-bs top-[0] w-[25%]"
            style={{ backgroundImage: "url('images/img_decoration2_5.png')" }}
          >
            <Img
              src="images/img_blur_21.png"
              className="lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] rounded-radius240 w-[100%]"
              alt="Blur"
            />
          </Column>
          <Stack className="absolute font-svngratelosdisplay lg:h-[1173px] xl:h-[1342px] 2xl:h-[1509px] 3xl:h-[1811px] right-[0] w-[50%]">
            <Img
              src="images/img_image_20.png"
              className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] rounded-radius1200 top-[0] w-[100%]"
              alt="Image"
            />
            <Stack className="absolute lg:h-[1173px] xl:h-[1342px] 2xl:h-[1509px] 3xl:h-[1811px] w-[100%]">
              <Img
                src="images/img_blur_22.png"
                className="absolute lg:h-[1173px] xl:h-[1342px] 2xl:h-[1509px] 3xl:h-[1811px] rounded-radius1005 w-[100%]"
                alt="Blur One"
              />
              <Column className="absolute inset-x-[0] mx-[auto] top-[2%] w-[92%]">
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
            </Stack>
          </Stack>
        </Stack>
        <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
          CHINESE DOMINATION
        </Text>
      </Stack>
    </>
  );
};

export default ChineseDominationOnePage;
