import React from "react";

import {
  Stack,
  Column,
  Row,
  Img,
  Text,
  List,
  Slider,
  Button,
} from "components";

const TimelinePage = () => {
  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef();
  const [sliderState1, setsliderState1] = React.useState(0);

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
                <Column className="w-[89%]">
                  <Row className="items-center justify-end ml-[auto] w-[45%]">
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
                  <Row className="font-urbanist lg:mr-[371px] xl:mr-[424px] 2xl:mr-[477px] 3xl:mr-[572px] lg:mt-[301px] xl:mt-[344px] 2xl:mt-[387px] 3xl:mt-[464px] w-[62%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[91%]"
                      orientation="vertical"
                    >
                      <Stack className="2xl:h-[109px] 3xl:h-[130px] lg:h-[84px] xl:h-[97px] xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] lg:my-[21px] xl:my-[25px] 2xl:my-[28px] 3xl:my-[33px] w-[98%]">
                        <Slider
                          slidesToShow={5}
                          activeIndex={sliderState}
                          onSlideChanged={(e) => {
                            setsliderState(e?.item);
                          }}
                          activeSlideCSS="scale-[0.59] absolute"
                          magnifiedIndex={2}
                          centerMode
                          ref={sliderRef}
                          className="absolute w-[100%]"
                          items={[...Array(15)].map(() => (
                            <React.Fragment key={Math.random()}>
                              <Column className="items-center shadow-bs w-[100%]">
                                <Button
                                  className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[100%]"
                                  shape="RoundedBorder8"
                                  size="sm"
                                  variant="FillGray300"
                                >
                                  Chinese Domination
                                </Button>
                                <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_300 w-[auto]">
                                  111 BC - 938
                                </Text>
                              </Column>
                            </React.Fragment>
                          ))}
                          Indicator={({ isActive }) => {
                            if (isActive) {
                              return <div className="" />;
                            }
                            return (
                              <div className="" role="button" tabIndex={0} />
                            );
                          }}
                        />
                        <Row className="absolute items-center justify-between left-[24%] top-[25%] w-[36%]">
                          <Img
                            src="images/img_arrowright.svg"
                            className="cursor-pointer lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[8%]"
                            onClick={() => sliderRef.current?.slidePrev()}
                            alt="arrowright Two"
                          />
                          <Img
                            src="images/img_arrowright.svg"
                            className="cursor-pointer lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[8%]"
                            onClick={() => sliderRef.current?.slideNext()}
                            alt="arrowright Three"
                          />
                        </Row>
                      </Stack>
                      <Stack className="2xl:h-[109px] 3xl:h-[130px] lg:h-[84px] xl:h-[97px] lg:my-[21px] xl:my-[25px] 2xl:my-[28px] 3xl:my-[33px] w-[100%]">
                        <Slider
                          slidesToShow={5}
                          activeIndex={sliderState1}
                          onSlideChanged={(e) => {
                            setsliderState1(e?.item);
                          }}
                          activeSlideCSS="scale-[0.81] absolute"
                          magnifiedIndex={1}
                          centerMode
                          ref={sliderRef1}
                          className="absolute w-[100%]"
                          items={[...Array(15)].map(() => (
                            <React.Fragment key={Math.random()}>
                              <Column className="items-center shadow-bs w-[100%]">
                                <Button
                                  className="font-semibold lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[100%]"
                                  shape="RoundedBorder8"
                                  size="sm"
                                  variant="FillGray300"
                                >
                                  French Domination
                                </Button>
                                <Text className="font-semibold lg:mt-[15px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_300 w-[auto]">
                                  1858 - 1945
                                </Text>
                              </Column>
                            </React.Fragment>
                          ))}
                          Indicator={({ isActive }) => {
                            if (isActive) {
                              return <div className="" />;
                            }
                            return (
                              <div className="" role="button" tabIndex={0} />
                            );
                          }}
                        />
                        <Row className="absolute items-center justify-between left-[24%] top-[25%] w-[46%]">
                          <Img
                            src="images/img_arrowright.svg"
                            className="cursor-pointer lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[7%]"
                            onClick={() => sliderRef1.current?.slidePrev()}
                            alt="arrowright Two One"
                          />
                          <Img
                            src="images/img_arrowright.svg"
                            className="cursor-pointer lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[7%]"
                            onClick={() => sliderRef1.current?.slideNext()}
                            alt="arrowright Three One"
                          />
                        </Row>
                      </Stack>
                    </List>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="lg:h-[135px] xl:h-[154px] 2xl:h-[173px] 3xl:h-[208px] lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] w-[8%]"
                      alt="arrowdown"
                    />
                  </Row>
                  <Row className="font-svngratelosdisplay items-center justify-end ml-[auto] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[20%]">
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
            style={{ backgroundImage: "url('images/img_decoration6_4.png')" }}
          >
            <Img
              src="images/img_blur_10.png"
              className="lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] rounded-radius240 w-[100%]"
              alt="Blur"
            />
          </Column>
        </Stack>
        <Text className="absolute font-normal leading-[normal] left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[41%]">
          VIETNAM HISTORY
          <br />
          timeline
        </Text>
        <Column
          className="absolute bg-cover bg-repeat bottom-[11%] items-center right-[0] rounded-radius160 shadow-bs w-[7%]"
          style={{
            backgroundImage: "url('images/img_decoration5_320X136.png')",
          }}
        >
          <Img
            src="images/img_blur_11.png"
            className="lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] rounded-radius160 w-[100%]"
            alt="Blur One"
          />
        </Column>
      </Stack>
    </>
  );
};

export default TimelinePage;
