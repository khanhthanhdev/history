import React from "react";

import { Column, Stack, Row, Img, Text, List, Slider } from "components";

const WebsitePage = () => {
  function handleNavigate1() {
    window.location.href = "https://github.com/baemyungseong";
  }
  function handleNavigate2() {
    window.location.href = "https://www.behance.net/baemyungseong";
  }
  function handleNavigate3() {
    window.location.href = "https://www.figma.com/@baemyungseong";
  }
  function handleNavigate6() {
    window.location.href = "https://www.linkedin.com/in/baemyungseong";
  }
  function handleNavigate7() {
    window.location.href = "https://twitter.com/login/";
  }
  function handleNavigate8() {
    window.location.href = "https://twitter.com/baemyungseong";
  }
  function handleNavigate9() {
    window.location.href = "https://twitter.com/login/";
  }

  const sliderRef = React.useRef();
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef();
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <Column className="bg-white_A700 items-center mx-[auto] w-[100%]">
        <Stack className="lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
              <Stack className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
                <Row
                  className="absolute bg-cover bg-repeat items-center justify-evenly w-[100%]"
                  style={{
                    backgroundImage: "url('images/img_background.png')",
                  }}
                >
                  <Column
                    className="bg-cover bg-repeat items-center w-[50%]"
                    style={{
                      backgroundImage: "url('images/img_blackbackgroun.png')",
                    }}
                  >
                    <Row className="bg-gray_900_ea lg:pr-[192px] xl:pr-[220px] 2xl:pr-[247px] 3xl:pr-[297px] w-[100%]">
                      <Column className="bg-white_A700_3d items-center lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] w-[19%]">
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
                      <Text className="font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[56px] xl:ml-[64px] 2xl:ml-[72px] 3xl:ml-[86px] lg:mt-[334px] xl:mt-[382px] 2xl:mt-[430px] 3xl:mt-[515px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-gray_300 w-[66%]">
                        In the course of historical development, Vietnam is
                        located in one of the areas considered the cradle of
                        mankind. <br />
                        Experiencing a vast history, the country of Vietnam we
                        are today is thanks to a strength of the whole nation,
                        people of a country who share the same flag colors in
                        their hearts.
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
                    backgroundImage: "url('images/img_decoration2_4.png')",
                  }}
                >
                  <Img
                    src="images/img_blur_12.png"
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
          </Stack>
          <Column
            className="absolute bg-cover bg-repeat bottom-[11%] items-center right-[0] rounded-radius160 shadow-bs w-[7%]"
            style={{ backgroundImage: "url('images/img_decoration4.png')" }}
          >
            <Img
              src="images/img_blur_13.png"
              className="lg:h-[187px] xl:h-[214px] 2xl:h-[241px] 3xl:h-[289px] rounded-radius160 w-[100%]"
              alt="Blur Two"
            />
          </Column>
        </Stack>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <Column className="bg-gray_300_7e items-center justify-end lg:p-[58px] xl:p-[66px] 2xl:p-[75px] 3xl:p-[90px] w-[100%]">
                  <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[243px] xl:mt-[278px] 2xl:mt-[312px] 3xl:mt-[375px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[83%]">
                    During the process of formation and development of the
                    Vietnamese nation, the highlight that occupies the leading
                    position and becomes the moral standard of Vietnam is
                    patriotism, the will to be independent, the tradition of
                    solidarity for the nation. The hard working life has created
                    a tradition of industrious and creative labor, the
                    attachment between people and nature, in the relationship
                    between family, neighbors, clans of the Vietnamese as well
                    as in the community ethnic group.
                    <br />
                    History also gives Vietnamese people the tradition of mutual
                    love, morals, and humanity, when in trouble, the whole
                    country suffers together with one heart, adaptability and
                    integration, soft behavior and tradition of studiousness,
                    respect and tolerance. This is the potential strength, the
                    endless internal force for the construction of Vietnam for
                    the sake of rich people, strong country, democracy, justice
                    and civilization.
                  </Text>
                </Column>
              </Column>
            </Column>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrum.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum"
              />
              <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
          </Stack>
          <Text className="absolute font-normal font-svngratelosdisplay leading-[normal] left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[13%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[41%]">
            OVERVIEW OF
            <br />
            VIETNAM HISTORY
          </Text>
        </Stack>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <Row className="bg-gray_900_b1 lg:p-[62px] xl:p-[71px] 2xl:p-[80px] 3xl:p-[96px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] lg:mt-[291px] xl:mt-[333px] 2xl:mt-[375px] 3xl:mt-[450px] w-[55%]"
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
                              <Column className="bg-gray_300 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius8 w-[100%]">
                                <Text className="font-semibold lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                                  Chinese Domination
                                </Text>
                              </Column>
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
                              <Column className="bg-gray_300 items-center lg:p-[14px] xl:p-[16px] 2xl:p-[18px] 3xl:p-[21px] rounded-radius8 w-[100%]">
                                <Text className="font-semibold lg:my-[3px] 2xl:my-[4px] xl:my-[4px] 3xl:my-[5px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                                  French Domination
                                </Text>
                              </Column>
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
                    className="lg:h-[135px] xl:h-[154px] 2xl:h-[173px] 3xl:h-[208px] lg:ml-[5px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[319px] xl:mt-[364px] 2xl:mt-[410px] 3xl:mt-[492px] w-[5%]"
                    alt="arrowdown"
                  />
                </Row>
              </Column>
            </Column>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrumlog.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum One"
              />
              <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
          </Stack>
          <Text className="absolute font-normal font-svngratelosdisplay leading-[normal] left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[41%]">
            VIETNAM HISTORY
            <br />
            timeline
          </Text>
        </Stack>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <Column className="bg-gray_300_7e justify-end lg:p-[49px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[76px] w-[100%]">
                  <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] 3xl:ml-[117px] lg:ml-[75px] xl:ml-[86px] 2xl:ml-[97px] lg:mt-[193px] xl:mt-[221px] 2xl:mt-[249px] 3xl:mt-[298px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[36%]">
                    Prehistory of Vietnam introduces vestiges reflecting the
                    early appearance of people in Vietnam and relics, relics,
                    and culture reflecting human activities from the Early Stone
                    Age. from the old to the Late Neolithic in Vietnam from the
                    mountains, midlands, plains, coastal areas and islands; The
                    exchange with cultures in the region for development, step
                    by step creates an important infrastructure premise to bring
                    Vietnam into a new era - the period of building the first
                    country with its own identities.
                  </Text>
                </Column>
              </Column>
            </Column>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrum.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum Two"
              />
              <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
          </Stack>
          <Stack className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] right-[0] w-[50%]">
            <Img
              src="images/img_image_2400X952.png"
              className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
              alt="Image Three"
            />
            <Img
              src="images/img_blur_2400X952.png"
              className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
              alt="Blur Six"
            />
          </Stack>
          <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
            PREHISTORIC
          </Text>
        </Stack>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <Column className="bg-gray_300_7e justify-center 2xl:p-[102px] 3xl:p-[122px] lg:p-[79px] xl:p-[90px] w-[100%]">
                  <Text className="font-normal font-svngratelosdisplay lg:ml-[592px] xl:ml-[677px] 2xl:ml-[762px] 3xl:ml-[914px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
                    PREHISTORIC
                  </Text>
                  <Text className="font-medium font-urbanist lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mb-[14px] xl:mb-[16px] 2xl:mb-[18px] 3xl:mb-[22px] lg:ml-[592px] xl:ml-[677px] 2xl:ml-[762px] 3xl:ml-[914px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[38%]">
                    1. Old Stone Age
                    <br />
                    Humans appeared quite early in Vietnam. So far,
                    archaeologists have found traces of Homo erectus in some
                    caves in Lang Son, Nghe An, Yen Bai; traces of the culture
                    of Nui Do (Thanh Hoa), Than Sa (Thai Nguyen), Son Vi (Phu
                    Tho), about 10,000 - 30,000 years ago today. At that time,
                    people knew how to use rudimentary tools made of
                    cobblestone, lived quite widely and were quite crowded in
                    Vietnam.
                  </Text>
                </Column>
              </Column>
            </Column>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrum.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum Three"
              />
              <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
          </Stack>
          <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] inset-y-[0] left-[11%] my-[auto] w-[41%]">
            <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[88%]">
              <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[86%]">
                <Img
                  src="images/img_image4_720X504.png"
                  className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[84%]"
                  alt="ImageFour"
                />
                <Img
                  src="images/img_image3_720X504.png"
                  className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[84%]"
                  alt="ImageThree"
                />
              </Stack>
              <Img
                src="images/img_image2_720X504.png"
                className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[72%]"
                alt="ImageTwo"
              />
            </Stack>
            <Img
              src="images/img_image1_2.png"
              className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[64%]"
              alt="ImageOne"
            />
          </Stack>
        </Stack>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <Row className="bg-gray_300_7e justify-end lg:pt-[60px] xl:pt-[69px] 2xl:pt-[78px] 3xl:pt-[93px] lg:px-[60px] xl:px-[69px] 2xl:px-[78px] 3xl:px-[93px] w-[100%]">
                  <Column className="lg:mt-[183px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[44%]">
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[83%]">
                      2. Neolithic
                      <br />
                      Typical with Hoa Binh culture, Bac Son (about 6,000 - over
                      10,000 years ago). Humans have used many types of stone
                      tools with their own functions; know how to make pottery,
                      grow crops, give up gathering for production.
                    </Text>
                    <Img
                      src="images/img_image1_3.png"
                      className="lg:h-[148px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[228px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[83%]"
                      alt="ImageOne One"
                    />
                  </Column>
                  <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[183px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[49%]">
                    3. Metal Age
                    <br />
                    About 4,000 years ago: from the Bronze Age to the Iron Age,
                    in Vietnam, three major cultural centers were formed: Phung
                    Nguyen - Dong Son (Northern region), Long Thanh - Sa Huynh
                    (Northern region). Central Region) and Sat Bridge, Doc Chua
                    - Dong Nai (Southern region). These three cultural centers
                    have a close, long-term mutual relationship and contribute
                    to the characteristics of Vietnamese cultural traditions:
                    unity in diversity.
                  </Text>
                </Row>
              </Column>
            </Column>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrum.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum Four"
              />
              <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
          </Stack>
          <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
            PREHISTORIC
          </Text>
        </Stack>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <Column className="bg-gray_900_b1 justify-end lg:p-[63px] xl:p-[72px] 2xl:p-[81px] 3xl:p-[97px] w-[100%]">
                  <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] lg:mt-[180px] xl:mt-[206px] 2xl:mt-[231px] 3xl:mt-[278px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[38%]">
                    After the Paleolithic, gone for a long time to about 4000
                    years ago today. In the Southeast, a new class of
                    inhabitants appeared. They belonged to the Dong Nai culture
                    of the Metal Age (early brass and iron); living in different
                    ecological sub - regions.
                    <br />
                    From the Red River basin to the Dong Nai river basin. During
                    this period in Vietnam, there were three major cultural
                    centers, namely Dong Son (Northern region), Sa Huynh
                    (Central region) and Dong Nai (Southern region).
                  </Text>
                </Column>
              </Column>
            </Column>
            <Stack className="absolute font-svngratelosdisplay lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] right-[0] w-[50%]">
              <Img
                src="images/img_image_5.png"
                className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
                alt="Image Four"
              />
              <Stack className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] w-[100%]">
                <Img
                  src="images/img_blur_14.png"
                  className="absolute lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
                  alt="Blur Nine"
                />
                <Row className="absolute bottom-[40%] items-center justify-center right-[4%] w-[36%]">
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
              </Stack>
            </Stack>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrumlog.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum Five"
              />
              <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
          </Stack>
          <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
            PROTOHISTORY
          </Text>
        </Stack>
        <List className="gap-[0] min-h-[auto] w-[100%]" orientation="vertical">
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Column className="bg-gray_900_b1 items-center justify-end lg:p-[187px] xl:p-[214px] 2xl:p-[241px] 3xl:p-[289px] w-[100%]">
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[73%]">
                      {" "}
                      Dong Son culture (both pre - Dong Son period) is
                      considered as the core of the ancient Vietnamese.
                      <br />
                      Sa Huynh culture (both pre - Sa Huynh period) is
                      considered a precursor of the Cham people and the Champa
                      kingdom.
                      <br />
                      Dong Nai culture (both bronze and iron period) is one of
                      the origins of the Oc Eo culture of residents of the Malay
                      - Daoist group living in the centuries AD in the East and
                      West. Southern.
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrumlog.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum Six"
                />
                <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay inset-x-[0] mx-[auto] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[max-content]">
              PROTOHISTORY
            </Text>
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Column className="bg-gray_900_b1 items-center justify-end 2xl:p-[108px] 3xl:p-[130px] lg:p-[84px] xl:p-[96px] w-[100%]">
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[158px] xl:mt-[181px] 2xl:mt-[204px] 3xl:mt-[244px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[76%]">
                      Before 218 BC, Vietnam had no official history, at this
                      time legend and history were still intertwined. People
                      often refer to the legends of Kinh Duong Vuong, Lac Long
                      Quan, Phu Dong Thien Vuong, Son Tinh - Thuy Tinh to
                      explain the origin and struggle for survival of the
                      nation.
                      <br />
                      {`From 257 - 208 BC, Thuc Phan, the leader of the Au Viet people, merged with the Van Lang country of Lac Viet, named the country as Au Lac, and called himself An Duong Vuong. During this period, history was recreated through the lens of legend with An Duong's construction of Co Loa citadel.`}
                      <br />
                      From 217 - 111 BC, Trieu Da, originally from Han people,
                      annexed Au Lac. This event is also reflected in the legend
                      of the love of Trong Thuy and My Chau. After capturing Au
                      Lac, Trieu Da founded Nam Viet.
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrumlog.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum Seven"
                />
                <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay inset-x-[0] mx-[auto] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[max-content]">
              PROTOHISTORY
            </Text>
          </Stack>
        </List>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <Row className="bg-gray_900_b1 items-center justify-end xl:pt-[106px] 2xl:pt-[120px] 3xl:pt-[144px] lg:pt-[93px] xl:px-[106px] 2xl:px-[120px] 3xl:px-[144px] lg:px-[93px] w-[100%]">
                  <Column className="w-[48%]">
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[85%]">
                      In 111 BC, the Han Dynasty captured Nam Viet from the
                      Trieu Dynasty. From here, our country began 1000 years of
                      Northern domination.
                    </Text>
                    <Img
                      src="images/img_image1_903X632.png"
                      className="lg:h-[265px] xl:h-[303px] 2xl:h-[341px] 3xl:h-[409px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[82%]"
                      alt="ImageOne Two"
                    />
                  </Column>
                  <Stack className="lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] xl:mb-[106px] 2xl:mb-[120px] 3xl:mb-[144px] lg:mb-[93px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[49%]">
                    <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[90%]">
                      <Stack className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[86%]">
                        <Img
                          src="images/img_image4.png"
                          className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] right-[0] w-[84%]"
                          alt="ImageFour One"
                        />
                        <Img
                          src="images/img_image3.png"
                          className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[84%]"
                          alt="ImageThree One"
                        />
                      </Stack>
                      <Img
                        src="images/img_image2.png"
                        className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[72%]"
                        alt="ImageTwo One"
                      />
                    </Stack>
                    <Img
                      src="images/img_image1_720X504.png"
                      className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[65%]"
                      alt="ImageOne Three"
                    />
                  </Stack>
                </Row>
              </Column>
            </Column>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrumlog.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum Eight"
              />
              <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
          </Stack>
          <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
            PROTOHISTORY
          </Text>
        </Stack>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <Column className="bg-gray_300_7e justify-end lg:p-[126px] xl:p-[144px] 2xl:p-[162px] 3xl:p-[194px] w-[100%]">
                  <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[117px] xl:mt-[134px] 2xl:mt-[150px] 3xl:mt-[181px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[42%]">
                    For more than a thousand years of Northern domination and
                    resistance against Northern domination, our people have
                    never resigned but always struggled against oppression and
                    domination. The will to self-reliance and self-reliance to
                    win national independence has never cooled down, reflected
                    in the uprisings and proclaimed kings and emperors (Truong
                    Vuong, Ly Nam De, Trieu Viet Vuong, Mai Hac De,...).
                  </Text>
                </Column>
              </Column>
            </Column>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrum.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum Nine"
              />
              <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
            <Stack className="absolute font-svngratelosdisplay lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] right-[0] w-[50%]">
              <Img
                src="images/img_image_6.png"
                className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
                alt="Image Five"
              />
              <Stack className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] w-[100%]">
                <Img
                  src="images/img_blur_15.png"
                  className="absolute lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
                  alt="Blur Fifteen"
                />
                <Row className="absolute bottom-[40%] items-center justify-center right-[4%] w-[36%]">
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
              </Stack>
            </Stack>
          </Stack>
          <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
            CHINESE DOMINATION
          </Text>
        </Stack>
        <List className="gap-[0] min-h-[auto] w-[100%]" orientation="vertical">
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
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
                  <Column className="bg-gray_300_7e justify-center 3xl:p-[104px] lg:p-[67px] xl:p-[77px] 2xl:p-[87px] w-[100%]">
                    <Text className="font-normal font-svngratelosdisplay lg:ml-[571px] xl:ml-[653px] 2xl:ml-[735px] 3xl:ml-[882px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
                      THE 1ST OF CD
                    </Text>
                    <Text className="font-medium font-urbanist lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mb-[49px] xl:mb-[56px] 2xl:mb-[63px] 3xl:mb-[75px] lg:ml-[571px] xl:ml-[653px] 2xl:ml-[735px] 3xl:ml-[882px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[42%]">
                      The Han Empire imposed a heavy yoke of domination and
                      exploitation on the Au Lac people. Especially dangerous is
                      the policy of Sinicizing the Vietnamese people, turning
                      Vietnamese land into Han land. But the Vietnamese
                      residents did not submit.
                      <br />
                      {`In the year 39, owing to the country's enemies, Hai Ba Trung rebelled and won 65 cities in Linh Nam. The two ladies ascended the throne, ending the first Northern colonial period.`}
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrum.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum Ten"
                />
                <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Img
              src="images/img_image1_720X720.png"
              className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] inset-y-[0] left-[11%] my-[auto] lg:w-[420px] xl:w-[480px] 2xl:w-[540px] 3xl:w-[648px]"
              alt="ImageOne Four"
            />
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Row className="bg-gray_300_7e items-center justify-end xl:p-[106px] 2xl:p-[120px] 3xl:p-[144px] lg:p-[93px] w-[100%]">
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[44%]">
                      In 43, the Han Dynasty sent general Ma Vien to bring
                      troops to retake, Hai Ba Trung could not resist and had to
                      withdraw to keep Cam Khe and then committed suicide in the
                      Hat River.
                      <br />
                      In the 3rd century, on the land of Au Lac broke out the
                      great uprising of Ba Trieu in 248.
                      <br />
                      The second Northern domination period ended in 541 when Ly
                      Bi started an army against the Luong Dynasty and
                      officially established the Former Ly Dynasty and Van Xuan
                      state in 544.
                    </Text>
                    <Img
                      src="images/img_image1_4.png"
                      className="lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:w-[420px] xl:w-[480px] 2xl:w-[540px] 3xl:w-[648px]"
                      alt="ImageOne Five"
                    />
                  </Row>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrum.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum Eleven"
                />
                <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
              THE 2ND OF CD
            </Text>
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
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
                  <Column className="bg-gray_300_7e justify-center 3xl:p-[104px] lg:p-[67px] xl:p-[77px] 2xl:p-[87px] w-[100%]">
                    <Text className="font-normal font-svngratelosdisplay lg:ml-[571px] xl:ml-[653px] 2xl:ml-[735px] 3xl:ml-[882px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
                      THE 3RD OF CD
                    </Text>
                    <Text className="font-medium font-urbanist lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] 2xl:mb-[102px] 3xl:mb-[123px] lg:mb-[79px] xl:mb-[91px] lg:ml-[571px] xl:ml-[653px] 2xl:ml-[735px] 3xl:ml-[882px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[42%]">
                      {`In 602, the Sui Dynasty sent troops to invade Van Xuan country, Ly Phat Tu (Ly Bi's grandson) had not yet surrendered, was captured to the north and died there.`}
                      <br />
                      In 938, Ngo Quyen defeated the invading army of Southern
                      Han led by Hoang Cao to support Kieu Cong Tien,
                      establishing the Ngo Dynasty. From there began the period
                      of stable independence of Vietnam.
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrum.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum Twelve"
                />
                <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Img
              src="images/img_image2_720X720.png"
              className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] inset-y-[0] left-[11%] my-[auto] lg:w-[420px] xl:w-[480px] 2xl:w-[540px] 3xl:w-[648px]"
              alt="ImageTwo Two"
            />
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Column className="bg-gray_900_b1 justify-end lg:p-[116px] xl:p-[133px] 2xl:p-[150px] 3xl:p-[180px] w-[100%]">
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[127px] xl:mt-[145px] 2xl:mt-[163px] 3xl:mt-[196px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[43%]">
                      From 939 to 1407, Vietnam in this period experienced many
                      feudal regimes: the Ngo Dynasty (939 – 965), the Dinh
                      Dynasty (968 – 980), the Former Le Dynasty (980 – 1009),
                      the Ly Dynasty (in Vietnamese). 1009 – 1225), Tran Dynasty
                      (1226 – 1400) and Ho Dynasty (1400 – 1407).
                      <br />
                      During this period, the Northern dynasties in China and
                      Mongolia brought troops to invade, but were repelled by
                      Vietnam.
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] right-[0] w-[50%]">
                <Img
                  src="images/img_image_7.png"
                  className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
                  alt="Image Six"
                />
                <Img
                  src="images/img_blur_16.png"
                  className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
                  alt="Blur Nineteen"
                />
              </Stack>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrumlog.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum Thirteen"
                />
                <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
              INDEPENDENCE
            </Text>
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Column className="bg-gray_900_b1 items-center justify-end lg:p-[134px] xl:p-[153px] 2xl:p-[172px] 3xl:p-[207px] w-[100%]">
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[109px] xl:mt-[124px] 2xl:mt-[140px] 3xl:mt-[168px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[66%]">
                      In 1407, the Ming army invaded Dai Ngu under the pretext
                      of expelling the Ho Dynasty to restore the Tran Dynasty
                      (Phu Tran destroyed Ho). The Ming army quickly defeated
                      the Dai Ngu army, this period is called the 4th Northern
                      Domination.
                      <br />
                      Later Tran forces rebelled from 1407 – 1413 against the
                      Ming but were also defeated.
                      <br />A leader of Giao Chi, Le Loi, rebelled against the
                      domination of the Ming Dynasty. Lam Son uprising won in
                      1427, Le Loi ascended the throne, founded the Later Le
                      Dynasty.
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrumlog.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum Fourteen"
                />
                <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay inset-x-[0] mx-[auto] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[max-content]">
              INDEPENDENCE
            </Text>
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
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
                  <Column className="bg-gray_900_b1 justify-center lg:p-[52px] xl:p-[60px] 2xl:p-[67px] 3xl:p-[81px] w-[100%]">
                    <Text className="font-normal font-svngratelosdisplay lg:ml-[586px] xl:ml-[671px] 2xl:ml-[755px] 3xl:ml-[905px] lg:mt-[64px] xl:mt-[73px] 2xl:mt-[82px] 3xl:mt-[99px] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
                      The Separation
                    </Text>
                    <Text className="font-medium font-urbanist lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mb-[37px] xl:mb-[42px] 2xl:mb-[48px] 3xl:mb-[57px] lg:ml-[586px] xl:ml-[671px] 2xl:ml-[755px] 3xl:ml-[905px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[41%]">
                      The period of division (1527 – 1802) originates from the
                      Southern - Northern dynasties in 1527. Vietnam during this
                      period experienced many feudal regimes: the Mac Dynasty
                      (1527 – 1592), the Le Trung Hung Dynasty (1533 – 1789). ),
                      Lord Trinh (1545 – 1787), Lord Nguyen (1558 – 1777) and
                      Tay Son Dynasty (1778 – 1802).
                      <br />
                      In addition, the mark of the expansion of the country
                      during this feudal period was the expansion to the South
                      to provide food for the population growth of Dai Viet.
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrumlog.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum Fifteen"
                />
                <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Img
              src="images/img_image1.png"
              className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] inset-y-[0] left-[11%] my-[auto] lg:w-[420px] xl:w-[480px] 2xl:w-[540px] 3xl:w-[648px]"
              alt="ImageOne Six"
            />
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Row className="bg-gray_900_b1 items-center 3xl:p-[103px] lg:p-[67px] xl:p-[76px] 2xl:p-[86px] w-[100%]">
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[42%]">
                      From the middle of the 18th century, the Tay Son movement
                      that broke out in 1771 in Quy Nhon (Binh Dinh) defeated
                      the two ruling regimes of the Nguyen and Trinh families,
                      ending the division of the country in two, as well as
                      abolishing the Hau Le Dynasty.
                      <br />
                      The Tay Son Dynasty defeated 50,000 Siamese troops (1784)
                      in the South and 29,000 Manchu troops (1789) in the North.
                      Nguyen Hue officially became the king of Dai Viet, taking
                      the era name Quang Trung, unifying most of the territory
                      from the North to Gia Dinh.
                    </Text>
                    <Img
                      src="images/img_image1_5.png"
                      className="lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] 3xl:ml-[104px] lg:ml-[67px] xl:ml-[77px] 2xl:ml-[87px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] lg:w-[420px] xl:w-[480px] 2xl:w-[540px] 3xl:w-[648px]"
                      alt="ImageOne Seven"
                    />
                  </Row>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrumlog.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum Sixteen"
                />
                <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
              THE Unification
            </Text>
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Column className="bg-gray_300_7e justify-end 3xl:p-[103px] lg:p-[67px] xl:p-[76px] 2xl:p-[86px] w-[100%]">
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:ml-[58px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] lg:mt-[176px] xl:mt-[201px] 2xl:mt-[226px] 3xl:mt-[271px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[37%]">
                      {`French colonization is a period in Vietnam's history lasting 61 years, starting from 1884 when the French forced the Hue court to sign the Peace Treaty of Giap Than until 1945 when the French lost their rule in Indochina.`}
                      <br />
                      During this period, France annexed Vietnam, Cambodia and
                      Laos. Losing sovereignty, Vietnam was divided into 3
                      separate countries with three separate administrative
                      structures: the colonial land of Cochinchina and the
                      protectorates of North and Central America.
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrum.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum Seventeen"
                />
                <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
              <Stack className="absolute lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] right-[0] w-[50%]">
                <Img
                  src="images/img_image_8.png"
                  className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
                  alt="Image Seven"
                />
                <Img
                  src="images/img_blur_17.png"
                  className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
                  alt="Blur One One"
                />
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
              FRENCH DOMINATION
            </Text>
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Row className="bg-gray_300_7e justify-end lg:pt-[60px] xl:pt-[69px] 2xl:pt-[78px] 3xl:pt-[93px] lg:px-[60px] xl:px-[69px] 2xl:px-[78px] 3xl:px-[93px] w-[100%]">
                    <Column className="lg:mt-[183px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[44%]">
                      <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[83%]">
                        On August 31, 1858, the French Navy landed at the port
                        of Da Nang and then withdrew to invade Saigon. In June
                        1862, King Tu Duc signed a treaty to cede three eastern
                        provinces to France. In 1867, France occupied the next
                        three western provinces to form a colony of Cochinchina
                        (Cochinchine).
                      </Text>
                      <Img
                        src="images/img_image1_1.png"
                        className="lg:h-[148px] xl:h-[169px] 2xl:h-[190px] 3xl:h-[228px] lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] w-[83%]"
                        alt="ImageOne Eight"
                      />
                    </Column>
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[183px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[49%]">
                      It continued until 1887, when the French completed the
                      process of invading Vietnam. After that, the French
                      organized a fairly complete governing apparatus from the
                      central to the local. By 1893, the control of the
                      Governor-General of Eastern France was further expanded,
                      including Ai Lao.
                      <br />
                      After the failure of the Can Vuong movement at the end of
                      the 19th century, the French completely consolidated the
                      organization of rule in Vietnam.
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrum.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum Eighteen"
                />
                <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
              FRENCH DOMINATION
            </Text>
          </Stack>
        </List>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <div className="bg-gray_300_7e lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]"></div>
              </Column>
            </Column>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrum.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum Nineteen"
              />
              <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
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
                    alt="ImageFour Two"
                  />
                </Stack>
                <Img
                  src="images/img_image3_1.png"
                  className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[43%]"
                  alt="ImageThree Two"
                />
              </Stack>
              <Img
                src="images/img_image2_1.png"
                className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[40%]"
                alt="ImageTwo Three"
              />
            </Stack>
            <Img
              src="images/img_image1_6.png"
              className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] left-[0] w-[37%]"
              alt="ImageOne Nine"
            />
          </Stack>
        </Stack>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <Column className="bg-gray_300_7e items-center justify-end lg:p-[143px] xl:p-[164px] 2xl:p-[184px] 3xl:p-[221px] w-[100%]">
                  <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[100px] xl:mt-[114px] 2xl:mt-[129px] 3xl:mt-[154px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[67%]">
                    In September 1945, France brought troops back to Vietnam.
                    Although the French recognized Vietnam as a free country in
                    the Indochinese Federation under the French Union, the
                    Indochina war still broke out and France was defeated after
                    9 years of war. <br />
                    France was forced to recognize the independence of Vietnam
                    (as well as Laos and Cambodia), officially ending the French
                    colonial period, and at the same time leading to the
                    collapse of the colonial system of France and other colonial
                    countries throughout the country. world in the 1950s and
                    1960s.
                  </Text>
                </Column>
              </Column>
            </Column>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrum.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum Twenty"
              />
              <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
          </Stack>
          <Text className="absolute font-normal font-svngratelosdisplay inset-x-[0] mx-[auto] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[max-content]">
            FRENCH DOMINATION
          </Text>
        </Stack>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <Column className="bg-gray_900_b1 justify-end lg:p-[63px] xl:p-[72px] 2xl:p-[81px] 3xl:p-[97px] w-[100%]">
                  <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:ml-[63px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] lg:mt-[180px] xl:mt-[206px] 2xl:mt-[231px] 3xl:mt-[278px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[39%]">
                    {`The successful August Revolution in 1945 opened a great turning point in the history of the Vietnamese nation. On September 2, 1945, at Ba Dinh Square, President Ho Chi Minh read the "Declaration of Independence", giving birth to the Democratic Republic of Vietnam (now the Socialist Republic of Vietnam). .`}
                    <br />
                    {`After that, the historic Ho Chi Minh campaign in 1975 with complete victory ended 21 years of resistance against the American imperialists' invasion by the Vietnamese people. developed to this day.`}
                  </Text>
                </Column>
              </Column>
            </Column>
            <Stack className="absolute font-svngratelosdisplay lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] right-[0] w-[50%]">
              <Img
                src="images/img_image_17.png"
                className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
                alt="Image Eight"
              />
              <Stack className="absolute bottom-[0] lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] w-[100%]">
                <Img
                  src="images/img_blur_18.png"
                  className="absolute lg:h-[1400px] xl:h-[1602px] 2xl:h-[1802px] 3xl:h-[2162px] rounded-radius1200 w-[100%]"
                  alt="Blur TwentySeven"
                />
                <Row className="absolute bottom-[40%] items-center justify-center right-[4%] w-[36%]">
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
              </Stack>
            </Stack>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrumlog.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum TwentyOne"
              />
              <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
          </Stack>
          <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
            after 1945
          </Text>
        </Stack>
        <List className="gap-[0] min-h-[auto] w-[100%]" orientation="vertical">
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
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
                  <Column className="bg-gray_900_b1 justify-center 3xl:p-[104px] lg:p-[67px] xl:p-[77px] 2xl:p-[87px] w-[100%]">
                    <Text className="font-normal font-svngratelosdisplay lg:ml-[571px] xl:ml-[653px] 2xl:ml-[735px] 3xl:ml-[882px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
                      independence
                    </Text>
                    <Text className="font-medium font-urbanist lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mb-[26px] xl:mb-[30px] 2xl:mb-[33px] 3xl:mb-[40px] lg:ml-[571px] xl:ml-[653px] 2xl:ml-[735px] 3xl:ml-[882px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[52px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[42%]">
                      On September 2, 1945 in Hanoi, Ho Chi Minh declared the
                      establishment of the independent and unified Democratic
                      Republic of Vietnam from the North to the South. <br />
                      In early 1946, a nationwide election was held. The
                      national flag was chosen with a red background, a
                      five-pointed yellow star, and the constitution was
                      adopted. The State of the Democratic Republic of Vietnam
                      officially becomes the legal representative of the
                      Vietnamese people from North to South.
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrumlog.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum TwentyTwo"
                />
                <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Img
              src="images/img_image1_8.png"
              className="absolute lg:h-[420px] xl:h-[481px] 2xl:h-[541px] 3xl:h-[649px] inset-y-[0] left-[11%] my-[auto] lg:w-[420px] xl:w-[480px] 2xl:w-[540px] 3xl:w-[648px]"
              alt="ImageOne Ten"
            />
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Row className="bg-gray_900_b1 justify-end lg:pt-[60px] xl:pt-[69px] 2xl:pt-[78px] 3xl:pt-[93px] lg:px-[60px] xl:px-[69px] 2xl:px-[78px] 3xl:px-[93px] w-[100%]">
                    <Column className="lg:mt-[183px] xl:mt-[209px] 2xl:mt-[235px] 3xl:mt-[282px] w-[44%]">
                      <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[83%]">
                        After the French issued an ultimatum demanding the
                        surrender of the Democratic Republic of Vietnam, war
                        between Vietnam and the French colonialists broke out in
                        December 1946.
                      </Text>
                      <Img
                        src="images/img_image1_361X632.png"
                        className="lg:h-[211px] xl:h-[241px] 2xl:h-[271px] 3xl:h-[326px] lg:mt-[53px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[83%]"
                        alt="ImageOne Eleven"
                      />
                    </Column>
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[183px] xl:mt-[209px] 2xl:mt-[235px] 3xl:mt-[282px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[49%]">
                      {`At the beginning of 1947, France seemed to prevail and control all the major cities of Vietnam. However, the Democratic Republic of Vietnam persisted with the strategy of "people's war" and guerrilla tactics, organizing and training the people for a long armed war that left France bogged down.`}
                      <br />
                      The defeat at the Battle of Dien Bien Phu on May 7, 1954
                      with the result that the Geneva Agreement was signed,
                      completely ended the French and American efforts to occupy
                      Vietnam and all of Indochina.
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrumlog.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum TwentyThree"
                />
                <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
              Resistance against France
            </Text>
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Row className="bg-gray_900_b1 justify-end lg:pt-[60px] xl:pt-[69px] 2xl:pt-[78px] 3xl:pt-[93px] lg:px-[60px] xl:px-[69px] 2xl:px-[78px] 3xl:px-[93px] w-[100%]">
                    <Column className="lg:mt-[183px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] w-[44%]">
                      <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[83%]">
                        During period 1956 - 1958, the Democratic Republic of
                        Vietnam proposed to the Vietnamese nation to conduct
                        elections to unify the country but was refused.
                        <br />
                        Since 1959, the National Front for the Liberation of
                        South Vietnam was born.
                      </Text>
                      <Img
                        src="images/img_image1_299X632.png"
                        className="lg:h-[175px] xl:h-[200px] 2xl:h-[225px] 3xl:h-[270px] lg:mt-[53px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] w-[83%]"
                        alt="ImageOne Twelve"
                      />
                    </Column>
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[183px] xl:mt-[210px] 2xl:mt-[236px] 3xl:mt-[283px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[49%]">
                      {`In 1969, the successor President Richard Nixon announced the return of the US, Nixon and his adviser Henry Kissinger came up with the strategy of "Vietnamization of the war".`}
                      <br />
                      {`In January 1973, the Paris Peace Agreement was signed after the defeat of the US and the withdrawal of troops from Vietnam in accordance with the terms of the agreement, which recognized "independence, sovereignty, unity and territorial integrity" of Vietnam.`}
                      <br />
                      On April 30, 1975, the South Vietnamese Liberation Army
                      gained control of Saigon and officially reunified the
                      country.
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrumlog.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum TwentyFour"
                />
                <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
              War against America
            </Text>
          </Stack>
          <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] my-[0] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Column className="bg-gray_900_b1 items-center justify-end lg:p-[111px] xl:p-[127px] 2xl:p-[143px] 3xl:p-[171px] w-[100%]">
                    <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:mt-[131px] xl:mt-[150px] 2xl:mt-[169px] 3xl:mt-[203px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[81%]">
                      On April 25, 1976, the Democratic Republic of Vietnam and
                      the Republic of South Vietnam held a General Election to
                      unify the state into a country officially named the
                      Socialist Republic of Vietnam. In 1977, Vietnam became a
                      member of the United Nations.
                      <br />
                      {`In 1986, the VI Congress of the Communist Party of Vietnam implemented the policy of "Doi Moi", led by Mr. Nguyen Van Linh, to rationalize the administrative structure, reform the Party structure, rule of law and democracy. economic reform in the direction of a market economy with a socialist orientation.`}
                      <br />
                      On December 31, 2015, Vietnam officially joined the
                      establishment of the ASEAN Economic Community - ASEAN
                      Economic Community, abbreviated AEC, consisting of 10
                      member countries.{" "}
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrumlog.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum TwentyFive"
                />
                <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay inset-x-[0] mx-[auto] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[max-content]">
              after unification, renewal
            </Text>
          </Stack>
        </List>
        <Stack className="bg-white_A700 lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
          <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                <Row className="bg-gray_300_7e xl:p-[106px] 2xl:p-[120px] 3xl:p-[144px] lg:p-[93px] w-[100%]">
                  <Text className="font-medium lg:leading-[26px] xl:leading-[30px] 2xl:leading-[34px] 3xl:leading-[41px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[150px] xl:mt-[172px] 2xl:mt-[193px] 3xl:mt-[232px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[53%]">
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
                  <Stack className="lg:h-[397px] xl:h-[454px] 2xl:h-[511px] 3xl:h-[613px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[37%]">
                    <Column
                      className="absolute bg-cover bg-repeat bottom-[0] items-center left-[0] shadow-bs4 w-[73%]"
                      style={{
                        backgroundImage: "url('images/img_image1_560X436.png')",
                      }}
                    >
                      <div className="bg-bluegray_100_3d border-4 border-gray_900_51 border-solid lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] w-[100%]"></div>
                    </Column>
                    <Column
                      className="absolute bg-cover bg-repeat items-center right-[0] shadow-bs4 top-[0] w-[73%]"
                      style={{
                        backgroundImage: "url('images/img_image2_560X436.png')",
                      }}
                    >
                      <div className="bg-bluegray_100_3d border-4 border-gray_900_51 border-solid lg:h-[327px] xl:h-[374px] 2xl:h-[421px] 3xl:h-[505px] w-[100%]"></div>
                    </Column>
                  </Stack>
                </Row>
              </Column>
            </Column>
            <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
              <Img
                src="images/img_bronzedrum.png"
                className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                alt="BronzeDrum TwentySix"
              />
              <div className="absolute bg-deep_orange_100_a3 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
            </Stack>
          </Stack>
          <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts3 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
            resources
          </Text>
        </Stack>
        <footer className="bg-white_A700 w-[100%]">
          <Stack className="lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
            <Stack className="absolute font-urbanist lg:h-[630px] xl:h-[721px] 2xl:h-[811px] 3xl:h-[973px] w-[100%]">
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
                  <Row className="bg-gray_900_b1 lg:p-[126px] xl:p-[144px] 2xl:p-[162px] 3xl:p-[194px] w-[100%]">
                    <Column className="lg:mb-[3px] 2xl:mb-[4px] xl:mb-[4px] 3xl:mb-[5px] lg:mt-[117px] xl:mt-[134px] 2xl:mt-[150px] 3xl:mt-[181px] w-[48%]">
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
                        <span className="text-red_700 font-semibold">
                          Email:
                        </span>
                        <span className="text-gray_300"> </span>
                        <span className="text-gray_300">
                          baemyungseong@gmail.com
                        </span>
                      </Text>
                      <Text className="capitalize font-hunterriver font-normal lg:mt-[58px] xl:mt-[66px] 2xl:mt-[75px] 3xl:mt-[90px] not-italic lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-gray_300 text-shadow-ts2 tracking-ls1 w-[auto]">
                        Bae Myung Seong
                      </Text>
                    </Column>
                    <Column className="lg:mt-[117px] xl:mt-[134px] 2xl:mt-[151px] 3xl:mt-[181px] w-[52%]">
                      <Text className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 w-[auto]">
                        My Social Networks:
                      </Text>
                      <Row className="font-sfprotext items-center lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                        <Img
                          src="images/img_vector.svg"
                          className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          alt="Vector"
                        />
                        <Text
                          className="common-pointer font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 text-shadow-ts4 w-[auto]"
                          onClick={handleNavigate6}
                        >
                          https://www.linkedin.com/in/baemyungseong
                        </Text>
                      </Row>
                      <Row className="font-sfprotext items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[81%]">
                        <Img
                          src="images/img_twitter.svg"
                          className="common-pointer lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          onClick={handleNavigate7}
                          alt="twitter"
                        />
                        <Text
                          className="common-pointer font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 text-shadow-ts4 w-[auto]"
                          onClick={handleNavigate8}
                        >
                          https://twitter.com/baemyungseong
                        </Text>
                      </Row>
                      <Row className="font-sfprotext items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[81%]">
                        <Img
                          src="images/img_twitter_48X48.svg"
                          className="common-pointer lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          onClick={handleNavigate9}
                          alt="twitter One"
                        />
                        <Text
                          className="common-pointer font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 text-shadow-ts4 w-[auto]"
                          onClick={handleNavigate1}
                        >
                          https://github.com/baemyungseong
                        </Text>
                      </Row>
                      <Row className="font-sfprotext items-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[95%]">
                        <Img
                          src="images/img_behanceicon.svg"
                          className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          alt="BehanceIcon"
                        />
                        <Text
                          className="common-pointer font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 text-shadow-ts4 w-[auto]"
                          onClick={handleNavigate2}
                        >
                          https://www.behance.net/baemyungseong
                        </Text>
                      </Row>
                      <Row className="font-sfprotext lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[95%]">
                        <Img
                          src="images/img_grid.svg"
                          className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:w-[28px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          alt="grid"
                        />
                        <Text
                          className="common-pointer font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[4px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_300 text-shadow-ts4 w-[auto]"
                          onClick={handleNavigate3}
                        >
                          https://www.figma.com/@baemyungseong
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Stack className="absolute lg:h-[173px] xl:h-[198px] 2xl:h-[223px] 3xl:h-[267px] left-[19%] shadow-bs top-[0] w-[25%]">
                <Img
                  src="images/img_bronzedrumlog.png"
                  className="absolute lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] w-[100%]"
                  alt="BronzeDrum TwentySeven"
                />
                <div className="absolute bg-gray_900_66 lg:h-[280px] xl:h-[321px] 2xl:h-[361px] 3xl:h-[433px] rounded-radius50 top-[0] lg:w-[280px] xl:w-[320px] 2xl:w-[360px] 3xl:w-[432px]"></div>
              </Stack>
            </Stack>
            <Text className="absolute font-normal font-svngratelosdisplay left-[11%] not-italic 2xl:text-[108px] 3xl:text-[129px] lg:text-[84px] xl:text-[96px] text-red_700 text-shadow-ts1 top-[19%] xl:tracking-ls3 lg:tracking-ls3 2xl:tracking-ls4 3xl:tracking-ls5 uppercase w-[auto]">
              CONTACT
            </Text>
          </Stack>
        </footer>
      </Column>
    </>
  );
};

export default WebsitePage;
