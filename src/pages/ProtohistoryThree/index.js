import React from "react";

import { Stack, Column, Row, Img, Text } from "components";

const ProtohistoryThreePage = () => {
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
                <aside className="w-[18%]">
                  <Column className="">
                    <Column className="bg-white_A700_3d items-center lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[35%]">
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
                <Column className="w-[82%]">
                  <Row className="font-svngratelosdisplay items-center justify-end ml-[auto] w-[48%]">
                    <Text className="font-normal not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_300 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      HOME
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_300 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      PRECIS
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-red_700 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      HISTORY
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_300 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      RESOURCES
                    </Text>
                    <Text className="font-normal lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] not-italic lg:text-[23px] xl:text-[26px] 2xl:text-[30px] 3xl:text-[36px] text-gray_300 text-shadow-ts tracking-ls1 uppercase w-[auto]">
                      CONTACT
                    </Text>
                  </Row>
                  <Text className="font-medium font-urbanist lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mr-[175px] xl:mr-[200px] 2xl:mr-[225px] 3xl:mr-[270px] lg:mt-[189px] xl:mt-[216px] 2xl:mt-[243px] 3xl:mt-[292px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[81%]">
                    Before 218 BC, Vietnam had no official history, at this time
                    legend and history were still intertwined. People often
                    refer to the legends of Kinh Duong Vuong, Lac Long Quan, Phu
                    Dong Thien Vuong, Son Tinh - Thuy Tinh to explain the origin
                    and struggle for survival of the nation.
                    <br />
                    {`From 257 - 208 BC, Thuc Phan, the leader of the Au Viet people, merged with the Van Lang country of Lac Viet, named the country as Au Lac, and called himself An Duong Vuong. During this period, history was recreated through the lens of legend with An Duong's construction of Co Loa citadel.`}
                    <br />
                    From 217 - 111 BC, Trieu Da, originally from Han people,
                    annexed Au Lac. This event is also reflected in the legend
                    of the love of Trong Thuy and My Chau. After capturing Au
                    Lac, Trieu Da founded Nam Viet.
                  </Text>
                  <Row className="font-svngratelosdisplay items-center justify-end ml-[auto] lg:mt-[42px] xl:mt-[48px] 2xl:mt-[54px] 3xl:mt-[64px] w-[22%]">
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
            style={{ backgroundImage: "url('images/img_decoration6_6.png')" }}
          >
            <Img
              src="images/img_blur_23.png"
              className="lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] rounded-radius240 w-[100%]"
              alt="Blur"
            />
          </Column>
        </Stack>
        <Text className="absolute font-normal inset-x-[0] mx-[auto] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[max-content]">
          PROTOHISTORY
        </Text>
      </Stack>
    </>
  );
};

export default ProtohistoryThreePage;
